import React from 'react'
import { Footer, Header } from '../components'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <div className='min-h-screen w-full bg-aurora relative overflow-hidden'>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
            <div className="relative z-10">
                <Header />
                <Outlet />
                <Footer />
                 </div>

        </div>
    )
}

export default Layout
