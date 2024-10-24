import Link from 'next/link';
import TokenHeader from '../../components/tokens/TokenHeader';
import TokenPrerequisites from '../../components/tokens/TokenPrerequisites';
import TokenWhoEarns, { WhoCanEarn } from '../../components/tokens/TokenWhoEarns';
import PageContainer from '../../components/layout/PageContainer';

const TOKEN_IMAGE_SRC = '/media/tokens/idp/token.png';
const TOKEN_POLICY_ID = 'b9168f05e657b6946fede254e383586cf7e7a2573d5a0fa12b3ef6ac';
const TOKEN_NAME = 'IDP';
const PROJECT_NAME = 'IDO Pass DAO';
const WHO_CAN_EARN: WhoCanEarn = ['Ape Nation', 'Bloodline'];

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
            <Link href='https://dapp.ada-anvil.io/' target='_blank' rel='noopener noreferrer' className='text-blue-400'>
              IDP Staking Dashboard
            </Link>
            .
          </li>
          <li className='text-sm'>
            Click on{' '}
            <Link href='https://dapp.ada-anvil.io/en/new-stake' target='_blank' rel='noopener noreferrer' className='text-blue-400'>
              &quot;add NFT to vault&quot;
            </Link>
            .
          </li>
          <li className='text-sm'>Select the NFTs you want to stake.</li>
          <li className='text-sm'>That&apos;s it, all done.</li>
        </ol>
      </div>
    </PageContainer>
  );
};

export default Page;
