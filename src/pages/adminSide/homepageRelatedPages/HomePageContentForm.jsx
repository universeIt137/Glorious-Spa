import React, { useState } from "react";
import { uploadImg } from "../../../uploadFile/uploadImg";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const HomePageContentForm = () => {
    const axiosPublic = useAxiosPublic();

    const { data: content = [], refetch } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get('/homepageContent');
            return res.data[0];
        }
    })


    const [formData, setFormData] = useState({
        name: "",
        logo: "",
        bannerTitle: "",
        bannerSubTitle: "",
        bannerDescription: "",
        latestNews: "",
        youtubeVideos: "",
        aboutBanner: "",
        aboutTitle: "",
        aboutSubTitle: "",
        relatedSearch: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const bannerTitle = form.bannerTitle.value;
        const bannerSubTitle = form.bannerSubTitle.value;
        const mainbanner = form.mainbanner.files[0];
        const bannerDescription = form.bannerDescription.value;
        const latestNews = form.latestNews.value;
        const youtubeVideos = form.youtubeVideos.value;

        const logo = form.logo.files[0];
        const banner = form.aboutBanner.files[0];
        const aboutTitle = form.aboutTitle.value;
        const aboutSubTitle = form.aboutSubTitle.value;
        const relatedSearch = form.relatedSearch.value;
        const phone = form.phone.value;
        const whatsapp = form.whatsapp.value;
        const email = form.email.value;
        const address = form.address.value;


        let mainBannerUrl = ''
        if (!mainbanner?.name) {
            mainBannerUrl = content?.mainBannerUrl
        } else {
            mainBannerUrl = await uploadImg(mainbanner);

        }

        let logoImageUrl = ''
        if (!logo?.name) {
            logoImageUrl = content?.logoImageUrl
        } else {
            logoImageUrl = await uploadImg(logo);

        }

        let bannerImageUrl = ''
        if (!banner?.name) {
            bannerImageUrl = content?.bannerImageUrl
        } else {
            bannerImageUrl = await uploadImg(banner);

        }

        setLoading(true);

        // Simulate form submission
        try {
            const data = { name, bannerTitle, bannerSubTitle, mainBannerUrl, bannerDescription, latestNews, youtubeVideos, logoImageUrl, bannerImageUrl, aboutTitle, aboutSubTitle, relatedSearch, phone, whatsapp, email, address }
            // You would typically send the data to the server here
            axiosPublic.post(`/homepageContent/${content?._id || 'notAvailable'}`, data)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Data has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })

        } catch (error) {
            console.error("Error submitting form:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-10/12 mx-auto p-4">
            <Helmet>
                <title>Dashboard | Manage Content</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Upload Home Page Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Website Name</label>
                        <input type="text" name="name" defaultValue={content?.name} className="w-full px-4 py-2 border rounded-md" />
                    </div>


                    <div>
                        <label htmlFor="name">Banner Title</label>
                        <input type="text" name="bannerTitle" defaultValue={content?.bannerTitle} className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className="">
                        <label htmlFor="">Banner sub title</label>
                        <input type="text" name="bannerSubTitle" defaultValue={content?.bannerSubTitle} className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className=" w-full">
                        <div className="relative">
                            <p>Upload Banner Image</p>
                            <input type="file" name='mainbanner' className="file-input file-input-bordered file-input-md w-full "  />
                        </div>
                        <div className="avatar flex-col">
                            <p>Already uploaded Banner Image</p>
                            <div className="w-16 rounded">
                                <img
                                    src={content?.mainBannerUrl}
                                />
                            </div>
                        </div>
                    </div>


                    <div>
                        <label htmlFor="">Banner Description</label>
                        <textarea rows={6} name="bannerDescription" defaultValue={content?.bannerDescription} className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Latest News</label>
                        <textarea rows={6} name="latestNews" defaultValue={content?.latestNews} className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Youtube video</label>
                        <input type="text" name="youtubeVideos" defaultValue={content?.youtubeVideos} className="w-full px-4 py-2 border rounded-md" />
                    </div>


                    <div className=" w-full">
                        <div className="relative">
                            <p>Upload website logo</p>
                            <input type="file" name='logo' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                        </div>

                        <div className="avatar flex-col">
                            <p>Already uploaded logo</p>
                            <div className="w-16 rounded">
                                <img
                                    src={content?.logoImageUrl}
                                />
                            </div>
                        </div>
                    </div>

                    <div className=" w-full">
                        <div className="relative">
                            <p>Upload About Banner</p>
                            <input type="file" name='aboutBanner' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload  about banner" />
                        </div>
                        <div className="avatar flex-col">
                            <p>Already uploaded About Banner</p>
                            <div className="w-16 rounded">
                                <img
                                    src={content?.bannerImageUrl}
                                />
                            </div>
                        </div>
                    </div>




                    <div>
                        <label htmlFor="">About title</label>
                        <input type="text" name="aboutTitle" defaultValue={content?.aboutTitle} className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">About Sub Title</label>
                        <input type="text" name="aboutSubTitle" defaultValue={content?.aboutSubTitle} className="w-full px-4 py-2 border rounded-md" />

                    </div>

                    <div>
                        <label htmlFor="">Related Search</label>
                        <textarea name="relatedSearch" defaultValue={content?.relatedSearch} className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" name="phone" defaultValue={content?.phone} className="w-full px-4 py-2 border rounded-md" />

                    </div>

                    <div>
                        <label htmlFor="">WhatsApp Number</label>
                        <input type="text" name="whatsapp" defaultValue={content?.whatsapp} className="w-full px-4 py-2 border rounded-md" />

                    </div>

                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" defaultValue={content?.email} className="w-full px-4 py-2 border rounded-md" />

                    </div>
                    <div>
                        <label htmlFor="">Address</label>
                        <input type="text" name="address" defaultValue={content?.address} className="w-full px-4 py-2 border rounded-md" />

                    </div>
                </div>

                <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                    {loading ? "Uploading..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default HomePageContentForm;
