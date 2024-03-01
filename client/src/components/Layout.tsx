import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps ) => {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    )
}


export default Layout;