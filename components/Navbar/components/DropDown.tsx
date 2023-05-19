import React from 'react'
import { BeneficioItem,DropDownItem } from '.';
import { VerMasLink } from './VerMasLink';
import { Menu,Transition } from '@headlessui/react'

export const DropDown=({label}:{label:string})=> 
{

  return (
    <Transition
      enter="transition-all duration-200"
      enterFrom="opacity-0 translate-y-[.5rem]"
      enterTo="opacity-1 translate-y-[1.8rem]"
      leave="transition-all duration-200"
      leaveFrom="opacity-1 translate-y-[.5rem]"
      leaveTo="opacity-0 translate-y-[1rem]"
    >
      <Menu.Items>
        <div
          className={`bg-[#fff] left-[-5rem] flex transition-all duration-[200ms] absolute top-0 px-[2rem] py-[1.5rem] rounded-[.5rem] border-[#bec3ca] border-[1px]`}
        >
          <section className="mr-[2.5rem] flex flex-col items-center justify-between">
            <div>
              <h1 className="text-[2rem] capitalize font-semibold mb-[1rem] w-[100%] text-left">
                {label}
              </h1>
              <section className="grid grid-cols-[repeat(2,minmax(314px,1fr))] gap-[1rem] mb-[1rem]">
                <DropDownItem
                  img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png"
                  title=" PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE"
                  date="10 de Mayo"
                  type={label}
                />
                <DropDownItem
                  img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png"
                  title=" PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE"
                  date="10 de Mayo"
                  type={label}
                />
                <DropDownItem
                  img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png"
                  title=" PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE"
                  date="10 de Mayo"
                  type={label}
                />
                <DropDownItem
                  img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png"
                  title=" PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE"
                  date="10 de Mayo"
                  type={label}
                />
                <DropDownItem
                  img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png"
                  title=" PREPARACIÓN PARA EL EXAMEN DE CERTIFICACIÓN ANTE OSCE"
                  date="10 de Mayo"
                  type={label}
                />
              </section>
            </div>
            <Menu.Item>{() => <VerMasLink label={label} />}</Menu.Item>
          </section>
          <section className="bg-fieldGrey px-[2.7rem] py-[1.8rem] flex flex-col gap-[1rem]">
            <h1 className="text-[1.8rem] capitalize font-medium">
              Nuestros Beneficios
            </h1>
            <BeneficioItem
              img="https://nuevapagina.s3.amazonaws.com/IconLiveDiploma.webp"
              color="text-red-500"
              label="Clases en Vivo"
            />
            <BeneficioItem
              img="https://nuevapagina.s3.amazonaws.com/IconMenu2.webp"
              color="text-yellow-500"
              label="Certificación Universitaria"
            />
            <BeneficioItem
              img="https://nuevapagina.s3.amazonaws.com/IconMenu3.webp"
              color="text-green-500"
              label="Garantía de Calidad"
            />
            <BeneficioItem
              img="https://nuevapagina.s3.amazonaws.com/IconMenu4.webp"
              color="text-blue-500"
              label="Plataforma Premium"
            />
            <p className="uppercase text-blue-500 block text-center">
              TODAS NUESTRAS CURSOS TIENES MAS SESIONES
            </p>
            <p className="block text-center">Te damos mas por tu dinero</p>
          </section>
        </div>
      </Menu.Items>
    </Transition>
  );
}

