// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//         6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу
//         про поточний пост.

let url = 'https://jsonplaceholder.typicode.com/users/';
const getId = new URL(location.href).searchParams.get('id');

fetch(url + getId).then(value => value.json())
    .then(user => {
        // console.log(user)
        let wrap = document.createElement('div');
        let ul = document.createElement('ul');
        ul.classList.add('ul')
        userBilder(user, ul)

        wrap.append(ul);
        document.body.appendChild(wrap);
    })

function userBilder(userObj, tag) {
    for (const key in userObj) {
        if (typeof userObj[key] === 'object') {
            let ul = document.createElement('ul');
            ul.innerHTML = `<b>${key}</b>`;
            tag.appendChild(ul);
            userBilder(userObj[key], ul);

        } else {

            let li = document.createElement('li');
            li.innerText = `${key}:${userObj[key]}`;
            tag.appendChild(li);

        }
    }
}


               setTimeout(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${getId}/posts`).then(value => value.json())
            .then(posts => {
               let wrapperBtn=document.createElement('div')
                wrapperBtn.classList.add('wrapperBtn');

                let btn = document.createElement('button');
                btn.innerText = `post of current user`;
                btn.classList.add('btn_postOfCur');

                let wrapPosts= document.createElement("div")
                wrapPosts.classList.add('wrapPosts');

                for (const post of posts) {
                    let wrapTitle = document.createElement("div");
                    wrapTitle.classList.add('wrapTitle');

                    let h3 = document.createElement('h3');
                    h3.innerText = `${post.title}`;
                    wrapTitle.style.display='none';
                    let postBtn = document.createElement('button');
                    postBtn.classList.add('postBtn')
                    postBtn.innerText='details'
                    postBtn.onclick=()=>{
                        location.href=`post-details.html?post-id=`+JSON.stringify(post.id);
                    }



                    wrapTitle.append(h3, postBtn);
                    let status = true;
                    btn.addEventListener('click', (e) => {
                        e.defaultPrevented
                        if (!status) {
                            wrapTitle.style.display = 'none'
                        } else {
                            wrapTitle.style.display = 'block'
                        }
                        status = !status
                    });
                    wrapPosts.appendChild(wrapTitle)
                    document.body.append(wrapPosts);
                }
                wrapperBtn.appendChild(btn);
                document.body.appendChild(wrapperBtn);
            })
            },10)




