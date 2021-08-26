export class UserListModel{
    url = 'https://609a76db0f5a13001721b1e9.mockapi.io/api/v1/users';
    postUser = user => {
        fetch(this.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          }).then(console.log);
    }

    getData = () => {
        return fetch(this.url)
            .then(r => r.json())
            .then(this.formatData); 
    }

    formatData = data => {
        this.users = data;
        data.forEach(el => {
            el.roleName = this.getRoleName(el.role);
            el.statusName = this.getStatusName(el.status);
        });
        return data;
    }

    getStatusName = (statusOld) => {
        const statuses = {
            'Sunday'    : 'Active',
            'Monday'    : 'Not active',
            'Tuesday'   : 'Not avaliable',
            'Wednesday' : 'Dead',
            'Thursday'  : 'Hidden',
            'Friday'    : 'In prison',
            'Saturday'  : 'Wanted'
        }
        return statuses[statusOld];
    }

    getRoleName = role => {
        const roles = {
            'Sunday'    : 'Don',
            'Monday'    : 'Consiliery',
            'Tuesday'   : 'Under Boss',
            'Wednesday' : 'Capo',
            'Thursday'  : 'Soldier',
            'Friday'    : 'Associate',
            'Saturday'  : 'Victim'
        }
    
        return roles[role];
    }

    findUsers = searchText => {
        if(searchText === ''){ return this.users; }
        const searchReg = new RegExp(`${ searchText }`, 'i');
        const searchedUsers = this.users.filter(({ name, surname, email, login }) => {
            return [name, surname, email, login].some(el => searchReg.test(el));
        });

        return searchedUsers;
    }
}