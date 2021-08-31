import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.api";
import Post from "../post/Post";
import {Route} from "react-router-dom";
import PostDetails from "../PostDetails/PostDetails";

export default function Posts(props) {
    let {match: {url}, history} = props;
    let [posts, setPosts] = useState([]);
    useEffect(() =>{
        getPosts().then(value => setPosts([...value]))
    },[]);
  return (
    <div>
        {posts.map(value => <Post history={history} item={value} key={value.id}/>)}
        <Route exact path={`${url}/:id`} render={(props) => {
        return <PostDetails {...props}/>
        }}/>
    </div>
  );
}