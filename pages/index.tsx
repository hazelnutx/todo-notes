import Head from 'next/head'
import DefaultLayout from '@/layouts/DefaultLayout'

function Test() {
  return (
    <div className='divide-y devide-gray-200'>
      {Array.from({ length: 50 }, (_, i) => (
        <div key={i}>test</div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <main>Presentation page</main>
    </div>
  )
}
