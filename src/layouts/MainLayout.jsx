import React from 'react';
import { Outlet } from 'react-router-dom';
import ClientNavbar from '../components/clientSide/clientNavbar/ClientNavbar';
import MobileNavbar from '../components/clientSide/clientNavbar/mobileNavbar';
import Footer from '../components/clientSide/footer/Footer';
import FloatingBtn from '../components/clientSide/floatingBtn/FloatingBtn';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const MainLayout = () => {

    const axiosPublic = useAxiosPublic();
    const { data: content = [] } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent');
            return res.data[0];
        }
    })

    const {logoImageUrl, name, whatsapp, phone} = content;

    return (
        <div>


            <ClientNavbar name={name} logoImageUrl={logoImageUrl}></ClientNavbar>

            <MobileNavbar name={name} logoImageUrl={logoImageUrl}></MobileNavbar>

            
            <Outlet></Outlet>
            <Footer name={name}></Footer>
            <FloatingBtn whatsapp={whatsapp} phone={phone}></FloatingBtn>
        </div>
    );
};

export default MainLayout;