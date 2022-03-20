import styled from 'styled-components';
import Info from './Info';
import Links from './Links';
import Stats from './Stats';

const StyledDisplay = styled.section`
  border-radius: 15px;
  padding: 32px 28px 48px 28px;

  background-color: ${props => props.theme.foreground};

  @media screen and (min-width: 768px) {
    padding: 40px 40px 36px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 48px 48px 36px 48px;
  }
`;

export default function Display() {
  return (
    <StyledDisplay>
      <Info />
      <Stats />
      <Links />
    </StyledDisplay>
  );
}
