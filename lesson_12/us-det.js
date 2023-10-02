
const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${idParam}`).then(value => value.json())
    .then(value => {
        for (const element in value) {
            console.log(element)
            let div = document.createElement('div');
            if (typeof value[element] !== 'object') {
                div.innerText = `${element}: ${value[element]}`
            } else {
                div.innerText = `${element}:`;

                for (const key in value[element]) {
                    let insideElementValue = document.createElement('div')
                    if (typeof value[element] [key] !== 'object') {
                        insideElementValue.innerText = `${key}: ${value[element] [key]}`;
                    } else {
                        insideElementValue.innerText = `${key}:`

                        for (const elementKey in value[element] [key]) {

                            let divElement = document.createElement('div');

                            if (typeof value[element][key][elementKey] !== 'object') {
                                divElement.innerText = `${elementKey}: ${value[element][key][elementKey]}`
                            }
                            insideElementValue.appendChild(divElement);
                        }
                    }
                    div.appendChild(insideElementValue);
                }
            }


            document.body.appendChild(div)
        }


    })


console.log(location.href);