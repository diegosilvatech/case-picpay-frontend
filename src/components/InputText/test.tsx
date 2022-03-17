import { screen } from '@testing-library/react';
import { renderWithTheme } from 'core/helpers/tests/renderWithTheme';

import InputText from '.';

describe('<InputText />', () => {
  it('should render the InputText component', () => {
    renderWithTheme(<InputText />);

    expect(screen.getByLabelText('InputText component')).toBeInTheDocument();
  });
});
