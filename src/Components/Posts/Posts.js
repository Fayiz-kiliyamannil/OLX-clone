import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/firebaseContext';
import { postContext } from '../../store/postContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Posts() {

  const [products, setProducts] = useState([])
const {postDetails,setPostDetails} = useContext(postContext)
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory()
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPost);

    }).catch((error)=>{
      console.error('firebase error...');
    })
  }, [])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((obj) => {
            setPostDetails(obj)
            console.log(postDetails,"------------");
            return (
              <div
                className="card"
                onClick={()=>{
                  setPostDetails(obj)
                  console.log(postDetails);
                  history.push('/view')
                  
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={obj.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9;{obj.price}</p>
                  <span className="kilometer">{obj.category}</span>
                  <p className="name">{obj.name}</p>
                </div>
                <div className="date">
                  <span>{obj.createdAt}</span>
                </div>
              </div>)
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards2">
       {products.map((obj)=>{
        return(
          <div onClick={()=>{
            setPostDetails(obj)
            history.push('/view')
          }} className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={obj.url} />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{obj.price}</p>
              <span className="kilometer">{obj.category}</span>
              <p className="name">{obj.name}</p>
            </div>
            <div className="date">
              <span>{obj.createdAt}</span>
            </div>
          </div>
       
        )
       })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
