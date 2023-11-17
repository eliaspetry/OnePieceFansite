import Layout from '../Layout';
import CategoriesContent from '../../categories/Categories';
import * as styles from '../../../styles/categories/categories.module.sass';

const Content: React.FC = () => <CategoriesContent />;

const Categories: React.FC = () => (
    <Layout mainClassName={styles['wanted-background']} main={<Content />} />
);

export default Categories;
