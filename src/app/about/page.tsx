'use client'

import Link from 'next/link'
import Three from './Three'
import { Suspense, useEffect, useState } from 'react'
import ViewBtn from '@/public/images/common/ico-line-view.svg'
import Image from 'next/image'
import { config, loem } from '@/public/config'
import Svg from '@/public/logo.svg'

const AboutPage = () => {
  const [on, setOn] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setOn(false)
    }, 3200)
  })

  return (
    <div className={`About page ${on ? 'on' : ''}`}>
      <div className="container">
        <Three />
        <div className="contents">
          <div className="text_wrap">
            <div className="tit">{config.companyName}</div>
            <div className="sub_tit">Be Creative | Be Beautiful | Be positive</div>
            <div className="desc">
              {loem.title} <br />
              {loem.short}
            </div>
          </div>

          <ul className="icons">
            <li>
              {/* <Image src="/images/03_about/img-3d-white.png" alt="" width={81} height={88} /> */}
              <Svg />
              <div className="icon_name">{loem.loem}</div>
            </li>
            <li>
              {/* <Image src="/images/03_about/img-drone-white.png" alt="" width={180} height={88} /> */}
              <Svg />
              <div className="icon_name">{loem.loem}</div>
            </li>
            <li>
              {/* <Image src="/images/03_about/img-camcorder-white.png" alt="" width={160} height={88} /> */}
              <Svg />
              <div className="icon_name">{loem.loem}</div>
            </li>
            <li>
              {/* <Image src="/images/03_about/img-develop-white.png" alt="" width={147} height={88} /> */}
              <Svg />
              <div className="icon_name">{loem.loem}</div>
            </li>
            <li>
              {/* <Image src="/images/03_about/img-design-white.png" alt="" width={100} height={88} /> */}
              <Svg />
              <div className="icon_name">{loem.loem}</div>
            </li>
          </ul>
          <Link
            href={{
              pathname: '/video',
              query: { videoName: 'parameter' },
            }}
            passHref>
            <button className="page_btn view_btn about_btn">
              <span>View video</span>
              <ViewBtn />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage