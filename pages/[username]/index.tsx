import { useState, useEffect } from 'react'
import DefaultLayout from '@/layouts/DefaultLayout'
import TodoContainer from '@/components/TodoContainer'

export default function UserDashboard({ todos }) {
  const [complete, setComplete] = useState()

  const completeMethod = (id) => {
    const todo = todos.data[id]
    setComplete({ ...todo, complete: (todo.complete = !todo.complete) })
  }

  return (
    <DefaultLayout>
      <div className='flex flex-row'>
        <div className='w-3/12 bg-red-300 flex flex-col px-2 py-1 '>
          <div className='h-9'>
            <h1 className='text-white font-medium text-xl'>What to do?</h1>
          </div>
          <div className='h-7 bg-red-800 flex flex-row justify-between items-center'>
            <h2 className='font-semibold'>TitleOfTodo</h2>
            <h3 className='text-white font-sm font-light'>date</h3>
          </div>
          <div className='bg-blue-400 my-1 flex flex-col'>
            {todos.data.map((todo, index) => (
              <TodoContainer
                key={todo.uid}
                uid={todo.uid}
                title={todo.todo}
                complete={todo.complete}
                clickMethod={() => completeMethod(index)}
              />
            ))}
          </div>
          <div className='bottom-0 bg-gray-300'>CompletedTodos</div>
        </div>
        <div className='w-2/12 bg-blue-300'>Menu</div>
        <div className='flex-1 bg-green-300'>MD</div>
      </div>
    </DefaultLayout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/mock/todo')
  const todos = await res.json()

  console.log(JSON.stringify(todos))

  return {
    props: {
      todos,
    },
  }
}
