import {useEffect, useState} from "react";
import {getCommentsofUser} from "../../services/comments.service";
import Comment from "../comment/Comment";

export default function Comments(item) {

    const [comments, setComments] = useState([]);

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