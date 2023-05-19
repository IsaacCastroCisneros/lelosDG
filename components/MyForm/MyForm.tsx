'use client'

import React, { ReactNode} from 'react'

interface props 
{
  styles: string;
  label: string;
  children: ReactNode;
  isOk:boolean,
  setIsOpen:(value:boolean)=>void
}

export const MyForm = (props:props) => 
{
  const { styles, label, children, isOk, setIsOpen } = props;

  return (
    <form
      className="flex-1 flex justify-between flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        setIsOpen(false)
      }}
    >
      <div>{children}</div>
      <button
        className={`px-[16px] py-[12px] transition-all duration-200 w-[100%] text-[#fff] rounded-[.5rem] font-bold capitalize ${styles} ${
          isOk ? "" : "brightness-[70%] pointer-events-none"
        }`}
      >
        {label}
      </button>
    </form>
  );
}
