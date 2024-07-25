import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'

import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

function OAuth() {

  const dispatch = useDispatch();
 
  const hangleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      // console.log(result);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL
        }),
      });
      const data = await res.json();
      console.log(data);
      dispatch(signInSuccess(data));
    } catch (error) {
       console.log('could not login with goole', error);
    }
  }

  return (
    <button type='button' onClick={hangleGoogleClick} className='bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95'> Continue With google </button>
  )
}

export default OAuth