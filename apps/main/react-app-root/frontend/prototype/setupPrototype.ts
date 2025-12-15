import { command } from 'ccstate'
import { apiRegistry } from '../../common/infra/apiRegistry'
import './apiImpl'
import { authCommand } from '../../common/infra/auth'

export const setupPrototype = command(({ get, set }) => {
  apiRegistry.useDirectRoute = get

  // Enable fake auth mode for prototype
  set(authCommand.enableFakeMode$, {
    id: 'prototype-user',
    email: 'prototype@example.com',
    name: 'Prototype User',
    image: 'https://ui-avatars.com/api/?name=Prototype+User&background=6366f1&color=fff',
  })
})