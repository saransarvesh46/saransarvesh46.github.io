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
				className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden"
			>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.12),transparent_28%),linear-gradient(160deg,rgba(255,255,255,0.7),transparent)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.06),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.08),transparent_28%),linear-gradient(160deg,rgba(12,19,35,0.8),transparent)]" />
				<div className="container mx-auto px-6 max-w-7xl relative z-10">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6 }}
						className="text-5xl md:text-6xl font-bold text-center mb-4 text-slate-900 dark:text-white"
					>
						Projects
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.6, delay: 0.15 }}
						className="text-center text-slate-600 mb-14 text-lg dark:text-gray-300"
					>
						Selected builds mixing AI, 3D, and fast web stacks.
					</motion.p>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{projects.map((project, idx) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.5, delay: idx * 0.08 }}
								className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 backdrop-blur-xl p-6 flex flex-col shadow-[0_20px_60px_-35px_rgba(15,23,42,0.45)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(56,189,248,0.45)] transition-all dark:border-white/10 dark:bg-gray-900/70"
							>
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-sky-500/5 via-blue-500/5 to-purple-500/5" />
								<div className="relative mb-5 space-y-3">
									<h3 className="text-2xl font-bold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors dark:text-white dark:group-hover:text-cyan-200">
										{project.title}
									</h3>
									<p className="text-slate-600 text-sm leading-relaxed line-clamp-4 dark:text-gray-300">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.technologies.slice(0, 5).map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 text-xs rounded-full font-semibold bg-slate-100 text-slate-700 border border-slate-200 dark:bg-white/5 dark:text-gray-200 dark:border-white/10"
											>
												{tech}
											</span>
										))}
										{project.technologies.length > 5 && (
											<span className="px-3 py-1 text-xs text-slate-500 dark:text-gray-400">
												+{project.technologies.length - 5}
											</span>
										)}
									</div>
								</div>
								<div className="relative mt-auto flex gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
									{project.github && (
										<motion.a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-sky-600 hover:text-white transition-all duration-300 text-sm font-semibold border border-slate-200 hover:border-sky-600 dark:bg-white/5 dark:text-gray-200 dark:border-white/10 dark:hover:border-cyan-400"
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
											className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 text-white hover:bg-sky-500 transition-all duration-300 text-sm font-semibold shadow-[0_10px_30px_-12px_rgba(56,189,248,0.65)]"
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
