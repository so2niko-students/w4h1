export class UserListView{
    constructor(onSearch){
        this.dom.searchInp.addEventListener('input', onSearch);
    }

    dom = {
        userTable : document.querySelector('.table-user-data'),
        searchBtn : document.querySelector('.search_btn'),
        searchInp : document.querySelector('.search_input')
    }

    getSearch = () => {
        return this.dom.searchInp.value;
    }

    renderUsers = (data, listener) => {    
        this.dom.userTable.innerHTML = '';
        const tableRows = data.map(this.getUserHTML).join('');
        this.dom.userTable.insertAdjacentHTML('afterbegin', tableRows);

        this.addListeners(listener);
    }   

    addListeners = (listener) => {
        document.querySelectorAll('.user_edit_btn').forEach(btn => btn.addEventListener('click', listener));
        
    }

    getStatusStyleName = status => {
        const statusMap = {
            'Sunday'    : 'bg-green-100 text-green-800',
            'Monday'    : 'bg-red-100 text-red-800',
            'Tuesday'   : 'bg-gray-100 text-gray-800',
            'Wednesday' : 'bg-gray-100 text-red-800',
            'Thursday'  : 'bg-green-100 text-gray-800',
            'Friday'    : 'bg-gray-100 text-orange-800',
            'Saturday'  : 'bg-gray-800 text-yellow-200',
        }
        return statusMap[status];
    }

    getUserHTML = ({ avatar, city, country, status, name, surname, login, email, password, phone, roleName, statusName }) => {
        const statusStyle = this.getStatusStyleName(status);
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
                <a href="#" class="text-indigo-600 hover:text-indigo-900 user_edit_btn">Edit</a>
            </td>
        </tr>
        `;
    }
}