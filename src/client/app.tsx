import React, { useState } from 'react'
import { ApolloClient, ApolloProvider } from '@apollo/client'

import { createApolloClient } from './apollo'
import { Rates } from './component'

type Props = {
  client?: ApolloClient<any>
}

export function App({ client }: Props): JSX.Element {
  const [savedClient] = useState(client || createApolloClient())

  return (
    <ApolloProvider client={savedClient}>
      <h1>Apollo SSR Example</h1>
      <Rates />
    </ApolloProvider>
  )
}
