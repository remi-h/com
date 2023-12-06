'use client'
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function HbdOskar() {

    const tickets = [
        { id: 1, used: false, date: 'XX-XX-XX', place: 'TBD' },
        { id: 2, used: false, date: 'XX-XX-XX', place: 'TBD' },
        { id: 3, used: false, date: 'XX-XX-XX', place: 'TBD' },
        { id: 0, used: true, date: '23-10-21', place: '!!EXAMPLE!!' },
    ]
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    // const { isOpen, onOpen } = useDisclosure();

    return (
        <div className="">
            <h1 className='text-3xl'>BIRTHDAY FIKA TICKETS FOR OSKAR!!!</h1>
            <div className='py-4 flex gap-2 flex-wrap'>
                {tickets.map((ticket =>
                    <div key={ticket.id} className='border-1 border-black min-w-[250px]'>
                        {ticket.used ? (
                            <div className='bg-neutral-300'>
                                <p className='px-2 text-white bg-black text-sm'>TICKET USED</p>
                                <div className='p-2'>
                                    <p className='py-1'>FIKA TICKET #{ticket.id}</p>
                                    <p className='text-sm'>DATE: {ticket.date}</p>
                                    <p className='text-sm'>PLACE: {ticket.place}</p>
                                    <Button isDisabled={true} radius="none" size='sm' className='w-full my-2 border-1 bg-transparent border-black text-sm py-1'>USED</Button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p className='px-2 text-white bg-black text-sm'>VALID TILL 2024-10-23</p>
                                <div className='p-2'>
                                    <p className='py-1'>FIKA TICKET #{ticket.id}</p>
                                    <p className='text-sm'>DATE: {ticket.date}</p>
                                    <p className='text-sm'>PLACE: {ticket.place}</p>
                                    <Button onPress={onOpen} radius="none" size='sm' className='w-full my-2 border-1 bg-transparent border-black text-sm py-1 hover:bg-black hover:text-white duration-200'>
                                        LET&apos;S HAVE FIKA →
                                    </Button>
                                    <Modal placement='bottom' isOpen={isOpen} onOpenChange={onOpenChange}>
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalHeader className="flex flex-col gap-1">Hej!!!</ModalHeader>
                                                    <ModalBody>
                                                        <p>
                                                            YEEEEAAAS LETS DO FIKAAA :) <br />
                                                            JUST TEXT ME WHENEVER YOU WANT TO USE IT :)
                                                        </p>
                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button onPress={onClose}>
                                                            OK, I'll text
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