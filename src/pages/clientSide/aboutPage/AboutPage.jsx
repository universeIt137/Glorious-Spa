import React from 'react';
import AboutSection from '../homePage/AboutSection';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const AboutPage = () => {
    const axiosPublic = useAxiosPublic();
    const { data: content = [] } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent');
            return res.data[0];
        }
    })

    const { mainBannerUrl, bannerTitle, bannerSubTitle, bannerDescription, latestNews, youtubeVideos, aboutTitle, aboutSubTitle,bannerImageUrl, relatedSearch } = content;
    return (
        <div>
            <AboutSection aboutTitle={aboutTitle} aboutSubTitle={aboutSubTitle} bannerImageUrl={bannerImageUrl}></AboutSection>
        </div>
    );
};

export default AboutPage;