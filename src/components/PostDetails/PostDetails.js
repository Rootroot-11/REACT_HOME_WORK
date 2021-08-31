import {useEffect, useState} from "react";
import {getPost} from "../../services/posts.api";

export default function PostDetails({history, match:{params:{id}}}) {

        const [post, setPost] = useState({});

        useEffect(() =>{
            getPost(id).then(value => setPost({...value}))
        },[id]);
  return (
    <div>
        {JSON.stringify(post)}
    </div>
  );
}