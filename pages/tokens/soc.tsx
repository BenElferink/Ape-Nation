import Link from 'next/link';
import TokenHeader from '../../components/tokens/TokenHeader';
import TokenPrerequisites from '../../components/tokens/TokenPrerequisites';
import TokenWhoEarns, { WhoCanEarn } from '../../components/tokens/TokenWhoEarns';
import PageContainer from '../../components/layout/PageContainer';

const TOKEN_IMAGE_SRC = '/media/tokens/soc/token.png';
const TOKEN_POLICY_ID = '25f0fc240e91bd95dcdaebd2ba7713fc5168ac77234a3d79449fc20c';
const TOKEN_NAME = 'SOC';
const PROJECT_NAME = 'The Ape Society';
const WHO_CAN_EARN: WhoCanEarn = ['Ape Nation'];

const Page = () => {
  return (
    <PageContainer>
      <TokenHeader projectName={PROJECT_NAME} tokenName={TOKEN_NAME} tokenSrc={TOKEN_IMAGE_SRC} policyId={TOKEN_POLICY_ID} />
      <TokenWhoEarns whoCanEarn={WHO_CAN_EARN} />
      <TokenPrerequisites
        items={[
          {
            imageUrl: '/media/tokens/soc/cabin.gif',
            purchaseUrl: 'https://www.jpg.store/collection/d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09',
            texts: ['TAS - Cabin'],
          },
        ]}
      />

      <div className='w-full my-2 p-4 px-6 flex flex-col bg-zinc-950/70 rounded-xl'>
        <h4 className='mb-2 text-lg text-center'>How to earn?</h4>

        <ol className='mx-auto list-decimal list-inside'>
          <li className='text-sm'>
            Connect your wallet to the{' '}
            <Link href='https://city.theapesociety.io/' target='_blank' rel='noopener noreferrer' className='text-blue-400'>
              TAS Staking Dashboard
            </Link>
            .
          </li>
          <li className='text-sm'>
            If you&apos;re connecting for the 1st time, you&apos;ll need to purchase some &quot;frames&quot;.
            <br />
            (frames are locked to the buying-wallet, choose your wallet wisely)
          </li>
          <li className='text-sm'>
            Come back later to claim your tokens from the{' '}
            <Link href='https://city.theapesociety.io/' target='_blank' rel='noopener noreferrer' className='text-blue-400'>
              TAS Staking Dashboard
            </Link>
            .
          </li>
        </ol>
      </div>
    </PageContainer>
  );
};

export default Page;
