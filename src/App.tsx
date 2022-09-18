import { RuiThemeProvider } from './theme';
import { Page } from './example/page/Page';
import { Button, Dialog } from './components';

export const App: React.FC = () => {
  return (
    <RuiThemeProvider>
      <Page />
      <Dialog open={true}>
        <div>hello</div>
      </Dialog>
      <Button>hey</Button>
    </RuiThemeProvider>
  );
};
