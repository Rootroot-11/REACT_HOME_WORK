import {useEffect, useState} from "react";
import {getUsersPost} from "../../services/post.service";
import Post from "../post/Post";

export default function () {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsersPost().then(value => setPosts([...value]))
    }, []);

    return (
        <div>
            {
                posts.map(value => <Post key={value.id}
                                         item={value}/>)
            }

        </div>
    );
}