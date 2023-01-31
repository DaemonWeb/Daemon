import { combineClasses } from "@/lib/utils";

export default function Badge({
    text,
    colour = "gray",
    className = ""
}: {
    text: string;
    colour?: string;
    className?: string
}) {
    return (
        <span 
            className={
                combineClasses(`
                    inline-flex 
                    items-center 
                    rounded-full 
                    bg-${colour}-100 
                    px-3 
                    py-0.5 
                    text-sm 
                    font-medium 
                    text-${colour}-800
                    `, 
                    className)
            }
        >
            {text}
        </span>
    );
}