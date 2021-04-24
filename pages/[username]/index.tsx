import DefaultLayout from '@/layouts/DefaultLayout'

export default function UserDashboard() {
  return (
    <DefaultLayout>
      <div className='flex flex-row'>
        <div className='w-3/12 bg-red-300 flex flex-col'>
          <div className='h-9'>
            <h1 className='text-white font-medium text-xl'>TodoListTitle</h1>
          </div>
          <div className='h-5 bg-red-800'>
            <h3 className='text-white font-sm font-thin'>date</h3>
          </div>
          <div className='bg-blue-400'>todos</div>
          <div className='bottom-0 bg-gray-300'>CompletedTodos</div>
        </div>
        <div className='w-2/12 bg-blue-300'>Menu</div>
        <div className='flex-1 bg-green-300'>MD</div>
      </div>
    </DefaultLayout>
  )
}
