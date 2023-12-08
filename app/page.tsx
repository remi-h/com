import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'REMI HIGUCHI',
  description: 'welcome to remihiguchi.com',
}

export default function Home() {
  return (
    <main className="flex">
      <div>
        <h1 className='text-3xl'>Hi! I&apos;m Remi</h1>
        <p>TOKYO ⇔ STOCKHOLM</p>
        <p>I enjoy software engineering and product design.</p>
      </div>
      <div >
        <Image
          src="/images/stockholm.jpg"
          width={800}
          height={300}
          alt="Picture of Stockholm"
          style={{ objectFit: "contain" }}
        />
      </div>
    </main>
  )
}
