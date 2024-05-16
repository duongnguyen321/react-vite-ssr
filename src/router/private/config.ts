import type { RoutesMapInterface } from '@/router/interface/routesMap.interface.ts';
import ProfilePage from '@App/pages/profile/page.tsx';

const privateRoutesMap: RoutesMapInterface[] = [
  {
    link: '/profile/:id',
    Element: ProfilePage
  }
];
export default privateRoutesMap;
