import { Fragment } from 'react';
import useWallet from '../contexts/WalletContext';
import WalletConnect from '../components/Wallet/WalletConnect';
import Bloodline from '@/components/dashboards/Bloodline';

const Page = () => {
  const { connected } = useWallet();

  return (
    <div className='flex flex-col items-center'>
      {!connected ? (
        <Fragment>
          <WalletConnect introText='Connect to transcend NFTs.' />
          <p className='pt-[15vh] text-center text-xl text-[var(--pink)]'>Not connected.</p>
        </Fragment>
      ) : (
        <Bloodline />
      )}
    </div>
  );
};

export default Page;
