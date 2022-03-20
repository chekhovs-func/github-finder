import styled from 'styled-components';
import { dark, light } from '../themes';

const StyledHeader = styled.header`
  justify-content: space-between;
  align-items: center;

  display: flex;

  margin-bottom: 36px;

  h1 {
    font-size: 26px;
    font-weight: 800;
    color: ${props => props.theme.primary};
  }

  article {
    display: flex;

    button {
      margin-right: 16px;
      border-style: none;

      background-color: transparent;

      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      color: ${props => props.theme.tertiary};

      cursor: pointer;

      &:hover {
        color: ${props => props.theme.primaryActive};
      }
    }
  }
`;

export default function Header(props) {
  const { theme, setTheme } = props;

  const onClickHandler = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };

  return (
    <StyledHeader>
      <h1>devfinder</h1>
      <article>
        <button onClick={onClickHandler}>{theme === light ? 'Dark' : 'Light'}</button>
        <p>{theme === light ? '🌙' : '☀️'}</p>
      </article>
    </StyledHeader>
  );
}
