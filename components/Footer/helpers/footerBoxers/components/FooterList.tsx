import React from 'react'


export const FooterList = ({list}:{list:Array<string>}) => 
{
  return (
    <ul className='flex flex-col'>
      {
        list.map((lis,pos)=>
        (
          <li key={pos}>{lis}</li>
        ))
      }
    </ul>
  )
}
