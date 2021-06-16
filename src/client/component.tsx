import React from 'react'
import { gql, useQuery } from '@apollo/client'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`
export function Rates() {
  const { loading, data } = useQuery(EXCHANGE_RATES)

  if (loading) return <h2>Loading...</h2>

  return data.rates.map(
    ({ currency, rate }: { currency: string; rate: number }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    )
  )
}
