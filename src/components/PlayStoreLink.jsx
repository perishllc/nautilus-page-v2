import Link from 'next/link'
import clsx from 'clsx'

export function PlayStoreLink({ color = 'black' }) {
  return (
    <Link
      href="#"
      aria-label="Download on the App Store"
      className={clsx(
        'rounded-lg transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50'
      )}
    >
      <img src="https://imagedelivery.net/uA65-M4gr037oB0C4RNdvw/6c37de35-3ef8-4dd1-ba97-62d5b57fea00/public"/>
    </Link>
  )
}
