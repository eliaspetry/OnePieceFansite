import Layout from '../Layout';
import CreditsContent from '../../credits/Credits';
import * as styles from '../../../styles/theme/theme.module.sass';

const Credits: React.FC = () => (
    <Layout
        mainClassName={styles['texture-background']}
        main={<CreditsContent />}
    />
);

export default Credits;
