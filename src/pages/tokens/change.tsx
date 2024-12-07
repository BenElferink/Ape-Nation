import Link from 'next/link'
import TokenHeader from '../../components/tokens/TokenHeader'
import TokenPrerequisites from '../../components/tokens/TokenPrerequisites'
import TokenWhoEarns, { WhoCanEarn } from '../../components/tokens/TokenWhoEarns'
import PageContainer from '../../components/layout/PageContainer'
import { LINKS } from '@/constants'

const TOKEN_IMAGE_SRC = '/media/tokens/change/token.png'
const TOKEN_POLICY_ID = 'd55bf9d2ad12cc55e4ed29d97c64dba0e4905d3c80f800449f3d51f0'
const TOKEN_NAME = 'CHANGE'
const PROJECT_NAME = 'Steve3p_0'
const WHO_CAN_EARN: WhoCanEarn = ['Ape Nation', 'Bloodline']

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
            <Link href={LINKS['MUTANTS_STAKING']} target='_blank' rel='noopener noreferrer' className='text-blue-400'>
              ML Staking Dashboard
            </Link>
            .
          </li>
          <li className='text-sm'>Click &quot;activate off-chain staking&quot; and sign the TX.</li>
          <li className='text-sm'>That&apos;s it, you&apos;re accumulating.</li>
        </ol>
      </div>
    </PageContainer>
  )
}

export default Page
