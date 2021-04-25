import classNames from 'classnames'

export default function TodoContainer({ uid, title, complete, clickMethod }) {
  const classes = classNames({
    'font-semibold text-black': true,
    ' line-through': complete,
  })
  return (
    <button onClick={() => clickMethod(uid)}>
      <div
        className='bg-white flex flex-row justify-between items-center'
        key={uid}
      >
        <div>
          <h2 className={classes}>{title}</h2>
        </div>
      </div>
    </button>
  )
}
