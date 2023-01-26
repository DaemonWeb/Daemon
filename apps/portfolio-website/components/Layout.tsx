import { useState } from 'react';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { NavOption } from '@/lib/types';
import MobileNav from './MobileNav';
import SideNav from './SideNav';
import ContentView from './ContentView';

const navOptions: NavOption[] = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
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
