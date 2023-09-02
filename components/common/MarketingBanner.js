export default function MarketingBanner() {
    return (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-black px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div className="flex flex-wrap w-full items-center gap-x-4 gap-y-2">
                <p className="text-sm leading-6 w-full text-center text-gray-400">
                    <strong className="font-semibold">© 2017 Smyle Pariwar Foundation</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    Registered under 80G
                </p>
            </div>
        </div>
    )
}
