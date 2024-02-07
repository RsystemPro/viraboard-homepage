import { ReactNode } from "react";
import myStyle from './style.module.css'

function PagesLayout({children}:{children: ReactNode}) {
    return ( 
        <div className={myStyle.pages_layout}>
            {children}
        </div>
     );
}

export default PagesLayout;