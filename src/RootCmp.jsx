import { Route, Switch } from 'react-router';
import './assets/styles/main.scss';
import { routes } from './routes';
import { Home } from './pages/Home';

export function RootCmp() {
  return (
    <div className="app">
     <Home></Home>
    </div>
  );
}
