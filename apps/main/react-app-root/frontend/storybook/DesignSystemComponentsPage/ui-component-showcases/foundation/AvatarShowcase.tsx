/**
 * Avatar Showcase
 * Avatar: with image, without image fallback, size variations
 */

import { Avatar, AvatarFallback, AvatarImage } from '../../../../ui-components/Avatar'

export function AvatarShowcase() {
  return (
    <>
      {/* With Image */}
      <Avatar className="size-10">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
      {/* Fallback */}
      <Avatar className="size-10">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      
      {/* Size Variations */}
      <Avatar className="size-8">
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      
      <Avatar className="size-12">
        <AvatarFallback className="text-sm">LG</AvatarFallback>
      </Avatar>
    </>
  )
}

