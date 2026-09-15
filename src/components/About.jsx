import {
    FaGithub,
    FaInstagram,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";
import about from "../assets/about.jfif";
import { ArrowRight } from "lucide-react";

const About = () => {
    const socialLinks = [
        {
            icon: FaInstagram,
            label: "Instagram",
            color: "hover:text-pink-500 hover:border-pink-500/40",
        },
        {
            icon: FaTiktok,
            label: "TikTok",
            color: "hover:text-purple-500 hover:border-purple-500/40",
        },
        {
            icon: FaGithub,
            label: "GitHub",
            color: "hover:text-blue-500 hover:border-pink-500/40",
        },
        {
            icon: FaYoutube,
            label: "Youtube",
            color: "hover:text-red-500 hover:border-pink-500/40",
        },
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative"
        >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

                {/* Text block */}
                <div
                    className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                    data-aos="fade-right"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase dark:text-red-300 text-red-600">
                            About Me
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 dark:text-white text-gray-900 leading-tight">
                        Turning Ideas Into
                        <span className="text-red-600 dark:text-red-400 block">Digital Reality</span>
                    </h2>

                    <p className="text-base lg:text-lg mb-8 leading-relaxed dark:text-gray-300 text-gray-700 max-w-xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Vel error debitis commodi! Voluptas eveniet eius
                        ratione. Accusantium, commodi. Dicta repellat praesentium
                        officia voluptatum fugiat nisi reprehenderit a
                        consequatur. Accusamus, ratione.
                    </p>

                    <div className="flex gap-4 mb-8">
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={index}
                                    href="#"
                                    aria-label={social.label}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl
                                    border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50
                                    backdrop-blur-sm dark:text-gray-300 text-gray-700
                                    transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                                >
                                    <IconComponent />
                                </a>
                            );
                        })}
                    </div>

                    <a href="#contact" data-aos="fade-up" data-aos-delay="300">
                        <button
                            className="group inline-flex items-center justify-center gap-2 px-8 py-3
                            rounded-full text-white font-semibold bg-linear-to-r from-red-600 to-red-800
                            hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300
                            transform hover:scale-105"
                        >
                            Let's Talk
                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </a>
                </div>

                {/* Image block */}
                <div
                    className="relative order-1 lg:order-2 flex justify-center"
                    data-aos="fade-left"
                >
                    <div className="relative group">
                        <div
                            className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800
                            rounded-full filter blur-2xl opacity-30 group-hover:opacity-50
                            transition-opacity duration-500"
                        />

                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            <img
                                src={about}
                                alt="About"
                                className="w-full h-full object-cover rounded-full
                                relative z-10 shadow-2xl transform group-hover:scale-105
                                transition-transform duration-500"
                            />

                            <div
                                className="absolute inset-0 border-2
                                border-red-500/30 rounded-full scale-110
                                group-hover:scale-125 transition-transform duration-500"
                            />

                            <div
                                className="absolute inset-0 border-2
                                border-red-500/30 rounded-full scale-125
                                group-hover:scale-150 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;