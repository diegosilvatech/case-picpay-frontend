import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'core/helpers/tests/renderWithTheme';
import { mockedPaymentListData } from './mock';

import Table from '.';

describe('<Table />', () => {
  it('should render the Table component', () => {
    renderWithTheme(<Table data={mockedPaymentListData} />);

    expect(screen.getByLabelText('Table component')).toBeInTheDocument();
  });
});
