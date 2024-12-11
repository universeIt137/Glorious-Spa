import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateContactPage = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false); // Loader state

    const handleSubmit = async (event) => {
        setLoading(true); // Start loader
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const subject = form.subject.value;
        const message = form.message.value;

        const data = { name, email, phone, subject, message };

        axiosPublic
            .post(`/contact`, data)
            .then((res) => {
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Contact data uploaded successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    form.reset(); // Reset form
                }
            })
            .catch(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed to upload contact data",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .finally(() => {
                setLoading(false); // Stop loader
            });
    };

    return (
        <div>
            <Helmet>
                <title>Smart Beauty Body Spa BD | Contact Us</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center bg-white my-4">
                <h1 className="lg:text-4xl font-bold text-pink-500">
                    Contact <span className="text-blue-500">us!</span>
                </h1>
                <p className="lg:mt-4 text-[10px] lg:text-[16px] text-gray-600 text-justify max-w-2xl">
                    At Smart Beauty Body Spa BD, we’re dedicated to providing you with the ultimate relaxation
                    experience. If you have any questions, concerns, or if you’d like to schedule an
                    appointment to unwind and rejuvenate, please don’t hesitate to get in touch with us.
                    Our knowledgeable and friendly team is here to assist you.
                </p>
            </div>
            <div className="bg-blue-600 py-12">
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1733040451/contact-page_p7iua3.jpg"
                                alt="Contact Page"
                                className="w-full lg:w-auto rounded-lg"
                            />
                            <h1 className="lg:text-4xl font-bold text-white mt-6">
                                Feel free to drop us a line
                            </h1>
                            <p className="text-white max-w-xl py-6 text-lg text-justify">
                                Feel free to reach out to us via phone or email, or simply use the convenient
                                contact form below. We appreciate your interest in our services and look forward
                                to helping you achieve tranquility and balance through our luxurious spa treatments.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <form onSubmit={handleSubmit} className="rounded-lg">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        aria-label="Name"
                                        name="name"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        aria-label="Email"
                                        name="email"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        aria-label="Phone"
                                        name="phone"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        aria-label="Subject"
                                        name="subject"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        placeholder="Message"
                                        aria-label="Message"
                                        name="message"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading} // Disable button during loading
                                    className={`w-full text-white font-bold py-3 px-4 rounded-lg transition duration-300 ${
                                        loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
                                    }`}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg
                                                className="w-5 h-5 text-white animate-spin"
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
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateContactPage;
