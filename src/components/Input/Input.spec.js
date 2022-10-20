import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '.';

describe('<Input />', () => {
  it('should be in the Input', () => {
    const fn = jest.fn();
    render(<Input handleChange={fn} searchValue={'testando'} />);
    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('testando');
  });

  it('should be call on press key', () => {
    const fn = jest.fn();
    render(<Input handleChange={fn} />);
    const input = screen.getByPlaceholderText(/type your search/i);

    let valueInput = 'o valor'; //Seta um valor pro input

    userEvent.type(input, valueInput); //Verifica com um evento de usuario
    expect(input.value).toBe(valueInput);
    expect(fn).toHaveBeenCalledTimes(valueInput.length); //Verfica se a função foi chamada x vezes confome o tamanho do input
  });
});
