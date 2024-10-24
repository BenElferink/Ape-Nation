import Link from 'next/link';
import TokenHeader from '../../components/tokens/TokenHeader';
import TokenPrerequisites from '../../components/tokens/TokenPrerequisites';
import TokenWhoEarns, { WhoCanEarn } from '../../components/tokens/TokenWhoEarns';
import PageContainer from '../../components/layout/PageContainer';

const TOKEN_IMAGE_SRC = '/media/tokens/cswap/token.png';
const TOKEN_POLICY_ID = 'bf524874448cbf52be3a26133b0a0edf5eb65c09ffed383b881ad327';
const TOKEN_NAME = 'CSWAP';
const PROJECT_NAME = 'CSWAP DEX';
const WHO_CAN_EARN: WhoCanEarn = ['Ape Nation'];

const Page = () => {
  return (
    <PageContainer>
      <TokenHeader projectName={PROJECT_NAME} tokenName={TOKEN_NAME} tokenSrc={TOKEN_IMAGE_SRC} policyId={TOKEN_POLICY_ID} />
      <TokenWhoEarns whoCanEarn={WHO_CAN_EARN} />
      <TokenPrerequisites items={[]} />

      <div className='w-full my-2 p-4 px-6 flex flex-col bg-zinc-950/70 rounded-xl'>
        <h4 className='mb-2 text-lg text-center'>How to earn?</h4>

        <ol className='mx-auto list-decimal list-inside'>
          <li className='text-sm'>
            Connect your wallet to the{' '}
            <Link href='https://app.cswap.fi/nftstaking' target='_blank' rel='noopener noreferrer' className='text-blue-400'>
              CSWAP Staking Dashboard
            </Link>
            .
          </li>
          <li className='text-sm'>Click &quot;Partner Staking&quot;, then click &quot;Stake&quot;.</li>
          <li className='text-sm'>That&apos;s it, you&apos;re accumulating.</li>
          <li className='text-sm'>Claim your tokens by clicking &quot;Harvest&quot;.</li>
        </ol>
      </div>
    </PageContainer>
  );
};

export default Page;
