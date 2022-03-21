import { screen } from '@testing-library/react';
import { renderWithTheme } from 'core/helpers/tests/renderWithTheme';

import FormAdd from '.';

describe('<FormAdd />', () => {
  it('should render the FormAdd component', () => {
    renderWithTheme(<FormAdd />);

    expect(screen.getByLabelText('FormAdd component')).toBeInTheDocument();
  });
});
