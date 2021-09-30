// - Коротко : отримати всіх юзерів з плейсхолдеру, та відтворити на сторінці,
//     отримати всі пости з плейсхолдеру, та відтворити на сторінці,
//     отримати всі коментарії з плейсхолдеру, та відтворити на сторінці

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
