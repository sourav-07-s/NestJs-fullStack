
import Link from 'next/link'
import favicon from '../app/J-favicon.png'

export default function Navbar() {
    return (
        <nav  className ="rounded-full mt-1.5 bg-gray-500 p-2 flex justify-between  ">

            <div className="container items-center mx-auto text-primary px-4">
            <Link href="/" className="flex items-center gap-2 text-primary font-bold text-3xl">
                <img className="h-8 w-8" src={favicon.src} alt="favicon" />
                Job Tracker
            </Link>
            </div>
        </nav>
    )
}