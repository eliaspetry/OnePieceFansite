import * as styles from '../../../styles/layout/article.module.sass';

export interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => (
    <section>
        <h2>{title}</h2>
        {children}
    </section>
);

export interface ArticleProps {
    title: string;
    children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ title, children }) => (
    <div id={styles.article}>
        <article>
            <h1>{title}</h1>
            {children}
        </article>
    </div>
);

export default Article;
