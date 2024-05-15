import '@styles/css/bootstrap.min.css';
import '@styles/global.scss';
import Main from '@App/main.tsx';
import ReactDOM from 'react-dom/client';
import './i18n';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement, <Main />
);
