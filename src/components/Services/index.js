import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Notre pédagogie</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Adapté</ServicesH2>
          <ServicesP>
            Nos cours sont organisés en fonction de l'âge de votre enfant.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Boot Camp</ServicesH2>
          <ServicesP>
            Pour répondre à toutes les interrogations de votre enfant, nos cours
            collectifs sont organisés en groupe restreint.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Cours Perso</ServicesH2>
          <ServicesP>
            Il est également possible de réserver des cours personnels à
            distance ou à domicile.
          </ServicesP>
        </ServicesCard>
        
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
