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
    <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
  </div>
  <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul>
      <li>${user.followers} <strong>Followers</strong></li>
      <li>${user.following} <strong>Following</strong></li>
      <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>

    <div id="repos">
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

