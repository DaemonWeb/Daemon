import Image from 'next/image';
import { NavOptionInput } from '@/lib/types';
import NavOption from '@/components/NavOption';


export default function SideNav({ 
    navOptions 
}: { 
    navOptions: NavOptionInput[]
}) {
    return (
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex min-h-0 flex-1 flex-col bg-indigo-700">
                <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                        <Image
                            className="h-8 w-auto"
                            src="/images/daemon_logo.svg"
                            alt="Daemon Web Tools"
                            width={32}
                            height={32}
                        />
                    </div>
                    <nav className="mt-5 flex-1 space-y-1 px-2">
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
                <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
                <a href="#" className="group block w-full flex-shrink-0">
                    <div className="flex items-center">
                    <div>
                        <Image
                            className="inline-block h-9 w-9 rounded-full"
                            src="/images/joshy.jpg"
                            alt="Josh Elias profile picture"
                            width={36}
                            height={36}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">Josh Elias</p>
                        <p className="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p>
                    </div>
                    </div>
                </a>
                </div>
            </div>
        </div>
    );
}