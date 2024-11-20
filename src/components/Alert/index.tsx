import styles from "./styles.module.scss";
import SuccessIcon from "../../assets/success.svg";
import SmallCrossIcon from "../../assets/cross_icon_small.svg";
import ErrorIcon from "../../assets/error.svg";
import AlertProps from "./types";
import Preloader from "../Preloader";
import Popup from "../Popup";
function Alert(props: AlertProps) {
    const types = {
        'success': {
            title: props.title || 'Success!',
            subtitle: props.subtitle || 'Lorem ipsum dolor sit amet',
            icon: <div className={styles.ui__alert__success}>
                <SuccessIcon/>
            </div>
        },
        'error': {
            title: props.title || 'Fail!',
            subtitle: props.subtitle || 'Lorem ipsum dolor sit amet',
            icon: <div className={styles.ui__alert__error}>
                <ErrorIcon/>
            </div>
        },
        'loading': {
            title: props.title || 'Loading...',
            subtitle: props.subtitle || 'Lorem ipsum dolor sit amet',
            icon: <div className={styles.ui__alert__loader}><Preloader/></div>
        },
        "none": null
    };

    const currentType = types[props.type || "none"];

    if (!currentType) return <></>;

    function PopupContent() {
        return (
            <div className={styles.ui__alert}>
                <div className={styles.ui__alert__close} onClick={props.close}>
                    <SmallCrossIcon/>
                </div>
                {currentType && currentType.icon}
                <div className={styles.ui__alert__data}>
                    <h3>{currentType && currentType.title}</h3>
                    <p>{currentType && currentType.subtitle}</p>
                </div>
            </div>
        );
    }

    return (
        <Popup  
            noPointer={true}
            Content={PopupContent}
            settings={{}}
            close={props.close}
        />
    );
}

export default Alert;