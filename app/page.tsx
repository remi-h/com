import Image from 'next/image'
import Social from '@/components/Social'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'REMI HIGUCHI',
  description: 'welcome to remihiguchi.com',
}

export default function Home() {
  return (
    <main className="flex justify-between px-4 py-2 gap-4 flex-wrap">
      <div className='flex flex-col py-2 space-y-2 min-[832px]:w-[40%] w-full'>
        <div className='relative h-40 min-[832px]:h-96'>
          <Image
            src="/images/stockholm.jpg"
            fill
            alt="Picture of Stockholm"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className='relative h-40 min-[832px]:h-96'>
          <Image
            src="/images/tokyo.jpg"
            fill
            alt="Picture of Tokyo"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className='flex flex-col py-2 gap-y-6 min-[832px]:w-[58%] w-full'>
        <div className='flex flex-col gap-y-1'>
          <h1 className='text-2xl'>Hi! I&apos;m Remi</h1>
          <p>TOKYO + STOCKHOLM</p>
        </div>
        <div className='flex flex-col gap-6'>
          <p className='text-sm'>
            I was born and raised in Tokyo, Japan, but my family&apos;s extensive travels ignited my passion for studying and working abroad from an early age.
            Having attended schools in diverse locations such as Japan, the Philippines, the UAE, and Sweden,
            I cultivated a global perspective and an insatiable curiosity for different cultures and experiences.
          </p>
          <p className='text-sm'>
            I had always liked technology but my tech journey commenced at the age of 14 when I delved into programming,
            leading me to enroll in a national tech high school to specialize in computer science. It was during my time at Keio University
            that I unearthed my fervor for Human-Computer Interaction (HCI), realizing the immense potential and impact of this field.
          </p>
          <p className='text-sm'>
            Currently based in Stockholm, Sweden, I am fully immersed in my role as a tech trainee, specializing in HCI. Each day, I leverage
            my skills and knowledge to contribute meaningfully to the development of innovative technological solutions that bridge the gap between humans and computers.
          </p>
          <h2>Overall, I enjoy software engineering and product design.</h2>
        </div>
        <Social />
      </div>
    </main>
  )
}
