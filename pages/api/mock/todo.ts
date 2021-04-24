export default (req, res) => {
  res.status(200).json({
    message: [{ success: true, message: 'Success data' }],
    data: [
      {
        userId: 1,
        uid: 1,
        todo: 'Hope this works :)',
        complete: true,
      },
      {
        userid: 1,
        uid: 2,
        todo: 'Finish this app for yourself',
        complete: false,
      },
      {
        userid: 1,
        uid: 3,
        todo: 'Test 1',
        complete: false,
      },
    ],
  })
}

/**
 * userId
 * uid
 * todo
 * complete (bool - default false)
 */
