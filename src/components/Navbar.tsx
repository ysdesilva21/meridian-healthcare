import React, { useState } from 'react';
import LOGO from '../assets/LOGO.svg'
import LOGO2 from '../assets/LOGO2.svg'
import menuIcon from '../assets/icon/menu.svg'
import menuClose from '../assets/icon/close.svg'
export default function Navbar() {
    const navLinks = [
        {
            label:"Why Meridian",
            link:"#"
        },
        {
            label:"How It Works",
            link:"#"
        },
        {
            label:"Specialties",
            link:"#"
        },
        {
            label:"Patient Reviews",
            link:"#"
        },
        {
            label:"FAQ",
            link:"#"
        },
        {
            label:"Book Appointment",
            link:"#"
        }
    ]

    const[open,setOpen] = useState(false)

    const navOpen = () => {
        setOpen(true)
    }

    const navClose = () => {
        setOpen(false)
    }


  return (
    <section >
        <nav className="hidden lg:block w-full z-1000 pb-16">
        {/*Desktop Navbar*/}
            <div className="hidden lg:flex max-w-7xl mx-auto px-6 py-4  items-center justify-between">
                {/* Logo */}
                <div className="flex items-center ">
                <img src={LOGO} alt="" />
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                {
                    navLinks.map((navItem) => (
                        <a
                            href={navItem.link}
                            className="text-primary"
                        >
                            {navItem.label}
                        </a>
                    ))
                }
                </div>

                {/* CTA Button */}
                <button className="button">
                Book Now
                </button>
            </div>
        </nav>
        {/* Tablet */}
        <div className='hidden md:flex lg:hidden max-w-5xl mx-auto px-6 py-4 items.center justify-between pb-16'>
            {/* Logo */}
            <img
                src={LOGO}
                alt="Meridian"
                className='w-32'
            />
            <div className='flex items-center gap-5'>
                <a href="#" className="text-primary text-sm">
                    Why Meridian
                </a>

                <a href="#" className="text-primary text-sm">
                    How It Works
                </a>

                <a href="#" className="text-primary text-sm">
                    Specialties
                </a>

                <a href="#" className="text-primary text-sm">
                    FAQ
                </a>
            </div>
            {/* CTA */}
            <button className="button text-sm whitespace-nowrap">
                Book Now
            </button>
        </div>
          {/* Mobile Nav */}
        <div className="absolute left-0 top-0 z-9999 w-full md:hidden">
                <img 
                    src={menuIcon} 
                    alt="Navigation Open" 
                    className="neutral-50 p-5 inline-block"
                    onClick={() => navOpen()}   
                />
                <div className={`fixed z-1000 inset-0 min-h-screen bg-surface 
                    ${open 
                        ? 'translate-x-0'
                        : 'translate-x-full'}`}>
                    {open && (
                        <div>
                            <button 
                                type="button"
                                onClick={() => navClose()}
                                className="absolute  p-3"

                            >
                                <img 
                                    src={menuClose}
                                    alt="Close navigation"
                                    className=""
                                />
                            </button>
                            <div className="flex min-h-screen flex-col items-center justify-center">
                                    <img 
                                        src={LOGO2} 
                                        alt="Meridian" 
                                        className="mb-12"
                                    />
                                    {/* Nav Links */}
                                    <div className="flex flex-col items-center justify-center gap-8">
                                    {
                                        navLinks.map((navItem) => (
                                            <a
                                                key={navItem.label}
                                                href={navItem.link}
                                                onClick={navClose}
                                                className="text-primary text-[16px]"
                                            >
                                                {navItem.label}
                                            </a>
                                        ))
                                    }
                                    </div>
                            </div>  
                        </div>
                    )}
                </div>
            </div>
    </section>
    
  );
}
