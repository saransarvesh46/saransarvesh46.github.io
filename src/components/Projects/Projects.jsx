import { motion, useInView } from 'framer-motion';


import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
	{
		title: 'Vehicle Underbody Monitoring System',
		description:
			'A deep learning-based safety system designed for heavy vehicles. Cameras are installed under the truck to continuously monitor blind spots, using MobileNet SSD with TensorFlow & OpenCV for real-time detection. When an object, pedestrian, or vehicle enters the blind spot, the system instantly alerts the driver with voice notifications, reducing blind spot accidents and enhancing road safety.',
		technologies: ['Python', 'TensorFlow', 'OpenCV', 'MobileNet SSD'],
		github: 'https://github.com/saran887/real-time-object-detection',
	},
	
	{
		title: 'Smart Voting System',
		description:
			'An AI-driven voting platform that ensures secure and transparent elections. Voters are authenticated through real-time face recognition using Python and OpenCV, while Flask and MySQL handle backend operations. This system minimizes voter fraud, streamlines the election process, and provides accurate result tracking.',
		technologies: ['Python', 'OpenCV', 'Flask', 'MySQL'],
		github: 'https://github.com/saran887/smart-voting-system',
	},
	{
		title: 'Sales Card Generator',
		description:
			'A business tool for creating customizable sales cards with integrated analytics. It supports real-time performance tracking, visual reports, and data export options. Designed to help businesses analyze sales data effectively, it is built with Python, Pandas, and Flask for a lightweight yet powerful solution.',
		technologies: ['Python', 'Pandas', 'NumPy', 'Flask'],
		github: 'https://github.com/saran887/sales-card-generator',
		
	},
	{
		title: 'USB Object Detection Android App',
		description:
			'An Android application for real-time object detection using USB cameras. Built with TensorFlow Lite and OpenCV, it enables on-device inference and supports a variety of USB camera models. The app features a user-friendly interface, live detection overlay, and is ideal for embedded vision projects or mobile robotics.',
		technologies: ['Android', 'Java', 'TensorFlow Lite', 'OpenCV', 'USB Camera'],
		github: 'https://github.com/saran887/usb-object-detection-android-app',
		
	},
	{
			title: 'Traffic Aid',
			description:
				'Traffic Aid is an intelligent traffic signal system that detects ambulance sirens before the signal using a high-quality microphone and a Python-trained audio model. When an ambulance is detected, the system automatically turns the ambulance lane green and the other three lanes red, prioritizing the ambulance route using a First-Come-First-Serve (FCFS) algorithm. This helps avoid delays and ensures faster ambulance arrival, potentially saving lives.',
			technologies: ['Python', 'Audio Processing', 'Machine Learning', 'Embedded Systems', 'FCFS Algorithm'],
			
		},
  {
		title: 'Comez Landing Page',
		description:
			'A clean and responsive landing page designed for startups and businesses. Built with React, Vite, and Tailwind CSS, it features modern layouts, smooth animations, and a fully mobile-friendly design. Ideal for showcasing services, products, or company branding in a professional way.',
		technologies: ['React', 'Vite', 'Tailwind CSS'],
		github: 'https://github.com/saran887/comez-landing-page',
		demo: 'https://comez.in',
	},
  {
		title: 'Construction Portfolio',
		description:
			'A modern, responsive web portfolio for showcasing construction projects. Features interactive image galleries, smooth animations, and dynamic content rendering. Built with the MERN stack, it allows easy project management and provides a professional platform for clients to explore completed and ongoing projects.',
		technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB'],
		github: 'https://github.com/saran887/construction-portfolio',
		demo: 'https://construction-website-git-main-sarans-projects-ffa5672c.vercel.app?_vercel_share=RynzIlxEehWUlNGk695ZpSxmmQTttnQk',
	},
	{
		title: 'IoT E-Commerce Platform',
		description:
			'A next-generation e-commerce platform integrated with IoT for real-time inventory tracking and automated stock updates. Built with the MERN stack, it provides secure user authentication, dynamic product catalogs, and seamless order management, making it suitable for businesses embracing IoT in retail.',
		technologies: ['React', 'Node.js', 'MongoDB', 'IoT Integration'],
		github: 'https://github.com/saran887/iot-ecommerce',
		demo: 'https://iot-webpage-git-main-sarans-projects-ffa5672c.vercel.app?_vercel_share=RPdbB1VKgefwYDmFvfAkqPUMsuoXKV0Q',
	},
	{
		title: 'CuraLink',
		description:
			"CuraLink is an AI-powered medical platform that connects patients with clinical trials and enables global researcher collaboration. It uses Google Gemini AI for intelligent condition detection and expert matching, integrates real-time data from PubMed, ClinicalTrials.gov, and ORCID APIs, and features a modern responsive interface built with React 18 and Tailwind CSS. Deployed on Vercel (frontend) and Render (backend).",
		technologies: [
			'Google Gemini AI',
			'FastAPI',
			'SQLAlchemy',
			'React 18',
			'Tailwind CSS',
			'Vite',
			'Axios',
			'Leaflet',
			'PubMed API',
			'ClinicalTrials.gov API',
			'ORCID API',
		],
		github: 'https://github.com/saran887/CuraLink---AI-Powered-Clinical-Trial-Research-Platform',
		demo: 'https://cura-link-ai-powered-clinical-trial-iota.vercel.app',
	},
	
	
];

const Projects = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });
		return (
			<section
				id="projects"
				ref={ref}
				className="py-24 bg-gray-950 relative overflow-hidden"
			>
				{/* Subtle gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-gray-950 to-purple-950/10" />
				
				<div className="container mx-auto px-6 max-w-7xl relative z-10">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6 }}
						className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
					>
						Projects
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-center text-gray-400 mb-16 text-lg"
					>
						Showcasing real-world solutions
					</motion.p>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{projects.map((project, idx) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.5, delay: idx * 0.1 }}
								className="group bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 flex flex-col hover:bg-gray-900/60 transition-all duration-300 border border-white/10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20"
							>
								<div className="mb-5">
									<h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
										{project.title}
									</h3>
									<p className="text-gray-400 text-sm leading-relaxed mb-4">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.technologies.slice(0, 5).map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 text-xs rounded-full font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
											>
												{tech}
											</span>
										))}
										{project.technologies.length > 5 && (
											<span className="px-3 py-1 text-xs text-gray-500">
												+{project.technologies.length - 5}
											</span>
										)}
									</div>
								</div>
								<div className="mt-auto flex gap-3 pt-4 border-t border-white/5">
									{project.github && (
										<motion.a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-medium border border-white/10 hover:border-blue-500"
											aria-label="GitHub"
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											<FiGithub className="w-4 h-4" />
											Code
										</motion.a>
									)}
									{project.demo && (
										<motion.a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 text-sm font-medium shadow-lg shadow-blue-600/20"
											aria-label="Demo"
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											<FiExternalLink className="w-4 h-4" />
											Live
										</motion.a>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		);
};

export default Projects;
