import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@root/routes';
import '@root/App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
