export default (req, res) => {
  res.status(200).json({
    data: [
      {
        username: 'hazelnutx',
        email: 'raul@gmail.com',
        password: 'test123',
        firstname: 'Rusu',
        lastname: 'Raul',
        confirmed: true,
      },
    ],
  })
}
/**
 * username
 * email
 * password
 * nume
 * prenume
 * confirmed (bool)
 */
