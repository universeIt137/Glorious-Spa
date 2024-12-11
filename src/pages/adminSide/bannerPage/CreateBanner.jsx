import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { uploadImg } from '../../../uploadFile/uploadImg';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const CreateBanner = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        setLoading(true); // Start loader
        event.preventDefault();

        const form = event.target;
        const bannerImg = form.bannerImg.files[0];

        let ImageUrl = '';
        if (bannerImg?.name) {
            ImageUrl = await uploadImg(bannerImg);
        }

        const data = { bannerImg: ImageUrl };

        axiosPublic.post(`/banner`, data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Banner uploaded",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    // Reset form and image preview
                    form.reset();
                    setImageUrl(null);
                }
            })
            .catch(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed to upload banner",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .finally(() => {
                setLoading(false); // Stop loader
            });
    };
    window.scrollTo(0, 0);


    return (
        <div>
            <Helmet>
                <title>Dashboard | Upload Banner</title>
            </Helmet>
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Upload Banner</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="bannerImg"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Banner Image
                        </label>
                        <input
                            type="file"
                            id="bannerImg"
                            accept="image/*"
                            name="bannerImg"
                            onChange={handleImageUpload}
                            className="block py-3 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                        {imageUrl && (
                            <div className="mt-2">
                                <span className="text-gray-700">Selected Image:</span>
                                <img
                                    src={imageUrl}
                                    alt="Uploaded Preview"
                                    className="mt-2 w-16 h-auto rounded-md border"
                                />
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none 
                            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#DB2777] text-white hover:bg-pink-600'}`}
                    >
                        {loading ? (
                            <span className="flex justify-center items-center">
                                <svg
                                    className="animate-spin h-5 w-5 text-white mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
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
                                        d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
                                    ></path>
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateBanner;
