import { MyBannerContainer } from '@/components/MyBannerContainer/MyBannerContainer'
import { MostrarCards, Stripe } from '@/components/Servicios'
import React from 'react'
import { AcercaDeNosotros, BeneficiosDeLa, InHouseBanner, InHouseCard,ListaDeProgramas, MyButtons } from '.'
import { MyBlock } from '@/components/MyBlock/MyBlock';
import { LastBlock } from './components/LastBlock/LastBlock';

export default function page() 
{
  return (
    <>
      <MyBannerContainer styles="bg-[#2000d1]">
        <InHouseBanner />
      </MyBannerContainer>
      <Stripe />
      <MostrarCards
        program="inHouse"
        header={{
          h2: "Elige el programa que deseas llevar",
          p: "Tenemos mas de 90 programas disponibles para ser dictados en tu Entidad / Empresa",
        }}
        footer=
        {
          <MyButtons/>
        }
      >
        {
          <>
            <InHouseCard
              img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2020/06/zexcel-gp-1.png"
              bg={`bg-[#000]`}
              title="leeeeeel"
            />
            <InHouseCard
              img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2020/06/zexcel-gp-1.png"
              bg={`bg-[#000]`}
              title="leeeeeel"
            />
            <InHouseCard
              img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2020/06/zexcel-gp-1.png"
              bg={`bg-[#000]`}
              title="leeeeeel"
            />
            <InHouseCard
              img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2020/06/zexcel-gp-1.png"
              bg={`bg-[#000]`}
              title="leeeeeel"
            />
            <InHouseCard
              img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2020/06/zexcel-gp-1.png"
              bg={`bg-[#000]`}
              title="leeeeeel"
            />
            <InHouseCard
              img="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2020/06/zexcel-gp-1.png"
              bg={`bg-[#000]`}
              title="leeeeeel"
            />
          </>
        }
      </MostrarCards>
      <ListaDeProgramas/>
      <AcercaDeNosotros/>
      <BeneficiosDeLa/>
      <LastBlock/>
    </>
  );
}

