'use client'
import React, {useState} from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData: Project[] = [
  {
    image: '/work/sap.png',
    category: 'PHP',
    name: 'SAP',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'React Js',
    name: 'Rick & Morty App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
  {
    image: '',
    category: 'Next Js',
    name: 'Dashboard',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
];

interface Project {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string; // Link ya no es opcional (según tu componente ProjectCard)
  github?: string; // Github sigue siendo opcional
}

// remove category duplicates
const uniqueCategories: string[] = [
  "Todos los proyectos",
  ...Array.from(new Set(projectData.map(item => item.category)))
];




const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('Todos los proyectos')

  return <section className='min-h-screen pt-12'>
    <div className='container mx-auto'>
      <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        Mis Proyectos
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category}>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border-none'>
            {categories.map((category, index)=>{
              return <TabsTrigger value={category} key={index} className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
            })}
          </TabsList>
        </Tabs>
    </div>
  </section>
  
}

export default Projects
