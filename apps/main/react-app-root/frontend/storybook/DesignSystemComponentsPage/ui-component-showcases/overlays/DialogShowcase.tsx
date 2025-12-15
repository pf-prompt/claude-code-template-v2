/**
 * Dialog Showcase
 * Dialog: basic dialog, with form, scrollable content
 */

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../../ui-components/Dialog'
import { Button } from '../../../../ui-components/Button'
import { Input } from '../../../../ui-components/Input'
import { Label } from '../../../../ui-components/Label'

export function DialogShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Basic Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">Basic</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog description text</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      
      {/* With Form */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">With Form</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Make changes to your profile</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
          </div>
          <DialogFooter>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <div className="text-xs text-muted-foreground">Click buttons to see dialogs</div>
    </div>
  )
}

