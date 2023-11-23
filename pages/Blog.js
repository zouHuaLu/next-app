export default function Blog({res}) {
    const {data,name,age} = res
    return (
        <div>
            <div>日期：{data}</div>
            <div>姓名：{name}</div>
            <div>年龄：{age}</div>
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
