import Button from '../../button';
import {
  DivTop,
  HorizontalDiv,
  Form,
  Titulo,
  VerticalDiv,
  Div,
  Container,
} from './style';
import iconX from '../../../assets/x.svg';
import Input from '../../input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { api } from '../../../service/index';

function ModalEditAddress({ editProfileToggle, fixedScreen }) {
  const schema = yup.object().shape({
    cep: yup.string().required('Cep obrigatório'),
    estate: yup.string().required('Insira o estado'),
    city: yup.string().required('Insira a cidade'),
    street: yup.string().required('Insira a rua'),
    number: yup.string().required('Insira o numero'),
    complement: yup.string().required('Insira o complemento'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const patchData = (data) => {
    api
      .post('/users', data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(patchData)}>
        <DivTop>
          <Titulo>Editar endereço</Titulo>
          <Button
            onClick={(arg) => {
              editProfileToggle(arg);
              fixedScreen(arg);
            }}
            icon={iconX}
            h={24}
            w={24}
            p={0}
          />
        </DivTop>
        <Titulo>Informações pessoais</Titulo>
        <Input
          name="cep"
          label="CEP"
          w={466}
          h={48}
          text="898888-888"
          c="var(--grey3)"
          bd_color={'var(--grey7)'}
          p={'0 16px'}
          mob_w={314}
          register={register}
          dd="none"
          error={errors.cep?.message}
        />
        <HorizontalDiv>
          <VerticalDiv>
            <Input
              name="estate"
              label="Estado"
              w={228}
              h={48}
              text="Paraná"
              c="var(--grey3)"
              bd_color={'var(--grey7)'}
              p={'0 16px'}
              mob_w={152}
              register={register}
              dd="none"
              error={errors.estate?.message}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Input
              label="Cidade"
              name="city"
              w={228}
              h={48}
              text="Curitiba"
              c="var(--grey3)"
              bd_color={'var(--grey7)'}
              p={'0 16px'}
              mob_w={152}
              dd="none"
              register={register}
              error={errors.city?.message}
            />
          </VerticalDiv>
        </HorizontalDiv>
        <Input
          label="Rua"
          name="street"
          w={466}
          h={48}
          text="Rua do Paraná"
          c="var(--grey3)"
          bd_color={'var(--grey7)'}
          p={'0 16px'}
          mob_w={314}
          dd="none"
          register={register}
          error={errors.street?.message}
        />
        <HorizontalDiv>
          <VerticalDiv>
            <Input
              label="Número"
              name="number"
              w={228}
              h={48}
              text="1029"
              type={'number'}
              c="var(--grey3)"
              bd_color={'var(--grey7)'}
              p={'0 16px'}
              mob_w={152}
              register={register}
              dd="none"
              error={errors.number?.message}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Input
              label="Complemento"
              name="complement"
              w={228}
              h={48}
              text="Apart 12"
              c="var(--grey3)"
              bd_color={'var(--grey7)'}
              dd="none"
              p={'0 16px'}
              mob_w={152}
              register={register}
              error={errors.complement?.message}
            />
          </VerticalDiv>
        </HorizontalDiv>
        <Div>
          <Button
            text="Cancelar"
            h={48}
            w={126}
            bg="var(--grey6)"
            c="var(--grey2)"
            m="0 0 2px 0"
            mob_w={113}
          />
          <Button
            text="Salvar alterações"
            h={48}
            w={193}
            bg={'var(--brand-1)'}
            c={'var(--whitefixed)'}
            mob_w={192}
            m={'0 0 0 10px'}
          />
        </Div>
      </Form>
    </Container>
  );
}

export default ModalEditAddress;
