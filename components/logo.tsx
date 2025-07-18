const Logo = () => {
    return (
        <div className='flex items-center gap-1.5'>
            <svg
                width='77'
                height='71'
                viewBox='0 0 77 71'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <rect width='77' height='71' rx='5' fill='#493D9E' />
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.00001 38.8535C8.97995 44.832 11.491 49.9892 15.5332 54.3252C20.8161 60.1084 27.3933 63 35.2648 63C43.1363 63 49.7136 60.1084 54.9964 54.3252C60.3322 48.6016 63 41.4472 63 32.8618V8H38.1962V20.6014L50.6967 20.3415V32.8618C50.6967 38.1238 49.1192 40.6238 46.1441 45.3387C46.0517 45.4851 45.9579 45.6337 45.8628 45.7846C42.6931 49.1829 40.3892 51.1951 35.2648 51.1951C30.1404 51.1951 28.3404 49.8537 25.1178 46.4553C23.1811 44.3789 21.9202 41.7906 21.2323 38.8535H8.00001Z'
                    fill='white'
                />
                <rect x='21.059' y='20.9673' width='17.1372' height='17.8862' fill='#FFF2AF' />
            </svg>
            <span className='font-gilroy font-bold text-primary text-2xl'>Jumyste</span>
        </div>
    )
}

export { Logo }
