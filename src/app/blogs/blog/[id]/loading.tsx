export default function Loading(){
    return(
        <div className="grid w-screen min-h-screen place-items-center bg-gray-100 md:p-12">
            <div className="bg-white w-full p-8 h-screen md:h-auto">
                <div className="animate-pulse">
                <div className="h-24 bg-gray-300 rounded w-1/2 mb-8"></div>
                <span className="flex flex-row justify-between">
                    <div className="h-12 bg-gray-300 rounded w-1/6 mb-12"></div>
                    <div className="h-12 bg-gray-300 rounded w-1/6 mb-12"></div>
                </span>
                <div className="space-y-4">
                    <div className="h-8 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-8 bg-gray-300 rounded w-4/6"></div>
                    <div className="h-8 bg-gray-300 rounded w-3/5"></div>
                </div>
                <div className="h-96 bg-gray-300 rounded my-8"></div>
                <div className="space-y-4">
                    <div className="h-8 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-8 bg-gray-300 rounded w-4/6"></div>
                    <div className="h-8 bg-gray-300 rounded w-3/5"></div>
                </div>
                </div>
            </div>
        </div>
    )
}