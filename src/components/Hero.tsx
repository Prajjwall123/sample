import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';


const keyboardBg = new URL('../assets/keyboard.png', import.meta.url).href;
const profilePhoto = 'https://i.postimg.cc/JzVHW5Wm/ae06596a-18bc-4546-885f-eccd3a87fcf7.jpg';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const roles = [
        'Full Stack Developer',
        'Spring Boot Developer',
        'Django Developer',
        'UI/UX Designer'
    ];

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                } else {
                    setDisplayText(currentRole.slice(0, displayText.length - 1));
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, roleIndex, isDeleting]);

    return (
        <section id="hero" className={`relative min-h-screen flex items-center w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${keyboardBg})` }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    <div className={`flex-shrink-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <img
                            src={profilePhoto}
                            alt="Prajwal Pokhrel"
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-orange-500/50 object-cover shadow-xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className={`text-center md:text-left max-w-2xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Hello, I'm Prajwal Pokhrel
                        </h1>
                        <div className="text-xl md:text-2xl text-gray-200 mb-6">
                            I am a{' '}
                            <span className="text-orange-500 font-semibold">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </div>
                        <p className="text-lg text-gray-300 mb-8">
                            Passionate about creating innovative solutions through code. Specialized in Full Stack Development with expertise in Spring Boot, Django, and modern web technologies.
                        </p>

                        <div className={`flex flex-col sm:flex-row items-center gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="text-gray-300 text-lg">Let's Connect →</span>
                            <div className="flex space-x-6">
                                <SocialLink href="https://github.com/Prajjwall123" icon={<FaGithub size={24} />} />
                                <SocialLink href="https://www.linkedin.com/in/prajwal-pokhrel-618863280/" icon={<FaLinkedin size={24} />} />
                                <FaFacebook size={24} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://www.facebook.com/prajul.pkl/', '_blank')} />
                                <FaInstagram size={24} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://www.instagram.com/__prajj_/', '_blank')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
    >
        {icon}
    </a>
);

export default Hero;
