import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const WhyChooseUs = () => {
    const axiosPublic = useAxiosPublic();

    // Fetching data using `useQuery`
    const {
        data: features = [],
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ["features"],
        queryFn: async () => {
            const res = await axiosPublic.get("/choose");
            return res.data;
        },
    });

    // State to manage the selected feature
    const [selectedFeature, setSelectedFeature] = useState(null);

    // Update `selectedFeature` when `features` data is loaded
    useEffect(() => {
        if (features.length > 0) {
            setSelectedFeature(features[0]);
        }
    }, [features]);

    return (
        <div className="w-11/12 mx-auto lg:my-10">
            <div>
                <h2 className="lg:text-4xl text-xl text-center font-bold lg:mb-6">
                    <span className="text-[#6c1f1f]">Why</span>{" "}
                    <span className="text-[#ef4444]">Choose us?</span>
                </h2>
            </div>
            {isLoading && (
                <p className="text-center text-gray-500">Loading features...</p>
            )}
            {isError && (
                <p className="text-center text-red-500">
                    Error loading features. Please try again later.
                </p>
            )}
            {features.length > 0 && selectedFeature && (
                <section className="flex gap-5 flex-col lg:flex-row lg:justify-between">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 lg:mb-10 mb-0">
                        <ul className="lg:space-y-3 space-y-2">
                            {features.map((feature) => (
                                <li
                                    key={feature._id}
                                    onClick={() => setSelectedFeature(feature)}
                                    className={`flex items-center rounded-lg cursor-pointer transition ${selectedFeature._id === feature._id
                                        ? "bg-[#6c1f1f] text-white"
                                        : "bg-[#ef4444] "
                                        }`}
                                >
                                    <div
                                        className={`lg:text-5xl p-4 rounded-full font-bold mr-4 ${selectedFeature._id === feature._id
                                            ? "bg-[#ef4444] text-white"
                                            : "bg-[#6c1f1f]"
                                            }`}
                                    >
                                        <img className="w-12 h-12 rounded-full  " src={feature.icon} alt="" />
                                    </div>
                                    <span className="lg:text-2xl font-bold mr-4">
                                        {feature.title}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side */}
                    <div className="w-full    lg:w-1/2 h-[72vh] lg:mb-10 mb-4 mt-3 lg:mt-0">
                        <div
                            className="   rounded-lg shadow-lg w-full bg-cover bg-center"
                            style={{
                                
                                height: "100%",
                                backgroundImage: `url('${selectedFeature.image}')`,
                            }}
                        >
                            <div className="   p-4 h-[72vh] rounded-lg">
                                <h3 className="lg:text-2xl text-white font-semibold lg:mb-4">
                                    {selectedFeature.title}
                                </h3>
                                <p className="text-[12px] lg:text-base text-white font-semibold ">
                                    {selectedFeature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default WhyChooseUs;
