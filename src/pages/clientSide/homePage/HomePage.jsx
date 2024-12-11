import React from 'react';
import SpaBanner from './SpaBanner';
import ServiceSection from './ServiceSection';
import YoutubeSection from './YoutubeSection';
import AboutSection from './AboutSection';
import ProgressSection from './ProgressSection';
import PhotoGallery from '../../../components/clientSide/gallery/PhotoGallery';
import HoursOfOperation from './HoursOfOperation';
import Testimonials from './Testimonials';
import ContactUsSection from './ContactUsSection';
import RelatedSearch from './RelatedSearch';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const HomePage = () => {

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
            <SpaBanner mainBannerUrl={mainBannerUrl} bannerTitle={bannerTitle} bannerSubTitle={bannerSubTitle} bannerDescription={bannerDescription} latestNews={latestNews}></SpaBanner>
            <ServiceSection></ServiceSection>
            <div className="lg:mt-40">
                <YoutubeSection youtubeVideos={youtubeVideos}></YoutubeSection>
            </div>

            <div className="lg:mt-40">
                <AboutSection aboutTitle={aboutTitle} aboutSubTitle={aboutSubTitle} bannerImageUrl={bannerImageUrl}></AboutSection>
            </div>

            <div className="lg:mt-40">
                <ProgressSection></ProgressSection>
            </div>


            <div className="lg:mt-40">
                <PhotoGallery></PhotoGallery>
            </div>


            <div className="lg:mt-40">
                <HoursOfOperation></HoursOfOperation>
            </div>

            <div className="lg:mt-40">
                <Testimonials></Testimonials>
            </div>

            <div className="lg:mt-40">
                <ContactUsSection></ContactUsSection>
            </div>
            <div className="lg:my-4">
                <RelatedSearch relatedSearch={relatedSearch}></RelatedSearch>
            </div>
        </div>
    );
};

export default HomePage;