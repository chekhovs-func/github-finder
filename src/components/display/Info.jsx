import styled from 'styled-components';
import moment from 'moment';

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

    color: ${props => props.theme.tertiary};

    article {
      flex-direction: column;

      display: flex;

      h1 {
        font-size: 16px;
        font-weight: 800;
        color: ${props => props.theme.primary}
      }

      h2 {
        margin-bottom: 5px;

        font-size: 13px;
        font-weight: 400;
        color: #0079ff;
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
      min-height: 54px;

      font-size: 12px;
    }

    .faded {
      opacity: 0.75;
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
        min-height: 15px;

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

export default function Info(props) {
  const { avatar, name, login, created, bio } = props;

  return (
    <StyledInfo>
      <img src={avatar} alt='' />
      <section>
        <article>
          <h1>{name}</h1>
          <h2>@{login}</h2>
        </article>
        <h3>Joined {moment(created).format('DD MMM YYYY')}</h3>
        {bio ? <p>{bio}</p> : <p className='faded'>This profile has no bio</p>}
      </section>
    </StyledInfo>
  );
}
