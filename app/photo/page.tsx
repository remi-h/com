import Image from 'next/image';
import Link from 'next/link';
import { InstagramLogoIcon } from '@radix-ui/react-icons';


import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'PHOTO | REMI HIGUCHI',
  description: 'Film Photograohy',
}

export default function DigitalCard() {

    const photos_bcn = [
        {
            id: 1,
            link: '/images/film/index.jpg',
        },
        {
            id: 2,
            link: '/images/film/index2.jpg',
        },
        {
            id: 3,
            link: '/images/film/000032200006.jpg',
        },
        {
            id: 4,
            link: '/images/film/000032200022.jpg',
        },
        {
            id: 5,
            link: '/images/film/000032200029.jpg',
        },
        {
            id: 6,
            link: '/images/film/000032850001.jpg',
        },
        { 
            id: 7,
            link: '/images/film/000032850010.jpg',
        },
        {
            id: 8,
            link: '/images/film/000032850024.jpg',
        },
        {
            id: 9,
            link: '/images/film/000032850025.jpg',
        },
    ]

    return (
        <main className='p-4 bg-black text-white'>
            <h1 className="text-3xl mb-4">FILM PHOTOGRAPHY</h1>
            <Link href="https://instagram.com/remifiguchi" target="_blank" className='w-48 inline-block	'>
                <div className="w-48 border-[0.5px] border-white rounded-[6px] overflow-hidden">
                    <div className='p-2'>
                        <div className='flex justify-between'>
                            <img src="/images/insta-r.jpg" alt="Remi Higuchi" className='rounded-full w-14 m-1 border border-neutral-500' />
                            <InstagramLogoIcon className='w-6 h-6' />
                        </div>
                        <p className="font-semibold text-lg">Remi Fi</p>
                        <p className='text-xs'>Film photography<br />
                            Canon Autoboy Tele QD
                        </p>
                    </div>

                </div>
            </Link>
            <h2 className='py-4'>--- Barcelona, 2024 ---</h2>
            <div className='flex flex-wrap gap-4'>
                {photos_bcn.map((photo) => (
                    <div key={photo.id} className='w-80 h-80 relative'>
                        <Image src={photo.link}
                            fill
                            sizes="100%"
                            alt="Picture of film photographs"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
        </main>
    )
}

