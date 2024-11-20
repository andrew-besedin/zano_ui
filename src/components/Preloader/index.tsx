import styles from './styles.module.scss';
import PreloaderProps from './types';

function Preloader(props: PreloaderProps) {
    function Loader() {
        return (
            <div className={styles.ui__preloader__content + " " + props.className}>
                <div></div><div></div><div></div><div></div>
            </div>
        );
    }
    if (props.fullPage) {
        return (
            <div className={styles.preloader}>
                <Loader/>
            </div>
        );
    }


    return <Loader/>;
}

export default Preloader;