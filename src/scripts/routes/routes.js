import detail from '../views/pages/detail';
import like from '../views/pages/like';
import restoList from '../views/pages/restoList';

const routes = {
    '/': restoList,
    '/detail/:id': detail,
    '/like': like,
};

export default routes;
