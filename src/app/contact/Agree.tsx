import React, { useState, useRef, useEffect } from 'react'
import ViewBtn from '@/public/images/common/ico-line-view.svg';
import { loem } from '@/public/config';

const Agree = ({ onAgree }: any) => {
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        const textarea = textareaRef.current;

        const handleScroll = () => {
            if (!isScrolledToBottom && textarea) {
                //const isAtBottom = textarea.scrollHeight - textarea.scrollTop === textarea.clientHeight;
                const isAtBottom = textarea.scrollTop >= (textarea.scrollHeight - textarea.clientHeight) / 2;
                setIsScrolledToBottom(isAtBottom);
            }
        };

        if (textarea) {
            textarea.addEventListener('scroll', handleScroll);
            return () => {
                textarea.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isScrolledToBottom]);


    const term = loem.long;

    return (
        <div>
            <div className='contact_heading2'>{loem.title}</div>
            <div className='fix_height'>
                <textarea
                    ref={textareaRef}
                    name="term"
                    id="term"
                    value={term}
                    readOnly
                    className="agree_textarea"
                />
            </div>
            <button
                onClick={() => onAgree()}
                className="btn_fill_large"
                disabled={!isScrolledToBottom}
                area-aria-label='동의하기'
            >
                <span className='btn2_large'>Agree</span>
                <ViewBtn />
            </button>
        </div>
    );
};

export default Agree;
