import React from "react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteAlert } from "../../../helper/deleteAlert";
import { statusUpdateAlert } from "../../../helper/statusUpdateAlert";

const ManageContact = () => {
  window.scrollTo(0, 0);

  const axiosPublic = useAxiosPublic();

  // Fetch banners using React Query
  const {
    data: contactData = [], isLoading, isError, refetch,
  } = useQuery({
    queryKey: ["contact"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contact");
      return res.data;
    },
  });


  const updateStatus = async (id) => {
    try {
      let resp = await statusUpdateAlert();
      if (resp.isConfirmed) {
        // Perform delete operation if confirmed
        const res = await axiosPublic.put(`/contact-status/${id}`,"");
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Contact status updated.",
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      } else {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Updated fail.",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      // Handle errors gracefully
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to delete contact data.",
        showConfirmButton: false,
        timer: 1500
      });
      console.error("Error deleting contact:", error);
    }
  };


  const deleteContactData = async (id) => {
    try {
      let resp = await deleteAlert();
      if (resp.isConfirmed) {
        // Perform delete operation if confirmed
        const res = await axiosPublic.delete(`/contact/${id}`);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Contact data has been deleted.",
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      } else {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Deletion cancelled.",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      // Handle errors gracefully
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to delete contact data.",
        showConfirmButton: false,
        timer: 1500
      });
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="w-full my-5 ">
      <Helmet>
        <title>Dashboard | Manage Contact</title>
      </Helmet>
      <h1 className="py-4 text-4xl text-center font-bold mb-4">Manage Contact</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white text-left">
              <th className="px-6 py-3 font-semibold">Name</th>
              <th className="px-6 py-3 font-semibold">Email</th>
              <th className="px-6 py-3 font-semibold">Phone</th>
              <th className="px-6 py-3 font-semibold">Subject</th>
              <th className="px-6 py-3 font-semibold">Status</th>
              <th className="px-6 py-3 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {contactData && contactData.map((item, i) => (
              <tr key={i} className="border-t bg-white">
                <td className="px-6 py-4">{item?.name}</td>
                <td className="px-6 py-4">{item?.email}</td>
                <td className="px-6 py-4">{item?.phone}</td>
                <td className="px-6 py-4">{item?.subject}</td>
                <td
                  onClick={() => updateStatus(item?._id)}
                  className="px-6 py-4 font-bold cursor-pointer "
                >
                  {item?.status ? "Confirm" : "Not Confirmed"}
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => { deleteContactData(item?._id) }} className="px-4 py-2 text-sm font-medium  bg-blue-500 rounded-lg hover:bg-blue-700 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContact;
