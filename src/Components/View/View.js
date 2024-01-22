import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { postContext } from '../../store/postContext';
import { FirebaseContext } from '../../store/firebaseContext';


function View() {
 
  const [userDetails,setuserDetails] = useState([]);
  const { postDetails } = useContext(postContext)
  const { firebase } = useContext(FirebaseContext);
  const { userId } = postDetails
  console.log(userId,'ooooooooooooo');
   
  useEffect(()=>{

    const { userId } = postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc =>{
       setuserDetails(doc.data())
      })
    })
  })

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />  
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 250000 </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.userName}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
   
  );
}
export default View;
