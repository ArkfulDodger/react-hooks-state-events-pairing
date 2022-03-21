import React, { useState, useEffect } from "react";

function Comment ({ comment }) {
    console.log(comment);
    return (
        <div>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
        </div>
    );
}

export default Comment;