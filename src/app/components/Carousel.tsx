import * as React from "react"

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface Props {
  projects: { url: string, img: StaticImageData, title: string }[]
}

export function CarouselOrientation({ projects }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="horizontal"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[150px]">
        {projects.map(({img,url,title}, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <Link href={url} target="_blank" rel='noopener' >
                <CardContent className="flex flex-col items-center justify-center p-2 rounded-lg h-[100px]">
                  <Image src={img} width={150} height={150} alt={"Imagen proyecto"} className="rounded-lg object-fill " ></Image>
                  <h1>{title}</h1>
                </CardContent>
                </Link>

              </Card>
            </div>
          </CarouselItem>
        ))
        }
      </CarouselContent >
      <CarouselPrevious />
      <CarouselNext />
    </Carousel >
  )
}
