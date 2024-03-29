import { NavCardProps } from './NavCard';
//@ts-ignore
import onePieceThumbnail1 from './../../../public/img/one-piece-thumbnail-1.jpg?as=webp&width=800';
//@ts-ignore
import onePieceThumbnail2 from './../../../public/img/one-piece-thumbnail-2.jpg?as=webp&width=800';
//@ts-ignore
import onePieceThumbnail3 from './../../../public/img/one-piece-thumbnail-3.jpg?as=webp&width=800';

export const cards: NavCardProps[] = [
    {
        title: 'Presentación',
        description:
            '¿Necesitas una brújula, grumete? Aquí podrás encontrar una descripción general sobre todo el contenido del sitio.',
        thumbnail: onePieceThumbnail1,
        thumbnailAlt: 'one piece squad',
        route: '/about'
    },
    {
        title: 'Categorías',
        description:
            'Todo el contenido interactivo, dividido en secciones. Tener un baúl bien organizado es una gran ventaja.',
        thumbnail: onePieceThumbnail2,
        thumbnailAlt: 'one piece squad',
        route: '/categories'
    },
    {
        title: 'Enlaces',
        description:
            'Fuentes y derechos de atribución. A veces, los piratas también deben ser legales.',
        thumbnail: onePieceThumbnail3,
        thumbnailAlt: 'luffy',
        route: '/credits'
    }
];
