// async function fetchApi() {
//     let data = await fetch('http://localhost:3000/api/getAll')
//     .then(response => response.json())
//     .then(data => {
//         console.log("api data: ", data);
//     })
//     .catch(error => console.error("error: ", error));
// }

// fetchApi()

// document.addEventListener('DOMContentLoaded', function() {
//     fetch('http://localhost:3000/api/getAll')
//         .then(response => response.json())
//         .then(data => {
//             const userList = document.getElementById('user-list');
//             data.forEach(user => {
//                 const userDiv = document.createElement('div');
//                 userDiv.classList.add('user');
//                 userDiv.innerHTML = `
//                     <p><strong>Name:</strong> ${user.firstname} ${user.lastname}</p>
//                     <p><strong>Email:</strong> ${user.email}</p>
//                     <p><strong>Phone:</strong> ${user.phone}</p>
//                     <p><strong>Birthday:</strong> ${user.birthday}</p>
//                 `;
//                 userList.appendChild(userDiv);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// });
let dataAPi = {

}


const userList = document.getElementById('user-list');

function fetchAndUpdateUsers() {
    fetch('http://localhost:3000/api/getAll')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            userList.innerHTML = '';
            data.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');
                userDiv.innerHTML = `
                    <p><strong>Name:</strong> ${user.firstname} ${user.lastname}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Birthday:</strong> ${user.birthday}</p>
                `;
                userList.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

setInterval(fetchAndUpdateUsers, 1000);

fetchAndUpdateUsers();

