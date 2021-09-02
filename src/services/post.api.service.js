const url1 = 'http://jsonplaceholder.typicode.com/posts'
const getPosts = () => fetch(url1)
        .then(value => value.json())

export {getPosts};