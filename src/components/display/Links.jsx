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
      text-decoration: none;
      color: ${props => props.theme.primary};

      &:hover {
        text-decoration: underline;

        cursor: pointer;
      }
    }

    .faded {
      opacity: 0.5;
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

export default function Links(props) {
  const { location, blog, twitter, company } = props;

  const checkProps = prop =>
    prop ? <p>{prop}</p> : <p className='faded'>Not Available</p>;

  return (
    <StyledLinks>
      <li>
        <p className='emoji'>📍</p>
        {checkProps(location)}
      </li>
      <li>
        <p className='emoji'>🔗</p>
        {blog ? (
          <a href={blog} target='_blank'>
            {blog}
          </a>
        ) : (
          <p className='faded'>Not Available</p>
        )}
      </li>
      <li>
        <p className='emoji'>🐥</p>
        {checkProps(twitter)}
      </li>
      <li>
        <p className='emoji'>🏢</p>
        {checkProps(company)}
      </li>
    </StyledLinks>
  );
}
