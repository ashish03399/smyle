import Image from "next/image";

export default function HeroV2() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 lg:min-h-full py-24 sm:py-32">
            <div
                className="brightness-50 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            >
                <Image
                    src="/child-support.jpg"
                    alt=""
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">DREAM OF CHILDRENS</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        We have made their education our mission. You too can support online to ensure that poverty
                        doesn't stand in the way of a child's education. Support online and take them a step closer to
                        their dreams.
                        <br/><br/>
                        All children have the right to a healthy, happy and fulfilling life. Donate Money & Support
                        Charity to Keep children safe & free from harm.
                    </p>
                </div>
            </div>
        </div>
    )
}
