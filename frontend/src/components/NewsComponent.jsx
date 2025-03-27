import React from "react";
import imgMain from "../assets/img1.jpg";

const NewsComponent = () => {
  return (
    <div className="bg-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main News Section */}
          <div className="md:col-span-2">
            <a
              href="https://www.wbaltv.com/article/maryland-professor-deepfake-detection-app-talklock/46915638"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  alt="Main News"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  src={imgMain}
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-md">
                  AI & Deepfake
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-md flex items-center">
                  <i className="far fa-clock mr-1"></i> 10 Minutes Read
                </div>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                University of Maryland professor working on software to detect deepfakes
              </h2>
            </a>
          </div>

          {/* Side News Section */}
          <div className="space-y-6">
            {sideNews.map((news, index) => (
              <a
                key={index}
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
              >
                <img
                  alt={news.alt}
                  className="w-24 h-24 rounded-lg object-cover"
                  src={news.imgUrl}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-100 hover:text-blue-400 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-tight">
                    {news.description.length > 100
                      ? `${news.description.substring(0, 100)}...`
                      : news.description}
                  </p>
                  <div className="text-gray-400 text-xs mt-2 flex items-center">
                    <i className="far fa-clock mr-1"></i> {news.time}
                  </div>
                </div>
              </a>
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
    description:
      "A Google keyword search for 'Avi game' and 'Anant Ambani' did not yield any credible results about any such game launched by the industrialist.",
    time: "6 Minutes",
  },
  {
    imgUrl:
      "https://th-i.thgim.com/public/incoming/57zec7/article69346094.ece/alternates/LANDSCAPE_1200/IMG_IMG_BL05_MOBILEUSERS_2_1_Q0A24AAT.jpg",
    link: "https://www.thehindu.com/news/national/karnataka/karnataka-reports-12-deepfake-related-cybercrime-cases-in-two-years/article69333474.ece",
    alt: "news2",
    title: "Karnataka reports 12 deepfake-related cybercrime cases in two years",
    description:
      "The use of deepfake videos to mislead social media users has been on the rise in Karnataka, raising concerns over AI misuse.",
    time: "10 Minutes",
  },
  // {
  //   imgUrl:
  //     "https://www.hindustantimes.com/ht-img/img/2024/10/15/550x309/rashmika_mandanna_1728979357676_1728979357880.jpg",
  //   link: "https://www.thehindu.com/news/cities/Delhi/delhi-police-arrest-techie-from-andhra-pradesh-for-rashmika-mandanna-deepfake-video/article67760419.ece",
  //   alt: "news3",
  //   title:
  //     "Delhi police arrest techie from Andhra Pradesh for Rashmika Mandanna deepfake video",
  //   description:
  //     "Delhi police arrested a techie in connection with the Rashmika Mandanna deepfake video scandal.",
  //   time: "12 Minutes",
  // },
];

export default NewsComponent;
