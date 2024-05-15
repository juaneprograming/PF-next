import {GanttChartSquare, Blocks, Gem} from 'lucide-react'
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
        title: 'Web Desing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur labore repudiandae ad dolorem rerum provident!',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur labore repudiandae ad dolorem rerum provident!',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur labore repudiandae ad dolorem rerum provident!',
    },
]

const Services = () => {
  return <section className='mb-12 xl:mb-36'>
    <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 mx-auto'>My services</h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
            {servicesData.map((item, index)=> {
                return <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                    <CardHeader className='text-primary absolute -top-[60px]'>
                        <div className='w-[148px] h-[88px] bg-pink-100 dark:bg-background flex justify-center items-center'>{item.icon}</div>
                    </CardHeader>
                </Card>
            })}
        </div>
    </div>
  </section>
  
}

export default Services