import React from "react";
import Comment from "./Comment";

function Comments ({ comments }) {
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {comments.map(comment => <Comment comment={comment} />)}
        </div>
    );
}

export default Comments;