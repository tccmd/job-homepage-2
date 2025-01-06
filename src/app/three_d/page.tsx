'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import ViewBtn from '@/public/images/common/ico-line-view.svg';
import { loem } from "@/public/config";

const ThreeDPage = () => {
    const [on, setOn] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setOn(false)
        }, 3500)
    })
    return (
        <div className={`threePage page ${on ? 'on' : ''}`}>
            <div className="container">
                <img src="/images/05_3d/img-metterport.png" alt="matterport equipment" className="page_img" />
                <div className="page_tit">{loem.title}</div>
                <div className="page_desc">{loem.short}</div>
                <Link href="https://goshow.me/bundle-camera-component/" passHref target="_blank">
                    <button className="page_btn view_btn">
                        <span>{loem.loem}</span>
                        <ViewBtn />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ThreeDPage