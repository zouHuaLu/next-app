import titleImg from '../../../public/images/img_1.png'
import footerImg from '../../../public/images/img_2.png'
import footerSign from '../../../public/images/img.png'
import qrCodeImg from '../../../public/images/qrcode.jpg'
import styles from './index.module.css'
import {useCallback, useEffect, useRef, useState, useReducer} from 'react'
import Image from "next/image";
import ClipboardJS from 'clipboard'

function reducer(state, action) {
    if (action.type === 'add') {
        return {
            age: state.age + 1
        }
    }
}

export default function Login() {
    const [authKeys, setAuthKeys] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [inviteCode, setInviteCOde] = useState('')
    const submitBtn = useRef(null)
    // 初始化
    useEffect(() => {
        setAuthKeys(localStorage.getItem('authKey') || '')
    }, [])

    // const [state, dispatch] = useReducer(reducer, {age: 18})
    const toSubmit = useCallback(() => {
        // new ClipboardJS(submitBtn.current,{
        //     text: function(trigger) {
        //       console.log(trigger)
        //       return '234'
        //     }
        // })
        fetch('/api/hello', {
            method: 'POST',
        }).then(res => {
            console.log(res)
        })
        // dispatch({type: 'add'})
    }, [])

    useEffect(() => {
        if (authKeys) {
            console.log(111)
        }
    }, [authKeys])


    return (
        <div className={styles.login_container}>
            <div className={styles.img_wrap}>
                <Image className={styles.title_img} src={titleImg} alt='title'/>
            </div>
            <div className={styles.input_wrap}>
                <div className={styles.input_item}>
                    <div className={styles.input_title}>店铺(公司)名称</div>
                    <input className={styles.input} value={companyName} onChange={e => {
                        setCompanyName(e.target.value)
                    }} type='text' placeholder='请输入你的店铺(公司)名称'/>
                </div>

                <div className={styles.input_item}>
                    <div className={styles.input_title}>激活码</div>
                    <input value={inviteCode} onChange={e => {
                        setInviteCOde(e.target.value)
                    }} className={styles.input} type='text' placeholder='请输入激活码'/>
                </div>
                <div className={styles.btn_wrap}>
                    <div ref={submitBtn} className={styles.btn} onClick={toSubmit}>点击登录</div>
                </div>
            </div>
            <div className={styles.footer_wrap}>
                <Image className={styles.footer_img} src={footerImg} alt='footer_img'/>
                <div className={styles.footer_sign}>
                    <Image className={styles.sign_img} src={footerSign} alt='footer_sign'/>
                </div>
                <div className={styles.qr_code_wrap}>
                    <Image className={styles.qrimg} src={qrCodeImg} alt='rcode'/>
                </div>
            </div>
        </div>
    )
}
