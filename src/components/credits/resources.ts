export interface Resource {
    description: string;
    url?: string;
}

export const contents: Resource[] = [
    {
        description:
            'Bing (2023). Textos sobre One Piece y su live-action (modo creativo).',
        url: 'https://bing.com/chat'
    },
    {
        description: 'Oda, E. (1997-2023). One Piece. Shueisha.'
    },
    {
        description: 'One Piece (serie de televisión). (2023). Netflix.',
        url: 'https://www.netflix.com/title/80217863'
    },
    {
        description:
            'The Guardian. (2023, 31 de agosto). One Piece review: beloved Japanese saga lands on Netflix with a whimper',
        url: 'https://www.theguardian.com/tv-and-radio/2023/aug/31/one-piece-review-netflix-japanese-saga'
    }
];

export const visuals: Resource[] = [
    {
        description: 'uiGradients. (s.f.). Beautiful colored gradients.',
        url: 'https://uigradients.com/'
    },
    {
        description: 'One Piece (serie de televisión). (2023). Netflix.',
        url: 'https://www.netflix.com/title/80217863'
    },
    {
        description:
            'Crountch, IconArchive. (s.f.). Luffys flag Icon | One Piece Manga Jolly Roger Iconpack.',
        url: 'https://www.iconarchive.com/show/one-piece-jolly-roger-icons-by-crountch/Luffys-flag-icon.html'
    },
    {
        description:
            'Fontsource. (s.f.). Google Fonts and other free to use fonts for your websites.',
        url: 'https://fontsource.org/'
    },
    {
        description:
            'Transparent Textures. (s.f.). Free to use texture patterns.',
        url: 'https://www.transparenttextures.com/'
    },
    {
        description:
            'Font Meme. (s.f.). One Piece Manga Font and Preview Editor.',
        url: 'https://fontmeme.com/fonts/one-piece-manga-font/'
    },
    {
        description:
            'Flaticon. (s.f.). Access 12.8M+ vector icons & stickers. Strawhat.',
        url: 'https://www.flaticon.es/icono-gratis/sombrero-de-copa_7101344'
    },
    {
        description:
            'Freepik. (s.f.). Design more and faster. Decorative ropes.',
        url: 'https://www.freepik.es/vector-gratis/conjunto-decorativo-cuerdas_3947825.html'
    },
    {
        description:
            'Bing (2023). Fondo de una isla inspirada en el anime One Piece (modo creativo, imagen generada mediante DALL·E 3).',
        url: 'https://bing.com/chat'
    }
];

export const packages: Resource[] = [
    {
        description:
            'React. (s.f.). La biblioteca para interfaces de usuario web y nativas.',
        url: 'https://es.react.dev/'
    },
    {
        description:
            'React Router. (s.f.). Home v6.18.0. Navegación para React.',
        url: 'https://reactrouter.com/'
    },
    {
        description: 'TypeScript. (s.f.). JavaScript With Syntax For Types.',
        url: 'https://www.typescriptlang.org/'
    },
    {
        description:
            'particles.js. (s.f.). A lightweight JavaScript library for creating particles.',
        url: 'https://particles.js.org/'
    },
    {
        description: 'Sass. (s.f.). Syntactically Awesome Style Sheets.',
        url: 'https://sass-lang.com/'
    },
    {
        description: 'Parcel. (s.f.). The zero configuration build tool.',
        url: 'https://parceljs.org/'
    },
    {
        description: 'Jest. (s.f.). Delightful JavaScript Testing.',
        url: 'https://jestjs.io/'
    }
];

export default [...contents, ...visuals, ...packages];
