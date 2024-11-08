export const ListItem = ({ content, children }: { content?: string, children?:any }) => {
    return <li className="flex gap-2"><p>-</p>
        <p>
            {children ?? content}
        </p>
    </li>
}