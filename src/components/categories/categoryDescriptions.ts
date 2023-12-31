import zorroCombat from '../../../public/img/one-piece-zorro-combat.jpg';
import charactersSideBySide from '../../../public/img/one-piece-characters-side-by-side.jpg';

export interface CategoryDescription {
    title: string;
    description: string;
    route: string;
    image: string;
}

export type CategoryDescriptions = {
    [key in keyof any]: CategoryDescription;
};

const categoryDescriptions: CategoryDescriptions = {
    quiz: {
        title: 'Quiz',
        description:
            'Pon a prueba tus conocimientos sobre el reparto y los personajes.',
        route: '/quiz',
        image: zorroCombat
    },
    episodes: {
        title: 'Episodios',
        description:
            'Conoce a los actores y episodios de la primera temporada de la serie.',
        route: '/episodes',
        image: charactersSideBySide
    }
};

export default categoryDescriptions;
