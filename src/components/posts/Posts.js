import {useEffect, useState} from "react";
import {getUsersPost} from "../../services/post.service";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState([]);
    useEffect(() => {
        getUsersPost().then(value => setPosts([...value]))
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