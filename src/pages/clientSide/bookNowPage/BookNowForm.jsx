import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const BookNowForm = ({ packageTitle, packageId }) => {
    window.scrollTo(0, 0);

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { data: pkg = {} } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/package/${id}`);
            return res.data;
        }
    })


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: '',
    });
    const [loading, setLoading] = useState(false); // Loading state for form submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const packageName = form.packageName.value;
        setLoading(true); // Set loading to true when submission starts

        const data = { ...formData, packageName };
        console.log(data);

        axiosPublic.post('/booking', data)
            .then(res => {
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your request has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setLoading(false);
            }
            })
            .catch(err => {
            console.log(err.message)
        })

    };

    return (
        <div className="min-h-screen">

            <h2 className="lg:text-3xl font-bold mb-4 text-center text-[#2563EB] mt-10">
                Book Now for {pkg?.title}
            </h2>
            <div className="flex justify-center  p-4  ">

                <form
                    onSubmit={handleSubmit}
                    className="w-10/12 mx-auto bg-white p-6 rounded-lg shadow-lg relative "
                >


                    {/* Loading Overlay */}
                    {loading && (
                        <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center">
                            <svg
                                className="animate-spin h-8 w-8 text-[#2563EB]"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8z"
                                ></path>
                            </svg>
                        </div>
                    )}

                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="">
                            {/* packageName */}
                            <label className="block mb-2 text-gray-600">Package Name</label>
                            <input
                                type="text"
                                name="packageName"
                                defaultValue={pkg?.title}
                                required
                                placeholder="Your package Name"
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                                disabled={loading} // Disable input when loading
                            />
                        </div>

                        <div className="">
                            {/* Name */}
                            <label className="block mb-2 text-gray-600">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Full Name"
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                                disabled={loading} // Disable input when loading
                            />
                        </div>

                        <div className="">
                            {/* Email */}
                            <label className="block mb-2 text-gray-600">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your Email"
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                                disabled={loading}
                            />
                        </div>

                        <div className="">
                            {/* Phone */}
                            <label className="block mb-2 text-gray-600">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Your Phone Number"
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                                disabled={loading}
                            />
                        </div>

                        <div className="">
                            {/* Address */}
                            <label className="block mb-2 text-gray-600">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                placeholder="Your Address"
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                                disabled={loading}
                            />
                        </div>

                        <div className="">
                            {/* Additional Notes */}
                            <label className="block mb-2 text-gray-600">Notes (Optional)</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Any additional information or requests"
                                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                                disabled={loading}
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#2563EB] text-white font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? 'Booking...' : 'Confirm Booking'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookNowForm;
