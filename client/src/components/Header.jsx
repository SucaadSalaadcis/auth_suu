import {Link} from 'react-router-dom'
// this link redirect the pages with out refreshing the pages
export default function Header() {
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
                <Link to= '/sign-up'> <li>Sign Up</li> </Link>
            </ul>
        </div>
    </div>
  )
}
