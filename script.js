// This is goint to be the root, the request are gonna be made with the root + username and repos
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
    getRepos(username)
  } catch (err) {
    if (err.response.status == 404) {
      creatErrorCard('In our data, does not exist an user with this username')
    }
  }
}

async function getRepos(username) {
  try {
    // we can destructure to get just the data "{data}"
    const { data } = await axios(APIURL + username + '/repos?sort=created')  // using "?sort=created" for this API, we get he last repos made.

    addReposToCard(data)
  } catch (err) {
    creatErrorCard('Problem fetching repos')
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
    <p>${user.bio || 'Bio is not available for this user'}</p>
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

  // Another alternative to show bio when is null
  // ---------------------------------------------
  {/* <p><p>${user.bio == null ? "Bio is not available for this user" : user.bio}</p> */ }

}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')

  repos
    .slice(0, 10) // Getting just 10 repos
    .forEach(repo => {
      const repoEl = document.createElement('a')
      repoEl.classList.add('repo')
      repoEl.href = repo.html_url
      repoEl.target = '_blank' // opens in a new window
      repoEl.innerText = repo.name // Text inside the link

      reposEl.appendChild(repoEl) // Inserting to the DOM
    });
}


function creatErrorCard(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    <div>
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

