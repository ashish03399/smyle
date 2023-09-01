import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'

export default function VideoSection() {
    return (
        <div className="bg-gray-100">
            <div className="event-alt">
                <div className="event-image">
                    <video width="100%" autoPlay="" controls="">
                        <source
                            src="https://drive.google.com/uc?export=download&amp;id=1gx98sv69y8OUWSMJJk2dNXLmRYgoPz76"
                            type="video/webm"/>
                        This browser doesn't support video tag.
                    </video>
                </div>
                <h4 className="event-title"><a href="#">CREATE A CHILD CARING WORLD</a></h4>
                <div className="event-entry"><p>Save The Children works to bring lasting changes in the lives of
                    children.
                    We reach out of the most disadvantaged help them survive, thrive ane learn and get a better
                    future.</p>
                </div>
            </div>
        </div>
    )
}
