'use client'
import { loem } from "@/public/config";
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
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

  return (

    <main className="main">
      {/* {width > 768 ?
        <div className="container_max">
          <div className="three_d">
            <Link href="/three_d" passHref></Link>
          </div>
          <div className="drone">
            <Link href="/drone" passHref></Link>
          </div>
          <div className="interview">
            <Link href="/interview" passHref></Link>
          </div>
          <div className="camcorder">
            <Link href="/interview" passHref></Link>
          </div>
        </div>
        :  */}
        <div className="container_max mobile">
          <img src="/images/01_home/logo.svg" alt="" />
          <div>{loem.short}</div>
        </div>
      {/* } */}
    </main>
  )
}
