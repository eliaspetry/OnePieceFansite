import categoryDescriptions from '../../categories/categoryDescriptions';

export interface Route {
    name: string;
    route: string;
}

const routes: Route[] = [
    {
        name: 'Inicio',
        route: '/'
    },
    {
        name: 'Presentación',
        route: '/about'
    },
    {
        name: 'Categorías',
        route: '/categories'
    },
    {
        name: 'Enlaces',
        route: '/credits'
    }
];

const categoryRoutes: Route[] = Object.values(categoryDescriptions).map(
    category => ({
        name: category.title,
        route: category.route
    })
);

export { routes, categoryRoutes };
