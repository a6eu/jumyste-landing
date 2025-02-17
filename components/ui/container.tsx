import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
    return <div className="max-w-[1312px] w-full ">{children}</div>
}

export default Container
