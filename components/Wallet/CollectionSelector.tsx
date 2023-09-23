import { LockClosedIcon } from '@heroicons/react/24/outline'
// import useWallet from '@/contexts/WalletContext'
import ImageLoader from '../Loader/ImageLoader'
import type { PolicyId } from '@/@types'
import collectionsFile from '@/data/collections.json'

const CollectionSelector = (props: { onSelected: (_policyId: PolicyId) => void; withWallet?: boolean }) => {
  const { onSelected, withWallet = false } = props
  // const { populatedWallet } = useWallet()

  return (
    <div className='max-w-[690px] mx-auto flex flex-wrap items-center justify-center'>
      {collectionsFile.map((coll) => {
        const ownsThisCollection = !!withWallet
          ? false // Object.entries(populatedWallet?.assets || {}).find(([policyId, assets]) => coll.policyId === policyId && !!assets.length)
          : true

        return (
          <button
            key={`collection-${coll.policyId}`}
            type='button'
            onClick={() => {
              if (ownsThisCollection) {
                onSelected(coll.policyId as PolicyId)
              }
            }}
            className={
              'relative flex flex-col items-center w-[200px] m-1 mx-2 bg-gray-900 bg-opacity-50 rounded-xl border border-gray-700  ' +
              (ownsThisCollection ? 'hover:bg-gray-700 hover:bg-opacity-50 hover:border-gray-500 hover:text-white' : 'cursor-not-allowed')
            }
          >
            <ImageLoader
              src={coll.image}
              alt={coll.name}
              width={200}
              height={200}
              style={{
                width: 200,
                height: 200,
                borderRadius: '0.75rem 0.75rem 0 0',
                objectFit: 'contain',
              }}
            />
            <h6 className='w-full m-1 text-center text-lg font-light truncate'>{coll.name}</h6>

            <div
              className={
                ownsThisCollection
                  ? 'hidden'
                  : 'w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-xl'
              }
            >
              <LockClosedIcon className='w-3/4 h-3/4 text-gray-200' />
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default CollectionSelector
