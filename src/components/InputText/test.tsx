import { screen } from '@testing-library/react';
import { renderWithTheme } from 'core/helpers/tests/renderWithTheme';

import userEvent from '@testing-library/user-event';

import { MailIcon } from 'assets/icons';

import InputText from '.';

describe('<InputText />', () => {
  it('should render with label', () => {
    renderWithTheme(<InputText label="label" name="field" />);

    expect(screen.getByLabelText('label')).toBeInTheDocument();
  });

  it('should render without Label', () => {
    renderWithTheme(<InputText />);

    expect(screen.queryByLabelText('label')).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    renderWithTheme(<InputText placeholder="some placeholder" />);

    expect(screen.getByPlaceholderText('some placeholder')).toBeInTheDocument();
  });

  it('should accessible by tab key', () => {
    renderWithTheme(<InputText label="inputText" name="inputText" />);

    const input = screen.getByLabelText('inputText');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should render with Icon', () => {
    renderWithTheme(<InputText icon={<MailIcon />} />);

    expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
  });

  it('should render with error', () => {
    const { container } = renderWithTheme(
      <InputText
        icon={<MailIcon data-testid="icon" />}
        label="inputText"
        name="inputText"
        error="error message"
      />
    );

    expect(screen.getByText('error message')).toBeInTheDocument();
    expect(screen.getByText('error message')).toHaveStyle({ color: '#DD2C00' });
    expect(container.firstChild).toMatchSnapshot();
  });
});
