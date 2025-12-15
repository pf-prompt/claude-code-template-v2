/**
 * Card Showcase
 * Card: Header + Content + Footer, Content only, with image
 */

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../../ui-components/Card'
import { Button } from '../../../../ui-components/Button'

export function CardShowcase() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Header + Content + Footer */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-sm">Card Title</CardTitle>
          <CardDescription className="text-xs">Card description</CardDescription>
        </CardHeader>
        <CardContent className="text-xs text-foreground">
          Card content goes here
        </CardContent>
        <CardFooter>
          <Button size="sm" className="text-xs">Action</Button>
        </CardFooter>
      </Card>
      
      {/* Content Only */}
      <Card className="w-full">
        <CardContent className="text-xs text-foreground pt-6">
          Simple card with only content
        </CardContent>
      </Card>
    </div>
  )
}

