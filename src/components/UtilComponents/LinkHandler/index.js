import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isExternalUrl } from "../../../utils";
import { Container, LinkAnchor, Title } from "./styles";

const LinkHandler = ({
  url,
  target,
  title,
  children,
  childrenPosition,
  textColor,
  width,
  setHasClicked,
}) => {
  const [urlLink] = useState(url || "#");
  const [targetLink] = useState(target || "_self");
  const [titleLink] = useState(title || "");

  return (
    <Container
      childrenPosition={childrenPosition}
      textColor={textColor}
      width={width}
    >
      {isExternalUrl(url) ? (
        <LinkAnchor href={urlLink} target={targetLink}>
          {titleLink && <Title>{titleLink}</Title>}
          {children}
        </LinkAnchor>
      ) : (
        <Link
          to={urlLink}
          target={targetLink}
          onClick={(e) => {
            setHasClicked && setHasClicked(true);
          }}
        >
          {titleLink && <Title>{titleLink}</Title>}
          {children}
        </Link>
      )}
    </Container>
  );
};

export default LinkHandler;
