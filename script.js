// This is goint to be root, the request are gonna be made with the root + username and repos
const APIURL = 'https://api.github.com/users/'

getUser('wichofly')

async function getUser(username) {
  try {
    // we can destructure to get just the data "{data}"
    const { data } = await axios(APIURL + username)

    console.log(data)
  } catch (err) {
    console.log(err)
  }

}

// Example axios without async await
// ----------------------------
// function getUser(username) {
//   // As well can be written as axios.get(...)
//   axios(APIURL + username)
//     // ** One advantage using axios is that we dont have to write "res.json()"
//     // to then make another promise and get the data e.g. ".then((data) => {} **"
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
// }

