import type { Metadata } from 'next'
// import FikaTicket from '@/components/FikaTicket'
export const metadata: Metadata = {
    title: 'HBD OSKAR | REMI HIGUCHI',
    description: 'birthday fika tickets for oskar',
}

export default function HbdOskar() {

    const tickets = [
        { id: 0, used: true, date: '23-10-21', place: '!!EXAMPLE!!' },
        { id: 1, used: false, date: 'XX-XX-XX', place: 'TBD' },
        { id: 2, used: false, date: 'XX-XX-XX', place: 'TBD' },
        { id: 3, used: false, date: 'XX-XX-XX', place: 'TBD' },
    ]

    return (
        <div className="">
            <h1>BIRTHDAY FIKA TICKETS FOR OSKAR!!!</h1>
            <div className='py-4 flex gap-2 flex-wrap'>
                {tickets.map((ticket =>
                    <div key={ticket.id} className='border-1 border-black min-w-[250px]'>
                        {/*  */}
                        {ticket.used ? (
                            <div className='bg-neutral-400'>
                                <p className='px-2 text-white bg-black text-sm'>VALID TILL 2024-10-23</p>
                                <div className='p-2'>
                                    <p className='py-1'>FIKA TICKET #{ticket.id}</p>
                                    <p className='text-sm'>DATE: {ticket.date}</p>
                                    <p className='text-sm'>PLACE: {ticket.place}</p>
                                    <p className='my-2 border-1 border-black text-sm py-1 px-6 text-center'>USED</p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p className='px-2 text-white bg-black text-sm'>VALID TILL 2024-10-23</p>
                                <div className='p-2'>
                                    <p className='py-1'>FIKA TICKET #{ticket.id}</p>
                                    <p className='text-sm'>DATE: {ticket.date}</p>
                                    <p className='text-sm'>PLACE: {ticket.place}</p>
                                    <button className='w-full my-2 border-1 border-black text-sm py-1 px-6 hover:bg-black hover:text-white duration-200'>LET'S HAVE FIKA → </button>
                                </div>
                            </div>
                        )}
                        {/*  */}

                    </div>
                ))
                }
            </div>
        </div>
    )
}