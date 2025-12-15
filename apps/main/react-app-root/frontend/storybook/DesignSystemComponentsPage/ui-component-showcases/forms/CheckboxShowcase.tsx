 
/**
 * Checkbox Showcase
 * Checkbox: unchecked, checked, indeterminate, disabled
 */

import { Checkbox } from '../../../../ui-components/Checkbox'
import { Label } from '../../../../ui-components/Label'
import { state } from 'ccstate'
import { useGet, useSet } from 'ccstate-react'

// we do not test this state, so that we can define it here
const cbValue1$ = state<boolean | 'indeterminate'>(false)
// we do not test this state, so that we can define it here
const cbValue2$ = state<boolean | 'indeterminate'>(true)
// we do not test this state, so that we can define it here
const cbValue3$ = state<boolean | 'indeterminate'>('indeterminate')

export function CheckboxShowcase() {
  const cbValue1 = useGet(cbValue1$)
  const setCbValue1 = useSet(cbValue1$)
  const cbValue2 = useGet(cbValue2$)
  const setCbValue2 = useSet(cbValue2$)
  const cbValue3 = useGet(cbValue3$)
  const setCbValue3 = useSet(cbValue3$)
  
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Unchecked */}
      <div className="flex items-center gap-2">
        <Checkbox 
          id="cb-unchecked" 
          checked={cbValue1}
          onCheckedChange={setCbValue1}
        />
        <Label htmlFor="cb-unchecked">Unchecked</Label>
      </div>
      
      {/* Checked */}
      <div className="flex items-center gap-2">
        <Checkbox 
          id="cb-checked" 
          checked={cbValue2}
          onCheckedChange={setCbValue2}
        />
        <Label htmlFor="cb-checked">Checked</Label>
      </div>
      
      {/* Indeterminate */}
      <div className="flex items-center gap-2">
        <Checkbox 
          id="cb-indeterminate" 
          checked={cbValue3}
          onCheckedChange={setCbValue3}
        />
        <Label htmlFor="cb-indeterminate">Indeterminate</Label>
      </div>
      
      {/* Disabled */}
      <div className="flex items-center gap-2">
        <Checkbox id="cb-disabled" disabled />
        <Label htmlFor="cb-disabled" className="opacity-50">Disabled</Label>
      </div>
    </div>
  )
}

