import Link from 'next/link';
import TokenHeader from '../../components/tokens/TokenHeader';
import TokenPrerequisites from '../../components/tokens/TokenPrerequisites';
import TokenWhoEarns, { WhoCanEarn } from '../../components/tokens/TokenWhoEarns';
import PageContainer from '../../components/layout/PageContainer';

const TOKEN_IMAGE_SRC = '/media/tokens/c4/token.png';
const TOKEN_POLICY_ID = 'a00fdf4fb9ab6c8c2bd1533a2f14855edf12aed5ecbf96d4b5f5b939';
const TOKEN_NAME = 'C4';
const PROJECT_NAME = 'Cardano Crocs Club';
const WHO_CAN_EARN: WhoCanEarn = ['Ape Nation', 'Mutation Nation'];

const Page = () => {
  return (
    <PageContainer>
      <TokenHeader projectName={PROJECT_NAME} tokenName={TOKEN_NAME} tokenSrc={TOKEN_IMAGE_SRC} policyId={TOKEN_POLICY_ID} />
      <TokenWhoEarns whoCanEarn={WHO_CAN_EARN} />
      <TokenPrerequisites
        items={[
          {
            imageUrl: '/media/tokens/c4/living-land.png',
            purchaseUrl: 'https://www.jpg.store/collection/swamplandslivinglands',
            texts: ['CCC - Living Land', '1 = stake 1 NFT(s)'],
          },
        ]}
      />

      <div className='w-full my-2 p-4 px-6 flex flex-col bg-zinc-950/70 rounded-xl'>
        <h4 className='mb-2 text-lg text-center'>How to earn?</h4>

        <ol className='mx-auto list-decimal list-inside'>
          <li className='text-sm'>
            Connect your wallet to the{' '}
            <Link href='https://swamplands.cardanocrocsclub.com/' target='_blank' rel='noopener noreferrer' className='text-blue-400'>
              CCC Swamp
            </Link>
            .
          </li>
          <li className='text-sm'>
            Navigate to the{' '}
            <Link href='https://swamplands.cardanocrocsclub.com/wallet' target='_blank' rel='noopener noreferrer' className='text-blue-400'>
              Wallet
            </Link>{' '}
            page.
          </li>
          <li className='text-sm'>Send/deposit your Living Lands to the custodial wallet.</li>
          <li className='text-sm'>
            Navigate to the{' '}
            <Link
              href='https://swamplands.cardanocrocsclub.com/staking/swamp-lands-aplications'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400'
            >
              Land Staking
            </Link>{' '}
            tab.
          </li>
          <li className='text-sm'>Select your Living Lands and stake your NFTs.</li>
        </ol>
      </div>
    </PageContainer>
  );
};

export default Page;
