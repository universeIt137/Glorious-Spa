import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { uploadImg } from "../../../uploadFile/uploadImg";
import Swal from "sweetalert2";

const CreateSliderPackage = () => {
  window.scrollTo(0, 0);

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
    const title = form.title.value;
    const description = form.description.value;
    const priceRange = form.priceRange.value;
    const image = form.image.files[0];

    let ImageUrl = '';
    if (image?.name) {
      ImageUrl = await uploadImg(image);
    }

    const data = { title, description, priceRange, image: ImageUrl };

    axiosPublic.post(`/package-slider`, data)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Packages Slider uploaded",
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
          title: "Failed to upload packages slider",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .finally(() => {
        setLoading(false); // Stop loader
      });
  };

  return (
    <div className="mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <Helmet>
        <title>Dashboard | Add Package Slider</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Add Package Slider
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-row gap-6">
          {/* Title */}
          <div className="flex-1">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter title"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>
          {/* Price Range */}
          <div className="flex-1">
            <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">
              Price Range
            </label>
            <input
              type="text"
              id="priceRange"
              name="priceRange"
              required
              placeholder="Enter price range (e.g., $0 - $50)"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
        </div>

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

        {/* Submit Button with Loading State */}
        <button
          type="submit"
          disabled={loading} // Disable button when loading
          className="w-full bg-[#EC4899] text-white font-medium py-2 px-4 rounded-lg shadow disabled:opacity-50"
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <svg
                className="w-6 h-6 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4V2m0 20v-2m4-4h2M4 12H2m16.24-6.36l1.42-1.42m-14.48 0L5.64 5.64m12.72 12.72l1.42 1.42m-14.48 0L5.64 18.36"
                />
              </svg>
              <span className="ml-2">Submitting...</span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateSliderPackage;
