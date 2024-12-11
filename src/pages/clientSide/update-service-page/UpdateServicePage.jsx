import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaStar } from "react-icons/fa";
import ButtonAnimation from "./../../../components/clientSide/animation-button/ButtonAnimation";

const UpdateServicePage = () => {
    const axiosPublic = useAxiosPublic();
    window.scrollTo(0, 0);

    // Fetch packages using React Query
    const { data: massages = [], isLoading, isError } = useQuery({
        queryKey: ["massages"],
        queryFn: async () => {
            const res = await axiosPublic.get("/package");
            return res.data;
        },
    });

    if (isLoading) {
        return (
            <div className="text-center py-10">
                <p>Loading services...</p>
            </div>
        );
    }

    if (isError || !Array.isArray(massages)) {
        return (
            <div className="text-center py-10">
                <p>Failed to load services. Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto">
            {/* Header Section */}
            <div className="text-center py-5 lg:py-10 bg-white">
                <h1 className="lg:text-4xl text-[17px] font-extrabold text-pink-500">
                    Our <span className="text-blue-500">Packages!</span>
                </h1>
                <h2 className="lg:mt-2 lg:text-3xl text-[16px] font-bold text-blue-800">
                    Smart Beauty Body Spa
                </h2>
                <h3 className="lg:mt-1 text-[14px] lg:text-2xl font-bold text-blue-800">
                    Book Any Service From Below
                </h3>
                <p className="lg:mt-5 text-lg text-gray-600 text-[9px] lg:text-[17px] max-w-4xl text-justify mx-auto">
                    Welcome to Smart Beauty Body Spa, your premier destination for spa
                    services in Dhaka. Our spa is dedicated to providing you with a
                    serene oasis where you can escape the stresses of daily life and find
                    true relaxation. Nestled in the heart of Gulshan, our expert
                    therapists offer a wide range of services designed to rejuvenate your
                    body and calm your mind. From luxurious massages to revitalizing
                    facials, we use only the finest products and techniques to ensure
                    your complete satisfaction.
                </p>
            </div>

            {/* Services Section */}
            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
                {massages.map((massage, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        {/* Image */}
                        <img
                            src={massage?.ImageUrl}
                            alt={massage?.title}
                            className="w-full h-56 object-cover"
                        />

                        {/* Details */}
                        <div className="p-4 bg-[#2563EB] text-white">
                            <h3 className="lg:text-xl font-bold text-center">{massage?.title}</h3>

                            {/* Rating */}
                            <div className="flex justify-center items-center my-2">
                                <span className="text-white text-lg font-semibold">
                                    {massage?.rating || "N/A"}
                                </span>
                                <div className="ml-2 flex items-center">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <FaStar
                                            key={i}
                                            className="h-5 w-5 text-yellow-400"
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Price List */}
                            <div className=" ">
                                <ul className="text-center space-y-2">
                                    {massage?.durations?.map((item, idx) => (
                                        <li key={idx} className="flex items-center justify-between font-bold text-lg">
                                            <span>{item?.time} Minutes</span>
                                            <span className="flex justify-between items-center gap-2">
                                                {item?.price}{" "}
                                                <img
                                                    className="w-4"
                                                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1733050653/taka_drhiqj.png"
                                                    alt=""
                                                />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Call Button */}
                            <button className="w-full py-2 mt-4 text-white rounded-md transition flex items-center justify-center gap-2">
                                <ButtonAnimation id={massage?._id}></ButtonAnimation>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpdateServicePage;
