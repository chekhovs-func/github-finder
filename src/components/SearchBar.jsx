import styled from 'styled-components';

const StyledSearchBar = styled.form`
  justify-content: space-between;
  align-items: center;

  display: flex;

  margin-bottom: 16px;
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
    color: ${props => props.theme.primary};

    &:focus {
      outline: none;

      &::placeholder {
        opacity: 0;
      }
    }

    &::placeholder {
      color: ${props => props.theme.primary};
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

    background-color: ${props => props.theme.accent};

    font-size: 14px;
    font-weight: 800;
    color: ${props => props.theme.primary};

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
  const { error, setError, input, setInput, getUser } = props;

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
    <StyledSearchBar action='submit' onSubmit={onSubmitHandler} error={error}>
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
