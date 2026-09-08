
import LogoIcon from '../../assets/logo.svg';
import LogoLightIcon from '../../assets/logo-light.svg';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Logo({ width = 105, height = 36 }: { width?: number; height?: number }) {
    return (
        <Link href="/" className={styles.logo}>
            <LogoIcon width={width} height={height} className={styles.logo__dark} />
            <LogoLightIcon width={width} height={height} className={styles.logo__light} />
        </Link>
    );
}
