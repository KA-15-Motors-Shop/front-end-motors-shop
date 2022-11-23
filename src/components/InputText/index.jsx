import { ContainerInput, InputWrapper, LabCont } from './style';

const Input = ({
  label,
  register,
  name,
  error,
  children,
  type = 'text',
  ...rest
}) => {
  return (
    <InputWrapper>
      <LabCont>{!!label && <label>{label}</label>}</LabCont>
      <ContainerInput error={error}>
        <input {...register(name)} {...rest} type={type} />
        <div>{!!error && <span>{error}</span>}</div>
      </ContainerInput>
    </InputWrapper>
  );
};
export default Input;
