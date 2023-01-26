import ActiveLink from '@/components/ActiveLink';
import { ActiveLinkProps, NavOptionInput  } from '@/lib/types';

export default function NavOption(
    props: NavOptionInput & ActiveLinkProps
) {
    return (
        <ActiveLink
            href={props.href}
            className="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            activeClassName="bg-indigo-800 text-white"
            inactiveClassName="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75"
        >
            <props.icon className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
            {props.title}
        </ActiveLink>       
    )
}