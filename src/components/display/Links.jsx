import styled from 'styled-components';

const StyledLinks = styled.ul`
  flex-direction: column;

  display: flex;

  width: 480px;
  height: 127px;

  list-style: none;

  li {
    align-items: center;

    display: flex;

    margin-bottom: 16px;

    font-size: 13px;
    color: ${props => props.theme.primary};

    .emoji {
      margin-right: 19px;
    }

    a {
      &:hover {
        text-decoration: underline;

        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;

    height: 83px;

    li {
      margin-bottom: 16px;

      font-size: 15px;
    }
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    left: 152px;

    flex-wrap: wrap;

    height: 83px;

    li {
      margin-bottom: 19px;
    }
  }
`;

export default function Links() {
  return (
    <StyledLinks>
      <li>
        <p className='emoji'>📍</p>
        <p>San Francisco</p>
      </li>
      <li>
        <p className='emoji'>🔗</p>
        <a>https://github.blog</a>
      </li>
      <li>
        <p className='emoji'>🐥</p>
        <p>Not Available</p>
      </li>
      <li>
        <p className='emoji'>🏢</p>
        <p>@github</p>
      </li>
    </StyledLinks>
  );
}
