import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="gnb">
      <ul className="container" >
        <li>
          <Link href="/about" passHref>
            <svg width='100%' height='100%'>
              <text alignmentBaseline="middle" dx="50%" dy="55%">
                ABOUT COMPANY
              </text>
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/portfolio" passHref>
            <svg width='100%' height='100%'>
              <text alignmentBaseline="middle" dx="50%" dy="55%">
                VIDEOS & LINKS
              </text>
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/three_d" passHref>
            <svg width='100%' height='100%'>
              <text alignmentBaseline="middle" dx="50%" dy="55%">
                3D VIEW
              </text>
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/drone" passHref>
            <svg width='100%' height='100%'>
              <text alignmentBaseline="middle" dx="50%" dy="55%">
                VIDEO
              </text>
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/interview" passHref>
            <svg width='100%' height='100%'>
              <text alignmentBaseline="middle" dx="50%" dy="55%">
                VIDEO
              </text>
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <svg width='100%' height='100%'>
              <text alignmentBaseline="middle" dx="50%" dy="55%">
                CONTACT
              </text>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuPage