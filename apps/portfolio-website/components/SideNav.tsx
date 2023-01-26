import Image from 'next/image';
import { NavOptionInput } from '@/lib/types';
import NavOption from '@/components/NavOption';
import NavProfile from './NavProfile';
import NavLogo from './NavLogo';


export default function SideNav({ 
    navOptions 
}: { 
    navOptions: NavOptionInput[]
}) {
    return (
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">

            <div className="flex min-h-0 flex-1 flex-col bg-indigo-700">
                <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">

                    <NavLogo
                        imgSrc="/images/daemon_logo.svg"
                        imgAlt="Daemon Web Tools logo"
                    />

                    {/** Sidebar links */}
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

                <NavProfile
                    name="Josh Elias"
                    imgSrc="/images/joshy.jpg"
                    imgAlt='Josh Elias profile picture'
                />
            </div>
        </div>
    );
}