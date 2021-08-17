const getData = () => {
    const url = 'https://609a76db0f5a13001721b1e9.mockapi.io/api/v1/users';

    const ajax = new XMLHttpRequest();
    ajax.addEventListener('load', () => {
        console.log('LOAD EVENT END');
        // console.log(ajax.responseText);
    });

    ajax.addEventListener('readystatechange', () => {
        console.log(`status: ${ ajax.status }, readyState: ${ ajax.readyState }`);
        console.log(ajax.responseText);
    });


    ajax.open('GET', url, true);
    ajax.send();
}


const myFetch = (url) => {
    return new Promise((res) => {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener('load', () => {
            res({
                json : () => {
                    return JSON.parse(ajax.responseText);
                },
                text : () => {
                    return ajax.responseText;
                }
            });
        });

        ajax.open('GET', url, true);
        ajax.send();
    });
}



const getDataFetch = () => {
    const url = 'https://609a76db0f5a13001721b1e9.mockapi.io/api/v1/users';

    fetch(url)
        .then(r => r.json())
        .then(console.log);
}


// getData();
// getDataFetch();

myFetch('https://609a76db0f5a13001721b1e9.mockapi.io/api/v1/users').then(r => console.log(r.json()));
