import Logo from "../../components/Logo";
import cliente from "../../assets/how-works-removebg-preview.png";
import LeftSectionStyle from "./style";

const LeftSection = () => {
  return (
    <LeftSectionStyle className="fadeInLeft">
      <Logo />
      <div className="text-div title2 color-white">
        <table>
          <tr>
            <td className="text-right text-bold">1000+</td>
            <td>clínicas</td>
          </tr>
          <tr>
            <td className="text-righ text-bold">12.000+</td>
            <td>laboratórios</td>
          </tr>
          <tr>
            <td className="text-right text-bold">500+</td>
            <td>farmácias</td>
          </tr>
        </table>
        <p>
          e com descontos pra <span className="text-bold">você!</span>
        </p>
      </div>
      <img id="cliente" src={cliente} alt="" />
    </LeftSectionStyle>
  );
};

export default LeftSection;
