import Thread from '@/components/thread'
import dayjs from 'dayjs'

export default function Home() {
    return (
        <div className='flex flex-col gap-y-6 items-center justify-center'>
            {
                Array.from(Array(100).keys()).map((_, i) => (
                    <Thread key={i} username='girishbisane' isVerified avatarUrl='/me.png' content='Welcome to Threads' isLiked createdAt={dayjs().toISOString()} />
                ))
            }

        </div>
    )
}
