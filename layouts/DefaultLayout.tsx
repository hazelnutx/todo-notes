import Link from 'next/link'
import NavButtons from '@/components/ui/NavButtons'

export default function DefaultLayout({ children }) {
  const navigationButtons = [
    { id: 1, name: 'Home', path: '#', drawer: false },
    { id: 2, name: 'Todo List', path: '#', drawer: false },
    {
      id: 1,
      name: 'Notes',
      path: '#',
      drawer: true,
    },
  ]

  return (
    <div className='p-0 m-0 bg-coolGray-700 flex sm:flex-row flex-col-reverse min-h-screen min-w-7xl mx-auto'>
      <div className=' bg-coolGray-600 top-0 w-24 md:w-48 h-full sm:h-screen sticky sm:flex flex-col-reverse sm:flex-col'>
        <div className='px-3 py-2 h-36'>username, settings, search input</div>
        <div className='flex flex-col space-y-1'>
          {navigationButtons.map((button) => (
            <NavButtons id={button.id} path={button.path} name={button.name} />
          ))}
        </div>
      </div>
      <div className='flex-1'>
        <div className='text-white sticky top-0 min-w-full h-16 flex flex-row justify-between items-center px-5 mb-2 bg-coolGray-700'>
          <div>path crumbs</div>
          <div>some more settings</div>
        </div>
        <div className='ml-2 mr-2 text-white'>{children}</div>
      </div>
    </div>
  )
}
