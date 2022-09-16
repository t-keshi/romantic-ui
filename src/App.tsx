import { RuiThemeProvider } from './theme';
import { Page } from './example/page/Page';
import { Button } from './components';

export const App: React.FC = () => {
  return (
    <RuiThemeProvider>
      <Page />
      <Button as="button">hey</Button>
    </RuiThemeProvider>
  );
};
