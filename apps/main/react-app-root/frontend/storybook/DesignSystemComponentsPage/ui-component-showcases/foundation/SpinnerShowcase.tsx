/**
 * Spinner Showcase
 * Loading animation: default, small, large
 */

import { Spinner } from '../../../../ui-components/Spinner'

export function SpinnerShowcase() {
  return (
    <>
      {/* Small */}
      <Spinner className="size-4" />
      
      {/* Default */}
      <Spinner className="size-6" />
      
      {/* Large */}
      <Spinner className="size-8" />
    </>
  )
}

