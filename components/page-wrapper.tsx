import { PropsWithChildren } from "react"

interface SectionWrapperProps extends PropsWithChildren {
    className?:string
}
export const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
    return <div className={`mx-auto max-w-screen-lg sm:px-5 sm:py-24 xl:px-0 px-5 py-24  ${className}`}>
        {children}
    </div>
}