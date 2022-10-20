import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/style";
import { Input } from "../../Input/style";
import Ruler from "../../Ruler";
import RightContainer from "../style";

const FormLogin = () => {
  const navigate = useNavigate();
  return (
    <RightContainer className="fadeIn">
      <h1 className="title1">Bem-vindo a Agenda Consulta!</h1>
      <form action="">
        <div>
          <label htmlFor="">E-mail ou telefone</label>
          <Input type="text" placeholder="Digite seu login" />
        </div>

        <div>
          <label htmlFor="">Senha</label>
          <Input type="password" placeholder="******" />
        </div>

        <div className="request-section-login">
          <a href="/">
            <p className="title4 color-black-1">Esqueceu sua senha?</p>
          </a>
          <Button filled className="title4 text-bold">
            Fazer login
          </Button>
        </div>
      </form>
      <Ruler>ou</Ruler>
      <div className="bottom-section">
        <p className="title3">
          Crie uma conta e faça parte de uma revolução da saúde.
        </p>
        <Button
          filled={false}
          className="title4 text-bold"
          onClick={() => navigate("/register")}
        >
          Criar uma conta
        </Button>
      </div>
    </RightContainer>
  );
};

export default FormLogin;
