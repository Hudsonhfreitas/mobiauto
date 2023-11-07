import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import StyledComponentsRegistry from './registry'

import './globals.css'
import { GlobalContextProvider } from './Context/store'

const roboto = Roboto({
  subsets: ["latin"],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Tabela fipe - Mobiauto'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="pt-br">
      <StyledComponentsRegistry>
        <body className={roboto.className}>
          <GlobalContextProvider>
          {children}
          </GlobalContextProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
