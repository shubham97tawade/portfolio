'use client'

import { useRouter } from "next/navigation"

export default function BlogsErrorPage(){
    const router = useRouter();
    const navigateToHome = () => {
        router.push('/blogs')
    }

    return (
        <div className="grid w-full h-screen place-items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-7xl font-bold mb-4">Oops</h1>
                <p className="text-center px-2">Something went wrong. Please click on the button below to go back to blogs homepage.</p>
                <button className="mt-4 items-center px-8 py-3 justify-center bg-black text-white text-base rounded-lg transition duration-300 shadow-md hover:shadow-sm focus:outline-none" onClick={navigateToHome}>Home</button>
            </div>
        </div>
    )

}