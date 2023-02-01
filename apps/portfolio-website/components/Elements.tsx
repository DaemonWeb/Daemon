import { combineClasses } from "@/lib/utils"

export function TitleSection({ 
    children 
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto max-w-2xl text-center">
            {children}
        </div>
    )
}


export function Title({ 
    children,
    className = ""
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <h1 
            className={
                combineClasses(
                    "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl",
                    className
                )
            }
        >
            {children}
        </h1>
    )
}

export function SubTitle({ children }: {
    children: React.ReactNode
}) {
    return (
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {children}
        </h2>
    )
}

export function TitleDescription({ 
    children,
    className = ""
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <p 
            className={combineClasses(
                "mt-6 text-lg leading-8 text-gray-600",
                className
            )}
        >
            {children}
        </p>
    )
}