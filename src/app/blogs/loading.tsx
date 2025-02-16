export default function Loading(){
    return(
        <main className="min-w-screem min-h-screen grid place-items-center bg-gray-50 py-8">
            <div className="flex flex-col gap-8 items-center w-5/6">
                <section className="grid grid-rows-2 md:grid-cols-2 w-5/6 md:w-[56rem] bg-white rounded overflow-hidden h-[32rem] md:h-80 animate-pulse">
                    <aside className="grid-row md:row-span-full bg-gray-300 h-full md:h-80 w-full">
                        <div className="h-full w-full"></div>
                    </aside>
                    <article className="grid-row p-6 md:p-8">
                        <div className="h-6 md:h-8 md:h-8 w-2/3 bg-gray-300 rounded mb-6"></div>
                        <div className="space-y-2">
                            <div className="h-4 md:h-6 w-full bg-gray-300 rounded"></div>
                            <div className="h-4 md:h-6 w-5/6 bg-gray-300 rounded"></div>
                            <div className="h-4 md:h-6 w-3/4 bg-gray-300 rounded"></div>
                            <div className="h-4 md:h-6 w-2/3 bg-gray-300 rounded"></div>
                        </div>
                        <div className="mt-6 h-8 md:h-10 w-24 md:w-32 bg-gray-300 rounded-lg"></div>
                    </article>
                </section>
                <section className="grid grid-rows-2 md:grid-cols-2 w-5/6 md:w-[56rem] bg-white rounded overflow-hidden h-[32rem] md:h-80 animate-pulse">
                    <aside className="grid-row md:row-span-full bg-gray-300 h-full md:h-80">
                        <div className="h-full w-full"></div>
                    </aside>
                    <article className="grid-row p-6 md:p-8">
                        <div className="h-6 md:h-8 w-2/3 bg-gray-300 rounded mb-6"></div>
                        <div className="space-y-2">
                            <div className="h-4 md:h-6 w-full bg-gray-300 rounded"></div>
                            <div className="h-4 md:h-6 w-5/6 bg-gray-300 rounded"></div>
                            <div className="h-4 md:h-6 w-3/4 bg-gray-300 rounded"></div>
                            <div className="h-4 md:h-6 w-2/3 bg-gray-300 rounded"></div>
                        </div>
                        <div className="mt-6 h-8 md:h-10 w-24 md:w-32 bg-gray-300 rounded-lg"></div>
                    </article>
                </section>
                <section className="grid grid-rows-2 md:grid-cols-2 w-5/6 md:w-[56rem] bg-white rounded overflow-hidden h-[32rem] md:h-80 animate-pulse">
                    <aside className="grid-row md:row-span-full bg-gray-300 h-full md:h-80">
                        <div className="h-full w-full"></div>
                    </aside>
                    <article className="grid-row p-6 md:p-8">
                        <div className="h-6 md:h-8 w-2/3 bg-gray-300 rounded mb-6"></div>
                        <div className="space-y-2">
                            <div className="h-4 md:h-6 w-full bg-gray-300 rounded"></div>
                            <div className="h-4 md:h-6 w-5/6 bg-gray-300 rounded"></div>
                            <div className="h-4 md:h-6 w-3/4 bg-gray-300 rounded"></div>
                            <div className="h-4 md:h-6 w-2/3 bg-gray-300 rounded"></div>
                        </div>
                        <div className="mt-6 h-8 md:h-10 w-24 md:w-32 bg-gray-300 rounded-lg"></div>
                    </article>
                </section>
            </div>
        </main>
    )
}