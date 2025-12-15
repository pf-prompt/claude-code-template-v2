import { takeStateSnapshot } from '../common/ccstatex/takeStateSnapshot'
import type { Getter } from 'ccstate'
import * as prototypeMems from './prototype/mems'
import * as stateTreeRoot from './stateTreeRoot'
import { injectState } from '../common/ccstatex/injectState'

import { z } from 'zod'

function takePrototypeMemsSnapshot() {
  return prototypeMems
}

function injectPrototypeMems(injected: Record<string, unknown>) {
  for (const [memName, memValue] of Object.entries(prototypeMems)) {
    const rawInjectedMemValue = Reflect.get(injected, memName)
    if (rawInjectedMemValue !== undefined) {
      const injectedMemValue = z.record(z.string(), z.unknown()).parse(rawInjectedMemValue)
      replaceMem(memValue as Record<string, unknown>, injectedMemValue)
    }
  }
}

function replaceMem(mem: Record<string, unknown>, injected: Record<string, unknown> | undefined) {
  for (const primaryKey of Object.keys(mem)) {
    delete mem[primaryKey]
  }
  if (injected === undefined) {
    return
  }
  for (const [primaryKey, val] of Object.entries(injected)) {
    mem[primaryKey] = val
  }
}

export async function takeAllStateSnapshot(get: Getter) {
  const reactState = await takeStateSnapshot(get, stateTreeRoot)
  return JSON.parse(JSON.stringify({
    prototypeMems: takePrototypeMemsSnapshot(),
    stateTreeRoot: reactState
  }))
}

export async function injectAllState(rawInjected: unknown) {
  const injected = z.object({
    prototypeMems: z.record(z.string(), z.unknown()).optional(),
    stateTreeRoot: z.record(z.string(), z.unknown()),
  }).parse(rawInjected)

  injectState(stateTreeRoot, injected.stateTreeRoot)
  if (injected.prototypeMems) {
    injectPrototypeMems(injected.prototypeMems)
  }
}