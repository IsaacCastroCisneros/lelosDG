"use client"

import React, { useEffect, useState } from 'react'
import { MobMenu } from './MobMenu';

export const NavMobMenu = () => 
{
  const[show,setShow]=useState<boolean>(false)  

  useEffect(()=>
  {
    const body = document.querySelector('body') as HTMLElement

    if(show)
    {
      body.style.overflow='hidden'
      return
    }

    body.style.overflow='auto'
  },[show])

  return (
    <>
      <button
        className="ml-[auto] hidden nav-bar:block"
        onClick={() => setShow(true)}
      >
        <i className="fi fi-br-menu-burger text-[1.5rem]"></i>
      </button>
      <MobMenu setShow={setShow} show={show} />
      <div
        className={`fixed z-[9999] transition-all duration-200 top-0 left-0 w-[100%] h-[100%] bg-black ${
          show
            ? "opacity-[.8] pointer-events-auto"
            : "opacity-[0] pointer-events-none"
        }`}
        onClick={() => setShow(false)}
      ></div>
    </>
  );
}

