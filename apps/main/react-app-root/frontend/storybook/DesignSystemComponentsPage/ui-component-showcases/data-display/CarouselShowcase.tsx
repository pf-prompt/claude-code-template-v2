/**
 * Carousel Showcase
 * Carousel: auto-play, manual switching, with indicators
 */

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../../../ui-components/Carousel'
import { Card, CardContent } from '../../../../ui-components/Card'
import { Icon } from '../../../../ui-components/Icon'

export function CarouselShowcase() {
  return (
    <div className="w-full px-12">
      <Carousel className="w-full" opts={{ loop: false }}>
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Icon icon="lucide:image" className="size-24 text-border" />1
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Icon icon="lucide:image" className="size-24 text-border" />2
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Icon icon="lucide:image" className="size-24 text-border" />3
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

