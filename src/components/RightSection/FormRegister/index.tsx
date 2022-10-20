import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/style";
import { Input } from "../../Input/style";
import Ruler from "../../Ruler";
import RightContainer from "../style";

const FormRegister = () => {
  const navigate = useNavigate();
  return (
    <>
      <RightContainer className="fadeIn">
        <h1 className="title1">Bem-vindo a Agenda Consulta!</h1>
        <form action="">
          <div>
            <label htmlFor="">Nome completo</label>
            <Input type="text" placeholder="Digite seu nome" />
          </div>

          <div>
            <label htmlFor="">CPF</label>
            <Input type="text" placeholder="000.000.000-00" />
          </div>

          <div>
            <label htmlFor="">E-mail</label>
            <Input type="text" placeholder="email@mail.com" />
          </div>

          <div>
            <label htmlFor="">WhatsApp</label>
            <Input type="text" placeholder="(00) 9 00000000)" />
          </div>

          <div>
            <label htmlFor="">Senha</label>
            <Input type="password" placeholder="******" />
          </div>

          <div>
            <label htmlFor="">Repetir a senha</label>
            <Input type="password" placeholder="******" />
          </div>

          <div className="request-section-register">
            <Button filled className="title4 text-bold">
              Criar nova conta
            </Button>
          </div>
        </form>
        <Ruler>ou</Ruler>
        <div className="bottom-section">
          <p className="title3">Já possui cadastro?</p>
          <Button
            filled={false}
            className="title4 text-bold"
            onClick={() => navigate("/")}
          >
            Fazer login
          </Button>
        </div>
      </RightContainer>
    </>
  );
};

export default FormRegister;
