import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { uploadImg } from "../../../uploadFile/uploadImg";
import { updateAlert } from "../../../helper/updateAlert";

const WhyChooseUsUpdate = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [iconUrl, setIconUrl] = useState(null);

    // Fetch the single item data
    const {
        data: singleChoose = {},
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ["singleChoose", id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/choose/${id}`);
            return res.data;
        },
    });

    useEffect(() => {
        if (singleChoose) {
            setImageUrl(singleChoose.image || null);
            setIconUrl(singleChoose.icon || null);
        }
    }, [singleChoose]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const form = event.target;
        const title = form.title.value.trim();
        const description = form.description.value.trim();
        const image = form.image.files[0];
        const icon = form.icon.files[0];

        // Upload new image if provided
        const newImage = image ? await uploadImg(image) : singleChoose.image;
        const newIcon = icon ? await uploadImg(icon) : singleChoose.icon;

        const payload = { title, description, image: newImage, icon: newIcon };

        try {
            const response = await updateAlert();
            if (response.isConfirmed) {
                const result = await axiosPublic.put(`/choose/${id}`, payload);
                if (result) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your entry has been updated.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                    form.reset();
                    setImageUrl(null);
                    setIconUrl(null);
                }
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: error.message,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full mx-auto mt-10">
            <Helmet>
                <title>Dashboard | Choose Us Update</title>
            </Helmet>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error loading data</p>}
            {!isLoading && singleChoose && (
                <form
                    onSubmit={handleSubmit}
                    className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                    <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">
                        Update Why Choose Us
                    </h1>

                    {/* Title */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={singleChoose.title}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Icon
                        </label>
                        <input
                            type="file"
                            name="icon"
                            onChange={(e) =>
                                setIconUrl(URL.createObjectURL(e.target.files[0]))
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {iconUrl && (
                        <img
                            src={iconUrl}
                            alt="Icon Preview"
                            className="w-16 h-auto rounded-md border mt-2"
                        />
                    )}

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Description
                        </label>
                        <textarea
                            name="description"
                            defaultValue={singleChoose.description}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                        />
                    </div>

                    {/* Image */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            onChange={(e) =>
                                setImageUrl(URL.createObjectURL(e.target.files[0]))
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt="Image Preview"
                            className="w-16 h-auto rounded-md border mt-2"
                        />
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full text-white font-bold py-3 px-4 rounded-lg transition duration-300 ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                            }`}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default WhyChooseUsUpdate;
