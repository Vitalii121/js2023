// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//         вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users') .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            console.log(valueElement);
            let ul = document.getElementById('userList')
            let userLi=document.createElement('li');
            let a = document.createElement('a');
            a.innerText=`${valueElement.id} - ${valueElement.name}`;
            a.href='./user-details.html?id='+JSON.parse(valueElement.id);


            userLi.appendChild(a);
            ul.appendChild(userLi)
            document.body.appendChild(ul);
        }
    })
