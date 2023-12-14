import Link from 'next/link'
import { LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, ArrowRightIcon } from '@radix-ui/react-icons'

export default function Social() {
    return (
        <div className="bg-white rounded-md w-fit text-left py-4">
            <p className='text-lg font-semibold'>Do you want to connect?</p>
            <div className="flex gap-4 flex-wrap">
                <Link href="https://www.linkedin.com/in/hremi" target="_blank" className='min-w-[270px] group'>
                    <div className="border border-black rounded-[6px] overflow-hidden">
                        <div className='flex justify-between items-center rounded-t-[5px] bg-neutral-700 text-white p-2'>
                            <p className='flex items-center'><span className="font-medium text-lg">Linked</span><LinkedInLogoIcon className='w-6 h-6' /></p>
                            <ArrowRightIcon className='hidden group-hover:inline-block w-6 h-6' />
                        </div>
                        <div className='p-2 group-hover:bg-neutral-100'>
                            <img src="/images/profile.jpeg" alt="Remi Higuchi" className='rounded-full w-14 m-1 border border-neutral-500' />
                            <p className="font-semibold text-lg">REMI HIGUCHI</p>
                            <p className='text-xs'>Business Tech Trainee in Stockholm, Sweden <br />
                                Keio University | KTH / CS - Class of 2023 </p>
                        </div>
                    </div>
                </Link>
                <Link href="https://github.com/remi-h" target="_blank" className='min-w-[270px] group'>
                    <div className="border border-black rounded-[6px] overflow-hidden">
                        <div className='flex justify-between items-center rounded-t-[5px] bg-neutral-700 text-white p-2'>
                            <p className='flex items-center gap-1'><span className="font-medium text-lg">GitHub</span><GitHubLogoIcon className='w-6 h-6' /></p>
                            <ArrowRightIcon className='hidden group-hover:inline-block w-6 h-6' />
                        </div>
                        <div className='p-2 group-hover:bg-neutral-100'>
                            <img src="/images/github-remi.jpeg" alt="Remi Higuchi" className='rounded-full w-14 m-1 border border-neutral-500' />
                            <p className="font-semibold text-lg">Rémi</p>
                            <p className='text-xs'>Stockholm, Sweden<br />
                                Keio University | KTH / CS - Class of 2023 </p>
                        </div>
                    </div>
                </Link>
                <Link href="https://instagram.com/remifiguchi" target="_blank" className='min-w-[270px] group'>
                    <div className="border border-black rounded-[6px] overflow-hidden">
                        <div className='flex justify-between items-center rounded-t-[5px] bg-neutral-700 text-white p-2'>
                            <p className='flex items-center gap-1'><span className="font-medium text-lg">Instagram</span><InstagramLogoIcon className='w-6 h-6' /></p>
                            <ArrowRightIcon className='hidden group-hover:inline-block w-6 h-6' />
                        </div>
                        <div className='p-2 group-hover:bg-neutral-100'>
                            <img src="/images/insta-r.jpg" alt="Remi Higuchi" className='rounded-full w-14 m-1 border border-neutral-500' />
                            <p className="font-semibold text-lg">R</p>
                            <p className='text-xs'>Film photography<br />
                                Canon Autoboy Tele QD</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
