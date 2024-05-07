import DevImg from './DevImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Juan Ojeda',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+57 3017784175',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'Ojuan2594qgmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 27 May, 2000',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Desarrollador de Software',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Cartagena de Indias',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                universidad: 'Tecnologico Comfenalco',
                qualification: 'Desarrollador de Software',
                años: '2020 - 2025',
            },
        ],
    },
    {
        title: 'Experiencia',
        data: [
            {
                compañia: 'Fundacion Universitaria Tecnologico Comfenalco',
                qualification: 'Desarrollador de Software',
                años: '2023 - 2024',
            },
        ],
    },
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Developer',
            },
            {
                name: ' JAVASCRIPT, PHP, React, NextJS',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/hmtl.svg',
            },
            {
                imgPath: '/about/css.svg',
            },
            {
                imagPath: '/about/javascript.svg',
            },
            {
                imgPath: '/about/react.svg',
            },
            {
                imgPath: '/about/php.svg',
            },
            {
                imgPath: '/about/next.svg',
            },
        ]
    },
]

const About = () => {
    const getData = (arr: { title: string }[], title: string) => {
        return arr.find((item) => item.title === title);
    };


    return <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className="container mx-auto">
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                About Me
            </h2>
            <div className='flex flex-col xl:flex-row'>
                {/* imagenes */}
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] 
                    h-[505px] bg-no-repeat relative' 
                    imgSrc="/about/JE.png"
                    />
                </div>
                {/* tabs */}
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none '>
                            <TabsTrigger value='personal'>Informacion Personal</TabsTrigger>
                            <TabsTrigger value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className='text-lg mt-12 xl:mt-8 '>
                            {/* personal */}
                            <TabsContent value='personal'>Informacion Personal</TabsContent>
                            <TabsContent value='qualifications'>Qualifications info</TabsContent>
                            <TabsContent value='skills'>Skills info</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>

}

export default About
