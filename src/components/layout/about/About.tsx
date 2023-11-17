import Layout from '../Layout';
import AboutContent from './../../about/About';
import * as styles from '../../../styles/theme/theme.module.sass';

const About: React.FC = () => (
    <Layout
        mainClassName={styles['texture-background']}
        main={<AboutContent />}
    />
);

export default About;
