import { Send } from 'lucide-react'
import contactImg from '../assets/contact.avif'

const Contact = () => {
    return (
        <section id='contact' className='py-20 relative overflow-hidden'>
            <div className='container mx-auto px-6 max-w-6xl relative z-10'>
                <div className='text-center mb-6' data-aos='fade-up'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-3 dark:text-white text-gray-900'>
                        Get in <span className='text-red-500 dark:text-red-400'>Touch</span>
                    </h2>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col gap-5 dark:bg-zinc-900/30 bg-white/50 p-8 sm:p-10 rounded-3xl border dark:border-zinc-800 border-gray-100 backdrop-blur-sm w-full max-w-xl mx-auto lg:mx-0 order-2 lg:order-1"
                        data-aos="fade-right"
                    >
                        <input
                            type='text'
                            placeholder='Name'
                            className='w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400'
                            required
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            className='w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400'
                            required
                            data-aos='fade-up'
                            data-aos-delay='200'
                        />
                        <textarea
                            rows="5"
                            placeholder='Message'
                            className='w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400'
                            required
                            data-aos='fade-up'
                            data-aos-delay='300'
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium text-base bg-red-600 hover:bg-red-700 active:scale-95 transition-all cursor-pointer w-full sm:w-fit"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>

                    <div className='flex justify-center w-full relative order-1 lg:order-2' data-aos='fade-left'>
                        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                            <div className='w-75 h-90 rounded-full bg-red-400/65 dark:bg-red-500/40 blur-3xl scale-110'></div>
                        </div>
                        <img
                            src={contactImg}
                            alt="Contact"
                            className='w-96 h-110 object-cover rounded-3xl relative z-10'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact