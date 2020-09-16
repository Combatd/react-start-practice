import Link from 'next/link';

function HomePage() {
    return(
        <div>
            This is my awesome movie app
            Please Signup <Link href='/signup'>Here</Link>
        </div>
    ) 
}

export default HomePage;