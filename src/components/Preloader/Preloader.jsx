// Copyright (c) 2023 by Jon Kantner (https://codepen.io/jkantner/pen/JjZRaLG)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React from 'react'
import './Preloader.css'
import { useAuth } from '../../hook/useAuth';
const Preloader = () => {
    const { isLoad } = useAuth();
    return (
        <>
            {isLoad && <svg className="lp" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                    <mask id="mask1">
                        <rect x="0" y="0" width="128" height="128" fill="url(#grad1)" />
                    </mask>
                </defs>
                <g fill="none" strokeLinecap="round" strokeWidth="16">
                    <circle className="lp__ring" r="56" cx="64" cy="64" stroke="#ddd" />
                    <g stroke="hsl(183,90%,40%)">
                        <polyline className="lp__fall-line" points="64,8 64,120" />
                        <polyline className="lp__fall-line lp__fall-line--delay1" points="64,8 64,120" />
                        <polyline className="lp__fall-line lp__fall-line--delay2" points="64,8 64,120" />
                        <polyline className="lp__fall-line lp__fall-line--delay3" points="64,8 64,120" />
                        <polyline className="lp__fall-line lp__fall-line--delay4" points="64,8 64,120" />
                        <circle className="lp__drops" r="56" cx="64" cy="64" transform="rotate(90,64,64)" />
                        <circle className="lp__worm" r="56" cx="64" cy="64" transform="rotate(-90,64,64)" />
                    </g>
                    <g stroke="hsl(210,90%,40%)" mask="url(#mask1)">
                        <polyline className="lp__fall-line" points="64,8 64,120" />
                        <polyline className="lp__fall-line lp__fall-line--delay1" points="64,8 64,120" />
                        <polyline className="lp__fall-line lp__fall-line--delay2" points="64,8 64,120" />
                        <polyline className="lp__fall-line lp__fall-line--delay3" points="64,8 64,120" />
                        <polyline className="lp__fall-line lp__fall-line--delay4" points="64,8 64,120" />
                        <circle className="lp__drops" r="56" cx="64" cy="64" transform="rotate(90,64,64)" />
                        <circle className="lp__worm" r="56" cx="64" cy="64" transform="rotate(-90,64,64)" />
                    </g>
                </g>
            </svg>}
        </>

    )
};

export default Preloader


