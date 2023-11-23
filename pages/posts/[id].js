export default function (props) {
    return <div>Post:{props.post}</div>
}

export async function getStaticPaths() {
    const res = await require('../../public/paths.json')
    const paths = res.map(item => {
        return {
            params: {
                id: item.id
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    return {
        props: {
            post: `post ${params.id}`
        }
    }
}
