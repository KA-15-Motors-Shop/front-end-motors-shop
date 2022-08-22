import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import InputPassword from '../InputPassword';
import Button from '../button/button';

import { ContainerPage, ContainerTitle, SideBySide, AccountBtn } from './style';

import { toast } from 'react-toastify';

const FormRegister = () => {
  // const { register, handleSubmit, setValue } = useForm();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Nome obrigatório')
      .matches(/^[ a-zA-Z á]*$/, 'Deve conter apenas letras'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    cpf: yup.string().required('Cpf obrigatório'),
    celular: yup
      .string()
      .required('Celular obrigatório')
      .matches(/^[0-9]{4}-[0-9]{4}$/, 'Número inválido'),
    nascimento: yup.string().required('Data de nascimento obrigatória'),
    cep: yup
      .string()
      .required('Cep obrigatório')
      .matches(/^[0-9]{5}-[0-9]{3}$/, 'Cep inválido'),
    number: yup.string().required('Número obrigatório'),
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

  function onSubmit(e) {
    console.log(e);
  }

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
        setValue('neighborhood', data.bairro);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <ContainerPage>
      <ContainerTitle>
        <h4>Cadastro</h4>
        <span>Informações pessoais</span>
      </ContainerTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome"
          register={register}
          name={'name'}
          error={errors.name?.message}
          placeholder="Ex: Samuel Leão"
          type="name"
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
          type="email"
          autoComplete="on"
        />
        <Input
          label="Celular"
          register={register}
          name={'phone'}
          error={errors.celular?.message}
          placeholder="(DDD) 90000-0000"
          autoComplete="on"
        />
        <Input
          label="Data de Nascimento"
          register={register}
          name={'phone'}
          error={errors.nascimento?.message}
          placeholder="00/00/00"
          autoComplete="on"
        />
        <Input
          label="Descrição"
          register={register}
          name={'phone'}
          error={errors.phone?.message}
          placeholder="Digitar descrição"
          autoComplete="on"
        />
        <Input
          label="CEP"
          register={register}
          name={'cep'}
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
          name={'address'}
          error={errors.street?.message}
          placeholder="Ex: Rua das Palmeiras"
          autoComplete="on"
        />
        <SideBySide>
          <Input
            label="Numero"
            register={register}
            name={'cep'}
            error={errors.number?.message}
            placeholder="Digitar número"
            autoComplete="on"
          />
          <Input
            label="Complemento"
            register={register}
            name={'neighborhood'}
            error={errors.complement?.message}
            placeholder="Ex: apart 307"
            autoComplete="on"
          />
        </SideBySide>

        <AccountBtn>
          <h1>Tipo de conta</h1>
          <div>
            <button>Comprador</button>
            <button>Anunciante</button>
          </div>
        </AccountBtn>

        <InputPassword
          label="Senha"
          register={register}
          name={'password'}
          error={errors.password?.message}
          placeholder="Digite uma senha aqui"
          type="password"
          autoComplete="on"
        />
        <InputPassword
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
          text="Finalizar cadastro"
          c={'#ffffff'}
          bg={'#4529E6'}
          font={'16px'}
          w={'100%'}
        />
      </form>
    </ContainerPage>
  );
};

export default FormRegister;
