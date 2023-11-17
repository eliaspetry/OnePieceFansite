import Article, { Section } from '../layout/common/Article';
import { Resource, contents, visuals, packages } from './resources';

export interface ResourceListProps {
    resources: Resource[];
}

export const ResourceList: React.FC<ResourceListProps> = ({ resources }) => (
    <ul>
        {resources.map(({ description, url }, index) => (
            <li key={url + index}>
                {description}
                <br />
                {url && (
                    <>
                        <strong>Recuperado de:&emsp;</strong>
                        <a href={url} target="_blank">
                            {url}
                        </a>
                    </>
                )}
            </li>
        ))}
    </ul>
);

const Credits: React.FC = () => {
    return (
        <Article title="Recursos utilizados">
            <Section title="Anotaciones previas:">
                <p>
                    Para los textos, hemos mezclado párrafos de autoría personal
                    con otros de resumen sobre la serie creados por IA
                    generativa de forma responsable, que hemos revisado y
                    adaptado manualmente antes de insertar.
                </p>
                <p>
                    Asimismo, hemos recurrido a algunas imágenes y cortos de
                    vídeo originales de la serie y manga, que citaremos abajo.
                    Para estos, nos acogemos al
                    <span lang="en"> "fair-use"</span> internacional, que
                    permite el uso limitado de material protegido por derechos
                    de autor para fines de enseñanza y aprendizaje académico sin
                    una concesión explícita de permisos por parte del titular de
                    las obras, siempre y cuando esto sea sin fines de lucro y se
                    atribuyan correctamente.
                </p>
            </Section>
            <Section title="Recursos de texto:">
                <ResourceList resources={contents} />
            </Section>
            <Section title="Recursos visuales y de diseño:">
                <ResourceList resources={visuals} />
            </Section>
            <Section title="Librerías de NPM:">
                <ResourceList resources={packages} />
            </Section>
        </Article>
    );
};

export default Credits;
