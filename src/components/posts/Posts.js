import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.api";
import Post from "../post/Post";

export default function Posts({history}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, []);

    return (
        <div>
            {
                posts.map(value => <Post history={history} item={value} key={value.id}/>)
            }
        </div>
    );

}