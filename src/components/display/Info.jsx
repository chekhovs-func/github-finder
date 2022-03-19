import styled from 'styled-components';

const StyledInfo = styled.section`
  display: flex;

  img {
    margin-right: 19.5px;
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }

  section {
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;

    display: flex;

    margin-bottom: 20px;
    width: 100%;

    color: ${props => props.theme.primary};

    article {
      flex-direction: column;

      display: flex;

      h1 {
        font-size: 16px;
        font-weight: 800;
      }

      h2 {
        margin-bottom: 5px;

        font-size: 13px;
        font-weight: 400;
        color: ${props => props.theme.accent};
      }
    }

    h3 {
      margin-bottom: 33px;

      font-size: 13px;
      font-weight: 400;
    }

    p {
      position: relative;
      right: 89px;

      width: 275px;

      font-size: 12px;
    }
  }

  @media screen and (min-width: 768px) {
    img {
      margin-right: 41px;
      width: 117px;
      height: 117px;
    }

    section {
      article {
        h1 {
          margin-top: 11px;

          font-size: 26px;
        }

        h2 {
          font-size: 16px;
        }
      }

      h3 {
        margin-bottom: 38px;

        font-size: 15px;
      }

      p {
        right: 153px;

        width: 493px;

        font-size: 15px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    img {
      margin-right: 37px;
      width: 117px;
      height: 117px;
    }

    section {
      flex-direction: row;

      margin-bottom: 32px;

      article {
        h1 {
          margin-top: 0;
        }

        h2 {
          margin-bottom: 20px;

          font-size: 16px;
        }
      }

      h3 {
        margin-top: 8px;
        margin-bottom: 0;

        font-size: 15px;
      }

      p {
        position: static;

        width: fit-content;

        font-size: 15px;
      }
    }
  }
`;

export default function Info() {
  return (
    <StyledInfo>
      <img src='https://avatars.githubusercontent.com/u/583231?v=4' alt='' />
      <section>
        <article>
          <h1>The Octocat</h1>
          <h2>@octocat</h2>
        </article>
        <h3>Joined 25 Jan 2011</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
          volutpat mattis eros.
        </p>
      </section>
    </StyledInfo>
  );
}
