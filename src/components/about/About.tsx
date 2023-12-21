import Article, { Section } from '../layout/common/Article';
import strawhat from '../../../public/img/strawhat.svg';
import * as styles from '../../styles/about/strawhat-animation.module.sass';

/**
 * Picture imports utilizing Parcel's Sharp plugin for optimization (assignment requires at least one use case)
 */
//@ts-ignore
import luffyBaratieSm from '../../../public/img/luffy-baratie.jpg?width=576';
//@ts-ignore
import luffyBaratieMd from '../../../public/img/luffy-baratie.jpg?width=768';

import luffyBaratieLg from '../../../public/img/luffy-baratie.jpg';

// Also, for the "flying strawhat scene", we'll go with a CSS-only animation for now (canvas is overkill).

const About: React.FC = () => (
    <Article title="Presentación del sitio">
        <figure>
            <picture>
                <source
                    srcSet={luffyBaratieSm}
                    media="(max-width: 576px)"
                    type="image/jpeg"
                />
                <source
                    srcSet={luffyBaratieMd}
                    media="(max-width: 768px)"
                    type="image/jpeg"
                />
                <source srcSet={luffyBaratieLg} type="image/jpeg" />
                <img src={luffyBaratieLg} alt="Luffy en Baratie" />
            </picture>
            <figcaption>Luffy en Baratie. Fuente: Netflix.</figcaption>
        </figure>
        <Section title="¿Qué es One Piece?">
            <p>
                One Piece es un manga y anime de género
                <span lang="ja"> shōnen</span> creado por Eiichiro Oda. La
                historia narra las aventuras de Monkey D. Luffy, un joven que
                desea convertirse en el Rey de los Piratas y encontrar el
                legendario tesoro homónimo escondido en el océano más peligroso
                del mundo, el Grand Line. Para ello, forma una tripulación con
                diversos personajes, cada uno con sus propias habilidades y
                sueños. La obra lleva tiempo acaparando gran éxito, con más de
                1000 capítulos publicados y más de 500 millones de copias
                vendidas en todo el mundo.
            </p>
            <div id={styles['animation-container']}>
                <div id={styles['animation-scene']}>
                    <img
                        id={styles.strawhat}
                        src={strawhat}
                        alt="sombrero de Luffy"
                    />
                </div>
            </div>
        </Section>
        <Section title="¿Qué es el live-action sobre One Piece de Netflix?">
            <p>
                El <span lang="en">live-action</span> de One Piece es una serie
                de televisión producida por Netflix, basada en el manga y anime
                homónimo. Se trata de una adaptación en acción real, con actores
                de carne y hueso, que recrea los primeros arcos narrativos de la
                obra original. La producción cuenta con la colaboración de
                Eiichiro Oda, el autor del manga, como consultor creativo. Se
                estrenó el 31 de agosto de 2023, con una primera temporada de 8
                episodios.
            </p>
            <p>
                Su trama sigue las aventuras de Luffy y sus compañeros, desde su
                encuentro con el pirata Shanks, que le inspira a seguir su
                sueño, hasta su llegada a la isla de Loguetown, donde se
                enfrentan al marine Smoker y al legendario espadachín Mihawk. En
                el camino, reclutan a Zoro, un hábil espadachín que busca ser el
                mejor del mundo; a Nami, una astuta navegante que desea dibujar
                un mapa del mundo; a Usopp, un mentiroso francotirador que
                quiere ser un valiente guerrero; y a Sanji, un excelente
                cocinero que busca el mar legendario All Blue. Juntos, se
                enfrentan a diversos enemigos, como el payaso Buggy, el capitán
                Kuro, el chef Zeff y el hombre-pez Arlong, mientras se preparan
                para entrar en el Grand Line.
            </p>
        </Section>
        <Section title="Contenidos del sitio">
            <p>
                Nada más aterrizar en el sitio, nos encontraremos con una página
                de inicio u portada, que enlazará al resto de rutas:
            </p>
            <dl>
                <dt>Categorías</dt>
                <dd>
                    Redirecciona a las páginas de contenido. Contaremos con dos
                    de ellas:
                    <dl>
                        <dt>Resumen</dt>
                        <dd>Un resumen de los episodios y del reparto.</dd>
                        <dt>"¿Quién es el actor?"</dt>
                        <dd>
                            Un pequeño quiz interactivo en JS para adivinar qué
                            actor hace de cada papel en la serie.
                        </dd>
                    </dl>
                </dd>
                <dt>Presentación</dt>
                <dd>
                    ¡Efectivamente! Esta es la página en la que estamos ahora.
                </dd>
                <dt>Enlaces</dt>
                <dd>
                    Desglose de recursos utilizados y citas / atribuciones de
                    copyright en el marco del fair-use.
                </dd>
            </dl>
        </Section>
    </Article>
);

export default About;
