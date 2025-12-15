 
/**
 * Switch Showcase
 * Switch: off, on, disabled
 */

import { Switch } from '../../../../ui-components/Switch'
import { Label } from '../../../../ui-components/Label'
import { state } from 'ccstate'
import { useGet, useSet } from 'ccstate-react'

// we do not test this state, so that we can define it here
const switchValue1$ = state(false)
// we do not test this state, so that we can define it here
const switchValue2$ = state(true)

export function SwitchShowcase() {
  const switchValue1 = useGet(switchValue1$)
  const setSwitchValue1 = useSet(switchValue1$)
  const switchValue2 = useGet(switchValue2$)
  const setSwitchValue2 = useSet(switchValue2$)
  
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Off */}
      <div className="flex items-center gap-2">
        <Switch 
          id="sw-off" 
          checked={switchValue1}
          onCheckedChange={setSwitchValue1}
        />
        <Label htmlFor="sw-off">Off</Label>
      </div>
      
      {/* On */}
      <div className="flex items-center gap-2">
        <Switch 
          id="sw-on" 
          checked={switchValue2}
          onCheckedChange={setSwitchValue2}
        />
        <Label htmlFor="sw-on">On</Label>
      </div>
      
      {/* Disabled */}
      <div className="flex items-center gap-2">
        <Switch id="sw-disabled" disabled />
        <Label htmlFor="sw-disabled" className="opacity-50">Disabled</Label>
      </div>
    </div>
  )
}

