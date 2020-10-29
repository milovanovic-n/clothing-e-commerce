import React from "react";
import { withRouter } from "react-router-dom";

import { MenuItemContainer, ImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from "./menu-item.styles";

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <ImageContainer imageUrl={imageUrl} className="background-image"/>  
    <ContentContainer className="content">
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <SubtitleContainer>SHOP NOW</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);