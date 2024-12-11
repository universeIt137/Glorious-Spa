import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { deleteAlert } from "../../../helper/deleteAlert";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const WhyChooseUsManage = () => {
  const axiosPublic = useAxiosPublic();
  window.scrollTo(0, 0);

  const {
    data: allChoseUs = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["chooseUs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/choose");
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    try {
      let resp = await deleteAlert();
      if (resp.isConfirmed) {
        let res = await axiosPublic.delete(`/choose/${id}`);
        if (res) {
          Swal.fire({
            title: "Deleted!",
            text: "Choose Us data has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to delete Choose Us data.",
        icon: "error",
      })
    }
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Dashboard | Why Choose Us</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4 text-center">Manage Choose Us</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white text-left">
              <th className="px-6 py-3 text-center font-semibold">Title</th>
              <th className="px-6 py-3 text-center font-semibold">Icon</th>
              <th className="px-6 py-3 text-center font-semibold">
                Description
              </th>
              <th className="px-6 py-3 text-center font-semibold">Image</th>
              <th className="px-6 py-3 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center">
                  Loading...
                </td>
              </tr>
            )}
            {isError && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-red-500">
                  Error loading data.
                </td>
              </tr>
            )}
            {allChoseUs.map((item, i) => (
              <tr
                key={i}
                className={`border-t ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="px-6 py-4 text-center">{item?.title}</td>
                <td className="px-6 py-4 text-center">
                  <img
                    src={item?.icon}
                    alt="Choose Us"
                    className="w-16 h-16 rounded-md border"
                  />
                </td>
                <td className="px-6 py-4 text-center">{item?.description}</td>
                <td className="px-6 py-4 text-center">
                  <img
                    src={item?.image}
                    alt="Choose Us"
                    className="w-16 h-16 rounded-md border"
                  />
                </td>
                <td className="px-6 py-4 flex text-center">
                  <Link to={`/dashboard/chooseUs-update/${item?._id}`} >
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition">
                      Edit
                    </button>
                  </Link>
                  <button onClick={() => { handleDelete(item?._id) }} className="ml-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-700 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {!isLoading && allChoseUs.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WhyChooseUsManage;
