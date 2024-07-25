import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
// this Link redirect the pages with out refreshing the pages
export default function Header() {
  const {currentUser} = useSelector((state) => state.user);
 

  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center
        max-w-6xl mx-auto p-3'>
            {/* max-w-6xl in items ka xoga right ka kso sikadan */}
            <Link to = '/'>
            <h1 className='font-bold'>Auth App</h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to ='/'> <li>Home</li> </Link>
                <Link to = '/about'> <li>About</li> </Link>
                <Link to= '/profile'> 
                {
                  currentUser ? (
                    <img src={currentUser.profilePicture} alt="profile" className='w-7 h-7 rounded-full object-cover' />
                  ) : (<li>Sign In</li>)
                }
                 </Link>
            </ul>
        </div>
    </div>
  )
}
