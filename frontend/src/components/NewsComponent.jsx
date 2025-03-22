import React from "react";
import imgMain from "../assets/img1.jpg";

const NewsComponent = () => {
  return (
    <div className="bg-gray-800 p-10">
      <div className="max-w-6xl mx-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Main News */}
          <div className="md:col-span-2">
            <a href="https://www.wbaltv.com/article/maryland-professor-deepfake-detection-app-talklock/46915638#:~:text=COLLEGE%20PARK%2C%20Md.%20%E2%80%94&text=done%20or%20said.-,AI%20has%20made%20creating%20deepfakes%20much%20easier%20and%20more%20accessible,%2C%22%20Professor%20Nirupam%20Roy%20said.">
              <div className="relative">
                <img
                  alt="img1"
                  className="w-full h-auto rounded-lg"
                  src={imgMain}
                />
                <div className="absolute bottom-4 left-4 bg-white text-gray-800 text-xs px-2 py-1 rounded">
                  Swimming
                </div>
                <div className="absolute bottom-4 right-4 bg-white text-gray-800 text-xs px-2 py-1 rounded flex items-center">
                  <i className="far fa-clock mr-1"></i>10 Minutes
                </div>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white">
                University of Maryland professor working on software to detect deepfakes
              </h2>
            </a>
          </div>


          {/* Side News */}
          <div className="space-y-6">
            {sideNews.map((news, index) => (
              <div className="flex" key={index}>

                <img alt={news.alt} className="w-24 h-24 rounded-lg object-cover mt-2" src={news.imgUrl} />
                <a href={news.link}>
                  <div className="ml-2">
                    <h3 className="text-lg font-semibold text-gray-200">{news.title}</h3>
                    <p className="text-gray-300 text-justify text-sm mt-2">{news.description}</p>
                    <div className="text-gray-400 text-xs mt-1 flex items-center">
                      <i className="far fa-clock mr-0"></i>
                      {news.time}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const sideNews = [
  {
    imgUrl: "https://newschecker.dietpixels.net/2025/03/a1-2.jpg",
    link: "https://newschecker.in/ai-deepfake/deepfake-video-of-anant-ambani-promoting-gaming-app-goes-viral",
    alt: "news1",
    title: "Deepfake Video Of Anant Ambani Promoting Gaming App Goes Viral",
    description: "A Google keyword search for “Avi game” and “Anant Ambani” did not yield any credible results about any such game launched by the industrialist. ...",
    time: "6 Minutes",
  },
  {
    imgUrl: "https://th-i.thgim.com/public/incoming/57zec7/article69346094.ece/alternates/LANDSCAPE_1200/IMG_IMG_BL05_MOBILEUSERS_2_1_Q0A24AAT.jpg",
    link: "https://www.thehindu.com/news/national/karnataka/karnataka-reports-12-deepfake-related-cybercrime-cases-in-two-years/article69333474.ece",
    alt: "news2",
    title: "Karnataka reports 12 deepfake-related cybercrime cases in two years",
    description: "The use of deepfake videos to mislead social media users has been on the rise in Karnataka, raising concerns over the potential misuse of artificial intelligence ...",
    time: "10 Minutes",
  },
  {
    imgUrl: "https://www.hindustantimes.com/ht-img/img/2024/10/15/550x309/rashmika_mandanna_1728979357676_1728979357880.jpg",
    link: "https://www.thehindu.com/news/cities/Delhi/delhi-police-arrest-techie-from-andhra-pradesh-for-rashmika-mandanna-deepfake-video/article67760419.ece",
    alt: "news3",
    title: "Delhi police arrest techie from Andhra Pradesh for Rashmika Mandanna deepfake video",
    description: "Delhi police arrest techie from Andhra Pradesh for Rashmika Mandanna deepfake video...",
    time: "12 Minutes",
  },
];

export default NewsComponent;