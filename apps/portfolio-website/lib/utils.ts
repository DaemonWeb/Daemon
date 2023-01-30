export function combineClasses(...classes: string[]) {
    return classes.filter(Boolean).join(' ').trim();
}

export function slugify(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

