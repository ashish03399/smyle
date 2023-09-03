import React from "react";
import Image from "next/future/image";

export default function Donate() {
    return (
        <div className="flex flex-col w-full items-center my-10 md:my-14" id="donate">
            <div className="flex flex-col md:flex-row pt-10 justify-center items-center">
                <div className="sm:w-6/12 w-full md:w-4/12 flex justify-center items-center">
                    <Image
                        src="/upi_new.png" alt=""
                        objectFit={'contain'}
                        width={0}
                        height={0}
                        className="relative bg-red-100 w-8/12 lg:w-6/12"
                        layout={'fill'}
                    />
                </div>
                <div className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-6/12 flex flex-col justify-center items-center px-4">
                    <p className="text-4xl lg:text-5xl font-bold pt-10 md:pt-0">BECOME A VOLUNTEER</p>
                    <p className="lg:text-lg 2xl:text-xl py-6 text-center ">
                        Remember that the happiest people are not those getting more, but
                        those giving more.
                    </p>
                    <p className="lg:text-lg 2xl:text-sm pb-5 text-center text-gray-500">
                        Donations to SMYLE PARIWAR FOUNDATION are exempted from tax deductions under sections 12A and
                        80G of the Income Tax Act.
                        We comply with all legal obligations required to receive both domestic and foreign donations.
                        Please find below details for DIRECTLY PAY
                    </p>

                    <p className="lg:text-lg 2xl:text-sm pb-5 text-center text-gray-500">
                        A/c Name : Smyle Pariwar Foundation --
                        BANK OF BARODA --
                        Saving Account --
                        35730100009413 --
                        Shahdara Branch --
                        IFSC code: BARB0SHAHDA
                    </p>
                    <div className="rounded-sm w-6/12 sm:w-4/12 md:w-5/12 lg:w-3/12">
                        <Image
                            src="/qr_upi.png"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{width: '100%', height: 'auto'}}/>
                    </div>
                    <a
                        href="/qr_upi.png"
                        className="flex justify-center items-center p-3 px-6 w-max bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all ease-in-out duration-100 sm:scale-100 m-1.5"
                        target="_blank"
                        rel="noopener noreferrer"
                        download={true}
                    >
                        Download QR&nbsp;
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
