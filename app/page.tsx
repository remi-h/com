import Image from 'next/image'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'REMI HIGUCHI',
  description: 'welcome to remihiguchi.com',
}
 
export default function Home() {
  return (
    <main className="">
      <h1>Hello World</h1>
      <p>UNDER CONSTRUCTION, PLEASE COME BACK LATER</p>
    </main>
  )
}
