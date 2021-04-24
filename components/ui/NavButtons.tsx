import Link from 'next/link'

interface Props {
  id: number
  name: string
  path: string
  drawer?: boolean
}

export default function NavButtons({ id, path, name, drawer }: Props) {
  return (
    <Link href={path} key={id}>
      <a className='hover:bg-coolGray-500 w-full h-7 flex flex-row items-center px-3'>
        <div className='text-white text-sm mr-1'>&copy;</div>
        <div className='text-white text-sm'>{name}</div>
      </a>
    </Link>
  )
}
