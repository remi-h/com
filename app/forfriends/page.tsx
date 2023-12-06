import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from "@nextui-org/react";

export const metadata: Metadata = {
    title: 'For Frends | REMI HIGUCHI',
    description: 'for my friends',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function Forfriends() {
    return (
        <main>
            <h1 className="text-3xl">HELLO MY FRIENDS</h1>
            <p>This page is for my friends. (Not Indexed)</p>
            <Link href="forfriends/hbd-oskar">
                <Button radius="none" size='sm' className='my-2 border-1 bg-transparent border-black text-sm py-1 hover:bg-black hover:text-white duration-200'>
                    Oskar
                </Button>
            </Link>
        </main>
    )
}