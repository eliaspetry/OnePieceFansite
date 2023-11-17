import { useEffect, useState, useRef } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Aside from './common/Aside';
import * as styles from '../../styles/layout/layout.module.sass';

interface LayoutProps {
    showHeader?: boolean;
    showFooter?: boolean;
    showAside?: boolean;
    mainClassName?: string;
    header?: React.ReactNode;
    main: React.ReactNode;
    aside?: React.ReactNode;
    footer?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    showHeader = true,
    showFooter = true,
    showAside = false,
    mainClassName = '',
    header,
    main,
    aside,
    footer
}) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [headerOffset, setHeaderOffset] = useState(0),
        [footerOffset, setFooterOffset] = useState(0);

    const headerRef = useRef<HTMLDivElement>(null),
        footerRef = useRef<HTMLDivElement>(null),
        mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        _updateOffsets();

        // If main gets resized for some reason because of dynamic content, we want to requery and update the offsets too
        const mainResizeObserver = new ResizeObserver(() => {
            _updateOffsets();
        });

        if (mainRef.current) mainResizeObserver.observe(mainRef.current);

        // Update window size on resize
        window.addEventListener('resize', () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        });

        // Update offsets on scroll
        window.addEventListener('scroll', () => {
            _updateOffsets();
        });

        return () => {
            // Disconnect observer on unmount
            mainResizeObserver.disconnect();
        };
    }, []);

    /**
     * @private
     * @description Updates the offsets for the layout elements in state (currently header and footer)
     * @returns {void}
     */
    function _updateOffsets() {
        if (headerRef.current)
            setHeaderOffset(_getVisibleElementHeight(headerRef.current));

        if (footerRef.current)
            setFooterOffset(_getVisibleElementHeight(footerRef.current));
    }

    /**
     * @private
     * @description Returns the visible height of an element
     * @param {HTMLElement} element - The element to retrieve it for
     * @returns {number} - The visible height of the element in pixels
     */
    function _getVisibleElementHeight(element: HTMLElement) {
        const rect = element.getBoundingClientRect();
        const visibleHeight = Math.max(
            0,
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        );
        return visibleHeight;
    }

    // We'll show the defaults inside /common/ for <header>, <footer> and <aside> if no override components are provided explicitly
    return (
        <div id={showAside ? styles['layout-aside'] : styles.layout}>
            {showHeader && (
                <header ref={headerRef}>{header || <Header />}</header>
            )}
            <main ref={mainRef} className={mainClassName}>
                {main}
            </main>
            {showAside && (
                <aside
                    style={{
                        top: `${headerOffset}px`,
                        bottom: `${footerOffset}px`,
                        width: `${windowSize.width / 4 - 5}px` // 1/4 since we have 3fr for main and 1fr for aside + offset
                    }}
                >
                    {aside || <Aside />}
                </aside>
            )}
            {showFooter && (
                <footer ref={footerRef}>{footer || <Footer />}</footer>
            )}
        </div>
    );
};

export default Layout;
