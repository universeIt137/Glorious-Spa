
import AboutUsTow from '../update-home-page/AboutUsTow';
import BodyMessage from '../update-home-page/BodyMessage';
import WhyChooseUs from '../update-home-page/WhyChooseUs';
import Testimonials from '../homePage/Testimonials';
import OurExperts from '../update-home-page/OurExperts';
import OurTiming from '../update-home-page/OurTiming';
import Visite from '../update-home-page/Visite';
import PhotoGallery from '../../../components/clientSide/gallery/PhotoGallery';
import SpaSection from '../update-home-page/SpaSection';

const UpdateAboutPage = () => {
    return (
        <div>
            <AboutUsTow></AboutUsTow>
            <SpaSection></SpaSection>
            <WhyChooseUs></WhyChooseUs>
            <PhotoGallery></PhotoGallery>
            <Testimonials></Testimonials>
            <OurExperts></OurExperts>
            <OurTiming></OurTiming>
            <Visite></Visite>

        </div>
    )
}

export default UpdateAboutPage
