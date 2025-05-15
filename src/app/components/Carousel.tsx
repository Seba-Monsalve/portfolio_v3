import * as React from "react"

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface Props {
  projects: { url: string, img: StaticImageData, title: string }[]
}

export function CarouselOrientation({ projects }: Props) {
  return (
    <Carousel
      opts={
        { loop: true, dragFree: true, }

      }
      className="w-full max-w-sm"
      orientation="horizontal"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 max-h-[200px]" >
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">

                  <Link href={projects
                    ? projects[index].url
                    : "#"}
                    target="_blank"
                    className="flex flex-col items-center justify-center w-full h-full"
                  >
                    <Image
                      src={projects[index].img}
                      alt={projects[index].title}
                      className="rounded-lg object-cover"
                      width={300}
                      height={300}

                    />
                    <h2 className="line-clamp-3">{projects[index].title}</h2>
                  </Link>

                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
