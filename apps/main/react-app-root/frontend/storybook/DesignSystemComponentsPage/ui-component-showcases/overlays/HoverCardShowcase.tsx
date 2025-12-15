/**
 * HoverCard Showcase
 * Hover card: with content, with delay
 */

import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../../../ui-components/HoverCard'
import { Avatar, AvatarFallback, AvatarImage } from '../../../../ui-components/Avatar'

export function HoverCardShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* With Content */}
      <HoverCard>
        <HoverCardTrigger className="text-sm text-primary underline-offset-4 hover:underline">
          @username
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@username</h4>
              <p className="text-xs text-muted-foreground">
                This is a hover card with rich content
              </p>
              <div className="flex items-center pt-2">
                <span className="text-xs text-muted-foreground">Joined December 2021</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      
      {/* With Delay */}
      <HoverCard openDelay={700}>
        <HoverCardTrigger className="text-sm text-primary underline-offset-4 hover:underline">
          Hover (delayed)
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="text-xs">This card has a 700ms delay</p>
        </HoverCardContent>
      </HoverCard>
      
      <div className="text-xs text-muted-foreground">Hover links to see cards</div>
    </div>
  )
}

