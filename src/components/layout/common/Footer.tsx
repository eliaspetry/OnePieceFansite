import * as styles from '../../../styles/layout/footer.module.sass';

const Footer: React.FC = () => (
    <div id={styles.footer}>
        <p>
            &copy; {new Date().getFullYear()} Elias Petry | UOC - Asignatura:
            Herramientas HTML y CSS I [PEC 1]
        </p>
    </div>
);

export default Footer;
