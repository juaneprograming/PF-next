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
        text: 'Ojuan2594@gmail.com',
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
                role: 'Desarrollador de Software',
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
                imagPath: '/about/js.svg',
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
// /about/javascript.svg
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
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Info Personal</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className='text-lg mt-12 xl:mt-8 '>
                            {/* personal */}
                            <TabsContent value='personal'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-4'>Desarrollador de Software</h3>
                                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>Especializado en Desarrollo Front-end
                                    </p>
                                    {/* icons */}
                                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                        {infoData.map((item, index) => {
                                            return <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                <div className='text-primary'>{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        })}
                                    </div>
                                    {/* lenguajes */}
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='text-primary'>lenguajes skills</div>
                                        <div className="border-b border-border"></div>
                                        <div>Español, Ingles</div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* qualifications */}
                            <TabsContent value='qualifications'>
                                <div>
                                    <h3 className='h3 mb-8 text-center xl:text-left'>Experiencia Laboral
                                    </h3>
                                    {/* experiencia y educacion */}
                                    <div className='grid md:grid-cols-2 gap-y-8'>
                                        {/* experiencia */}
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <Briefcase size={28} />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData, 'Experiencia').title}
                                                </h4>
                                                <div>
                                                    {/* lista */}
                                                    <div className='flex flex-col gap-y-8'>
                                                        {getData(qualificationData, 'Experiencia').data.map((item, index) => {
                                                            const { compañia, role, años } = item;
                                                            return (
                                                                <div className='flex gap-x-8 group ' key={index}>

                                                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-semibold text-xl leading-none mb-2'>{compañia}</div>
                                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                                        <div className='text-base font-medium'>{años}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* educacion */}
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <GraduationCap size={28} />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                                <div>
                                                    {/* lista */}
                                                    <div className='flex flex-col gap-y-8'>
                                                        {getData(qualificationData, 'education').data.map((item, index) => {
                                                            const { universidad, quialification, años } = item;
                                                            return (
                                                                <div className='flex gap-x-8 group ' key={index}>

                                                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-semibold text-xl leading-none mb-2'>{universidad}</div>
                                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>{quialification}</div>
                                                                        <div className='text-base font-medium'>{años}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* skills */}
                            <TabsContent value='skills'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-8'>Herramientas Mas Usadas</h3>
                                    {/* skills */}
                                    <div className='mb-16'>
                                        <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* skill list */}
                                        <div>
                                            {getData(skillData, 'skills').data.map(
                                                (item, index) => {
                                                    const { name } = item;
                                                    return <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                        <div className='font-medium'>{name}</div>
                                                    </div>
                                                }
                                            )}
                                        </div>
                                    </div>
                                    {/* herrmaientas */}
                                    <div>
                                        <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* lista de herramientas */}
                                        <div>
                                            {getData(skillData, 'tools').data.map((item: Item, index: number) => {
                                                const { imgPath } = item;
                                                return (
                                                    <div key={index}>
                                                        <Image src={imgPath} width={48} height={48} alt='' priority />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>

}

export default About
