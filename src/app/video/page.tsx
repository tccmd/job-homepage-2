'use client'

import { useRouter, useSearchParams } from "next/navigation"
import Play from '@/public/images/08_popup_viewvideo/icobtn-filled-play-enabled-white.svg'
import Stop from '@/public/images/08_popup_viewvideo/icobtn-filled-stop-enabled-white.svg'
import Close from '@/public/images/08_popup_viewvideo/icobtn-lined-close-enabled-white.svg'
import SoundOn from '@/public/images/08_popup_viewvideo/icobtn-lined-soundon-enabled-white.svg'
import SoundOff from '@/public/images/08_popup_viewvideo/icobtn-lined-soundoff-enabled-white.svg'
import Share from '@/public/images/08_popup_viewvideo/icobtn-lined-share-enabled-white.svg'
import { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function VideoPage() {
    const params = useSearchParams()
    const router = useRouter()
    const videoPcSrc = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    const videoMoSrc = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

    const [isMouseEnter, setIsMouseEnter] = useState(false)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [clickAnimation, setClickAnimation] = useState(false)
    const [inputWidth, setInputWidth] = useState<number>(0)

    const [windowInWidth, setWindowInWidth] = useState<number>(0);

    const videoRef = useRef<HTMLVideoElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const mouseEnter = () => {
        setIsMouseEnter(true)
        setTimeout(() => {
            setIsMouseEnter(false)
        }, 3500);
    }

    const mouseLeave = () => {
        setIsMouseEnter(false)
    }

    const playPause = () => {
        if (videoRef.current?.paused) {
            videoRef.current.play()
            setIsPlaying(false)
        } else {
            videoRef.current?.pause()
            setIsPlaying(true)
        }
        setClickAnimation(true)
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            setIsMuted(videoRef.current.muted)
        }
    }

    const copyToClipboard = () => {
        const url = window.location.href

        navigator.clipboard.writeText(url).then(() => {
            console.log('URL이 클립보드에 복사되었습니다.')
            toast.success('URL이 복사되었습니다.')
        }).catch((error) => {
            console.error('복사 실패:', error)
            toast.error('복사에 실패했습니다.')
        })
    }

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(event.target.value)
        if (videoRef.current) {
            videoRef.current.currentTime = time
        }
    }

    const resizeWindow = () => {
        setTimeout(() => {
            setWindowInWidth(window.innerWidth)
        }, 100)
    }

    useEffect(() => {
        inputRef.current && setInputWidth(inputRef.current?.clientWidth)
        const handleTimeUpdate = () => {
            if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime)
            }
        }
        if (videoRef.current) {
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate)
            setDuration(videoRef.current.duration)
        }

        setWindowInWidth(window.innerWidth);
        window.addEventListener("resize", resizeWindow)

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('timeupdate', handleTimeUpdate)
            }
            window.removeEventListener("resize", resizeWindow)
        }
    }, [videoRef.current?.played, windowInWidth])
    const progressBarWidth = (currentTime / duration) * inputWidth

    // 로딩
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadedData = () => {
        setIsLoading(false);
        setIsMouseEnter(true);
    };

    return (
        <div className="videoPage" >
            <div className="video">
                <div className={`controls ${isMouseEnter ? 'isMouseEnter' : ''}`} onClick={() => mouseEnter()}>
                    <div className='play' onClick={() => playPause()} onMouseLeave={() => mouseLeave()}>
                        {isPlaying ? (
                            <span style={{ transform: "translate(9px, 0)" }}><Play className={clickAnimation ? 'animate_like' : ''} /></span>
                        ) : (
                            <Stop className={clickAnimation ? 'animate_like' : ''} />
                        )}
                    </div>
                    <div className='close' onClick={() => { router.back() }}>
                        <Close />
                    </div>
                    <div className='slider'>
                        <div className='silider_color' style={{ width: `${progressBarWidth}px` }}></div>
                    </div>
                    <input
                        type="range"
                        className="slider_input"
                        ref={inputRef}
                        value={currentTime}
                        max={videoRef.current?.duration || 0}
                        onChange={handleSliderChange}
                        onClick={() => setIsMouseEnter(true)}
                    />
                    <div className='buttons' onMouseLeave={() => mouseLeave()}>
                        <div className='btn_sound'>
                            {isMuted ? (
                                <SoundOff onClick={() => toggleMute()} />
                            ) : (
                                <SoundOn onClick={() => toggleMute()} />
                            )}
                        </div>
                        <div className='btn_share'>
                            <Share onClick={() => copyToClipboard()} />
                        </div>
                    </div>
                </div>
                <ToastContainer autoClose={2000} position={"bottom-right"} />
                <div className={`spin ${isLoading ? 'loading' : ''}`}></div>
                {windowInWidth > 0 && <video ref={videoRef}
                    controls={false}
                    playsInline
                    preload="metadata"
                    width="100%"
                    onLoadedData={() => handleLoadedData()}
                    onLoadedMetadata={() => handleLoadedData()}
                    onClick={() => playPause()}
                    onTouchStart={() => mouseEnter()}
                    onMouseMove={() => mouseEnter()}
                >
                    {windowInWidth > 768 ? <source src={videoPcSrc} type="video/mp4" /> : <source src={videoMoSrc} type="video/mp4" />}
                    Your browser does not support the video tag.
                </video>}
            </div>
        </div>
    )
}