// components/Loading.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import CSS for nprogress
import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
    const router = useRouter();

    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const handleRouteChangeStart = () => {
            NProgress.start();
            setLoading(true)
        };

        const handleRouteChangeComplete = () => {
            NProgress.done();
            setLoading(false)
        };

        const handleRouteChangeError = () => {
            NProgress.done();
            setLoading(false)
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeError', handleRouteChangeError);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeError', handleRouteChangeError);
        };
    }, [router]);

    if(!loading) return null; // This component does not render anything

    return(
        <div className="flex h-screen w-screen justify-center items-center fixed">
            <div className=''>
                <TailSpin height={80} width={80} />
            </div>
        </div>
    )

};

export default Loading;