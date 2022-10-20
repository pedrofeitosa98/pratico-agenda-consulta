import icon from "../../assets/agenda-icon.svg";
import name from "../../assets/agenda-name.svg";
import LogoStyle from "./style";

const Logo = () => {
  return (
    <LogoStyle>
      <img id="icon" src={icon} alt="" />
      <img id="name" src={name} alt="" />
    </LogoStyle>
  );
};

export default Logo;
