import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import PackageManageTable from './components/PackageManageTable';
import { Helmet } from 'react-helmet-async';

const ManagePackagePage = () => {

    
   

    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Package</title>
            </Helmet>
            <PackageManageTable></PackageManageTable>
        </div>
    );
};

export default ManagePackagePage;