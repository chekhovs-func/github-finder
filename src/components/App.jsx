import { dark } from '../themes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  box-sizing: border-box;
  padding: 0;

  font-family: 'Space Mono', monospace;
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
      <ThemeProvider theme={dark}></ThemeProvider>
    </>
  );
}
