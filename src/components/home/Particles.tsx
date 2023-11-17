import { useCallback } from 'react';
import { Particles as TsParticles } from 'react-tsparticles';
import { loadFirePreset } from 'tsparticles-preset-fire';

export interface ParticlesProps {
    options?: typeof TsParticles.defaultProps.options;
}

const Particles: React.FC<ParticlesProps> = ({ options = {} }) => {
    // We memoize the engine to avoid recreating it on every render
    const particlesInit = useCallback(async engine => {
        await loadFirePreset(engine);
    }, []);

    /*
    // View container settings on load (debug)
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    });
    */

    return (
        <TsParticles
            init={particlesInit}
            // loaded={particlesLoaded}
            options={options}
        />
    );
};

export default Particles;
