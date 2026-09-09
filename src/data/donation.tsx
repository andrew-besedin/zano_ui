import BtcIcon from '../assets/bitcoin.svg';
import BtcCashIcon from '../assets/bitcoin-cash.svg';
import EthIcon from '../assets/ethereum.svg';
import ZanoIcon from '../assets/zano.svg';
// import MoneroIcon from '../assets/monero.svg';

export const DONATION_ADDRESSES = [
    {
        icon: <ZanoIcon width={24} height={24} />,
        name: 'ZANO',
        address: '@dev',
    },
    {
        icon: <BtcIcon width={24} height={24} />,
        name: 'BTC',
        address: 'bc1qpa8w8eaehlplfepmnzpd7v9j046899nktxnkxp',
    },
    {
        icon: <BtcCashIcon width={24} height={24} />,
        name: 'BCH',
        address: 'qqgq078vww5exd9kt3frx6krdyznmp80hcygzlgqzd',
    },
    {
        icon: <EthIcon width={24} height={24} />,
        name: 'ETH',
        address: '0x206c52b78141498e74FF074301ea90888C40c178',
    },
    // {
    //     icon: <MoneroIcon width={24} height={24} />,
    //     name: 'MONERO',
    //     address:
    //         '45gp9WTobeB5Km3kLQgVmPJkvm9rSmg4gdyHheXqXijXYMjUY48kLgL7QEz5Ar8z9vQioQ68WYDKsQsjAEonSeFX4UeLSiX',
    // },
];
