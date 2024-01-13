import Layout from '../Layout';
import NavBanner from '../../home/NavBanner';
import onePieceTrailer from './../../../../public/video/one-piece-trailer.mp4';
import { cards } from '../../home/cards';
import { lazy, Suspense } from 'react';
import { ParticlesProps } from '../../home/Particles';
import { VideoBackgroundProps } from '../../home/VideoBackground';

const Particles: React.FC<ParticlesProps> = lazy(
        () => import('../../home/Particles')
    ),
    VideoBackground: React.FC<VideoBackgroundProps> = lazy(
        () => import('../../home/VideoBackground')
    );

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
            <Suspense>
                <VideoBackground video={onePieceTrailer} />
            </Suspense>
            <NavBanner navCards={cards} />
            <Suspense>
                <Particles options={particleOptions} />
            </Suspense>
        </>
    );
};

const Home: React.FC = () => <Layout showHeader={false} main={<Content />} />;

export default Home;
