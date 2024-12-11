import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/adminSide/dashboard/Dashboard';
import GalleryPage from '../pages/clientSide/galleryPage/GalleryPage';
import PackageDetails from '../pages/clientSide/packagePage/PackageDetails';
import AddPackagePage from '../pages/adminSide/packageRelatedPages/AddPackagePage';
import Login from '../pages/clientSide/credentialPages/Login';
import PrivateRoutes from './PrivateRoutes';
import Register from '../pages/clientSide/credentialPages/Register';
import ManagePackagePage from '../pages/adminSide/packageRelatedPages/ManagePackagePage';
import UpdatePackagePage from '../pages/adminSide/packageRelatedPages/UpdatePackagePage';
import BookNowForm from '../pages/clientSide/bookNowPage/BookNowForm';
import ManageBooking from '../pages/adminSide/bookingRelatedPages/ManageBooking';
import HomePageContentForm from '../pages/adminSide/homepageRelatedPages/HomePageContentForm';
import ManagePhotoGallery from '../pages/adminSide/photoGalleryRelatedPages/ManagePhotoGallery';
import ManageOfficeHour from '../pages/adminSide/officeHourRelatedPages/ManageOfficeHour';
import ManageTestimonial from '../pages/adminSide/testimonialRelatedPages/ManageTestimonial';
import UpdateMainLayout from '../updateMainLayout/UpdateMainLayout';
import UpdateHomePage from '../pages/clientSide/update-home-page/UpdateHomePage';
import CreateBanner from './../pages/adminSide/bannerPage/CreateBanner';
import ManageBanner from '../pages/adminSide/bannerPage/ManageBanner';
import BannerUpdate from '../pages/adminSide/bannerPage/BannerUpdate';
import CreateSliderPackage from '../pages/adminSide/slider-packages-page/CreateSliderPackage';
import ManageSliderPackage from './../pages/adminSide/slider-packages-page/ManageSliderPackage';
import UpdateSliderPackage from '../pages/adminSide/slider-packages-page/UpdateSliderPackage';
import UpdateServicePage from '../pages/clientSide/update-service-page/UpdateServicePage';
import UpdateAboutPage from '../pages/clientSide/update-about-page/UpdateAboutPage';
import UpdateContactPage from '../pages/clientSide/update-contact-page/UpdateContactPage';
import ManageContact from '../pages/adminSide/contact-page/ManageContact';
import WhyChooseUsCreate from './../pages/adminSide/why-choose-us-page/WhyChooseUsCreate';
import WhyChooseUsManage from './../pages/adminSide/why-choose-us-page/WhyChooseUsManage';
import WhyChooseUsUpdate from './../pages/adminSide/why-choose-us-page/WhyChooseUsUpdate';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <MainLayout></MainLayout>,
  //   children: [
  //     {
  //       path: "/",
  //       element: <HomePage></HomePage>
  //     },
  //     {
  //       path: "/packages",
  //       element: <Packages></Packages>
  //     },
  //     {
  //       path: "/package-details/:id",
  //       element: <PackageDetails></PackageDetails>
  //     },
  //     {
  //       path: "/about",
  //       element: <AboutPage></AboutPage>
  //     },
  //     {
  //       path: "/contact",
  //       element: <ContactPage></ContactPage>
  //     },
  //     {
  //       path: "/gallery",
  //       element: <GalleryPage></GalleryPage>
  //     },
      
  //   ]
  // },
  {
    path: "/admin-login",
    element: <Login></Login>
  },
  {
    path: "/admin-register",
    element: <Register></Register>
  },

  // Admin panel related routes 

  {
    path: "/dashboard",
    element: <PrivateRoutes>
      <DashboardLayout></DashboardLayout>
    </PrivateRoutes>,
    children: [
      
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "add-package",
        element: <AddPackagePage></AddPackagePage>
      },
      {
        path: "manage-package",
        element: <ManagePackagePage></ManagePackagePage>
      },
      {
        path: "update-package/:id",
        element: <UpdatePackagePage></UpdatePackagePage>
      },
      {
        path: "manage-booking",
        element: <ManageBooking></ManageBooking>
      },
      {
        path: "manage-content",
        element: <HomePageContentForm></HomePageContentForm>
      },
      {
        path: "manage-gallery",
        element: <ManagePhotoGallery></ManagePhotoGallery>
      },
      {
        path: "manage-office-hour",
        element: <ManageOfficeHour></ManageOfficeHour>
      },
      {
        path: "manage-testimonial",
        element: <ManageTestimonial></ManageTestimonial>
      },
      // banner related route
      {
        path : "upload-banner",
        element : <CreateBanner></CreateBanner>
      },
      
      {
        path : "manage-banner",
        element : <ManageBanner></ManageBanner>
      },
      {
        path : "banner-update/:id",
        element : <BannerUpdate></BannerUpdate>
      },
      // packages slider routes
      {
        path : "upload-packages-slider",
        element : <CreateSliderPackage></CreateSliderPackage>
      },
      {
        path : "manage-packages-slider",
        element : <ManageSliderPackage></ManageSliderPackage>
      },
      {
        path : "update/:id",
        element : <UpdateSliderPackage></UpdateSliderPackage>
      },
      // contact related routes
      {
        path : "contact-list",
        element : <ManageContact></ManageContact>
      },
      // choose us related route
      {
        path : "choose-us-upload",
        element : <WhyChooseUsCreate></WhyChooseUsCreate>
      },
      {
        path : "choose-us-list",
        element : <WhyChooseUsManage></WhyChooseUsManage>
      },
      {
        path : "chooseUs-update/:id",
        element : <WhyChooseUsUpdate></WhyChooseUsUpdate>
      }
    ]
  },



  // Clientside related routes 
  {
    path : "/",
    element : <UpdateMainLayout></UpdateMainLayout>,
    children : [
      {
        path : "",
        element : <UpdateHomePage></UpdateHomePage>
      },
      {
        path : "packages",
        element : <UpdateServicePage></UpdateServicePage>
      },
      {
        path: "package-details/:id",
        element: <PackageDetails></PackageDetails>
      },
      {
        path : "about",
        element :<UpdateAboutPage></UpdateAboutPage>
      },
      {
        path : "contact",
        element : <UpdateContactPage></UpdateContactPage>
      },
      {
        path :"gallery",
        element : <GalleryPage></GalleryPage>
      },
      // book now related routes
      {
        path: "/book-now/:id",
        element: <BookNowForm></BookNowForm>
      }
    ]
  }
]);



export default router;