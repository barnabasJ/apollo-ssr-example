import {
  ApolloClient,
  ApolloClientOptions,
  InMemoryCache,
} from '@apollo/client'

export function createApolloClient(
  options?: Partial<ApolloClientOptions<any>>
) {
  return new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache:
      typeof window !== 'undefined'
        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          new InMemoryCache().restore(window.__APOLLO_STATE__)
        : new InMemoryCache(),
    ...options,
  })
}
