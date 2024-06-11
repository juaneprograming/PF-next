
import { motion } from 'framer-motion';
import Link from 'next/link';

//next hooks
import { usePathname } from 'next/navigation';


interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'Mis Proyectos' },
  { path: '/contact', name: 'Contactame' },
];

const Nav: React.FC<NavProps> = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link 
        href={link.path} 
        key={index} 
        className={`capitalize ${linkStyles}`}
        >
            {link.path === path && (
              <motion.span initial={{y: '100%'}} animate={{y: 0}} transition={{type: 'tween'}} layoutId='underline' className={`${underlineStyles}`}/>
            )}
            {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;