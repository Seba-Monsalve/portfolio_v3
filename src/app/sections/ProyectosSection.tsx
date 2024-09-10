import { CarouselOrientation } from '../components/Carousel';
import { Title } from '../components/Title';

import imgCipheralura from '@/assets/images/alura_encriptador.png'
import imgAlurageek from '@/assets/images/alurageek.jpg'
import imgPortafolio from '@/assets/images/portfolio.jpg'

export const ProyectosSection = () => {

    const projects = [
        {
            title: 'Portafolio V2',
            url: 'https://portafoliov2-pearl.vercel.app/',
            img: imgPortafolio
        },
        {
            title: 'AluraGeek',
            url: 'https://seba-monsalve.github.io/alura-alura_geek/',
            img: imgAlurageek
        },
        {
            title: 'CipherAlura',
            url: 'https://seba-monsalve.github.io/alura-encriptador/',
            img: imgCipheralura
        },


    ]
    return (
        <>
            <Title>Proyectos </Title>
            <br />
            <div className=' flex flex-col items-center'>
                <CarouselOrientation projects={projects} />
            </div>
        </>
    )
}