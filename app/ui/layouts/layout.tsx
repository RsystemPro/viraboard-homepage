interface props {
    children: React.ReactNode
}

function Layout({children}: props) {

    return ( 
        <div className="bg-violet-400 p-5 rounded-lg border-violet-700 border-4 font-bold text-center gap-2 flex flex-col">
            {children}
        </div>
     );
}

export default Layout;