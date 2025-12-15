import * as React from 'react'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import { Icon } from '@iconify/react'

import { cn } from '../infra/cn'
import { Button } from './Button'
import { instances } from '../../common/ccstatex/instances'
import { computed, state } from 'ccstate'
import { useGet, useSet } from 'ccstate-react'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
}

// we do not test this state, so that we can define it here
const carouselInstances = instances(({ carouselId }: { carouselId: string }) => {
  if (!carouselId) {
    throw new Error('carouselId should not be empty')
  }
  const dirty$ = state(1)
  const api$ = state<ReturnType<typeof useEmblaCarousel>[1]>(undefined)
  return {
    api$,
    dirty$,
    canScrollPrev$: computed((get) => {
      get(dirty$)
      return get(api$)?.canScrollPrev()
    }),
    canScrollNext$: computed((get) => {
      get(dirty$)
      return get(api$)?.canScrollNext()
    })
  }
})

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  carouselId: string 
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

function Carousel({
  opts,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: 'x',
    },
    plugins
  )
  const carouselId = React.useId()
  const carouselInstance = carouselInstances.getState({ carouselId })
  const setApi = useSet(carouselInstance.api$)
  const setDirty = useSet(carouselInstance.dirty$)
  const onSlidesDirty = React.useCallback(() => {
    setDirty(val => val + 1)
  }, [setDirty])
  const onInit = React.useCallback(() => {
    setApi(api)
  }, [api, setApi])
  if (api) {
    api.on('slidesInView', onSlidesDirty)
    api.on('slidesChanged', onSlidesDirty)
    api.on('init', onInit)
  }
  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        api?.scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        api?.scrollNext()
      }
    },
    [api]
  )

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        carouselId,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          'flex',
          '-ml-4',
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        'pl-4',
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { carouselId } = useCarousel()
  const instance = carouselInstances.getState({ carouselId })
  const api = useGet(instance.api$)
  const canScrollPrev = useGet(instance.canScrollPrev$)
  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        'top-1/2 -left-12 -translate-y-1/2',
        className
      )}
      disabled={!canScrollPrev}
      onClick={() => api!.scrollPrev()}
      {...props}
    >
      <Icon icon="lucide:arrow-left" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { carouselId } = useCarousel()
  const instance = carouselInstances.getState({ carouselId })
  const api = useGet(instance.api$)
  const canScrollNext = useGet(instance.canScrollNext$)
  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        'top-1/2 -right-12 -translate-y-1/2',
        className
      )}
      disabled={!canScrollNext}
      onClick={() => api!.scrollNext()}
      {...props}
    >
      <Icon icon="lucide:arrow-right" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
