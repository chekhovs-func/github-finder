import { dark } from '../themes';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
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

  .wrapper {
    width: 327px;

    @media screen and (min-width: 768px) {
      width: 573px;
    }

    @media screen and (min-width: 1440px) {
      width: 730px;
    }
  }
`;

export default function App() {
  const userData = {
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
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <StyledApp>
          <section className='wrapper'>
            <Header />
            <SearchBar />
            <Display />
          </section>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}
