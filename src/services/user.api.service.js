const url = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => fetch(url)
        .then(value => value.json())


export {getUsers};
