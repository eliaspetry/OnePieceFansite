import Layout from '../Layout';
import VideoBackground from '../../home/VideoBackground';
import NavBanner from '../../home/NavBanner';
import Particles from '../../home/Particles';
import onePieceTrailer from './../../../../public/video/one-piece-trailer.mp4';
import { cards } from '../../home/cards';

const Content: React.FC = () => {
    const particleOptions = {
        preset: 'fire',
        background: {
            image: 'radial-gradient(rgba(74, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
        },
        particles: {
            number: {
                value: 100
            }
        }
    };

    return (
        <>
            <VideoBackground video={onePieceTrailer} />
            <NavBanner navCards={cards} />
            <Particles options={particleOptions} />
        </>
    );
};

const Home: React.FC = () => <Layout showHeader={false} main={<Content />} />;

export default Home;
