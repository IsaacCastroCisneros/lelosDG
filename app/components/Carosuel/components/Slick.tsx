import { ReactNode } from "react";

export const Slick=({bg,children}:{bg:string,children?:ReactNode})=>
{
    return (
      <section
        className="w-[100%] h-[448px] block"

      >
       {children}
      </section>
    );
}