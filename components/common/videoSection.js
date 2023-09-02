import React from 'react'

export default function VideoSection() {
    return (
        <div className="bg-gray-100 py-16 sm:py-18">
            <p className="mx-auto max-w-7xl px-6 lg:px-8 text-4xl font-bold">About Us</p>
            <div id="about" className="divide-y divide-red-200 mx-auto max-w-7xl px-6 lg:px-8">

                <dl className="py-6 lg:divide-x lg:divide-red-200 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
                    <div key={1} className="w-full mx-auto flex flex-col gap-y-2">
                        <div
                            className="mt-3 text-left after:content-[''] after:flex after:background-['#fa6f1c'] after:height-49px after:width-49px ext-left">
                            GOALS OF NGO
                        </div>
                        <ul role="list"
                            className="text-left marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">

                            <br/>
                            {/*☛ Helping the needy children in education<br/>*/}
                            <li>Helping the needy children in education</li>
                            <li>Organizing the Annual Medical Camp</li>
                            <li>Water service for passers-by</li>
                            <li>Organizing Shyam Baba's Vigilance on Ekadashi</li>
                            <li>Annual Shyam Mahotsav</li>
                            <li>Monthly Khatu Shyam ji Bus Tour</li>
                        </ul>

                    </div>
                    <div key={2} className="lg:px-10 mt-3 mx-auto flex flex-col gap-y-4">
                        <div
                            className="text-left after:content-[''] after:flex after:background-['#fa6f1c'] after:height-49px after:width-49px ext-left mb-4">
                            JOIN US ON OUR MISSION
                        </div>
                        <video width={750} height={500} autoPlay muted controls>
                            <source
                                src={'https://drive.google.com/uc?export=download&id=1gx98sv69y8OUWSMJJk2dNXLmRYgoPz76'}
                                type="video/mp4"/>
                            Sorry, your browser doesn't support videos.
                        </video>
                    </div>
                </dl>
                <div className={''}>
                    <div
                        className="mt-10 text-center">
                        CREATE A CHILD CARING WORLD
                        <br/>
                        <div className="mt-5 text-slate-500 lg:px-36">Save The Children works to bring lasting changes
                            in
                            the
                            lives of children. We reach out of the most disadvantaged help them survive, thrive ane
                            learn
                            and get a better future.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
