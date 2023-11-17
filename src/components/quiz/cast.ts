export interface Actor {
    realName: string;
    characterName: string;
    image: string;
}

/* Cast image imports */
import luffy from './../../../public/img/quiz/luffy.jpg';
import zoro from './../../../public/img/quiz/zoro.jpg';
import nami from './../../../public/img/quiz/nami.jpg';
import usopp from './../../../public/img/quiz/usopp.jpg';
import sanji from './../../../public/img/quiz/sanji.jpg';
import garp from './../../../public/img/quiz/garp.jpg';
import koby from './../../../public/img/quiz/koby.jpg';
import arlong from './../../../public/img/quiz/arlong.jpg';
import buggy from './../../../public/img/quiz/buggy.jpg';
import mihawk from './../../../public/img/quiz/mihawk.jpg';
import kuro from './../../../public/img/quiz/kuro.jpg';
import kaya from './../../../public/img/quiz/kaya.jpg';
import shanks from './../../../public/img/quiz/shanks.jpg';

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
