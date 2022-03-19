import styled from 'styled-components';

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

  button {
    border-style: none;

    background-color: transparent;

    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: ${props => props.theme.primary};

    cursor: pointer;

    &:hover {
      color: ${props => props.theme.secondaryActive};
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>devfinder</h1>
      <button>Light</button>
    </StyledHeader>
  );
}
