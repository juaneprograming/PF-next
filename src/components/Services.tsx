import { GanttChartSquare, Blocks, Gem } from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Diseño Web',
        description: 'Como experto en diseño web Front-end, creo sitios interactivos usando HTML, CSS, JavaScript, React.js y Next.js, enfocándome en estética, funcionalidad, usabilidad, accesibilidad',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Desarrollo Web',
        description: 'Como desarrollador web experimentado, construyo aplicaciones robustas y escalables con JavaScript, PHP, CodeIgniter 3, Next.js, PostgreSQL y SQL. Mi enfoque es la arquitectura sólida, la seguridad y la optimización del rendimiento.',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Desarrollo de Apps',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur labore repudiandae ad dolorem rerum provident!',
    },
]

const Services = () => {
    return <section className='mb-12 xl:mb-36'>
        <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 mx-auto text-center sm:text-left'>Mis Servicios</h2>
            {/* grid items */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {servicesData.map((item, index) => {
                    return <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                        key={index}
                        >
                        <CardHeader className='text-primary absolute -top-[69px]'>
                            <div className='w-[148px] h-[65px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <CardTitle className='mb-4'>{item.title}</CardTitle>
                            <CardDescription className='text-lg'>{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                })}
            </div>
        </div>
    </section>

}

export default Services
