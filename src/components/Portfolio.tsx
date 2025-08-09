import { FaGithub } from 'react-icons/fa';

interface Project {
    title: string;
    description: string;
    videoUrl: string;
    technologies: string[];
    githubUrl: string;
}

const Portfolio = () => {
    const projects: Project[] = [
        {
            title: 'Sajilotantra',
            description: 'A forum with guidance to navigate government processes.',
            videoUrl: 'https://www.youtube.com/embed/dfD10uIPE9A',
            technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
            githubUrl: 'https://github.com/Prajjwall123/SAJILOTANTRA',
        },
        {
            title: 'FutsalFever',
            description: 'A Java Spring Boot web application for online futsal booking.',
            videoUrl: 'https://www.youtube.com/embed/x1YwzzuMtTQ',
            technologies: ['Spring Boot', 'Java', 'MySQL', 'Thymeleaf'],
            githubUrl: 'https://github.com/Prajjwall123/FutsalFever',
        },
        {
            title: 'Gradly',
            description: 'A MERN stack university application platform with TOTP authentication and RBAC.',
            videoUrl: 'https://www.youtube.com/embed/BzyDatvRrt4',
            technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TOTP'],
            githubUrl: 'https://github.com/Prajjwall123/GradHelp',
        },
    ];

    return (
        <section id="portfolio" className="py-20 bg-zinc-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src={project.videoUrl}
                                    className="w-full h-full"
                                    allowFullScreen
                                    title={project.title}
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-800 hover:bg-orange-500 text-white rounded-lg transition-colors duration-300"
                                >
                                    <FaGithub className="text-xl" />
                                    <span>View on GitHub</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
