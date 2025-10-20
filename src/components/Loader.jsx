function Loader() {
    return (
        <>
            <div className="loader-wrap">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path
                        id="svg"
                        d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
                    ></path>
                </svg>

                <div className="loader-wrap-heading">
                    <div className="load-text">
                        <span>L</span>
                        <span>o</span>
                        <span>a</span>
                        <span>d</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>
                    </div>
                </div>
            </div>

            <div className="cursor"></div>

            <div className="progress-wrap cursor-pointer">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        </>
    );
}

export default Loader;

