import LeftSection from "../../components/LeftSection";
import MainContainer from "../../components/Main/style";
import FormRegister from "../../components/RightSection/FormRegister";

const RegisterPage = () => {
  return (
    <>
      <MainContainer>
        <LeftSection />
        <FormRegister />
      </MainContainer>
    </>
  );
};

export default RegisterPage;
