export const PageWrapper = ({children}: any) => {
    return <div className="page font-open-sans">
        <div className="subpage">
            <main>
                {children}
            </main>
        </div>
    </div>
}