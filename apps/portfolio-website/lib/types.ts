import { LinkProps } from "next/link";

export type NavOptionInput = {
    title: string,
    href: string,
    icon: any,
}

export type ActiveLinkProps = LinkProps & {
    className?: string
    activeClassName?: string
    inactiveClassName?: string
}
