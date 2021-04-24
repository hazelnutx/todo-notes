export default function TodoContainer({ uid, title, complete, clickMethod }) {
  return (
    <button onClick={() => clickMethod(uid)}>
      <div
        className='bg-white flex flex-row justify-between items-center'
        key={uid}
      >
        <div>
          <h2 className='font-semibold text-black'>{title}</h2>
          <p className='text-black'>{complete ? 'complete' : 'not complete'}</p>
        </div>
      </div>
    </button>
  )
}
