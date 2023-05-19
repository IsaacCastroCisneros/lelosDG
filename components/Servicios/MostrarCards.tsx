"use client"

import { ReactNode, useState } from "react"
import program from "@/types/program"
import { CardsGlo } from "../Cards"
import { Categoria } from "@/app/components/Categoria"
import Link from "next/link"

interface props
{
  program:program,
  children?:ReactNode
  programSelector?:boolean
  header?:{h2:string,p:string}
  footer?:ReactNode
}

export const MostrarCards = (props:props) => 
{
    const {
      program,
      programSelector = false,
      children,
      header = {
        h2: "¿En que curso deseas capacitarte?",
        p: "Mas de 50,000 alumnos capacitados",
      },
      footer
    } = props;

    const [myProgram, setMyProgram] = useState<program>(program);  
   
    return (
      <section>
        <article className="container mx-auto flex flex-col items-center">
          {!programSelector && (
            <>
              <h2 className="text-center font-bold text-3xl mt-10">
                {header.h2}
              </h2>
              <p className="text-center font-bold">{header.p}</p>
            </>
          )}
          {programSelector && (
            <>
              <h2 className="text-center font-bold text-3xl mt-16 mb-[2rem]">
                Categoria de Programas
              </h2>
              <Categoria myProgram={myProgram} setMyProgram={setMyProgram} />
            </>
          )}
          <div className="grid w-[100%] grid-cols-[repeat(auto-fill,minmax(17.3rem,1fr))] mt-10 gap-10">
            {!children && (
              <>
                <CardsGlo />
                <CardsGlo />
                <CardsGlo />
                <CardsGlo />
                <CardsGlo />
                <CardsGlo />
                <CardsGlo />
              </>
            )}
            {children && children}
          </div>
          {myProgram !== "proximos inicios" && programSelector && (
            <Link
              href={`/${myProgram}`}
              className="bg-myBlue mt-[2rem] mx-auto my-0 transition-all duration-200 hover:bg-myBlueDark text-[#fff] rounded-[.5rem] font-bold py-[.6rem] px-[.8rem]"
            >
              {" "}
              Ver más <span className="capitalize">{myProgram}</span>
            </Link>
          )}
          {
            footer
          }
        </article>
      </section>
    );
}