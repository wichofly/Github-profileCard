// This is goint to be root, the request are gonna be made with the root + username and repos
const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// getUser('wichofly')

async function getUser(username) {
  try {
    // we can destructure to get just the data "{data}"
    const { data } = await axios(APIURL + username)

    createUsercard(data)
  } catch (err) {
    console.log(err)
  }
}

function createUsercard(user) {
  const cardHTML = `
  <div class="card">
  <div>
    <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="" class="avatar">
  </div>
  <div class="user-info">
    <h2>Juana Valiente</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, obcaecati.
    </p>
    <ul>
      <li>300 <strong>Followers</strong></li>
      <li>100 <strong>Following</strong></li>
      <li>30 <strong>Repos</strong></li>
    </ul>

    <div id="repos">
      <a href="#" class="repo">Repo 1</a>
      <a href="#" class="repo">Repo 2</a>
      <a href="#" class="repo">Repo 3</a>
    </div>
  </div>
</div>
`

main.innerHTML = cardHTML

}

// We get the users by submitting the form
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = search.value

  if (user) {
    getUser(user)

    search.value = ''
  }
})

// Example axios without async await
// ----------------------------
// function getUser(username) {
//   // As well it can be written as axios.get(...)
//   axios(APIURL + username)
//     // ** One advantage using axios is that we dont have to write "res.json()"
//     // to then make another promise and get the data e.g. ".then((data) => {} **"
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
// }

