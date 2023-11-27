import {useState} from "react";
import styles from './Blog.module.css'
export default function Blog({res}) {
    const [contentData, setContentData] = useState(1)
    const {data, name, age} = res
    return (
        <div>
            <div>日期：{data}</div>
            <div>姓名：{name}</div>
            <div>年龄：{age}</div>
            <div className={styles.btn} onClick={() => {
                setContentData(contentData + 1)
            }}>数据：{contentData}</div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await require('../public/index.json')
    return {
        props: {
            res
        }
    }
}
