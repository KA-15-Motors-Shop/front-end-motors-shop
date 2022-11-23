import {
  Section,
  DivTop,
  Titulo,
  Span,
  Div,
  TextArea,
  VerticalDiv,
  HorizontalDiv,
  Info,
  Container,
} from './style';
import iconX from '../../../assets/x.svg';
import Button from '../../button';
import Input from '../../input';
import { useState } from 'react';
import SpanAndInput from '../../span_and_input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { api } from '../../../service/index';

function ModalCreateAnnoucement({ toggle, fixedScreen }) {
  const [mapNumber, setMapNumber] = useState([1]);

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
      <Section onSubmit={handleSubmit(patchData)}>
        <DivTop>
          <Titulo>Criar anúncio</Titulo>

          <Button
            onClick={(arg) => {
              toggle(arg);
              fixedScreen(arg);
            }}
            icon={iconX}
            c={'gray'}
            h={24}
            w={24}
            p={0}
          />
        </DivTop>
        <Span>Tipo de Anuncio</Span>
        <Div>
          <Button
            w={228}
            mob_w={152}
            text="Venda"
            c="var(--whitefixed)"
            bg="var(--brand-1)"
          />
          <Button w={228} text="Leilão" bd_color={'var(--grey4)'} mob_w={152} />
        </Div>
        <Info>Informações do veiculo </Info>
        <Input
          w={466}
          h={48}
          pd={0}
          label="Título"
          text="produto"
          bd_color={'var(--grey7)'}
          p={'0 16px'}
          mob_w={314}
          register={register}
          name={'name'}
        />
        <HorizontalDiv>
          <VerticalDiv>
            <Input
              label="Ano"
              w={148}
              h={48}
              text="2018"
              bd_color={'var(--grey7)'}
              bd_width={1.5}
              p={'0 16px'}
              mob_w={152}
              register={register}
              name={'name'}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Input
              text="0"
              label="Quilometros"
              h={48}
              bd_color={'var(--grey7)'}
              bd_width={1.5}
              p={'0 16px'}
              mob_w={152}
              w={148}
              register={register}
              name={'name'}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Input
              label="Preço"
              text="100.000,00"
              h={48}
              bd_color={'var(--grey7)'}
              bd_width={1.5}
              p={'0 16px'}
              mob_w={314}
              w={148}
              register={register}
              name={'name'}
            />
          </VerticalDiv>
        </HorizontalDiv>
        <Span>Descrição</Span>
        <TextArea
          cols="30"
          rows="10"
          wrap="hard"
          placeholder=" lorem ipsolum dsjklaj klaslkd fklashkjha jkhd jhjka
          dhjkahkjdhklahdkash hyfdskj skdjhfjhsad hjsdhfkj h hkjsdhjkfh hsadfjk"
        ></TextArea>
        <Span>Tipo de Veiculo</Span>
        <Div>
          <Button
            w={228}
            text="Carro"
            c="var(--whitefixed)"
            bg="var(--brand-1)"
            mob_w={152}
          />
          <Button w={228} text=" Moto" bd_color="var(--grey4)" mob_w={152} />
        </Div>
        <Span>Imagem da capa</Span>
        <Input
          w={466}
          h={48}
          text={'https://image.com'}
          bd_color={'var(--grey7)'}
          p={'0 16px'}
          mob_w={314}
          register={register}
          name={'name'}
        />

        {/* {mapNumber.map((item, index) => (
          <SpanAndInput index={item} key={index} />
        ))} */}
        <Button
          text="Adicionar campo para imagem da galeria"
          w={315}
          h={38}
          bg={'var(--brand-4)'}
          c={'var(--brand-1)'}
          m={'24px 0 44px 0px'}
          onClick={() => {
            setMapNumber([...mapNumber, mapNumber.length + 1]);
            console.log(mapNumber);
          }}
        />
        <Div>
          <Button
            text="Excluir anúncio"
            h={48}
            w={262}
            bg="var(--grey6)"
            c="var(--grey2)"
            m="0 0 2px 0"
            mob_w={146}
          />
          <Button
            text="Salvar alterações"
            h={48}
            w={193}
            bg={'var(--brand-3)'}
            c={'var(--brand-4)'}
            mob_w={159}
          />
        </Div>
      </Section>
    </Container>
  );
}

export default ModalCreateAnnoucement;
