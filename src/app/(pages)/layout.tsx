import Aside from "../components/aside";

export default function PagesLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={"gap-4 relative"}>
            <Aside/>
        {children}
        </main>
    );
}