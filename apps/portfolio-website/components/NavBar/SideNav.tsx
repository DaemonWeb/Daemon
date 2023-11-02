import { NavOptionInput } from '@/lib/types';
import NavOption from '@/components/NavBar/NavOption';
import NavProfile from './NavProfile';
import NavLogo from './NavLogo';
import daemonLogo from '@/public/images/daemon_logo.svg';
import joshyPic from '@/public/images/joshy.jpg';


export default function SideNav({ 
    navOptions 
}: { 
    navOptions: NavOptionInput[]
}) {
    return (
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col z-10">

            <div className="flex min-h-0 flex-1 flex-col bg-indigo-700">
                <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">

                    <NavLogo
                        imgSrc={daemonLogo}
                        imgAlt="Daemon Tech Tools logo"
                    />

                    {/** Sidebar links */}
                    <nav className="mt-5 flex-1 space-y-1 px-2">
                        {navOptions.map((option) => (
                            <NavOption
                                key={option.title}
                                {...option}
                            />
                        ))}
                    </nav>
                </div>

                <NavProfile
                    name="Josh Elias"
                    imgSrc={joshyPic}
                    imgAlt='Josh Elias profile picture'
                />
            </div>
        </div>
    );
}