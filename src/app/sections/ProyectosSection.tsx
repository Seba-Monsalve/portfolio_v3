import { CarouselOrientation } from "../components/Carousel";
import { Title } from "../components/Title";

import imgCipheralura from "@/assets/images/alura_encriptador.png";
import imgAlurageek from "@/assets/images/alurageek.jpg";
import imgPortafolio from "@/assets/images/portfolio.jpg";
import imgPruebaTecnica from "@/assets/images/prueba-tenica.jpg";
import imgPetCare from "@/assets/images/pet-care.png";

export const ProyectosSection = () => {
  const projects = [
    {
      title: "PetCare",
      url: "https://petcare-backend-977g.onrender.com/",
      img: imgPetCare,
    },
    {
      title: "Prueba Tecnica",
      url: "https://github.com/Seba-Monsalve/prueba-gux/",
      img: imgPruebaTecnica,
    },
    {
      title: "Portafolio V2",
      url: "https://portafoliov2-pearl.vercel.app/",
      img: imgPortafolio,
    },
    {
      title: "AluraGeek",
      url: "https://seba-monsalve.github.io/alura-alura_geek/",
      img: imgAlurageek,
    },
    {
      title: "CipherAlura",
      url: "https://seba-monsalve.github.io/alura-encriptador/",
      img: imgCipheralura,
    },
  ];
  return (
    <>
      <Title>Proyectos </Title>
      <br />
      <div className=" flex flex-col items-center h-fit  w-full overflow-hidden">
        <CarouselOrientation projects={projects} />
      </div>
    </>
  );
};
