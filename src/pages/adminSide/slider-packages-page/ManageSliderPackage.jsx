import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ManageSliderPackage = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch banners using React Query
  const {
    data: sliderPackages = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["sliderPackages"],

    queryFn: async () => {
      const res = await axiosPublic.get("/package-slider");
      return res.data;
    },
  });
  window.scrollTo(0, 0);


  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/package-slider/${id}`)
          .then((res) => {
            if (res) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Slider packages data has been deleted.',
                icon: 'success',
              });
              refetch();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  // Display loading state
  if (isLoading) {
    return <p>Loading banners...</p>;
  }

  // Display error state
  if (isError) {
    return <p>Failed to load slider packages. Please try again later.</p>;
  }

  return (
    <div className="container mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <Helmet>
        <title>Dashboard | Manage Slider Packages</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">Manage Slider Packages</h1>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Image</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Title</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Description</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Price Range</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sliderPackages && sliderPackages?.map((item) => (
            <tr key={item.id} className="border-t border-gray-200">
              <td className="px-6 py-4">
                <img src={item.image} alt={item?.title} className="w-20 h-12 object-cover rounded-lg" />
              </td>
              <td className="px-6 py-4">{item?.title}</td>
              <td className="px-6 py-4">{item?.description}</td>
              <td className="px-6 py-4">{item?.priceRange}</td>
              <td className="px-6 py-4 flex gap-2">
                <Link to={`/dashboard/update/${item?._id}`}>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(item?._id)}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSliderPackage;
