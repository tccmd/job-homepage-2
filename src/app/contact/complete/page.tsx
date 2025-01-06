'use client'

import Link from "next/link"
import Close from '@/public/images/09_contact/icobtn-lined-popclose-enabled-white.svg'
import Complete from '@/public/images/09_contact/ico-lined-complete-yellow500.svg'

const CompletePage = () => {
    return (
        <div className="bg_black">
            <div className="header_popup">
                <div className="complete_heading2">문의 완료</div>
                <Link className="close" href="/" passHref><Close /></Link>
            </div>
            <div className="Contents">
                <img className='check' src="/images/09_contact/ico-lined-complete-yellow500.svg" alt="complete" />
                <div className="desc">확인 후 연락드릴 예정입니다.<br />오늘 하루도 행복한 하루 되세요.<br />감사합니다.</div>
            </div>
        </div>
    )
}

export default CompletePage