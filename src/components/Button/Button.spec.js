import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('<Button />', () => {
  it('should render the button with the text "Teste', () => {
    render(<Button text="Teste" />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /teste/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function button click', () => {
    const fn = jest.fn(); //Criando uma function mock
    render(<Button text="Teste" onClick={fn} />); //Renderizando o Button

    const button = screen.getByRole('button', { name: /teste/i }); //Pegando o Button pelo text
    fireEvent.click(button); //Fazendo evento de click no botão
    userEvent.click(button); //Fazendo evento de click no botão com outro evento
    expect(fn).toHaveBeenCalled(); //Verificando se a função foi chamada
    expect(fn).toBeCalledTimes(2); //Verifica quantas vezes a função vai ser chamada
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Teste" disabled={true} />); //Renderizando o Button
    const button = screen.getByRole('button', { name: /teste/i }); //Pegando o Button pelo text
    expect(button).toBeDisabled(); //Verifica se o Button esta desabilitado
  });
  it('should be enable when disabled is false', () => {
    render(<Button text="Teste" disabled={false} />); //Renderizando o Button
    const button = screen.getByRole('button', { name: /teste/i }); //Pegando o Button pelo text
    expect(button).toBeEnabled(); //Verifica se o Button esta habilitado
  });
});
