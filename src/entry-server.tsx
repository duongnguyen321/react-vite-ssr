import '@styles/global.scss';
import Main from '@App/main.tsx';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import './i18n';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Main />
    </StaticRouter>
  );
  return { html };
}
