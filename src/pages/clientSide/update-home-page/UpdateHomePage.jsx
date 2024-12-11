import React from 'react'
import BannerTow from './BannerTow'
import ServiceTow from './ServiceTow'
import ServiceThree from './ServiceThree'
import AboutUsTow from './AboutUsTow'
import SpaSection from './SpaSection'
import BodyMessage from './BodyMessage'
import WhyChooseUs from './WhyChooseUs'
import ServiceDetails from './ServiceDetails';
import Package from './Package'
import PhotoGallery from '../../../components/clientSide/gallery/PhotoGallery'
import OurTiming from './OurTiming'
import Visite from './Visite'
import Testimonials from '../homePage/Testimonials';
import OurExperts from './OurExperts'
import ContactTwo from './ContactTwo'

const UpdateHomePage = () => {
  return (
    <div>
      {/* <BannerTow></BannerTow> */}
      <BannerTow></BannerTow>
      <ServiceTow></ServiceTow>
      <ServiceThree></ServiceThree>
      <AboutUsTow></AboutUsTow>
      <SpaSection></SpaSection>
      {/* <BodyMessage></BodyMessage> */}
      <WhyChooseUs></WhyChooseUs>
      <ServiceDetails></ServiceDetails>
      <Package></Package>
      <PhotoGallery></PhotoGallery>
      <OurTiming></OurTiming>
      <Visite></Visite>
      <Testimonials></Testimonials>
      <OurExperts></OurExperts>
      <ContactTwo></ContactTwo>
    </div>
  )
}

export default UpdateHomePage;
