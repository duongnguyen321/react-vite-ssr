import '@styles/global.scss';
import Main from '@App/main.tsx';

import ReactDOMServer from 'react-dom/server';
import './i18n';

export function render() {
  const html = ReactDOMServer.renderToString(
    <Main/>
  );
  return { html };
}
