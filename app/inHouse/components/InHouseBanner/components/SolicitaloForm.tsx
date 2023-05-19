import React, { useContext, useState } from 'react'
import { MyInput } from '@/components/MyInput/MyInput';
import MyInputFlexContainer from '@/components/MyInputFlexContainer/MyInputFlexContainer';
import { MyForm } from '@/components/MyForm/MyForm';
import solicitaloAqui from '@/context/solicitaloAqui';

interface values
{
  ingresatuNombre:string,
  ingresatuCorreo:string,
  ingresatuTelefono:string,
  entidad:string,
  cantidadDeAlumnos:string,
  nivelDelCurso:string,
  eligeElProgramaDeTuInteres:string
}

export const SolicitaloForm = () => {

  const[values,setValues]=useState<values>(
    {
      ingresatuNombre:'',
      ingresatuCorreo:'',
      ingresatuTelefono:'',
      entidad:'',
      cantidadDeAlumnos:'',
      nivelDelCurso:'',
      eligeElProgramaDeTuInteres:''
    }
  )

  const isOk:boolean = Object.values(values).every(entry=>entry!=='')

  const{setIsOpen}=useContext(solicitaloAqui)

  return (
    <MyForm
      label="Enviar"
      setIsOpen={setIsOpen}
      styles="bg-[#e86b2a]"
      isOk={isOk}
    >
      <MyInputFlexContainer>
        <MyInput
          label="Ingresa tu Nombre"
          onlyText
          value={values.ingresatuNombre}
          onChange={(e) =>
            setValues({ ...values, ingresatuNombre: e.target.value })
          }
        />
        <MyInput
          label="Ingresa tu Correo"
          type="email"
          value={values.ingresatuCorreo}
          onChange={(e) =>
            setValues({ ...values, ingresatuCorreo: e.target.value })
          }
        />
      </MyInputFlexContainer>
      <MyInputFlexContainer>
        <MyInput
          label="Ingresa tu Telefono"
          max={9}
          type="number"
          value={values.ingresatuTelefono}
          onChange={(e) =>
            setValues({ ...values, ingresatuTelefono: e.target.value })
          }
        />
        <MyInput
          name="Entidad"
          label="Entidad (opcional)"
          value={values.entidad}
          onChange={(e) => setValues({ ...values, entidad: e.target.value })}
        />
      </MyInputFlexContainer>
      <MyInputFlexContainer>
        <MyInput
          label="Cantidad De Alumnos"
          options={["llel", "loolol"]}
          value={values.cantidadDeAlumnos}
          onChange={(e) =>
            setValues({ ...values, cantidadDeAlumnos: e.target.value })
          }
        />
        <MyInput
          label="Nivel del Curso"
          options={["looooool", "fdfdfdf"]}
          value={values.nivelDelCurso}
          onChange={(e) =>
            setValues({ ...values, nivelDelCurso: e.target.value })
          }
        />
      </MyInputFlexContainer>
      <MyInputFlexContainer>
        <MyInput
          label="Elige el programa de tu interes"
          value={values.eligeElProgramaDeTuInteres}
          onChange={(e) =>
            setValues({ ...values, eligeElProgramaDeTuInteres: e.target.value })
          }
          options={["looooool", "fdfdfdf"]}
        />
      </MyInputFlexContainer>
    </MyForm>
  );
}


