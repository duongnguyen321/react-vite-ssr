import type { RoutesMapInterface } from '@/router/interface/routesMap.interface.ts';
import AboutPage from '@App/pages/about/page.tsx';
import LoginPage from '@App/pages/login/page.tsx';
import HomePage from '@App/pages/page.tsx';

const publicRoutesMap: RoutesMapInterface[] = [
  {
    link: '/',
    Element: HomePage
  },
  {
    link: '/about',
    Element: AboutPage
  },
  {
    link: '/login',
    Element: LoginPage
  }
];
export default publicRoutesMap;
