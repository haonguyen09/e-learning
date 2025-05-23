import Sidebar from '@/components/layout/Sidebar'

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="wrapper grid grid-cols-[350px,minmax(0,1fr)] h-screen">
            <Sidebar />
            <main className="p-5">{children}</main>
        </div>
    )
}

export default layout