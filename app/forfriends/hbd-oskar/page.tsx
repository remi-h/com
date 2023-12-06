import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'HBD OSKAR | REMI HIGUCHI',
    description: 'birthday fika tickets for oskar',
}

export default function HbdOskar() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const tickets = [
        { id: 0, used: true, date: '23-10-21', place: '!!EXAMPLE!!' },
        { id: 1, used: false, date: 'XX-XX-XX', place: 'TBD' },
        { id: 2, used: false, date: 'XX-XX-XX', place: 'TBD' },
        { id: 3, used: false, date: 'XX-XX-XX', place: 'TBD' },
    ]

    return (
        <div className="">
            <h1 className='text-3xl'>BIRTHDAY FIKA TICKETS FOR OSKAR!!!</h1>
            <div className='py-4 flex gap-2 flex-wrap'>
                {tickets.map((ticket =>
                    <div key={ticket.id} className='border-1 border-black min-w-[250px]'>
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
                                    <Button onClick={onOpen} className='w-full my-2 border-1 border-black text-sm py-1 px-6 hover:bg-black hover:text-white duration-200'>
                                        LET&apos;S HAVE FIKA →
                                    </Button>
                                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                                    <ModalBody>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Nullam pulvinar risus non risus hendrerit venenatis.
                                                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                                        </p>
                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="danger" variant="light" onPress={onClose}>
                                                            Close
                                                        </Button>
                                                        <Button color="primary" onPress={onClose}>
                                                            Action
                                                        </Button>
                                                    </ModalFooter>
                                                </>
                                            )}
                                        </ModalContent>
                                    </Modal>
                                </div>
                            </div>
                        )}
                    </div>
                ))
                }
            </div>
        </div>
    )
}