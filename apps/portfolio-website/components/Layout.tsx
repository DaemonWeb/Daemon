import { useState } from 'react';
import {
  BriefcaseIcon,
  CommandLineIcon,
  FolderIcon,
  HomeIcon,
  ClipboardIcon,
} from '@heroicons/react/24/outline';
import { NavOptionInput } from '@/lib/types';
import MobileNav from './MobileNav';
import SideNav from './SideNav';
import ContentView from './ContentView';

const navOptions: NavOptionInput[] = [
  { title: 'Home', href: '/', icon: HomeIcon },
  { title: 'Services', href: '/services', icon: BriefcaseIcon },
  { title: 'Projects', href: '/projects', icon: FolderIcon },
  { title: 'Skills', href: '/skills', icon: CommandLineIcon },
  { title: 'Resume', href: '/resume', icon: ClipboardIcon },
]

export default function Layout({ 
    children 
}: { 
    children: React.ReactNode 
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
        <MobileNav 
            isOpen={mobileNavOpen}
            setIsOpen={setMobileNavOpen}
            navOptions={navOptions}
        />
        <SideNav navOptions={navOptions}/>
        <ContentView setMobileNavOpen={setMobileNavOpen}>
            { children }
        </ContentView>
    </>
  )
}
