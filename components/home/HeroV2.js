import Image from "next/image";

const links = [
    {name: 'Donate', href: '#donate'},
    {name: 'Events', href: '#'},
    {name: 'Our Team', href: '#team'},
    {name: 'About Us', href: '#about'},
]
const stats = [
    {name: 'Offices worldwide', value: '12'},
    {name: 'Full-time colleagues', value: '300+'},
    {name: 'Hours per week', value: '40'},
    {name: 'Paid time off', value: 'Unlimited'},
]

export default function HeroV2() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 lg:min-h-full py-24 sm:py-32">
            {/*<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">*/}
            {/*    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">*/}
            {/*        {links.map((link) => (*/}
            {/*            <a key={link.name} href={link.href}>*/}
            {/*                {link.name} <span aria-hidden="true">&rarr;</span>*/}
            {/*            </a>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div
                className="brightness-50 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            >
                <Image
                    // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    src="/child-support.jpg"
                    alt=""
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            {/*<div*/}
            {/*    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"*/}
            {/*    aria-hidden="true"*/}
            {/*>*/}
            {/*    <div*/}
            {/*        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"*/}
            {/*        style={{*/}
            {/*            clipPath:*/}
            {/*                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"*/}
            {/*    aria-hidden="true"*/}
            {/*>*/}
            {/*    <div*/}
            {/*        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"*/}
            {/*        style={{*/}
            {/*            clipPath:*/}
            {/*                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</div>*/}
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
