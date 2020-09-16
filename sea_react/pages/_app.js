import Navbar from '../src/components/Navbar'

function MyApp({ Component, pageProps }) {
    return (
        <div>
            This is on every page
            <Navbar />
            <Component {...pageProps} />
        </div>
        
    )
}

export default MyApp;