// This page will be rendered when a route is not found
export default function Custom404() {
    return (
        <div className="grid h-dvh place-items-center">
            <div className="justify-center text-center md:scale-150">
                <h3 className="text-[100px] text-white md:text-[200px]">404</h3>
                <p className="-mt-5 pb-5 text-5xl text-white md:-mt-12">
                    Page not found
                </p>
                <a href="/" className="text-2xl text-white hover:underline">
                    Go back home
                </a>
            </div>
        </div>
    );
}
