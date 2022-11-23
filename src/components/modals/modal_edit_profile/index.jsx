import Button from '../../button';
import {
  DivTop,
  Section,
  Span,
  Titulo,
  Div,
  Container,
  WrapperForm,
} from './style';
import iconX from '../../../assets/x.svg';
import Input from '../../input/index';
import { useForm } from 'react-hook-form';
import { UserUpdateProvider } from '../../../provider/update';
import { UseLoginProvider } from '../../../provider/login';

function ModalEditProfile({ editToggle, fixedScreen }) {
  const { handleUpdate, user } = UserUpdateProvider();
  const { handleSubmit, register } = useForm({});

  const submitUp = (data) => {
    handleUpdate(data);
  };

  return (
    <Container>
      <Section>
        <DivTop>
          <Titulo>Editar perfil</Titulo>
          <Button
            onClick={(arg) => {
              editToggle(arg);
              fixedScreen(arg);
            }}
            icon={iconX}
            c={'gray'}
            h={24}
            w={24}
            p={0}
          />
        </DivTop>
        <Titulo>Informações pessoais</Titulo>
        <WrapperForm>
          <form onSubmit={handleSubmit(submitUp)}>
            <Input
              w="100%"
              pd={24}
              h={48}
              label="Nome"
              dd="none"
              c="#000000"
              bd_color={'var(--grey7)'}
              p={'0 16px'}
              mob_w={314}
              register={register}
              name={'name'}
              placeholder="Nome Completo"
            />
            <Input
              w="100%"
              h={48}
              c="#000000"
              label="Email"
              dd="none"
              type="email"
              bd_color={'var(--grey7)'}
              p={'0 16px'}
              mob_w={314}
              register={register}
              name={'email'}
              placeholder="Email"
            />
            <Input
              w="100%"
              h={48}
              label="Cpf"
              c="#000000"
              dd="none"
              bd_color={'var(--grey7)'}
              p={'0 16px'}
              mob_w={314}
              register={register}
              name={'cpf'}
              placeholder="900.880.090-00"
            />
            <Input
              w="100%"
              h={48}
              label="Celular"
              type="tel"
              dd="none"
              c="#000000"
              bd_color={'var(--grey7)'}
              p={'0 16px'}
              mob_w={314}
              register={register}
              name={'celular'}
              placeholder="(084) 99191-9292"
            />
            <Input
              w="100%"
              h={48}
              label="Data de Nascimento"
              type={'date'}
              c="#000000"
              dd="none"
              bd_color={'var(--grey7)'}
              p={'0 16px'}
              mob_w={314}
              register={register}
              name={'data de nascimento'}
              placeholder="Data de Nascimento"
            />
            <Input
              w="100%"
              h={80}
              label="Descrição"
              c="#000000"
              dd="none"
              bd_color={'var(--grey7)'}
              p={'0 16px'}
              mob_w={314}
              register={register}
              name={'description'}
              placeholder="opkaspodkaopsdkaopdas"
            />
            <Div>
              <Button
                text="Cancelar"
                h={48}
                w={126}
                bg="var(--grey6)"
                c="#000000"
                m="0 0 2px 0"
                mob_w={113}
              />
              <Button
                type="submit"
                text="Salvar alterações"
                h={48}
                w={193}
                bg={'var(--brand-1)'}
                c={'var(--whitefixed)'}
                mob_w={192}
                m={'0 0 0 10px'}
              />
            </Div>
          </form>
        </WrapperForm>
      </Section>
    </Container>
  );
}

export default ModalEditProfile;
