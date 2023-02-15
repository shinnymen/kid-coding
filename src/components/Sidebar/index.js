import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarBtnWrap,
  SidebarRoute,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Découvrir" onClick={toggle}>
            Atelier Collectif
          </SidebarLink>
          <SidebarLink to="Graphisme" onClick={toggle}>
            Cours de Graphisme
          </SidebarLink>
          <SidebarLink to="CoursIndividuel" onClick={toggle}>
            Cours Individuel
          </SidebarLink>
          <SidebarLink to="CoursdeVacances" onClick={toggle}>
            Cours de Vacances
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Nous rejoindre
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="signup">S'inscrire</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
