import Footer from '../../components/footer/index';
import Navbar from '../../components/navbar/index';
import {
  ContainerLogin,
  Wrapper,
  Cont,
  Title,
  InputWrapper,
  SignInBtn,
  EnterBtn,
  Question,
  WrTitle,
} from './styles';

function Login() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <ContainerLogin>
          <WrTitle>
            <Title>
              <h1>Login</h1>
            </Title>
          </WrTitle>

          <Cont>
            <InputWrapper>
              <span>Usuario</span>
              <input placeholder="Digitar usuário"></input>
            </InputWrapper>
            <InputWrapper>
              <span>Senha</span>
              <input placeholder="Digitar senha"></input>
              <div>
                <span>Esqueci minha senha</span>
              </div>
            </InputWrapper>

            <EnterBtn>Entrar</EnterBtn>

            <Question>
              <span>Ainda não possui conta?</span>
            </Question>

            <SignInBtn>Cadastrar</SignInBtn>
          </Cont>
        </ContainerLogin>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Login;
