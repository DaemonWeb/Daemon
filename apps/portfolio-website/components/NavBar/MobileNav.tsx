import { Fragment, Dispatch, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import NavOption from './NavOption';
import { NavOptionInput } from '@/lib/types';
import NavProfile from './NavProfile';
import NavLogo from './NavLogo';


export default function MobileNav({
    isOpen,
    setIsOpen,
    navOptions
}: {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
    navOptions: NavOptionInput[]
}) {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 md:hidden" onClose={setIsOpen}>
                
                {/** Background overlay */}
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>

                {/** Mobile nav */}
                <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700">
                            
                            <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                                <NavLogo
                                    imgSrc='/images/daemon_logo.svg'
                                    imgAlt="Daemon Web Tools logo"
                                />

                                {/** Sidebar links */}
                                <nav className="mt-5 space-y-1 px-2">
                                    {navOptions.map((option) => (
                                        <NavOption
                                            key={option.title}
                                            title={option.title}
                                            href={option.href}
                                            icon={option.icon}
                                        />
                                    ))}
                                </nav>
                            </div>

                            <NavProfile
                                name="Josh Elias"
                                imgSrc='/images/joshy.jpg'
                                imgAlt="Josh Elias profile picture"
                            />

                             {/** Close button */}
                             <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                        </Dialog.Panel>
                    </Transition.Child>

                    {/** Close button background */}
                    <div className="w-14 flex-shrink-0" aria-hidden="true">
                        {/* Force sidebar to shrink to fit close icon */}
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}