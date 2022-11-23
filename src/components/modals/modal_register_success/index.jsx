import Button from '../../button';
import {
  DivBottom,
  DivTop,
  H3,
  Section,
  SpanBottom,
  SpanTop,
  Container,
} from './style';
import iconX from '../../../assets/x.svg';
import { useNavigate } from 'react-router-dom';

function ModalRegisterSuccess({ editToggle }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Section>
        <DivTop>
          <SpanTop>Sucesso!</SpanTop>
          <Button
            icon={iconX}
            c={'var(--grey4)'}
            h={24}
            w={24}
            p={0}
            onClick={editToggle}
          />
        </DivTop>
        <DivBottom>
          <H3>Sua conta foi criada com sucesso!</H3>
          <SpanBottom>
            Agora Você poderá ver seus negócios crescendo em grande escala
          </SpanBottom>
          <Button
            onClick={() => navigate('/login')}
            text={'Ir para o login'}
            bg={'var(--brand-1)'}
            c={'var(--whitefixed)'}
            w={132}
            h={38}
          />
        </DivBottom>
      </Section>
    </Container>
  );
}

export default ModalRegisterSuccess;
