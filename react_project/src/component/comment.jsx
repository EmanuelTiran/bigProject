import React, { useState, useEffect } from "react";
import axios from 'axios';

const Comment = ({ postId }) => {
    const [comment, setComment] = useState([]);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [mail, setMail] = useState("");

    const handleUsernameChange = (event) => {
        setName(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleMailChange = (event) => {
        setMail(event.target.value);
    };

    const deleteComment = async (id) => {
        try {
            const user = localStorage.getItem('currentUser');
            let currentUser = JSON.parse(user)

            if (getUserIdFromCommentId(id) === currentUser.id_user) {
                const response = await axios.delete(`http://localhost:5300/comment/${id}`);
                
                console.log(response);
                removeCommentById(id);
            } else {
                alert("This comment does not belong to you!!!");
            }
        } catch (error) {
            console.error('Error occurred during authentication:', error);
        }
    };

    const removeCommentById = (id) => {
        setComment(prevComments => prevComments.filter(comment => comment.id_comment !== id));
    };

    const addComment = async ({ postId }) => {
        try {
            const response = await axios.post(`http://localhost:5300/comment`, { name: name, content: content, mail: mail, postId: postId }); // הוספת post_id לבקשה
            // const response2 = await axios.get(`http://localhost:5300/comment`);
            console.log(response);
            setComment([...comment, response.data]);
        } catch (error) {
            console.error('Error occurred during authentication:', error);
        }
    };
    const getUserIdFromCommentId = async ({ commentId }) => {
        try {
            const response = await axios.get(`http://localhost:5300/comment/userIdFromComment`, { comment_id: commentId });
            console.log(response.data);
            return response.data.userID;
        } catch (error) {
            console.error('Error occurred during authentication:', error);
        }
    };

    useEffect(() => {
        const getComments = async () => {
            try {
                const response = await axios.get(`http://localhost:5300/comment/${postId}`); // קבלת תגובות לפי postId

                if (response.data.authenticated) {
                    console.log('comment failed.');
                    return "comment failed";
                } else {
                    console.log('comment successful!');
                    console.log(response.data);
                    setComment(response.data);
                    return response.data;
                }
            } catch (error) {
                console.error('Error occurred during authentication:', error);
            }
        };

        getComments();
    }, [postId]); // הפעלה מחדש רק כש postId משתנה

    return (
        <div>
            <h4>Comments:</h4>
            {comment
                .filter((comment) => comment.post_id === postId)
                .map((comment) => (
                    <div id="comment" key={comment.id_comment}>
                        <p>Comment ID: {comment.id_comment}</p>
                        <p>Content: {comment.content}</p>
                        <p>Name: {comment.name}</p>
                        <p>Email: {comment.mail}</p>
                        <button onClick={() => deleteComment(comment.id_comment)}>erase that comment</button>
                    </div>
                ))}
            <button onClick={() => addComment({ postId })}>add comment</button>
            <input
                type="text"
                id="name"
                placeholder="name"
                onChange={handleUsernameChange}
                value={name}
            />
            <input
                type="text"
                id="content"
                placeholder="content"
                onChange={handleContentChange}
                value={content}
            />
            <input
                type="text"
                id="mail"
                placeholder="mail"
                onChange={handleMailChange}
                value={mail}
            />
        </div>
    );
};

export default Comment;
