/**
 * AlertDialog Showcase
 * Confirmation dialog: open state, with title + description + actions
 */

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../../../../ui-components/AlertDialog'
import { Button } from '../../../../ui-components/Button'

export function AlertDialogShowcase() {
  return (
    <div className="w-full flex flex-col gap-3">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" size="sm">Open Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <div className="text-xs text-muted-foreground">Click button to see dialog</div>
    </div>
  )
}

