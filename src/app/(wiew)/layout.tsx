
export const metadata = {
    title: 'Wiew Page',
}
export default function WiewLayout({ 
    children
 }: { children: React.ReactNode }) {

    return (
        <div>
            {children}
        </div>
    )
    
}