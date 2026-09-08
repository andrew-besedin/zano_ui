import React from 'react';
import CrossIcon from '../../../../assets/cross.svg';
import { DONATION_ADDRESSES } from '../../../../data/donation';
import CopyIcon from '../../../../assets/copy.svg';
import CheckIcon from '../../../../assets/checked.svg';
import { useClipboard } from '../../../../hooks/useClipboard';
import styles from './styles.module.scss';

const DonationPopup = ({ close }: { close: () => void }) => {
    const { copy, copiedIndex } = useClipboard();

    return (
        <div className={styles.wrapper}>
            <div className={styles.popup}>
                <button onClick={close} className={styles.popup__close}>
                    <CrossIcon />
                </button>

                <h5 className={styles.popup__title}>💙 Support Zano</h5>

                <div className={styles.popup__addresses}>
                    {DONATION_ADDRESSES.map((e, idx) => (
                        <div
                            key={idx}
                            className={styles.popup__addresses_item}
                            onClick={() => copy(e.address, idx)}
                        >
                            <div className={styles.text}>
                                {e.icon}
                                <p className={styles.text__title}>{e.name}</p>
                                <p className={styles.text__address}>{e.address}</p>
                            </div>

                            {copiedIndex === idx ? (
                                <CheckIcon className={styles.icon} />
                            ) : (
                                <CopyIcon className={styles.icon} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonationPopup;
