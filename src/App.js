// 1
// - Коротко : отримати всіх юзерів з плейсхолдеру, та відтворити на сторіці,
//     отримати всі пости з плейсхолдеру, та відтворити на сторіці,
//     отримати всі пости з плейсхолдеру, та відтворити на сторіці

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
    return (
        <div>
            <Users/>

            <Posts/>

            <Comments/>
        </div>
    );

}

