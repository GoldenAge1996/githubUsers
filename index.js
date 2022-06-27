const API_URL = 'https://api.github.com/users/'



const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")



form.addEventListener("submit", (e) => doit(e) )

async function getUser(username){

    try{
        const res = await fetch(API_URL + username)
        const result = await res.json()
    
       createCard(result)
       getRepos(username)
    } catch{


    }

}

async function getRepos(username){

    try{
        const res = await fetch(API_URL + username + '/repos')
        const result = await res.json()
    
       addrepos(result)
    } catch{


    }

}

function addrepos(repos){
   const rep = document.getElementById("repos")

repos

.forEach(repo => {
    const repoEl = document.createElement('a')
    repoEl.classList.add("repo")
    repoEl.href = repo.html_url
    repoEl.innerText = repo.name

    rep.appendChild(repoEl)
});
}


function createCard(user){
    main.innerHTML = `
    <div class="image">
    <img src="${user.avatar_url}" alt="">
</div>

<div class="info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul>
        <li>${user.followers} followers</li>
        <li>${user.following} following</li>
        <li>${user.public_repos} public repos</li>
    </ul>
    <div id="repos"></div>
</div>
    
    `
}

function doit(e){
    e.preventDefault()

    const searching = search.value

if(searching){
    getUser(searching)

    search.value = ''
}
}
