const getCommentsofUser = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
};

export {getCommentsofUser}