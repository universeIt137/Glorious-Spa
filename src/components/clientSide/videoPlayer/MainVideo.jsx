import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const MainVideo = ({ videoUrl }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div className="relative w-[100vw] h-[45.9vw] z-10 sm:w-full sm:h-[37vw] lg:h-[700px] lg:w-[1200px] lg:mx-auto rounded-2xl p-2">
            <ReactPlayer
                url={videoUrl}
                width="100%"            // You can adjust these values as needed
                height="100%"           // for responsive sizing or set a specific px height
                playing={false}         // Disable autoplay by setting this to false
                controls={true}         // Show video controls
            />
        </div>
    );
};

export default MainVideo;
