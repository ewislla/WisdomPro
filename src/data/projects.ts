import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'quantumcat',
    title: 'QuantumCat',
    description: 'A revolutionary Web3 meme coin platform that combines humor with serious blockchain technology. Features include staking, governance, and community-driven development.',
    tagline: 'Meme energy, serious execution',
    image: '../assets/qcats.png',
    technologies: ['React', 'Web3.js', 'Solidity', 'Framer Motion', 'Tailwind CSS', 'MetaMask'],
    liveUrl:'https://www.qcats.xyz/',
    codeUrl: 'https://github.com/ewislla/Qcat',
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
    id: 'udhe-realty-limited ',
    title: 'Udhe Realty Limited',
    description: 'Premium real estate platform focused on trust-building and conversion optimization. Features property showcases, virtual tours, and seamless client communication.',
    tagline: 'Trust-first property showcase',
    image: '../assets/real-estate.png',  
    technologies: ['React', 'Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'AWS S3'],
    liveUrl: 'https://estate-pro-demo.netlify.app',
    codeUrl: 'https://github.com/wisdompro/estate-pro',
    featured: true,
    category: 'web2'
  },
  {
  id: 'belleful-restaurant',
  title: 'Belleful Restaurant',
  description: 'Premium African restaurant platform featuring online reservations, menu showcase, cultural storytelling, and immersive dining experience booking with authentic brand identity and sophisticated user interface.',
  tagline: 'Where Heritage Meets Culinary Excellence',
  image: '../assets/belleful.png',
  technologies: ['React js', 'Stripe', 'Socket.io', 'Cloudinary'],
  liveUrl: 'https://bellefull-beta.vercel.app/',
  codeUrl: 'https://github.com/wisdompro/belleful-restaurant',
  featured: true,
  category: 'restaurant'
}
];