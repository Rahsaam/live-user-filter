const result = document.querySelector('#result')
const filter = document.querySelector('.filter')
const userList = []

filter.addEventListener('keyup', (e) => {
    filterName(e.target.value)
})

getData()

async function getData() {
    const res = await fetch ('https://randomuser.me/api?results=50')

    const {results} = await res.json()

    // console.log(results);
    // clear data
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')
        userList.push(li)
        li.innerHTML = `
            <img src = "${user.picture.medium}" alt = "${user.name.first}">
            
            <div class = "user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.country}, ${user.location.city}</p>
            </div>
        `
        result.appendChild(li)
    });
}

function filterName(searchTerm) {
    userList.forEach(person => {
        if(person.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            person.classList.remove('hide')
        } else {
            person.classList.add('hide')
        }
    })
}