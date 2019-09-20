import { useRouter } from 'next/router'

const Match = () => {
    const router = useRouter()
    const { id } = router.query

    return <p>Match: {id}</p>
}

export default Match