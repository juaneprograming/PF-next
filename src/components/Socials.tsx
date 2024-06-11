'use client'
import { RiLinkedinFill, RiGithubFill, RiInstagramFill, RiFacebookFill } from 'react-icons/ri'
import Link from 'next/link'

interface IconProps {
  path: string
  icon: React.ReactNode
}

const icons: IconProps[] = [
  { path: '/', icon: <RiLinkedinFill /> },
  { path: 'https://github.com/juaneprograming', icon: <RiGithubFill /> },
  { path: '/', icon: <RiInstagramFill /> },
  { path: '/', icon: <RiFacebookFill /> },
]

interface SocialsProps {
  containerStyles?: string
  iconsStyles?: string
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>{icon.icon}</div>
        </Link>
      ))}
    </div>
  )
}

export default Socials