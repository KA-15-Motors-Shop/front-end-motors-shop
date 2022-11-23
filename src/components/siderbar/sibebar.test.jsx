import { screen, render, userEvent } from '../../tests/index';
import SideBar from '../../components/siderbar';
import { MemoryRouter } from 'react-router-dom';

describe('Hamburguer', () => {
  // Menu hamburguer começa fechado
  it('should start closed', () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });
  });
});
