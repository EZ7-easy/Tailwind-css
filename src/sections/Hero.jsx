const Hero = () => {
    return(
        (
            <div className="w-full h-[400px] bg-[url(http://localhost:5173/bg.png)] bg-[] bg-no-repeat bg-center flex justify-center items-center md:justify-start">
                <div className="w-[240px] h-[190px] md:w-[40%] md:h-[100%] bg-[rgba(55,57,63,0.91)] backdrop-blur-[9.5px] flex flex-col items-center justify-center">
                    <div>
                        <p className="text-white text-lg font-semibold">
                            The Case Studies</p>
                        <p className="text-white text-4xl font-semibold">Our Latest <br/>Projects</p>
                    </div>
                </div>
            </div>
        )
    )
}
export default Hero;