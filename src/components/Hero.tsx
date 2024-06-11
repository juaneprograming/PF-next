'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"
import AnimationText from "./AnimationText"

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from "react-icons/ri"

//componentes
import DevImg from "./DevImg"
import Badge from "./Badge"
import Socials from "./Socials"


const Hero = () => {
    return <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg:bottom bg-cover dark:bg-none">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/*texto*/}
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                    <h1 className="h1 mb-4"><AnimationText /></h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Soy un Joven que siempre busca innovar y proponer ideas para mejorar y aprender nuevos desafios y siempre Dispuesto a darlo mejor en
                        mi trabajo.
                    </p>
                    {/*boton*/}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href={'/contact'}>
                            <Button className="gap-x-2">Contac Me <Send size={18} />
                            </Button>
                        </Link>
                        <a href="" download>
                            <Button variant='secondary' className="gap-x-2">
                                Descargar CV <Download size={18} />
                            </Button>
                        </a>
                    </div>
                    {/*socials*/}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles="text-foreground text-[22px] hover:text-primary transition-all" />
                </div>
                {/*imagen*/}
                <div className="hidden xl:flex relative">
                    {/*badge 1*/}
                    <Badge
                        containerStyles='absolute top-[24%] -left-[5rem]'
                        icon={<RiBriefcase4Fill />}
                        endContNum={2}
                        badgeText='Años de Experiencia' endCountText={""} />
                    {/*badge 2*/}
                    {/* <Badge
                        containerStyles='absolute top-[80%] -left-[1rem]'
                        icon={<RiTodoFill />}
                        endContNum={2}
                        endCountText='k'
                        badgeText='Finished Projects' /> */}
                    {/*badge 3*/}
                    <Badge
                        containerStyles='absolute top-[55%] -right-8'
                        icon={<RiTeamFill />}
                        endContNum={2}
                        endCountText='k'
                        badgeText='Clientes Felices' />

                    <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                    <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-button" imgSrc='/hero/JE.png' />
                </div>
            </div>
            {/*icon*/}
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary " />
            </div>
        </div>
    </section>

}

export default Hero
