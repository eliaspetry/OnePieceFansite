export interface Actor {
    realName: string;
    characterName: string;
    image: string;
}

/* Cast image imports */
import luffy from './../../../public/img/quiz/luffy.jpg?as=webp';
import zoro from './../../../public/img/quiz/zoro.jpg?as=webp';
import nami from './../../../public/img/quiz/nami.jpg?as=webp';
import usopp from './../../../public/img/quiz/usopp.jpg?as=webp';
import sanji from './../../../public/img/quiz/sanji.jpg?as=webp';
//@ts-ignore
import garp from './../../../public/img/quiz/garp.jpg?as=webp&width=800';
import koby from './../../../public/img/quiz/koby.jpg?as=webp';
//@ts-ignore
import arlong from './../../../public/img/quiz/arlong.jpg?as=webp&width=800';
import buggy from './../../../public/img/quiz/buggy.jpg?as=webp';
//@ts-ignore
import mihawk from './../../../public/img/quiz/mihawk.jpg?as=webp&width=800';
import kuro from './../../../public/img/quiz/kuro.jpg?as=webp';
import kaya from './../../../public/img/quiz/kaya.jpg?as=webp';
//@ts-ignore
import shanks from './../../../public/img/quiz/shanks.jpg?as=webp&width=800';

const cast: Actor[] = [
    {
        realName: 'Iñaki Godoy',
        characterName: 'Monkey D. Luffy',
        image: luffy
    },
    {
        realName: 'Mackenyu',
        characterName: 'Roronoa Zoro',
        image: zoro
    },
    {
        realName: 'Emily Rudd',
        characterName: 'Nami',
        image: nami
    },
    {
        realName: 'Jacob Romero',
        characterName: 'Usopp',
        image: usopp
    },
    {
        realName: 'Taz Skylar',
        characterName: 'Sanji',
        image: sanji
    },
    {
        realName: 'Vincent Regan',
        characterName: 'Garp',
        image: garp
    },
    {
        realName: 'Morgan Davies',
        characterName: 'Koby',
        image: koby
    },
    {
        realName: 'McKinley Belcher III',
        characterName: 'Arlong',
        image: arlong
    },
    {
        realName: 'Jeff Ward',
        characterName: 'Buggy',
        image: buggy
    },
    {
        realName: 'Steven Ward',
        characterName: 'Mihawk',
        image: mihawk
    },
    {
        realName: 'Alexander Maniatis',
        characterName: 'Kuro',
        image: kuro
    },
    {
        realName: 'Celeste Loots',
        characterName: 'Kaya',
        image: kaya
    },
    {
        realName: 'Peter Gadiot',
        characterName: 'Shanks',
        image: shanks
    }
];

export default cast;
