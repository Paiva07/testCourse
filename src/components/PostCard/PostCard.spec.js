import { render, screen } from '@testing-library/react';
import PostCard from '.';

const props = {
  title: 'title',
  body: 'body',
  id: 1,
  cover: 'img/img.png',
};

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument(); //Validamento se Existe no doc
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.cover,
    ); //Validando se tem o atributo src com o cover
    expect(
      screen.getByRole('heading', { name: 'title 1' }),
    ).toBeInTheDocument();
    expect(screen.getByText(props.body)).toBeInTheDocument(); //Valida se tem o texto em algum local
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />); //Pegando o primeiro elemento do comp.
    expect(container.firstChild).toMatchSnapshot(); //Valida o componente com o SnapShot
  });
});
