import { screen } from '@testing-library/react';
import { renderWithTheme } from 'core/helpers/tests/renderWithTheme';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the Logo component', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText('Logo component')).toBeInTheDocument();
  });
});
