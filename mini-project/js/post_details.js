//         На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let urll = 'https://jsonplaceholder.typicode.com/posts/';
const postId = new URL(location.href).searchParams.get('post-id');

fetch(urll + postId).then(value => value.json())
    .then(postBlock => {
        let postWrap = document.createElement('div');
        postWrap.classList.add('postWrap')
        for (const key in postBlock) {
            let postInfo = document.createElement('div');
            postInfo.classList.add('postInfo');
            postInfo.innerHTML = `<b>${key}</b>: ${postBlock[key]}`
            postWrap.appendChild(postInfo);
            document.body.appendChild(postWrap);
        }
    })
setTimeout(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(value => value.json())
        .then(value => {
            let btnComments = document.createElement('button');
            btnComments.classList.add('btnComments');
            btnComments.innerText = 'Comments';

            let wrapComments = document.createElement('div');
            wrapComments.classList.add('wrapComments');

            for (const comment of value) {
                let blockComment = document.createElement('div')
                blockComment.style.display = 'none';
                blockComment.classList.add('comment')
                blockComment.innerHTML = `Name: ${comment.name}<br> Email: ${comment.email}<br> Review: ${comment.body}`
                wrapComments.appendChild(blockComment);

                let status = true;
                btnComments.addEventListener('click', (e) => {
                    e.defaultPrevented
                    if (!status) {
                        blockComment.style.display = 'none'
                    } else {
                        blockComment.style.display = 'block'
                    }
                    status = !status
                });
                document.body.appendChild(wrapComments);
            }

            document.body.appendChild(btnComments);


        })
},10)
