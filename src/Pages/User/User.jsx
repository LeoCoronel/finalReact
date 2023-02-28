import React from 'react'
import { auth } from '../../firebase/firebase-utils';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.user);
  return (
    <div>
        <p>{currentUser.displayName}</p>
        <button onClick={() => {
            auth.signOut();
        }}>logout</button>
    </div>
    
  )
}

export default User