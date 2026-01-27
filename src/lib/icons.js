/**
 * Common Icons Export
 * 
 * Centralize todos os ícones usados no projeto para fácil
 * manutenção e consistência. Usar react-icons.
 */

// Feather Icons (Modern and clean)
import {
  FiHome,
  FiInfo,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiMapPin,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiArrowUp,
  FiCheck,
  FiCheckCircle,
  FiAlertCircle,
  FiAlertTriangle,
  FiStar,
  FiUser,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiExternalLink,
  FiDownload,
  FiUpload,
  FiSearch,
  FiFilter,
  FiMoreVertical,
  FiMoreHorizontal,
  FiEye,
  FiEyeOff,
  FiClock,
  FiCalendar,
  FiHeart,
  FiShare2,
  FiBookmark,
  FiEdit,
  FiTrash2,
  FiPlus,
  FiMinus,
  FiSend,
  FiGlobe,
  FiShield,
  FiLock,
  FiUnlock,
  FiZap,
  FiTrendingUp,
  FiActivity,
  FiAward,
  FiTarget,
  FiCpu,
  FiDatabase,
  FiServer,
  FiCode,
  FiGitBranch,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from 'react-icons/fi';

// Material Design Icons (Para ícones específicos)
import {
  MdArrowForward,
  MdArrowBack,
  MdClose,
  MdDone,
  MdError,
  MdWarning,
  MdInfo,
  MdExpandMore,
  MdExpandLess,
  MdMenu,
  MdSearch,
  MdNotifications,
  MdSettings,
  MdAccountCircle,
  MdDashboard,
  MdAnalytics,
  MdInsights,
  MdTrendingUp as MdTrendingUpAlt,
  MdAutoAwesome,
  MdRocket,
  MdSpeed,
  MdSecurity,
  MdVerifiedUser,
  MdLightbulb,
  MdGroupWork,
  MdIntegrationInstructions,
} from 'react-icons/md';

// Hero Icons (Modern alternative)
import {
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineTrendingUp,
  HiOutlineChip,
  HiOutlineCube,
  HiOutlineColorSwatch,
  HiOutlineCode,
  HiOutlineAcademicCap,
  HiOutlineBadgeCheck,
} from 'react-icons/hi';

// Brand Icons (Social media, etc)
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiNotion,
  SiSlack,
  SiDiscord,
} from 'react-icons/si';

// Ícones organizados por categoria
export const icons = {
  // Navigation
  navigation: {
    home: FiHome,
    about: FiInfo,
    services: FiBriefcase,
    contact: FiMail,
    menu: FiMenu,
    close: FiX,
    arrowRight: FiArrowRight,
    arrowUp: FiArrowUp,
    chevronDown: FiChevronDown,
    chevronUp: FiChevronUp,
    chevronLeft: FiChevronLeft,
    chevronRight: FiChevronRight,
  },

  // Actions
  actions: {
    search: FiSearch,
    filter: FiFilter,
    edit: FiEdit,
    delete: FiTrash2,
    add: FiPlus,
    remove: FiMinus,
    send: FiSend,
    download: FiDownload,
    upload: FiUpload,
    share: FiShare2,
    bookmark: FiBookmark,
    more: FiMoreVertical,
    moreHorizontal: FiMoreHorizontal,
  },

  // Status
  status: {
    check: FiCheck,
    checkCircle: FiCheckCircle,
    error: FiAlertCircle,
    warning: FiAlertTriangle,
    info: MdInfo,
    verified: MdVerifiedUser,
  },

  // User
  user: {
    user: FiUser,
    users: FiUsers,
    account: MdAccountCircle,
    settings: FiSettings,
    logout: FiLogOut,
  },

  // Content
  content: {
    eye: FiEye,
    eyeOff: FiEyeOff,
    heart: FiHeart,
    star: FiStar,
    clock: FiClock,
    calendar: FiCalendar,
  },

  // Contact
  contact: {
    mail: FiMail,
    phone: FiPhone,
    location: FiMapPin,
    globe: FiGlobe,
  },

  // Security
  security: {
    shield: FiShield,
    lock: FiLock,
    unlock: FiUnlock,
    security: MdSecurity,
  },

  // Tech & Features
  tech: {
    zap: FiZap,
    activity: FiActivity,
    cpu: FiCpu,
    database: FiDatabase,
    server: FiServer,
    code: FiCode,
    rocket: MdRocket,
    speed: MdSpeed,
    sparkles: HiOutlineSparkles,
    lightning: HiOutlineLightningBolt,
    chip: HiOutlineChip,
    cube: HiOutlineCube,
    lightbulb: MdLightbulb,
    integration: MdIntegrationInstructions,
  },

  // Business
  business: {
    trendingUp: FiTrendingUp,
    award: FiAward,
    target: FiTarget,
    analytics: MdAnalytics,
    insights: MdInsights,
    dashboard: MdDashboard,
    groupWork: MdGroupWork,
  },

  // Social
  social: {
    github: FiGithub,
    linkedin: FiLinkedin,
    twitter: FiTwitter,
    facebook: FiFacebook,
    instagram: FiInstagram,
    youtube: FiYoutube,
  },

  // Brands/Tech Stack
  brands: {
    react: SiReact,
    tailwind: SiTailwindcss,
    typescript: SiTypescript,
    javascript: SiJavascript,
    python: SiPython,
    nodejs: SiNodedotjs,
    docker: SiDocker,
    kubernetes: SiKubernetes,
    aws: SiAmazonaws,
    azure: SiMicrosoftazure,
    gcp: SiGooglecloud,
    vercel: SiVercel,
    netlify: SiNetlify,
    figma: SiFigma,
    notion: SiNotion,
    slack: SiSlack,
    discord: SiDiscord,
  },
};

// Export individual icons for direct use
export {
  // Feather
  FiHome,
  FiInfo,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiMapPin,
  FiMenu,
  FiX,
  FiChevronDown,
  FiArrowRight,
  FiArrowUp,
  FiCheck,
  FiCheckCircle,
  FiAlertCircle,
  FiZap,
  FiStar,
  FiUser,
  FiUsers,
  FiSettings,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  
  // Material
  MdArrowForward,
  MdRocket,
  MdSpeed,
  MdSecurity,
  MdLightbulb,
  MdAutoAwesome,
  
  // Hero
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineChip,
  
  // Brands
  SiReact,
  SiTailwindcss,
  SiTypescript,
};

export default icons;
