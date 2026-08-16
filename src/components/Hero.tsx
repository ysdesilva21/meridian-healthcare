import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import heroBG from '../assets/HeroBG.png'
import calendar from '../assets/icon/calendar.svg'
import trustImgs from '../assets/trustImgs.svg'
import star from '../assets/icon/star.svg'
import star2 from '../assets/icon/star2.svg'
import heroMBG from '../assets/HeroMBG.svg'
import trustMImgs from '../assets/trustMImgs.svg'
import Navbar from './Navbar';

export default function Hero() {
  return(
    <>
    <Navbar/>
    {/* Hero Desktop */}
    <section className='hidden md:block relative max-w-175 xl:max-w-300 mx-auto overflow-hidden mb-32'>
        <div className='w-full h-full'>
            <img src={heroBG} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
            <div className='grid h-full w-full grid-cols-2'>

              {/* Left */}
              <div className='flex flex-col justify-center px-10 md:px-8 xl:px-10'>
                    <div>
                        <h1 className="text-3xl xl:text-5xl text-inverse font-bold mb-3">Find the right <br/>doctor in minutes, <br/>not hours.</h1>
                        <h2 className="hidden xl:block text-2xl text-neutral-200 font-medium">Compare verified specialists, check insurance <br/>compatibility, and book appointments online <br/>without phone calls.</h2>
                        <h2 className='block xl:hidden text-md text-neutral-200 font-medium'>Compare verified specialists, <br/>check insurance compatibility, and <br/>book appointments online without phone calls. </h2>
                    </div>
                    <div className='flex items-center self-start gap-3 xl:gap-3.75 mt-8 xl:mt-11 mb-8 xl:mb-11'>
                          <button type='button'className='button flex items-center justify-center'>Find Your Doctor</button>
                          <button 
                            type='button'
                            aria-label='Book Now'
                            className='flex h-10 w-10 xl:h-11 xl:w-11 items-center justify-center rounded-full bg-surface'
                          >
                                  <img src={calendar} className='h-5 w-5 xl:h-6.25 xl:w-6.25'/>
                          </button>
                    </div>
                    <div className='flex self-start gap-0.5 xl:gap-5 text-primary text-xs xl:text-[14px]'>
                      <p>5000+ appointments</p>
                      <p>Verified providers</p>
                      <p>Isurance supported</p>
                    </div>
              </div>

              {/* Right */}
              <div className='self-end justify-self-end mb-4 mr-4 xl:mb-5 xl:mr-5'>
                <div className='flex items-center justify-center rounded-[15px] bg-neutral-100 px-2 py-2 xl:px-3'>
                  <div>
                    <img src={trustImgs} alt="" />
                  </div>
                  <div>
                      <div className='flex items-center'>
                        <div className='flex items-center self-start'>
                          <img src={star} alt="" />
                          <p className='text-primary text-base xl:text-[20px] ml-1'>4.8/5</p>
                        </div>
                        <p className='text-secondary ml-1 font-semibold text-xs xl:text-[14px]'>AVG</p>
                      </div>
                      <p className='text-xs xl:text-[14px]'>Rating from 120,000+ <br/>verified patients</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
    </section>

    {/* Mobile Section */}

    {/* Hero */}
    <section className='relative md:hidden flex flex-col min-h-screen justify-center'>
        <div className='absolute inset-0 z-0 w-full'>
            <img src={heroMBG} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='relative z-10 flex w-full flex-col justify-center px-10 items-center pt-28 pb-16'>
            <div>
                <h1 className="text-center text-4xl text-inverse font-bold leading-14 mb-8">Find the right <br/>doctor in minutes, <br/>not hours.</h1>
                <h2 className='text-center text-[16px] text-neutral-200 font-medium leading-6'>Compare verified specialists, check <br/>insurance compatibility, and book <br/>appointments online without phone <br/>calls. </h2>
            </div>
            <div className='flex items-center justify-center gap-3 mt-10 mb-10'>
                <button type='button'className='button flex items-center justify-center'>Find Your Doctor</button>
                <button 
                  type='button'
                  aria-label='Book Now'
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-surface'
                >
                    <img src={calendar} className='h-5 w-5 xl:h-6.25 xl:w-6.25'/>
                </button>
            </div>
            <div className='flex items-center justify-center gap-3.75 text-primary text-[10px]'>
                <p>5000+ appointments</p>
                <p>Verified providers</p>
                <p>Isurance supported</p>
            </div>
        </div>

    </section>
     <div className='md:hidden bg-neutral-100'>
          <div className='flex items-center justify-center gap-5 bg-neutral-100 px-2 py-3 xl:px-3'>
            <div className='h-10'>
                <img src={trustMImgs} alt="" />
            </div>
            <div>
              <div className='flex items-center'>
                  <div className='flex items-center'>
                    <img src={star2} alt="" />
                    <p className='text-primary text-[14px] ml-1'>4.8/5</p>
                  </div>
                  <p className='text-secondary ml-1 mt-1 font-semibold text-[10px]'>AVG</p>
              </div>
              <p className='text-[10px]'>Rating from 120,000+ verified patients</p>
            </div>
          </div>
        </div>
    </>
    
  )
}
