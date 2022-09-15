import { RuiThemeProvider } from './theme';
import { Page } from './example/page/Page';

export const App: React.FC = () => {
  return (
    <RuiThemeProvider>
      <Page />
    </RuiThemeProvider>
  );
};
