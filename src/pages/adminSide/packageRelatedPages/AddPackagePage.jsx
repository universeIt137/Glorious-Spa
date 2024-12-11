import React, { useState } from 'react';
import { uploadImg } from '../../../uploadFile/uploadImg';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddPackagePage = () => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [durations, setDurations] = useState([{ time: '', price: '' }]);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();

    const handleDurationChange = (index, field, value) => {
        const updatedDurations = durations.map((duration, i) =>
            i === index ? { ...duration, [field]: value } : duration
        );
        setDurations(updatedDurations);
    };

    const addDuration = () => {
        setDurations([...durations, { time: '', price: '' }]);
    };

    const removeDuration = (index) => {
        setDurations(durations.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  // Start loading state

        const form = e.target;
        const image = form.image.files[0];

        let ImageUrl = '';
        if (!image?.name) {
            ImageUrl = '';
        } else {
            ImageUrl = await uploadImg(image);
        }

        const packageData = {
            title,
            description,
            rating,
            durations,
            ImageUrl
        };

        console.log('Package Data:', packageData);
        // Submit data to the server or process it as needed
        axiosPublic.post('/package', packageData)
            .then(res => {
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your package has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch()
        

        setLoading(false);  // End loading state
    };

    return (
        <div className="mx-auto bg-white p-6 shadow-lg rounded-lg">
            <Helmet>
                <title>Dashboard | Add Package</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center mb-6">Add New Spa Package</h2>
            <form onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Title Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Package Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter package title"
                            required
                        />
                    </div>

                    {/* Rating Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Rating</label>
                        <input
                            type="number"
                            step="0.1"
                            min="0"
                            max="5"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter package rating (e.g., 4.8)"
                            required
                        />
                    </div>
                </div>

                {/* Description  */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Package Description</label>
                    <textarea
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                        placeholder="Enter package description"
                        required
                        rows={8}
                    ></textarea>
                </div>

                {/* Image Upload */}
                <div className="p-2 w-full">
                    <div className="relative">
                        <label className="leading-7 text-sm text-gray-600 font-bold">Package Banner Image</label><br />
                        <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " />
                    </div>
                </div>

                {/* Durations Section */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Durations</label>
                    {durations.map((duration, index) => (
                        <div key={index} className="flex gap-4 mb-2">
                            <input
                                type="text"
                                value={duration.time}
                                onChange={(e) => handleDurationChange(index, 'time', e.target.value)}
                                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                placeholder="Duration (e.g., 60 Minutes)"
                                required
                            />
                            <input
                                type="text"
                                value={duration.price}
                                onChange={(e) => handleDurationChange(index, 'price', e.target.value)}
                                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                placeholder="Price (e.g., 4000 TK)"
                                required
                            />
                            {durations.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeDuration(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addDuration}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Add Duration
                    </button>
                </div>

                {/* Submit Button */}
                <div className="mt-6 w-1/4 mx-auto">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`px-10 py-3 rounded-lg font-semibold transition duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-500 text-white hover:bg-pink-600'
                            }`}
                    >
                        {loading ? 'Uploading...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPackagePage;
