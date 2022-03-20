import styled from 'styled-components';
import { light } from '../themes';

const StyledSearchBar = styled.form`
  justify-content: space-between;
  align-items: center;

  display: flex;

  margin-bottom: 16px;
  box-shadow: ${props =>
    props.theme === light ? 'rgba(70, 96, 187, .20) 0 16px 30px -20px' : 'none'};
  border-radius: 15px;
  width: 100%;
  height: 60px;
  padding-inline: 16px 7px;

  background-color: ${props => props.theme.foreground};

  p {
    margin-right: 9px;
  }

  input {
    border-style: none;
    width: 100%;
    padding-right: 16px;

    background-color: transparent;

    font-size: 12px;
    font-weight: 400;
    color: ${props => props.theme.tertiary};

    &:focus {
      outline: none;

      &::placeholder {
        opacity: 0;
      }
    }

    &::placeholder {
      color: ${props => props.theme.tertiary};
      opacity: 1;
    }
  }

  aside {
    display: ${props => (props.error ? 'auto' : 'none')};

    width: 250px;

    font-size: 11px;
    font-weight: 800;
    color: #f74646;
  }

  button {
    justify-content: center;
    align-items: center;

    display: flex;

    border-style: none;
    border-radius: 10px;
    width: 84px;
    height: 50px;
    padding-inline: 16px;

    background-color: #0079ff;

    font-size: 14px;
    font-weight: 800;
    color: ${props => props.theme.secondary};

    cursor: pointer;

    &:hover {
      background-color: #60abff;
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    height: 69px;
    padding-inline: 32px 10px;

    p {
      margin-right: 24px;
    }

    input {
      padding-right: 32px;

      font-size: 18px;
    }

    aside {
      margin-right: 24px;
      width: 199px;

      font-size: 15px;
    }

    button {
      width: auto;
      padding-inline: 24px;

      font-size: 16px;
    }
  }
`;

export default function SearchBar(props) {
  const { theme, error, setError, input, setInput, getUser } = props;

  const onSubmitHandler = event => {
    event.preventDefault();
    if (input) {
      getUser();
      setInput('');
    } else {
      return;
    }
  };

  const onChangeHandler = event => {
    setInput(event.target.value);
    setError(false);
  };

  return (
    <StyledSearchBar
      action='submit'
      onSubmit={onSubmitHandler}
      theme={theme}
      error={error}
    >
      <p>🔍</p>
      <input
        type='text'
        placeholder='Search GitHub username...'
        value={input}
        onChange={onChangeHandler}
        onClick={() => setError('')}
      />
      <aside>No results</aside>
      <button type='submit'>Search</button>
    </StyledSearchBar>
  );
}
