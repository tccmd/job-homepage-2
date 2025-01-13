'use client'

import Link from "next/link"
import { useEffect, useState } from 'react'
import ViewBtn from '@/public/images/common/ico-line-view.svg';
import { loem } from "@/public/config";

const DronePage = () => {
    const [on, setOn] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setOn(false)
        }, 3500)
    })

    return (
        <div className={`dronePage page ${on ? 'on' : ''}`}>
            <img src="/images/06_drone/img-drone.png" alt="dron" className="page_img" />
            <div className="container_large">
                <div className="page_tit">{loem.title}</div>
                <div className="page_desc">{loem.title}</div>
                <Link
                    href={{
                        pathname: '/video',
                        query: { 'videoName': 'parameter' },
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

export default DronePage