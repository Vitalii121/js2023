// setTimeout(()=>{
//     console.log('1')
// },1000)
// console.log('2');
// setTimeout(()=>{
//     console.log('3')
// },4000)

// fetch(`https://dummyjson.com/products`).then(value => value.json())
//     .then(({products}) => {
//         for (const product of products) {
//
//             let wrapper = document.createElement('div');
//
//             let h1 = document.createElement('h1');
//             h1.innerText = product.title;
//
//             let h2 = document.createElement('h2');
//             h2.innerText = `${product.price}$`;
//
//             let descriptions= document.createElement('p');
//             descriptions.innerText=product.description;
//
//             let img = document.createElement('img');
//             img.src = product.thumbnail;
//
//             wrapper.append(h1, h2, descriptions, img);
//             document.body.appendChild(wrapper);
//         }
//     })

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let num = 1;
//         console.log(num);
//         let div = document.createElement('div');
//         div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate eveniet hic minus molestias odio pariatur, quasi vitae. Commodi dolore dolorum eos, id ipsum laborum porro quos repudiandae velit.';
//         document.body.appendChild(div);
//         resolve(num);
//     }, 1000)
// }).then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             value++;
//             console.log(value);
//             if (value === 1) {
//                 resolve(value);
//             } else {
//                 reject('wrong');
//             }
//             let div2 = document.createElement('div');
//             div2.innerText = 'Culpa cupiditate eveniet hic minus molestias odio pariatur, quasi vitae. Commodi dolore dolorum eos, id ipsum laborum porro quos repudiandae velit.';
//             document.body.appendChild(div2);
//         }, 2000)
//     })
// }).then(value => {
//     setTimeout(() => {
//         value++;
//         console.log(value);
//         let div3 = document.createElement('div');
//         div3.innerText = 'Commodi dolore dolorum eos, id ipsum laborum porro quos repudiandae velit.';
//         document.body.appendChild(div3);
//     }, 4000)
// })
//     .catch(reason => console.log(reason));
//
// console.log(promise);


// let fetch1 = fetch('https://dummyjson.com/products/search?q=top').then(value => value.json());
// let fetch2 = fetch('https://dummyjson.com/products/search?q=phone').then(value => value.json());
// let fetch3 = fetch('https://dummyjson.com/products/search?q=laptop').then(value => value.json());
//
// let allFetchs = Promise.all([fetch1, fetch2, fetch3]);
// allFetchs.then(value => {
//     console.log(value)
//     let response= value[0];
//     let response2= value[1];
//     let response3= value[2];
// })


// function doFetch(url) {
//     return fetch(url)
//         .then(value => value.json())
//         .then(value => value.products)
// }
// doFetch('https://dummyjson.com/products/search?q=top')
// .then(value => console.log(value));
// doFetch('https://dummyjson.com/products/search?q=laptop')
// .then(value => console.log(value));


async function asyncFetch(url) {
    let response = await fetch(url).then(value => value.json());
    return response.products;
}

asyncFetch('https://dummyjson.com/products/search?q=top')
    .then(value => console.log(value));

asyncFetch('https://dummyjson.com/products/search?q=laptop')
    .then(value => console.log(value));


