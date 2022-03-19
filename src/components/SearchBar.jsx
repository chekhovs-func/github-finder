import styled from 'styled-components';

const StyledSearchBar = styled.section`
  justify-content: space-between;
  align-items: center;

  display: flex;


  margin-bottom: 16px;
  border-radius: 15px;
  width: 100%;
  height: 60px;
  padding-inline: 16px 7px;

  background-color: ${props => props.theme.foreground};

  input {
    border-style: none;
    width: 100%;
    padding-right: 16px;

    background-color: transparent;

    font-size: 13px;
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

    &:hover {
      background-color: ${props => props.theme.primaryActive};
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    height: 69px;
    padding-inline: 32px 10px;

    input {
      padding-right: 32px;

      font-size: 18px;
    }

    button {
      width: auto;
      padding-inline: 24px;

      font-size: 16px;
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
