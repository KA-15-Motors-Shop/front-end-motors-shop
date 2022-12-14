import { useState } from 'react';

import { ContainerPassword, InputEye } from './style';

const InputPassword = ({ label, register, name, error, style, ...rest }) => {
  const [type, setType] = useState('password');
  const showPassword = () => {
    type === 'password' ? setType('text') : setType('password');
  };

  return (
    <ContainerPassword>
      <div>{!!label && <label>{label}</label>}</div>
      <InputEye style={style} error={error}>
        <input {...register(name)} {...rest} type={type} />
        <button onClick={showPassword} type="button"></button>
      </InputEye>
      <div>{!!error && <span>{error}</span>}</div>
    </ContainerPassword>
  );
};
export default InputPassword;
