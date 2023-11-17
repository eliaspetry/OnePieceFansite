import { Fragment } from 'react';
import Article, { Section } from '../layout/common/Article';
import cast, { Actor } from '../quiz/cast';
import summaries, { Summary } from '../episodes/summaries';
import * as styles from '../../styles/episodes/episodes.module.sass';

const Episodes: React.FC = () => (
    <Article title="Episodios y reparto">
        <Section title="Reparto">
            <p>
                El reparto de actores de la primera temporada de la serie se
                encuentra formado por:
            </p>
            <div id={styles['actor-cards-wrapper']}>
                <ul id={styles['actor-cards']}>
                    {cast.map(({ realName, characterName, image }: Actor) => (
                        <li className={styles['actor-card']} key={realName}>
                            <img
                                className={styles['actor-image']}
                                src={image}
                                alt={`${realName} haciendo el papel de ${characterName}`}
                            />
                            <p className={styles['actor-name']}>{realName}</p>
                            <p className={styles['actor-character']}>
                                {characterName}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
        <Section title="Episodios">
            <p>La primera temporada incluye los siguientes episodios:</p>
            <dl>
                {summaries.map(({ title, description }: Summary, index) => (
                    <Fragment key={title}>
                        <dt>
                            Episodio {index + 1}: {title}
                        </dt>
                        <dd>{description}</dd>
                    </Fragment>
                ))}
            </dl>
        </Section>
    </Article>
);

export default Episodes;
