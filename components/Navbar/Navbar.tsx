import React from 'react'
import Image from 'next/image'
import {NavbarOptionList} from '.'
import { options } from './helpers/options';
import {NavMobMenu}  from '.';

export const Navbar = () => {
  return (
    <nav className="my-container py-[1rem] px-[.8rem] flex items-center relative">
      <Image
        src={"/DG-Logotipo_Color.webp"}
        width={180}
        height={44}
        alt="DG-logo"
        className="mr-[2rem]"
      />
      <NavbarOptionList options={options} />
      <NavMobMenu/>
    </nav>
  );
}

