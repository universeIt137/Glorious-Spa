import React from "react";
import { Link } from "react-router-dom";

const ButtonAnimation = ({id}) => {

    return (
        <Link to={`/package-details/${id}`}
            href="#"
            className="relative inline-block px-8 py-4 text-black font-bold text-sm uppercase overflow-hidden tracking-widest transition-all duration-500 hover:bg-[#03e9f4] hover:text-white hover:rounded-md"
            style={{
                boxShadow: "0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4",
            }}
        >
            Details
            <span
                className="absolute block top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent to-[#03e9f4] animate-[btn-anim1_1s_linear_infinite]"
                style={{
                    animationName: "btn-anim1",
                }}
            ></span>
            <span
                className="absolute block top-[-100%] right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-[#03e9f4] animate-[btn-anim2_1s_linear_infinite] delay-150"
                style={{
                    animationName: "btn-anim2",
                    animationDelay: "0.25s",
                }}
            ></span>
            <span
                className="absolute block bottom-0 right-[-100%] w-full h-[2px] bg-gradient-to-l from-transparent to-[#03e9f4] animate-[btn-anim3_1s_linear_infinite] delay-300"
                style={{
                    animationName: "btn-anim3",
                    animationDelay: "0.5s",
                }}
            ></span>
            <span
                className="absolute block bottom-[-100%] left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-[#03e9f4] animate-[btn-anim4_1s_linear_infinite] delay-450"
                style={{
                    animationName: "btn-anim4",
                    animationDelay: "0.75s",
                }}
            ></span>
        </Link>
    );
};

export default ButtonAnimation;
