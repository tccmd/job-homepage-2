'use client'

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { loem } from "@/public/config";

const TestPage = () => {
  const tabData = [
    {
      id: 0,
      title: loem.loem,
      contents: [
        {
          name: loem.loem,
          img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
          mp4: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          threedUrl: 'https://goshow.me/bundle-camera-component/',
        },
        {
          name: loem.loem,
          img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
          mp4: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          threedUrl: 'https://goshow.me/bundle-camera-component/',
        },
        {
          name: loem.loem,
          img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
          mp4: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          threedUrl: 'https://goshow.me/bundle-camera-component/',
        },
        {
          name: loem.loem,
          img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
          mp4: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          threedUrl: 'https://goshow.me/bundle-camera-component/',
        },
        {
          name: loem.loem,
          img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
          mp4: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          threedUrl: 'https://goshow.me/bundle-camera-component/',
        },
      ]
    },
    {
      id: 1,
      title: loem.loem,
      contents: [
        {
          name: loem.loem,
          img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
          mp4: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          threedUrl: 'https://goshow.me/bundle-camera-component/',
        },
      ]
    },
    {
      id: 2,
      title: loem.loem,
      contents: [
        {
          name: loem.loem,
          img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
          mp4: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          threedUrl: 'https://goshow.me/bundle-camera-component/',
        },
        {
          name: loem.loem,
          img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
          mp4: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          threedUrl: 'https://goshow.me/bundle-camera-component/',
        },
      ]
    },
    {
      id: 3,
      title: '',
      contents: []
    },
  ]
  const [num, setNum] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const slick = useRef(null);
  const [selectedSlideIdx, setSelectedSlideIdx] = useState(0);

  const [width, setWidth] = useState<number>(0);

  const resizeWindow = () => {
    setTimeout(() => {
      setWidth(window.innerWidth)
    }, 100)
  }
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", resizeWindow)
    return () => {
      window.removeEventListener("resize", resizeWindow)
    }
  }, [width]);

  interface sliderProps {
    /** 슬라이더 아이템 요소 */
    children?: JSX.Element[];
    /** 커스텀 클래스 */
    className?: string;
    infinite?: boolean;
    autoplay?: boolean | number;
    autoplaySpeed?: number;
    /** 슬라이더 속도 */
    speed?: number;
    /** 반복 여부 */
  }

  function Slick({
    children,
    className,
    autoplay = true,
    speed = 10000,
    infinite = true,

  }: sliderProps) {

    const set = useMemo<Settings>(
      () => ({
        dots: false,
        arrows: false,
        infinite: true,
        speed: speed,
        slideToShow: 1,
        autoplay: !showVideo && Boolean(autoplay),
        autoplaySpeed: undefined,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: "0",
        variableWidth: true,
        cssEase: "linear",
        swipe: false,
        initialSlide: selectedSlideIdx,
      }),
      [selectedSlideIdx, showVideo, autoplay, infinite, speed],
    );
    return (
      <div className={className}>
        <Slider {...set} ref={slick} >{children}</Slider>
      </div>
    )
  }

  const [videoStates, setVideoStates] = useState(Array(8).fill(false)); // 비디오 보이기/숨기기 상태 배열

  console.log(videoStates);
  const toggleVideo = (index: number) => {
    const newVideoStates = [...videoStates];
    newVideoStates[index] = !newVideoStates[index];
    setVideoStates(newVideoStates);
    setSelectedSlideIdx(index);
    setShowVideo(!showVideo);
  };

  const [isWindow, setIsWindow] = useState<boolean>(false);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  return (
    <div className="Portfolio page">
      <div className="text_wrap">
        <div className="tit">{loem.loem}</div>
        <div className="desc">{loem.title}</div>
      </div>
      <ul className="tab_btn">
        {tabData.map((tab, listIdx) => {
          const clickHandler = () => {
            setNum(tab.id);
          }
          return (
            <li key={tab.id} className={num === listIdx ? 'on' : ''} onClick={() => clickHandler()}>{tab.title}</li>
          )
        })}
      </ul>
      {
        tabData.filter(it => num === it.id).map((tab) => {
          return (
            width > 500 ?
              <div key={tab.id} className={`tab_content tab_content${tab.id}`}>
                {tab.contents.length > 0 ? <Slick>
                  {
                    tab.contents?.map((item, contentIdx) => {
                      return (
                        <div key={contentIdx} className={`slide`}>
                          {isWindow && (
                            <div className="inner">
                              {videoStates[contentIdx] ? (
                                <div className={`tab_video ${showVideo ? 'show' : ''}`}>
                                  <div className="close" onClick={() => toggleVideo(contentIdx)}>
                                    <Image src="/images/08_popup_viewvideo/icobtn-lined-close-enabled-white.svg" width={42} height={42} alt="click to video close" />
                                  </div>
                                  <video loop muted playsInline width={'100%'} height={'100%'} controls autoPlay>
                                    <source src={item.mp4} type="video/mp4"></source>
                                  </video>
                                </div>
                              ) : (
                                <Image width={880} height={480} sizes="(max-width: 768px) 100vw" src={item.img} alt={item.name} onClick={() => toggleVideo(contentIdx)} />
                              )}
                              <div className="tab_name" onClick={() => toggleVideo(contentIdx)}>
                                <div>{item.name}</div>
                                <Image src="/images/04_portfolio/icobtn-lined-viewportfolio-enabled-white.svg" width={64} height={24} alt="click to view video" />
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })
                  }
                </Slick> : <div className="no_content">In preparation</div>}
              </div>
              : <div className={`tab_content mo_tab_content tab_content${tab.id}`}>
                {
                  tab.contents.length > 0 ? <div>
                    {
                      tab.contents?.map((item, contentIdx) => {
                        return (
                          <Link className={`item item0${contentIdx}`}
                            key={contentIdx}
                            href={item.threedUrl}
                            style={{ backgroundImage: `url(${item.img})` }}>
                            {/* <Image src={item.img} width={500} height={357} alt={item.name} /> */}
                            <div className="item_name">{item.name}</div>
                          </Link>
                        )
                      })
                    }
                  </div> : <div className="no_content">In preparation</div>
                }
              </div>
          )

        })
      }
    </div>
  )
}

export default React.memo(TestPage);