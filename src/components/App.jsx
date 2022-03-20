import { dark } from '../themes';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import SearchBar from './SearchBar';
import Display from './display/Display';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  box-sizing: border-box;
  padding: 0;

  font-family: 'Space Mono', monospace;
}
`;

const StyledApp = styled.main`
  justify-content: center;
  align-items: center;
  flex-direction: column;

  display: flex;

  width: 100vw;
  height: 100vh;

  background-color: ${props => props.theme.background};

  overflow-x: hidden;

  .wrapper {
    width: 327px;

    @media screen and (max-height: 375px) {
      margin-top: 370px;
    }

    @media screen and (min-width: 768px) {
      width: 573px;
    }

    @media screen and (min-width: 1440px) {
      width: 730px;
    }
  }
`;

export default function App() {
  const [user, setUser] = useState({
    login: 'octocat',
    avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
    html_url: 'https://github.com/octocat',
    name: 'The Octocat',
    company: '@github',
    blog: 'https://github.blog',
    location: 'San Francisco',
    bio: null,
    twitter_username: null,
    public_repos: 8,
    followers: 5122,
    following: 9,
    created_at: '2011-01-25T18:44:36Z',
  });
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const getUser = () => {
    axios({
      method: 'GET',
      url: `https://api.github.com/users/${input}`,
    })
      .then(response => setUser(response.data))
      .catch(error => setError(true));
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <StyledApp>
          <section className='wrapper'>
            <Header />
            <SearchBar
              error={error}
              setError={setError}
              input={input}
              setInput={setInput}
              getUser={getUser}
            />
            <Display
              avatar={user.avatar_url}
              name={user.name}
              login={user.login}
              created={user.created_at}
              bio={user.bio}
              repos={user.public_repos}
              followers={user.followers}
              following={user.following}
              location={user.location}
              blog={user.blog}
              twitter={user.twitter_username}
              company={user.company}
            />
          </section>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}
