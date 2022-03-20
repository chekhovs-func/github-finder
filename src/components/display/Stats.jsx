import styled from 'styled-components';

const StyledStats = styled.section`
  justify-content: space-around;

  display: flex;

  border-radius: 10px;
  width: 100%;
  padding: 18px 15px;

  background-color: ${props => props.theme.background};

  article {
    align-items: center;
    flex-direction: column;

    display: flex;

    color: ${props => props.theme.primary};

    h1 {
      font-size: 11px;
      font-weight: 400;
    }

    p {
      font-size: 14px;
      font-weight: 800;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;

    padding: 16px 96px 16px 32px;

    article {
      align-items: flex-start;

      h1 {
        font-size: 13px;
      }

      p {
        font-size: 22px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    right: -150px;

    width: 480px;
  }
`;

export default function Stats() {
  return (
    <StyledStats>
      <article>
        <h1>Repos</h1>
        <p>8</p>
      </article>
      <article>
        <h1>Followers</h1>
        <p>5122</p>
      </article>
      <article>
        <h1>Following</h1>
        <p>9</p>
      </article>
    </StyledStats>
  );
}
