import LeftSection from "../../components/LeftSection";
import MainContainer from "../../components/Main/style";
import FormLogin from "../../components/RightSection/FormLogin";

const LoginPage = () => {
  return (
    <MainContainer>
      <LeftSection />
      <FormLogin />
    </MainContainer>
  );
};

export default LoginPage;
