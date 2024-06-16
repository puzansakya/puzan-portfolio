

export const NewGlichText = ({ label }: { label: String }) => {
    return <div className={`stack stacks-3`}>
        {Array.from({ length: 3 }).map((_, index) => (
            <span key={index} className={`stack-item stack-item-${index}`}>
                {label}
            </span>
        ))}
    </div>
}