import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'quantumcat',
    title: 'QuantumCat',
    description: 'A revolutionary Web3 meme coin platform that combines humor with serious blockchain technology. Features include staking, governance, and community-driven development.',
    tagline: 'Meme energy, serious execution',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Web3.js', 'Solidity', 'Framer Motion', 'Tailwind CSS', 'MetaMask'],
    liveUrl: 'https://quantumcat-demo.netlify.app',
    codeUrl: 'https://github.com/wisdompro/quantumcat',
    featured: true,
    category: 'web3'
  },
  {
    id: 'airflow-dashboard',
    title: 'AirFlow Dashboard',
    description: 'Comprehensive flight booking and admin management system with real-time data synchronization, advanced filtering, and responsive design for airline operations.',
    tagline: 'Real-world UX complexity',
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Firebase', 'TypeScript', 'Chart.js', 'Material-UI', 'Real-time DB'],
    liveUrl: 'https://airflow-dashboard-demo.netlify.app',
    codeUrl: 'https://github.com/wisdompro/airflow-dashboard',
    featured: true,
    category: 'dashboard'
  },
  {
    id: 'estate-pro',
    title: 'Estate Pro',
    description: 'Premium real estate platform focused on trust-building and conversion optimization. Features property showcases, virtual tours, and seamless client communication.',
    tagline: 'Trust-first property showcase',
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'AWS S3'],
    liveUrl: 'https://estate-pro-demo.netlify.app',
    codeUrl: 'https://github.com/wisdompro/estate-pro',
    featured: true,
    category: 'web2'
  },
  {
    id: 'crypto-tracker',
    title: 'CryptoFlow Tracker',
    description: 'Advanced cryptocurrency portfolio tracker with real-time price updates, profit/loss calculations, and detailed analytics dashboard.',
    tagline: 'Track smart, invest smarter',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Redux', 'CoinGecko API', 'Chart.js', 'LocalStorage'],
    liveUrl: 'https://cryptoflow-tracker.netlify.app',
    codeUrl: 'https://github.com/wisdompro/crypto-tracker',
    featured: false,
    category: 'web3'
  }
];