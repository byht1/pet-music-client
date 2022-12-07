import { nav } from "helper";
import { FooterBox, FooterLink } from "./Footer.styled";
import { v4 as uuidv4 } from "uuid";

export const Footer = () => {
  return (
    <FooterBox>
      {nav.map((x) => (
        <FooterLink key={uuidv4()} to={x.path}>
          {x.label}
        </FooterLink>
      ))}
    </FooterBox>
  );
};
