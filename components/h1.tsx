
interface H1Props extends Record<string, any> {
    children: any
}
export const H1 = ({ children, ...propsRest }: H1Props) => {
    return <h1 className="text-2xl font-medium" {...propsRest}>{children}</h1>

}