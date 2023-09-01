import React from "react";
import Image from "next/image";

export default function CoreTeam() {
    const cc = [
        {
            avatar: "/team/deepak_bansal.png",
            name: "Deepak Bansal",
            position: "Sanstapak",
        },
        {
            avatar: "/team/sachin_sharma.png",
            name: "Sachin Sharma",
            position: "President",
        },
        {
            avatar: "/team/bdtyagi.jpeg",
            name: "Brahma Dev Tyagi",
            position: "Join Secretory",
        },
        {
            avatar: "/team/deepak_singhal.png",
            name: "Deepak Singhal",
            position: "Cashier",
        }
    ];
    return (
        <div className="bg-red-100 pt-2">
            <div className="flex flex-col w-full items-center my-10 md:my-14 " id="team">
                <p className="text-4xl font-bold">Core Team</p>
                <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
                    Teamwork is the fuel that allows common people to attain uncommon
                    results.
                </p>
                <div className="w-max-[90vw] w-full md:w-8/12 overflow-x-auto">
                    <div className="flex flex-row w-max flex-wrap">
                        {/* Card */}
                        {cc.map((cc, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center m-2 p-4 py-10 brightness-90 rounded-md w-56"
                            >
                                <div
                                    className="w-28 h-28 md:w-28 md:h-28"
                                >
                                    <Image
                                        src={cc.avatar}
                                        alt=""
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }}
                                        className="rounded-full ring ring-zinc-100"
                                    />
                                </div>
                                <p className="font-medium mt-2 text-lg opacity-75">{cc.name}</p>
                                <p className="text-zinc-500">{cc.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
