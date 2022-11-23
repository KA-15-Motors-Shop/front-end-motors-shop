import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from '../InputText';
import InputD from '../input';
import Button from '../button/index';
import {
  ContainerPage,
  ContainerTitle,
  SideBySide,
  AccountBtn,
  Wrap,
} from './style';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { api } from '../../service/index';
import { useNavigate } from 'react-router-dom';
import ModalRegisterSuccess from '../modals/modal_register_success';

const FormRegister = () => {
  // const { register, handleSubmit, setValue } = useForm();
  const [typeUser, typeSetUser] = useState('Comprador');
  const [open, SetOpen] = useState(false);
  console.log(typeUser);
  const navigate = useNavigate();

  // const { createUser } = UseLoginProvider();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Nome obrigatório')
      .matches(/^[ a-zA-Z á]*$/, 'Deve conter apenas letras'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    cpf: yup.string().required('Cpf obrigatório'),
    birth_date: yup.string().required('Data de nascimento obrigatória'),

    password: yup
      .string()
      .required('Senha obrigatória')
      .matches(
        /(^[0-9a-z]{8,}$)/,
        'Deve conter ao menos 8 caracteres e um número'
      ),
    confirmPassword: yup
      .string()
      .required('Confirmação obrigatória')
      .oneOf([yup.ref('password'), null], 'Senhas diferentes'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onBlurCep(ev) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');
    console.log(cep);

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue('street', data.logradouro);
        setValue('city', data.localidade);
        setValue('state', data.uf);
        setValue('additional', data.bairro);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  function handleInput(el) {
    console.log(el.target.value);
  }

  const createUser = async (data) => {
    console.log(data);
    data.account_type = typeUser;
    delete data.confirmPassword;
    const response = await api
      .post(`/users`, data)
      .then((response) => {
        console.log(response);
        // navigate('/login');
      })
      .catch((err) => {
        toast.error('Email ou senha inválidos');
        console.log(err);
      });
  };

  const editToggle = () => {
    SetOpen(!open);
  };

  return (
    <ContainerPage>
      <ContainerTitle>
        <h4>Cadastro</h4>
        <span>Informações pessoais</span>
      </ContainerTitle>

      <form onSubmit={handleSubmit(createUser)}>
        <Input
          label="Nome"
          register={register}
          name={'name'}
          error={errors.name?.message}
          placeholder="Ex: Samuel Leão"
          autoComplete="on"
        />
        <Input
          label="E-mail"
          register={register}
          name={'email'}
          error={errors.email?.message}
          placeholder="Ex: samuel@kenzie.com.br"
          type="email"
          autoComplete="on"
        />
        <Input
          label="CPF"
          register={register}
          name={'cpf'}
          error={errors.cpf?.message}
          placeholder="000.000.000.00"
          autoComplete="on"
        />
        <Input
          label="Celular"
          register={register}
          name={'phone'}
          // error={errors.phone?.message}
          placeholder="(DDD) 90000-0000"
          autoComplete="on"
        />
        <Input
          label="Data de Nascimento"
          register={register}
          name={'birth_date'}
          error={errors.birth_date?.message}
          placeholder="00/00/00"
          autoComplete="on"
          type={'date'}
          // onChange={() => console.log('')}
        />
        <Input
          label="Descrição"
          register={register}
          name={'description'}
          placeholder="Digitar descrição"
          autoComplete="on"
        />
        <Input
          label="CEP"
          register={register}
          name={'zipcode'}
          error={errors.cep?.message}
          placeholder="Ex: 00000-000"
          onBlur={onBlurCep}
          autoComplete="on"
        />
        <SideBySide>
          <Input
            label="Estado"
            register={register}
            name={'state'}
            error={errors.uf?.message}
            placeholder="Digitar Estado"
            autoComplete="on"
          />
          <Input
            label="Cidade"
            register={register}
            name={'city'}
            error={errors.city?.message}
            placeholder="Digitar cidade"
            autoComplete="on"
          />
        </SideBySide>
        <Input
          label="Rua"
          register={register}
          name={'street'}
          error={errors.street?.message}
          placeholder="Ex: Rua das Palmeiras"
          autoComplete="on"
        />
        <SideBySide>
          <Input
            label="Numero"
            register={register}
            name={'number'}
            placeholder="Digitar número"
            // autoComplete="on"
          />
          <Input
            label="Complemento"
            register={register}
            name={'additional'}
            error={errors.additional?.message}
            placeholder="Ex: apart 307"
            autoComplete="on"
          />
        </SideBySide>

        <AccountBtn>
          <h1>Tipo de conta</h1>
          <Wrap>
            <InputD
              register={register}
              name={'Comprador'}
              // error={errors.password?.message}
              dd="none"
              type="button"
              autoComplete="off"
              value={'Comprador'}
              c={typeUser === 'Anunciante' ? 'black' : 'white'}
              bg={typeUser === 'Comprador' ? '#4529E6' : 'transparent'}
              w={'100%'}
              d={'none'}
              onClick={(event) => typeSetUser('Comprador')}
              bd_color={'#ADB5BD'}
            />

            <InputD
              register={register}
              name={'Anunciante'}
              dd="none"
              // error={errors.password?.message}
              type="button"
              value={'Anunciante'}
              onClick={(event) => typeSetUser('Anunciante')}
              autoComplete="off"
              bg={typeUser === 'Anunciante' ? '#4529E6' : 'transparent'}
              c={typeUser === 'Comprador' ? 'black' : 'white'}
              bd_color={'#ADB5BD'}
              w={'100%'}
              d={'none'}
            />
          </Wrap>
        </AccountBtn>

        <Input
          label="Senha"
          register={register}
          name={'password'}
          error={errors.password?.message}
          placeholder="Digite uma senha aqui"
          type="password"
          autoComplete="off"
        />
        <Input
          label="Confirme sua senha"
          register={register}
          name={'confirmPassword'}
          error={errors.confirmPassword?.message}
          placeholder="Confirme sua senha aqui"
          type="password"
          autoComplete="on"
        />
        <Button
          type="submit"
          fontwe={'500'}
          text="Finalizar cadastro"
          c={'#ffffff'}
          bg={'#4529E6'}
          font={'16px'}
          w={'100%'}
          onClick={editToggle}
        />
        {open && <ModalRegisterSuccess editToggle={editToggle} />}
      </form>
    </ContainerPage>
  );
};

export default FormRegister;
