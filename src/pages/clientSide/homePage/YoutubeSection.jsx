import React from 'react';
import MainVideo from '../../../components/clientSide/videoPlayer/MainVideo';

const YoutubeSection = ({youtubeVideos}) => {
    return (
        <div>
            {/* Title Section */}
            <h2 className="text-4xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-center">
                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730886419/11.%20SPA-Center/HomePage/c91co8un4daptbyl32qr.png" alt="" className='mx-auto' />
            </h2>

            <MainVideo videoUrl={youtubeVideos} />
        </div>
    );
};

export default YoutubeSection;