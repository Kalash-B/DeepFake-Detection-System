import AboutUsImg from "../assets/aboutus.jpeg"


const AboutUs = () => {
    return (
        <div className="AboutSection w-full min-h-screen flex md:flex-row-reverse flex-col-reverse justify-center items-center relative gap-10 bg-mid-blue">
            <div className="left w-full md:p-10 p-5">
                <h1 className="text-xl md:text-xl font-bold">About Us</h1>

                <p className="mt-4 md:w-3/4 text-sm md:text-base text-textColor font-semibold">The rise of Deepfake technology has led to increased concerns about misinformation, identity fraud, and security threats. Deepfake media, created using advanced AI-based generative models, can manipulate images and videos to misrepresent individuals, leading to false narratives, privacy breaches, and social distrust. Traditional detection methods are often ineffective against rapidly evolving AI-generated deepfake content. Therefore, there is a need for a real-time, AI-driven Deepfake Detection System that can efficiently analyse images and videos, distinguishing authentic content from manipulated media with high accuracy.</p>

            </div>
            <div className="right w-full bg-blue relative flex justify-center">
                <img src={AboutUsImg} alt="" className="md:w-96 w-72  mt-4 md:mt-0" />
            </div>
        </div>
    )
}

export default AboutUs