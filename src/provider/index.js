import { LoginProvider } from './login';
import { UpdateProvider } from './update';
import { AuthProvider } from './auth';

const Provider = ({ children }) => {
  return (
    <UpdateProvider>
      <AuthProvider>
        <LoginProvider>{children}</LoginProvider>
      </AuthProvider>
    </UpdateProvider>
  );
};

export default Provider;
