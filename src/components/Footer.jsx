import {FaGithub, FaLinkedin, FaTwitter, FaHeart} from "react-icons/fa"

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer
            className="border-t bg-linear-to-br from-red-400 to-white dark:bg-linear-to-br dark:from-red-950 dark:to-black pt-6 pb-28"
        >
            <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <h3 className="text-xl text-red-500 font-bold dark:text-red-400">
                        Portfolio
                    </h3>
                    <p className="text-xs">Frontend Developer</p>
                </div>
                <div className='flex gap-4'>
                    <a href="#" className='hover:text-red-500 transition-colors'>
                        <FaGithub size={20} />
                    </a>
                    <a href="#" className='hover:text-red-500 transition-colors'>
                        <FaLinkedin size={20} />
                    </a>
                    <a href="#" className='hover:text-red-500 transition-colors'>
                        <FaTwitter size={20} />
                    </a>
                </div>
                <p className='text-xs flex items-center gap-1'>
                    {currentYear} Made with <FaHeart className='text-red-500'/> by <span className='font-semibold text-red-500'>
                    OualiCode
                </span>
                </p>
            </div>
        </footer>
    )
}

export default Footer