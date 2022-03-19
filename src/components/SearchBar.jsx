import styled from 'styled-components';

const StyledSearchBar = styled.section`
  justify-content: space-between;
  align-items: center;

  display: flex;

  border-radius: 15px;
  width: 100%;
  height: 69px;
  padding-inline: 32px 10px;

  background-color: ${props => props.theme.foreground};

  input {
    border-style: none;
    width: 274px;

    background-color: transparent;

    font-size: 18px;
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

  button {
    border-style: none;
    border-radius: 10px;
    width: 106px;
    height: 50px;

    background-color: ${props => props.theme.accent};

    font-size: 16px;
    font-weight: 800;
    color: ${props => props.theme.primary};
  }

  @media screen and (min-width: 375px) {
    height: 60px;
    padding-inline: 16px 7px;

    input {
      font-size: 13px;
    }

    button {
      width: 84px;
      height: 46px;

      font-size: 14px;
    }
  }
`;

export default function SearchBar() {
  return (
    <StyledSearchBar>
      <input type='text' placeholder='Search GitHub username...' />
      <button>Search</button>
    </StyledSearchBar>
  );
}
