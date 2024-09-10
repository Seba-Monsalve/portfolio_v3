import { CarouselOrientation } from '../components/Carousel';
import { Title } from '../components/Title';

export const ProyectosSection = () => {

    const projects = [
        {
            title: 'Portafolio V2',
            url: 'https://portafoliov2-pearl.vercel.app/',
            img: '../../assets/images/portfolio.jpg'
        },
        {
            title: 'AluraGeek',
            url: 'https://seba-monsalve.github.io/alura-alura_geek/',
            img: '../../assets/images/alurageek.jpg',
        },
        {
            title: 'CipherAlura',
            url: 'https://seba-monsalve.github.io/alura-encriptador/',
            img: '../../assets/images/alura_encriptador.png',
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