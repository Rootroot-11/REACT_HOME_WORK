import {useEffect, useState} from "react";
import Post from "../post/Post";
import {getPostsofUser} from "../../services/post.service";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsofUser().then(value => setPosts([...value]))
    }, []);
    return (
        <div>
            <div>
                {
                    posts.map(value => <Post key={value.id}
                                             item={value}/>)
                }

            </div>

        </div>

    );
}