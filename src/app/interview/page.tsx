'use client'

import Link from "next/link"
import { useEffect, useState } from 'react'
import ViewBtn from '@/public/images/common/ico-line-view.svg';
import { loem } from "@/public/config";

const InterviewPage = () => {
    const [on, setOn] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setOn(false)
        }, 3500)
    }, [])

    return (
        <div className={`interviewPage page ${on ? 'on' : ''}`}>
            <div className="container">
                <div className="img_box">
                    <img src="/images/07_marketing/img-camera.png" alt="camera" className="page_img01" />
                    <img src="/images/07_marketing/img-camcorder.png" alt="camcorder" className="page_img02" />
                </div>
                <div className="page_tit">{loem.title}</div>
                <div className="page_desc">{loem.title}</div>
                <Link
                    href={{
                        pathname: '/video',
                        query: { videoName: 'marketing' },
                    }}
                    passHref>
                    <button className="page_btn view_btn">
                        <span>View video</span>
                        <ViewBtn />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default InterviewPage