import { useRef } from "react"
import {ChevronLeft, ChevronRight, ExternalLink} from "lucide-react"
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
    const scrollRef = useRef(null)

    const projectsData = [
        {
            id: 1,
            image: project1,
            title: '3D Portfolio Website',
            desc: 'Lorem, ipsim dolar sit amet consectetur adipisicing elit.',
            tags: ['React Js', 'Tailwind CSS', 'Javascript'],
        },
        {
            id: 2,
            image: project2,
            title: '3D Portfolio Website',
            desc: 'Lorem, ipsim dolar sit amet consectetur adipisicing elit.',
            tags: ['React Js', 'Tailwind CSS', 'Javascript'],
        },
        {
            id: 3,
            image: project3,
            title: '3D Portfolio Website',
            desc: 'Lorem, ipsim dolar sit amet consectetur adipisicing elit.',
            tags: ['React Js', 'Tailwind CSS', 'Javascript'],
        },
        {
            id: 4,
            image: project4,
            title: '3D Portfolio Website',
            desc: 'Lorem, ipsim dolar sit amet consectetur adipisicing elit.',
            tags: ['React Js', 'Tailwind CSS', 'Javascript'],
        },
        {
            id: 5,
            image: project5,
            title: '3D Portfolio Website',
            desc: 'Lorem, ipsim dolar sit amet consectetur adipisicing elit.',
            tags: ['React Js', 'Tailwind CSS', 'Javascript'],
        },
        {
            id: 6,
            image: project6,
            title: '3D Portfolio Website',
            desc: 'Lorem, ipsim dolar sit amet consectetur adipisicing elit.',
            tags: ['React Js', 'Tailwind CSS', 'Javascript'],
        },
    ]
    const infiniteProjects = [...projectsData, ...projectsData, ...projectsData]

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollAmount = clientWidth
            const targetScroll = direction === 'left'
                ? scrollLeft - scrollAmount
                : scrollLeft + scrollAmount
            scrollRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            })

            setTimeout(() => {
                if (scrollRef.current) {
                    const maxScroll = scrollRef.current.scrollWidth / 3
                    if (scrollRef.current.scrollLeft >= maxScroll * 2) {
                        scrollRef.current.scrollLeft = maxScroll
                    } else if (scrollRef.current.scrollLeft <= 0) {
                        scrollRef.current.scrollLeft = maxScroll
                    }
                }
            }, 400)
        }
    }

    return (
        <section id='projects' className='py-20 relative overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14
           relative z-10'>
                <div className='flex flex-col sm:flex-row justify-between
               items-center mb-16 gap-4'>
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold dark:text-white text-gray-900">
                            My <span className="text-red-500 dark:text-red-400">Projects</span>
                        </h2>
                    </div>
                    <div className='flex gap-4'>
                        <button
                            onClick={() => handleScroll('left')}
                            className='p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200
                       border-gray-800 dark:text-white text-gray-800
                       hover:border-red-500 dark:hover:border-red-500
                       hover:bg-red-500/10 dark:hover:bg-red-500/10'>
                            <ChevronLeft size={22}/>
                        </button>
                        <button
                            onClick={() => handleScroll('right')}
                            className='p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200
                       border-gray-800 dark:text-white text-gray-800
                       hover:border-red-500 dark:hover:border-red-500
                       hover:bg-red-500/10 dark:hover:bg-red-500/10'>
                            <ChevronRight size={22}/>
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollRef}
                    className="flex gap-6 scrollbar-none snap-mandatory overflow-hidden w-full px-4">
                    {infiniteProjects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start group
                            rounded-3xl overflow-hidden border-2 transition-all duration-300
                            dark:border-zinc-800/60 border-gray-100 dark:bg-zinc-900/40 bg-white
                            hover:shadow-[0_20px_40px_rgba(220,38,38,0.15)] flex flex-col">
                            <div className='relative overflow-hidden aspect-video
                               bg-gray-100 dark:bg-zinc-900'>
                                <img src={project.image} alt={project.title}
                                     className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'/>
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </div>
                            <div className='p-6 flex flex-col justify-between grow min-h-50'>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 dark:text-white text-gray-900 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className='text-xs leading-relaxed mb-4
                                   dark:text-gray-400 text-gray-600 line-clamp-2'>
                                        {project.desc}
                                    </p>
                                </div>
                                <div>
                                    <div className='flex flex-wrap gap-1.5 mb-4'>
                                        {project.tags.map((tag, i) =>(
                                            <span
                                                key={i}
                                                className='text-[10px] font-medium px-2.5
                                           py-0.5 rounded-full font-mono
                                           dark:bg-red-500/10 bg-red-500/5
                                           dark:text-red-300 text-red-600'>
                                               {tag}
                                           </span>
                                        ))}
                                    </div>
                                    <div className='flex items-center gap-4 pt-2 border-t dark:border-zinc-800/80
                                    border-gray-100'>
                                        <a
                                            href="#"
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black  '>
                                            <FaGithub size={14}/> Code
                                        </a>
                                        <a
                                            href="#"
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black  '>
                                            <ExternalLink size={14}/> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects