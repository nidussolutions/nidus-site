import path from 'node:path';
import react from '@vitejs/plugin-react';
import { createLogger, defineConfig } from 'vite';

const isDev = process.env.NODE_ENV !== 'production';

console.warn = () => {};

const logger = createLogger()
const loggerError = logger.error

logger.error = (msg, options) => {
	if (options?.error?.toString().includes('CssSyntaxError: [postcss]')) {
		return;
	}

	loggerError(msg, options);
}

export default defineConfig({
	customLogger: logger,
	plugins: [
		react({
			// Fast Refresh otimizado
			fastRefresh: true,
			// Babel plugins para melhor performance
			babel: {
				plugins: [
					['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
				]
			}
		}),
	],
	server: {
		cors: true,
		headers: {
			'Cross-Origin-Embedder-Policy': 'credentialless',
		},
		allowedHosts: true,
		// Pre-bundling otimizado
		warmup: {
			clientFiles: [
				'./src/App.jsx',
				'./src/main.jsx',
				'./src/pages/**/*.jsx',
				'./src/components/**/*.jsx',
			],
		},
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	// Otimizações de build
	build: {
		target: 'es2020',
		cssCodeSplit: true,
		sourcemap: false,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.info'],
			},
			format: {
				comments: false,
			},
		},
		rollupOptions: {
			external: [
				'@babel/parser',
				'@babel/traverse',
				'@babel/generator',
				'@babel/types'
			],
			output: {
				// Code splitting manual para chunks otimizados
				manualChunks: {
					// React core
					'react-vendor': ['react', 'react-dom', 'react-router-dom'],
					// UI libraries
					'ui-vendor': [
						'@radix-ui/react-accordion',
						'@radix-ui/react-alert-dialog',
						'@radix-ui/react-dialog',
						'@radix-ui/react-dropdown-menu',
						'@radix-ui/react-select',
						'@radix-ui/react-toast',
					],
					// Animation libraries
					'animation-vendor': ['framer-motion', 'gsap'],
					// Form libraries
					'form-vendor': ['react-hook-form', '@formspree/react'],
					// Icons
					'icons-vendor': ['react-icons', 'lucide-react'],
				},
				// Asset naming otimizado
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
					const extType = assetInfo.name.split('.').at(-1);
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						return 'assets/images/[name]-[hash][extname]';
					}
					if (/woff2?|ttf|otf|eot/i.test(extType)) {
						return 'assets/fonts/[name]-[hash][extname]';
					}
					return 'assets/[name]-[hash][extname]';
				},
			},
		},
		// Chunk size warnings
		chunkSizeWarningLimit: 1000,
	},
	// Otimizações de dependências
	optimizeDeps: {
		include: [
			'react',
			'react-dom',
			'react-router-dom',
			'framer-motion',
			'gsap',
		],
		exclude: ['@babel/parser', '@babel/traverse', '@babel/generator', '@babel/types'],
	},
	// Performance
	esbuild: {
		logOverride: { 'this-is-undefined-in-esm': 'silent' },
		// Drop console in production
		drop: isDev ? [] : ['console', 'debugger'],
	},
});

