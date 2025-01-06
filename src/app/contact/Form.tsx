import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation'
import ViewBtn from '@/public/images/common/ico-line-view.svg';
import ArrowDown from '@/public/images/09_contact/icobtn-lined-dropdown-enabled-white.svg';
import ArrowUp from '@/public/images/09_contact/icobtn-lined-dropup-enabled-white.svg'
import { loem } from '@/public/config';

const options = [loem.loem, loem.loem, loem.loem, loem.loem]

export const Form = () => {
    const form = useRef<HTMLFormElement | null>(null)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [isvalidated, setIsvalidated] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const nextElementRef = useRef(null);

    // router
    const router = useRouter()

    // 화살표 아이콘 제어 
    const selectElement = document.querySelector('.select');
    if (selectElement) {
        selectElement.classList.toggle('on', isOpen);
    }

    // 문의 유형을 클릭하면 옵션 토글을 제어한다
    const toggleOptions = () => {
        setIsOpen(!isOpen);
    }

    // 커스텀 옵션을 클릭하면 값을 업데이트 하고 옵션을 닫는다
    const handleOptionClick = (value: string) => {
        setSelectedOption(value)
        //console.log('값: ' + selectedOption)
        setIsOpen(false)
        if (form.current!.detail.value !== '') {
            setIsvalidated(true)
        }
    }

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm("service_p0wp4g2", "template_uo5jhru", form.current, "bOoMNdkIPKMr0XEcx")
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
        router.push('/contact/complete')
    };

    // 버튼 활성화 boolean
    function validate() {
        if (
            form.current!.customer_name.value !== '' &&
            form.current!.phone.value !== '' &&
            selectedOption !== null
        ) {
            setIsvalidated(true)
        } else {
            setIsvalidated(false)
        }
    }

    return (
        <>
            <div className='contact_heading2'>문의 내용</div>
            <form ref={form} onSubmit={sendEmail} name='myform' onChange={() => { validate() }} >
                <div className='contact_input_wrap'>
                    <input type="text" name="customer_name" className='input' autoComplete='off' placeholder="성함/업체명을 입력해주세요." />
                    <input type="text" name="phone" className='input' autoComplete='off' placeholder="연락처를 입력해 주세요." />
                </div>
                <div className="select_wrap">
                    <input name="inquiry" className='select' value={selectedOption || ''} readOnly onClick={() => toggleOptions()} placeholder="문의 유형을 선택해 주세요." />
                    {isOpen ? <ArrowUp /> : <ArrowDown />}
                </div>
                {isOpen && (
                    <ul role='select' className='option'>
                        {options.map((option, index) => (
                            <li role='option' className='options' key={index} onClick={() => handleOptionClick(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
                <textarea name="detail" className='form_textarea' placeholder="문의 내용을 입력해 주세요." />
                <button type="submit" disabled={!isvalidated} className="btn_fill_large">
                    <span className='btn2_large'>Send</span>
                    <ViewBtn />
                </button>
            </form>
        </>
    );
};