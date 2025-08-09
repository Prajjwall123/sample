const Skills = () => {
    const skillCategories = [
        {
            title: 'Backend Development',
            skills: ['Spring Boot', 'Django', 'Java', 'Python', 'RESTful APIs', 'PostgreSQL', 'MySQL'],
        },
        {
            title: 'Frontend Development',
            skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Responsive Design'],
        },
        {
            title: 'Tools & Technologies',
            skills: ['Git/GitHub', 'VS Code', 'Docker', 'AWS', 'Agile/Scrum', 'CI/CD'],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-zinc-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700/50 hover:border-orange-500/50 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-semibold text-orange-500 mb-6">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-zinc-700/50 text-gray-300 rounded-full text-sm hover:bg-orange-500/20 hover:text-orange-500 transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
