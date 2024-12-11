import React, { useState } from 'react';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { IoMdCard } from 'react-icons/io';
import { IoCartOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { MdLogout, MdMenuOpen, MdOutlineCategory, MdOutlineDiscount, MdOutlineLockPerson } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { SiNginxproxymanager } from 'react-icons/si';
import { GrDashboard } from "react-icons/gr";

// update code 
import { FaHome, FaUsers, FaWpforms } from 'react-icons/fa';
import { FaCircleUser, FaFileWaveform } from 'react-icons/fa6';
import { MdAdd, MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaRegComments } from "react-icons/fa";
import Dropdown from './Dropdown';
import NavigationItem from './NavigationItem';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase/firebase.config';

const Sidebar = () => {
    window.scrollTo(0, 0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    const packageUrls =
        <>
            <NavigationItem to="/dashboard/add-package" icon={MdAddCircle} label="Add Package" />
            <NavigationItem to="/dashboard/manage-package" icon={SiNginxproxymanager} label="Manage Package" />
        </>

    const bookingUrls =
        <>

            <NavigationItem to="/dashboard/manage-booking" icon={SiNginxproxymanager} label="Manage Booking" />
        </>

    const contentUrls =
        <>

            <NavigationItem to="/dashboard/manage-content" icon={SiNginxproxymanager} label="Manage Content" />
        </>

    const galleryUrls =
        <>

            <NavigationItem to="/dashboard/manage-gallery" icon={SiNginxproxymanager} label="Manage Gallery" />
        </>

    const officeUrls =
        <>

            <NavigationItem to="/dashboard/manage-office-hour" icon={SiNginxproxymanager} label="Manage Office Hours" />
        </>

    const testimonialsUrls =
        <>

            <NavigationItem to="/dashboard/manage-testimonial" icon={SiNginxproxymanager} label="Manage Testimonial" />
        </>


    const blogUrls =
        <>
            <NavigationItem to="/dashboard/addBlog" icon={MdAddCircle} label="Add Blog" />
            <NavigationItem to="/dashboard/manageBlog" icon={SiNginxproxymanager} label="Manage Blogs" />
        </>
    const comments =
        <>
            <NavigationItem to="/dashboard/manageComments" icon={FaRegComments} label="Manage Comments" />
        </>

    const homepageUrls =
        <>
            <NavigationItem to="/dashboard/manageHomepageContent" icon={SiNginxproxymanager} label="Manage Homepage Content" />
            <NavigationItem to="/dashboard/manageCountDown" icon={SiNginxproxymanager} label="Manage CountDown" />
        </>

    const facultyUrls =
        <>
            <NavigationItem to="/dashboard/addFaculty" icon={MdAddCircle} label="Add Faculty" />
            <NavigationItem to="/dashboard/manageFaculty" icon={SiNginxproxymanager} label="Manage Faculty" />
        </>

    const testimonialUrls =
        <>
            <NavigationItem to="/dashboard/addTestimonial" icon={MdAddCircle} label="Add Testimonial" />
            <NavigationItem to="/dashboard/manageTestimonial" icon={SiNginxproxymanager} label="Manage Testimonial" />
        </>

    const studentGallaryUrls =
        <>
            <NavigationItem to="/dashboard/manageStudentGallary" icon={SiNginxproxymanager} label="Manage Student Gallary" />
        </>

    const requestUrls =
        <>
            <NavigationItem to="/dashboard/admissionRequest" icon={FaFileWaveform} label="Admission Requests" />
            <NavigationItem to="/dashboard/seminar" icon={FaUsers} label="Seminar Requests" />
        </>

    const seminarUrls =
        <>
            <NavigationItem to="/dashboard/createSeminar" icon={MdAddCircle} label="Create Seminar" />
            <NavigationItem to="/dashboard/manageSeminar" icon={SiNginxproxymanager} label="Manage Seminar" />
        </>
    const bannerUrls =
        <>
            <NavigationItem to="/dashboard/upload-banner" icon={MdAddCircle} label="Upload Banner" />
            <NavigationItem to="/dashboard/manage-banner" icon={SiNginxproxymanager} label="Manage Banner" />
        </>

    const sliderPackagesUrl =
        <>
            <NavigationItem to="/dashboard/upload-packages-slider" icon={MdAddCircle} label="Upload Packages Slider" />
            <NavigationItem to="/dashboard/manage-packages-slider" icon={MdAddCircle} label="Manage Packages Slider" />
        </>

    const contact =
        <>
            <NavigationItem to="/dashboard/contact-list" icon={MdAddCircle} label="Contact list" />
        </>

const chooseUs =
<>
    <NavigationItem to="/dashboard/choose-us-upload" icon={MdAddCircle} label="Choose Us Upload" />
    <NavigationItem to="/dashboard/choose-us-list" icon={MdAddCircle} label="Choose Us list" />
</>


    return (
        <>
            <aside
                className={`bg-gradient-to-b from-indigo-600 to-[#E94192] text-white transition-all duration-300 ${isSidebarOpen ? 'w-72' : 'w-14'
                    }`}
            >
                <div className="flex justify-between items-center p-4 gap-8">
                    <div className={`text-2xl font-bold ${!isSidebarOpen && 'hidden'}`}>
                        <Link to={'/'}>Smart Beauty Body Spa
                        </Link>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                    >
                        {isSidebarOpen ? <IoCloseCircleOutline className='text-4xl' /> : <MdMenuOpen className='text-3xl' />}
                    </button>
                </div>

                <nav className="flex-1 p-4">
                    <ul className={`space-y-2 pb-20 list-none ${!isSidebarOpen && 'hidden'} `}>
                        {/* <NavigationItem to="/dashboard" icon={FaHome} label="Dashboard" /> */}
                        <NavigationItem
                            to="/dashboard"
                            icon={GrDashboard}
                            label="Dashboard"
                        />
                        <li className="mb-4 mx-3">
                            <Dropdown buttonText="Banner" urls={bannerUrls} />
                        </li>

                        <li className="mb-4 mx-3">
                            <Dropdown buttonText="Packages Slider" urls={sliderPackagesUrl} />
                        </li>

                        <li className="mb-4 mx-3">
                            <Dropdown buttonText="Packages" urls={packageUrls} />
                        </li>

                        <li className="mb-4 mx-3">
                            <Dropdown buttonText="Bookings" urls={bookingUrls} />
                        </li>

                        <li className="mb-4 mx-3">
                            <Dropdown buttonText="Website Content" urls={contentUrls} />
                        </li>

                        <li className="mb-4 mx-3">
                            <Dropdown buttonText="Photo Gallery" urls={galleryUrls} />
                        </li>

                        <li className="mb-4 mx-3">
                            <Dropdown buttonText="Office Hour" urls={officeUrls} />
                        </li>

                        <li className="mb-4 mx-3">
                            <Dropdown buttonText="Testimonial" urls={testimonialsUrls} />
                        </li>

                        <li className="mb-4 mx-3">
                            <Dropdown buttonText="Contact" urls={contact} />
                        </li>

                        <li className="mb-4 mx-3">
                            <Dropdown buttonText="Why Choose Us" urls={chooseUs} />
                        </li>




                        <li className="mb-4 mx-3">
                            <button onClick={() => signOut(auth)} className=' px-5 py-2 rounded-lg flex gap-1 items-center hover:bg-gray-200 hover:border-transparent transition-all duration-300 active:scale-90'> Log Out <MdLogout /></button>
                        </li>
                    </ul>
                </nav>
            </aside></>
    );
};

export default Sidebar;