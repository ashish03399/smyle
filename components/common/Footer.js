import React from "react";

export default function Footer() {
    return (
        <>
            <div className="bg-red-100">
                <div className="mx-auto container pt-6 flex flex-row items-center justify-center">
                    <div className="text-grey flex flex-col md:items-center f-f-l pt-5 w-full">
                        <div className={'lg:text-base text-xs self-center'}>╰┈►𝒮𝓂𝓎𝓁ℯ 𝒫𝒶𝓇𝒾𝓌𝒶𝓇 ℱℴ𝓊𝓃𝒹𝒶𝓉𝒾ℴ𝓃 ◄┈╯</div>
                        <div className="my-2 text-base text-color f-f-l mx-4 opacity-60 text-center">
                            <b>Address:</b> 399, Chander Lok, Mandoli Road, Shahdara Delhi - 110093 <br/>
                            <b>Email:</b> smylepariwarfoundation@gmail.com<br/><b>Mobile:</b>
                            +91-9910191122, 9873298884, 9266488565, 9873909728
                        </div>
                        <div className='flex mb-2 justify-center'>
                            <a href="https://www.facebook.com/smyleparivaar/"
                               target="_blank"
                               className="facebook"
                               title="Facebook" rel="noreferrer">
                                <img
                                    className="align-middle"
                                    src="/Scroll-Group-6.png"
                                    width="35px"/>
                            </a>
                            <a href="https://www.instagram.com/smyle_foundation/"
                               target="_blank"
                               className="ml-2"
                               title="Facebook" rel="noreferrer">
                                <img
                                    className="align-middle"
                                    src="/instagramimgnew.png"
                                    width="35px"/>
                            </a>
                            <a href="https://www.youtube.com/channel/UCorE3Kp9ybMo0hjn7SYWw9Q"
                               target="_blank"
                               className="ml-2"
                               title="Facebook" rel="noreferrer">
                                <img
                                    className="align-middle"
                                    src="/Scroll-Group-5.png"
                                    width="35px"/>
                            </a>
                            <a href="https://twitter.com/Smyle_Sewa/with_replies"
                               target="_blank"
                               className="ml-2"
                               title="Facebook" rel="noreferrer">
                                <img
                                    className="align-middle"
                                    src="/twitter.png"
                                    width="35px"/>
                            </a>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l self-center">
              <span className="text-sm">
                <a
                    href="https://www.linkedin.com/in/ashish-bansal-b7236ba0/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-sky-500 sm:text-center sm:text-base transition-all ease-in-out"
                >
                  {"</>"} with 💛 by Ashish Bansal{" "}
                </a>
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
