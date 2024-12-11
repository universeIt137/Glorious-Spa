import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { uploadImg } from "../../../uploadFile/uploadImg";
import Swal from "sweetalert2";

const WhyChooseUsCreate = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [iconUrl, setIconUrl] = useState(null);

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

  const handleIconUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const icon = form.icon.files[0];

    let imgUrl = ''
    if (!image?.name) {
      imgUrl = ''
    }

    imgUrl = await uploadImg(image);


    let iconUrl = ''

    if (!icon?.name) {
      iconUrl = ''
    }
    iconUrl = await uploadImg(icon);

    let payload = {
      title,
      description,
      icon: iconUrl,
      image : imgUrl ,
    }



    try {
      let res = await axiosPublic.post("/choose", payload);

      if (res) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Choose Us Created ",
          showConfirmButton: false,
          timer: 1500
        })
        form.reset();
        setImageUrl(null);
        setIconUrl(null);
      }
    } catch (error) {
      Swal.file({
        title: "Failed to create Choose Us",
        text: error.message,
        icon: "error",
        confirmButtonText: "Okay"
      })
    } finally {
      setLoading(false);
    }
  };

  window.scrollTo(0, 0);

  return (
    <div className="w-full mx-auto mt-10">
      <Helmet>
        <title>Dashboard | Choose Us Upload</title>
      </Helmet>

      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">
          Choose Us Upload
        </h1>

        <div className="flex gap-5">
          {/* Title */}
          <div className="mb-4 flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Icon */}
          <div className="mb-4 flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Icon
            </label>
            <input
              type="file"
              name="icon"
              onChange={handleIconUpload}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {iconUrl && (
          <div className="mt-2">
            <span className="text-gray-700">Selected Icon:</span>
            <img
              src={iconUrl}
              alt="Icon Preview"
              className="mt-2 w-16 h-auto rounded-md border"
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
        </div>

        {/* Image */}
        <div className="mb-4 w-1/2">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleImageUpload}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {imageUrl && (
          <div className="mt-2">
            <span className="text-gray-700">Selected Image:</span>
            <img
              src={imageUrl}
              alt="Image Preview"
              className="mt-2 w-16 h-auto rounded-md border"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 px-4 rounded-lg transition duration-300 ${loading ? "bg-gray-400" : "bg-[#DB2777] hover:bg-pink-600"
            }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default WhyChooseUsCreate;
