import * as styles from '../../styles/home/video-background.module.sass';

export interface VideoBackgroundProps {
    video: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ video }) => (
    <div className={styles['video-background']}>
        <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <div className={styles.overlay}></div>
    </div>
);

export default VideoBackground;
