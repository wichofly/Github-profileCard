// async function getUser(username) {
// 	const res = await axios(APIURL + username)

// 	console.log(res.data)
// }


// Example axios without async await
//----------------------------
// function getUser(username) {
// 	// As well can be written as axios.get(...)
// 	axios(APIURL + username)
// 		// ** One advantage using axios is that we dont have to write "res.json()"
// 		// to then make another promise and get the data e.g. ".then((data) => {} **"
// 		.then(res => console.log(res.data))
// 		.catch(err => console.log(err))
// }


// Example of fetching  "NO AXIOS"
//-------------------------------
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config,)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }


/*
Example of async await "without AXIOS"
--------------------------------------

async function generateJoke() {
    
  const res = await fetch('https://icanhazdadjoke.com')
  const data = await res.json()
  jokeEl.innerHTML = data.joke
}

 - async and await are used with fetch() when you want to make an asynchronous request 
   to a server and handle the response using a cleaner and more readable syntax.

 - Within the function, we use the await keyword to wait for the fetch() and json() methods to complete and return the data from the server.

 - By using async and await, we can avoid using nested then() callbacks, which can make our code harder to read and maintain.

 */