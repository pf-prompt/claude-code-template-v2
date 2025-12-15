/**
 * Kbd Showcase
 * Keyboard keys: single key (Cmd+K), combination keys (Cmd+Shift+P)
 */

import { Kbd, KbdGroup } from '../../../../ui-components/Kbd'

export function KbdShowcase() {
  return (
    <>
      {/* Single Key */}
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      
      {/* Combination Keys */}
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      
      {/* Other Examples */}
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>C</Kbd>
      </KbdGroup>
    </>
  )
}

