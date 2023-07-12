export const PageWrapper = ({children}: any) => {
    return <div className="page">
        <div className="subpage">
            <main>
                {children}
            </main>
        </div>
    </div>
}