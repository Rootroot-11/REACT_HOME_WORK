import {useEffect, useState} from "react";
import {getCommentsofUser} from "../../services/comments.service";
import Comment from "../comment/Comment";

export default function Comments(item) {

    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState([]);

    useEffect(() => {
        getCommentsofUser().then(value => setComments([...value]))
    }, []);
    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
}