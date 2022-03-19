import { screen } from '@testing-library/react';
import { renderWithTheme } from 'core/helpers/tests/renderWithTheme';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the Menu component', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText('Menu component')).toBeInTheDocument();
  });
});
