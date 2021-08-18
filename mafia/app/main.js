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
        .then(renderUsers);
}


// getData();


// myFetch('https://609a76db0f5a13001721b1e9.mockapi.io/api/v1/users').then(r => console.log(r.json()));

const randStatus = () => {
    const statuses = ['In prison', 'Not active', 'Not avaliable', 'Dead', 'Hidden'];
    const random = Math.floor(Math.random() * statuses.length);
    return statuses[random];
}

const renderUsers = data => {
    console.log('renderUsers: ', data);

    const tableRows = data.map(renderUser).join('');
    document.querySelector('.table-user-data').insertAdjacentHTML('afterbegin', tableRows);
}

const getStatusStyleName = status => {
    const statusMap = {
        true : {
            statusStyle : 'bg-green-100 text-green-800',
            statusName : 'Active'
        },
        false : {
            statusStyle : 'bg-red-100 text-red-800',
            statusName : randStatus()
        }
    }
    return statusMap[status];
}

const getRoleName = role => {
    const roles = {
        'Sunday' : 'Don',
        'Monday' : 'Consiliery',
        'Tuesday' : 'Under Boss',
        'Wednesday' : 'Capo',
        'Thursday' : 'Soldier',
        'Friday' : 'Associate',
        'Saturday' : 'Victim'
    }

    return roles[role];
}

const renderUser = ({ avatar, city, country, status, name, surname, login, email, password, role, phone }) => {
    const { statusName, statusStyle } = getStatusStyleName(status);
    const roleName = getRoleName(role);
    return `
    <tr>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
                <img class="h-10 w-10 rounded-full" src="${ avatar }" alt="">
            </div>
            <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                ${ name } ${ surname }
                </div>
                <div class="text-sm text-gray-500">
                ${ email }
                </div>
            </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">${ city } ${ country }</div>
            <div class="text-sm text-gray-500">${ phone }</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">${ login }</div>
            <div class="text-sm text-gray-500">${ password }</div>
            </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ statusStyle }">
            ${ statusName }
            </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ${ roleName }
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
        </td>
    </tr>
    `;
}



const mockPost = {
    "createdAt" : "2021-08-18T17:51:22.204Z",
    "name"      : "Ivan",
    "avatar"    : "https://cdn.fakercloud.com/avatars/mylesb_228.jpg",
    "surname"   : "Digidon",
    "login"     : "dondigidon",
    "password"  : "slojniyparol",
    "email"     : "dniprothebest@i.ua",
    "phone"     : "380561234569",
    "role"      : "Sunday",
    "country"   : "Ukraine",
    "city"      : "Dnipro",
    "status"    : true
  };

const postUser = user => {
    const url = 'https://609a76db0f5a13001721b1e9.mockapi.io/api/v1/users'
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then(console.log);
}


getDataFetch();