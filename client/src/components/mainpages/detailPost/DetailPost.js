import React, {useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {GlobalState} from '../../../GlobalState'
import MadePost from '../utils/post/Post'

function DetailPost() {
    const params = useParams();
    const state = useContext(GlobalState);
    const [userPosts] = state.PostsAPI.posts
    const [detailedPost, setDetailedPost] = useState()

    useEffect(()=>{
        if(params.id) {
            userPosts.forEach(post => {
                if(post._id === params.id) {
                    setDetailedPost(post)
                }  
            })
        }
   
    }, [params.id, userPosts])

    console.log(detailedPost)
   

    return (
        <div>
            hello
        </div>
    );
}

export default DetailPost;