import { useRouter } from "next/router";
import Link from "next/link";
import React, { PropsWithChildren, useState, useEffect } from "react";
import { ActiveLinkProps } from "@/lib/types";
import { combineClasses } from "@/lib/utils";


export default function ActiveLink({
    children,
    className = "",
    activeClassName = "",
    inactiveClassName = "",
    disabled = false,
    ...props
}: PropsWithChildren<ActiveLinkProps>) {
    const { asPath, isReady } = useRouter();
    const [computedClassName, setComputedClassName] = useState(className);

    useEffect(() => {
        // Check if the input is disabled
        // If so, no need to check for active class
        if (disabled) {
            const newClassName = combineClasses(
                className, 
                inactiveClassName,
                "pointer-events-none opacity-40"
            );

            if(newClassName !== computedClassName) {
                setComputedClassName(newClassName);
            }
          
          return;
        }

        // Check if the router fields are updated client-side and ready for use
        if (!isReady) {
            return;
        }

        // Dynamic route will be matched via props.as
        // Static route will be matched via props.href
        const linkPathName = new URL(
            (props.as || props.href) as string,
            location.href
        ).pathname;

        // Using URL().pathname to get rid of query and hash
        const activePathName = new URL(asPath, location.href).pathname;

        // Add either the active or inactive class to the link 
        // if the current path matches the link
        const newClassName =
            combineClasses(className, 
                linkPathName === activePathName 
                    ? activeClassName
                    : inactiveClassName
            );
        
        if(newClassName !== computedClassName) {
            setComputedClassName(newClassName);
        }
    }, [
        asPath,
        isReady,
        props.as,
        props.href,
        className,
        activeClassName,
        inactiveClassName,
        computedClassName,
        disabled
    ])

    return (
        <Link 
            className={computedClassName}
            {...props}
        >
            {children}
        </Link>
    );
}