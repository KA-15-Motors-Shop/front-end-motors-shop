import React, { useState } from 'react';
import { Container, Options } from './style';
import { useNavigate } from 'react-router-dom';
import ModalEditProfile from '../modal_edit_profile/index';
import ModalEditAddress from '../modal_edit_address/index';

const ModalEdit = ({ fixedScreen }) => {
  const navigate = useNavigate();
  const [open, SetOpen] = useState(false);
  const [editProfile, SetEditProfile] = useState(false);

  const editToggle = () => {
    SetOpen(!open);
  };

  const editProfileToggle = () => {
    SetEditProfile(!editProfile);
  };

  const signOut = () => {
    navigate('/');
    localStorage.clear();
  };

  return (
    <Container>
      <Options>
        <ul>
          <li
            onClick={(arg) => {
              editToggle(arg);
              fixedScreen(arg);
            }}
          >
            Editar Perfil
          </li>
          <li
            onClick={(arg) => {
              editProfileToggle(arg);
              fixedScreen(arg);
            }}
          >
            Editar Endereço
          </li>
          <li>Minhas Compras</li>
          <li onClick={signOut}>Sair</li>
        </ul>
        {editProfile && (
          <ModalEditAddress
            editProfileToggle={editProfileToggle}
            fixedScreen={fixedScreen}
          />
        )}
        {open && (
          <ModalEditProfile editToggle={editToggle} fixedScreen={fixedScreen} />
        )}
      </Options>
    </Container>
  );
};

export default ModalEdit;
