import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNavbar from '../components/clientSide/clientNavbar/mobileNavbar'
import Footer from '../components/clientSide/footer/Footer'
import FloatingBtn from '../components/clientSide/floatingBtn/FloatingBtn'
import UpdateNavbar from './../components/clientSide/update-navbar/UpdateNavbar';
import TopBar from '../components/clientSide/clientNavbar/TopBar'
import useAxiosPublic from '../hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import StickyAddress from '../components/clientSide/clientNavbar/StickyAddress'

const UpdateMainLayout = () => {

    const axiosPublic = useAxiosPublic();
    const { data: webData = [] } = useQuery({
        queryKey: ['webData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent');
            return res.data[0];
        }
    })

    console.log(webData);

    return (
        <div>
            <TopBar address={webData?.address} phone={webData?.phone}></TopBar>
            <div className='sticky top-0 z-50 ' >
                <UpdateNavbar></UpdateNavbar>
            </div>


            <div className="">
                <MobileNavbar address={webData?.address}></MobileNavbar>
            </div>

            <div className="sticky top-0 z-40 lg:hidden">
                <StickyAddress address={webData?.address}></StickyAddress>
            </div>

            <Outlet></Outlet>
            <Footer></Footer>
            <FloatingBtn whatsapp={webData?.whatsapp} phone={webData?.phone} ></FloatingBtn>
        </div>
    )
}

export default UpdateMainLayout
