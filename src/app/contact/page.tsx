'use client'

import Agree from './Agree'
import { useEffect, useState } from 'react'
import InstagramIcon from '@/public/images/09_contact/icobtn_filled_instagram_enabled-white.svg'
import YoutubeIcon from '@/public/images/09_contact/icobtn_filled_youtube_enabled-white.svg'
import ArrowRight from '@/public/images/09_contact/icobtn-lined-dropdown-enabled-white.svg'
import { Form } from './Form'
import Link from 'next/link'
import { loem } from '@/public/config'

const ContactPage = () => {
  // 초기에 폼이 보이지 않음
  const [showForm, setShowForm] = useState(false)
  const [originColor, setOriginColor] = useState<string>("white");
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const [windowInWidth, setWindowInWidth] = useState<number>(0);

  useEffect(() => {
    const W = window.innerWidth;
    setWindowInWidth(W);
  }, [])

  // Agree 컴포넌트에서 버튼을 누르면 boolean 값을 바꿔 컴포넌트를 Form 컴포넌트로 바꾸기 위함
  const toggleForm = () => {
    setShowForm(!showForm)
  };

  // Mouse Down Event
  const handleMouseDown = (i: number) => {
    if (i === 2) {
      setIsClicked2(true);
    } else {
      setIsClicked(true);
    }
  };

  const handleMouseUp = (i: number) => {
    if (i === 2) {
      setIsClicked2(false);
    } else {
      setIsClicked(false);
    }
  };

  return (
    <div className="contact_page page">
      <div className="container">
        <div className='contact_left_right'>
          <div className='tit'>CONTACT</div>
          <div className='contact_heading2'>COMPANY INFO</div>
          <div className='contact_wrap'>
            <div className="contact_1_2">
              <div className='contact_subtitle2'>{loem.loem}</div>
              <div className='contact_body3'>COMPANY NAME</div>
              <div className='contact_subtitle2'>{loem.loem}</div>
              <div className='contact_body3'>NAME</div>
              <div className='contact_subtitle2'>{loem.loem}</div>
              <div className='contact_body3'>
                <span>{loem.title}</span>
                <a href="https://surl.tmap.co.kr/a3086492" target='_blank'><span>지도보기</span><ArrowRight /></a>
              </div>
              <div className='contact_subtitle2'>SNS</div>
              <div>
                <Link href="https://www.instagram.com/" passHref target="_blank">
                  <InstagramIcon className="icon mg-r-32" onMouseDown={() => handleMouseDown(1)} onMouseUp={() => handleMouseUp(1)} onMouseLeave={() => handleMouseUp(1)} fill={isClicked ? '#595959' : 'white'} />
                </Link>
                <span>
                  <Link href="https://www.youtube.com/" passHref target="_blank">
                    <YoutubeIcon className="icon" onMouseDown={() => handleMouseDown(2)} onMouseUp={() => handleMouseUp(2)} onMouseLeave={() => handleMouseUp(2)} fill={isClicked2 ? '#595959' : 'white'} />
                  </Link>
                </span>
              </div>
            </div>
            <div className="contact_1_2">
              <div className='contact_subtitle2'>{loem.loem}</div>
              <div className='contact_body3'>{windowInWidth > 768 ? '000. 000. 0000' : <a href='tel: 000-000-0000'>000. 000. 0000</a>}</div>
              <div className='contact_subtitle2'>{loem.loem}</div>
              <div className='contact_body3'>000. 000. 0000</div>
              <div className='contact_subtitle2'>{loem.loem}</div>
              <div className='contact_body3'>000 00 0000</div>
            </div>
          </div>
        </div>
        <div className='contact_left_right_container'>
          <div className='tit'>INQUIRY</div>
          {showForm ? <Form /> : <Agree onAgree={toggleForm} />}
        </div>
      </div>
    </div>
  )
}

export default ContactPage