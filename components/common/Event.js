import Image from "next/image";

const callouts = [
    {
        name: 'Blood Donation Camp',
        description: '19th March 2023',
        imageSrc: '/blood_donate.webp',
        imageAlt: 'Blood donate by Smyle Pariwar Foundation',
        href: '#',
    },
    {
        name: '21 Kanya Vivah',
        description: '8th July 2023',
        imageSrc: '/event/event_1.jpeg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Medical Camp',
        description: '2nd Oct, 2018',
        imageSrc: '/event/event_3.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]

export default function Event() {
    return (
        <div className="bg-red-100" id="event">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-16">
                    <h2 className="text-2xl font-bold text-gray-900">Events</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div
                                    className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <div
                                        className="h-full w-full object-cover object-center">
                                        <Image
                                            src={callout.imageSrc}
                                            alt={callout.imageAlt}
                                            layout='fill'
                                            objectFit='cover'
                                        />
                                    </div>
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0"/>
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
