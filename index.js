// fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//       .then(response => response.json())
//       .then((data) => console.log(data))


// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:'POST',
//     body:JSON.stringify({
//         name: 'some name'
//     }),
//     headers: {
//         'Content-type':'application/json; charset=UTF-8',
//     },
// })
// .then(response => response.json())
// .then((data) => console.log(data))

// fetch('https://jsonplaceholder.typicode.com/posts/77',{
//     method:'PUT',
//     body:JSON.stringify({
//         name: 'some name'
//     }),
//     headers: {
//         'Content-type':'application/json; charset=UTF-8',
//     },
// })
// .then(response => response.json())
// .then((data) => console.log(data))

// fetch('https://jsonplaceholder.typicode.com/delete/77',{
//     method:'DELETE',
// })
// .then(response => response.json())
// .then((data) => console.log(data))

//-------------------------------------------------------------------//

const root = document.getElementById('root');

const users = {
    1:'Mark',
    2:'Alex',
    3:'John',
    4:'Steve',
    5:'Mike',
    6:'Ana',
    7:'Lena',
    8:'Donna',
    9:'Alexia',
    10:'Milla'
}

function addUserList(list,name) {
    const wrapper = document.createElement('div');
    const postList = document.createElement('ol');
    const title = document.createElement('p');

    title.innerText = `${name}'s posts:`;
    title.style.paddingLeft = '25px';
    title.style.fontWeight = '700';

    list.forEach((post) => {
        const li = document.createElement('li')
        li.innerText = post.title
        postList.appendChild(li)
    });
    wrapper.appendChild(title)
    wrapper.appendChild(postList)
    wrapper.style.width = '30%'
    root.appendChild(wrapper)
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then((data) => {
    for (let key in users) {
        let list = data.filter((list)=>{
            return Number(key) === list.userId
        })
        addUserList(list,users[key])
    }
})





