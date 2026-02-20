// eslint-disable-next-line no-unused-vars
import { useInView, motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

/* ── Projects — Clean responsive grid with featured hero card ────────
   First project: featured full-width hero card.
   Remaining projects: 2-column grid on desktop, single column on mobile.
   Mouse tilt + cursor spotlight + glow borders on hover.
   Staggered scroll-triggered entrance animations.
   ──────────────────────────────────────────────────────────────────── */

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
		demo: 'https://construction-website-teal-chi.vercel.app/',
	},
	{
		title: 'IoT E-Commerce Platform',
		description:
			'A next-generation e-commerce platform integrated with IoT for real-time inventory tracking and automated stock updates. Built with the MERN stack, it provides secure user authentication, dynamic product catalogs, and seamless order management, making it suitable for businesses embracing IoT in retail.',
		technologies: ['React', 'Node.js', 'MongoDB', 'IoT Integration'],
		github: 'https://github.com/saran887/iot-ecommerce',
		demo: 'https://iot-webpage-five.vercel.app/',
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

/* ── Mouse tilt hook ── */
const useTilt = () => {
	const [tilt, setTilt] = useState({ x: 0, y: 0 });
	const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

	const handleMouseMove = useCallback((e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		setTilt({
			x: ((y - centerY) / centerY) * -3,
			y: ((x - centerX) / centerX) * 3,
		});
		setSpotlight({ x, y });
	}, []);

	const handleMouseLeave = useCallback(() => {
		setTilt({ x: 0, y: 0 });
	}, []);

	return { tilt, spotlight, handleMouseMove, handleMouseLeave };
};

/* ── Tech tags ── */
const TechTags = ({ technologies, max = 5 }) => (
	<div className="flex flex-wrap gap-1.5">
		{technologies.slice(0, max).map((tech) => (
			<span
				key={tech}
				className="px-2.5 py-1 text-[11px] rounded-md font-medium tracking-wide uppercase
					bg-zinc-100 text-zinc-500 border border-zinc-200/60
					dark:bg-zinc-800/50 dark:text-zinc-500 dark:border-zinc-800"
			>
				{tech}
			</span>
		))}
		{technologies.length > max && (
			<span className="px-2.5 py-1 text-[11px] text-zinc-400 dark:text-zinc-600">
				+{technologies.length - max}
			</span>
		)}
	</div>
);

/* ── Action buttons ── */
const ActionButtons = ({ project }) => (
	<div className="flex gap-2.5 pt-5 mt-auto border-t border-zinc-200/40 dark:border-zinc-800/40">
		{project.github && (
			<motion.a
				href={project.github}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 px-4 py-2 rounded-lg
					bg-zinc-100 text-zinc-600 text-sm font-medium
					border border-zinc-200/60 hover:border-accent hover:bg-accent hover:text-white
					transition-all duration-300
					dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-800
					dark:hover:bg-accent dark:hover:border-accent dark:hover:text-white"
				aria-label="GitHub"
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.97 }}
			>
				<FiGithub className="w-3.5 h-3.5" />
				Code
			</motion.a>
		)}
		{project.demo && (
			<motion.a
				href={project.demo}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 px-4 py-2 rounded-lg
					bg-accent text-white text-sm font-medium
					hover:bg-accent-hover transition-all duration-300 shadow-glow"
				aria-label="Demo"
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.97 }}
			>
				<FiExternalLink className="w-3.5 h-3.5" />
				Live
			</motion.a>
		)}
	</div>
);

/* ── Featured hero project card — full width ── */
const FeaturedProjectCard = ({ project }) => {
	const { tilt, spotlight, handleMouseMove, handleMouseLeave } = useTilt();

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-60px' }}
			transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
			className="mb-12"
		>
			<div
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
					transition: 'transform 0.3s ease-out',
				}}
				className="group relative overflow-hidden rounded-2xl
					bg-white/80 backdrop-blur-xl border border-zinc-200/60
					shadow-card hover:shadow-card-hover transition-all duration-400
					dark:bg-[#0c0c14]/80 dark:border-zinc-800/50"
			>
				{/* Top accent bar */}
				<div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

				{/* Spotlight */}
				<div
					className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					style={{
						background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(14,165,233,0.05), transparent 40%)`,
					}}
				/>

				<div className="relative z-10 p-8 md:p-10">
					{/* Header row */}
					<div className="flex items-center gap-3 mb-6">
						<span className="flex items-center gap-2 micro-label text-accent/80">
							<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
							Featured Project
						</span>
					<span className="micro-label text-zinc-400 dark:text-zinc-600">—</span>
					<span className="micro-label text-zinc-400 dark:text-zinc-600">01</span>
					</div>

					<h3 className="text-2xl md:text-3xl font-display font-bold text-zinc-900 mb-4 group-hover:text-accent transition-colors duration-300 dark:text-zinc-100">
						{project.title}
					</h3>

					<p className="text-zinc-500 text-base leading-relaxed mb-6 max-w-3xl dark:text-zinc-500">
						{project.description}
					</p>

					<div className="mb-6">
						<TechTags technologies={project.technologies} max={6} />
					</div>

					<ActionButtons project={project} />
				</div>
			</div>
		</motion.div>
	);
};

/* ── Grid project card ── */
const ProjectCard = ({ project, idx }) => {
	const { tilt, spotlight, handleMouseMove, handleMouseLeave } = useTilt();

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-40px' }}
			transition={{
				duration: 0.5,
				delay: (idx % 2) * 0.1,
				ease: [0.16, 1, 0.3, 1],
			}}
		>
			<div
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
					transition: 'transform 0.3s ease-out',
				}}
				className="group relative h-full overflow-hidden rounded-2xl
					bg-white/80 backdrop-blur-xl border border-zinc-200/60
					shadow-card hover:shadow-card-hover transition-all duration-400
					hover:border-accent/20
					dark:bg-[#0c0c14]/80 dark:border-zinc-800/50 dark:hover:border-accent/20"
			>
				{/* Spotlight */}
				<div
					className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					style={{
						background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, rgba(14,165,233,0.05), transparent 40%)`,
					}}
				/>

				{/* Left accent stripe */}
				<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

				<div className="relative z-10 p-7 flex flex-col h-full">
					{/* Header */}
					<div className="flex items-center justify-between mb-4">
						<span className="micro-label text-zinc-400/50 dark:text-zinc-700">
							{String(idx + 2).padStart(2, '0')}
						</span>
						{project.demo && (
							<span className="flex items-center gap-1.5 micro-label text-accent/50">
								<span className="w-1 h-1 rounded-full bg-accent/60" />
								Live
							</span>
						)}
					</div>

					<h3 className="text-lg font-display font-bold text-zinc-900 leading-snug mb-3 group-hover:text-accent transition-colors duration-300 dark:text-zinc-100">
						{project.title}
					</h3>

					<p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-5 dark:text-zinc-500">
						{project.description}
					</p>

					<div className="mb-5">
						<TechTags technologies={project.technologies} />
					</div>

					<ActionButtons project={project} />
				</div>
			</div>
		</motion.div>
	);
};

const Projects = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});
	const headingY = useTransform(scrollYProgress, [0, 1], [30, -30]);

	return (
		<section
			id="projects"
			ref={ref}
			className="relative bg-zinc-100 dark:bg-[#050508] py-28 overflow-hidden"
		>
			{/* Ambient gradients */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-gradient-to-r from-accent/[0.02] to-transparent" />
				<div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-zinc-200/15 to-transparent dark:from-zinc-900/20" />
			</div>

			{/* Decorative accent lines */}
			<div className="absolute top-32 right-12 w-px h-16 bg-gradient-to-b from-transparent via-accent/10 to-transparent hidden lg:block" />
			<div className="absolute bottom-40 left-16 w-20 h-px bg-gradient-to-r from-transparent via-accent/8 to-transparent hidden lg:block" />

			<div className="container mx-auto px-6 max-w-6xl relative z-10">
				{/* Section heading */}
				<motion.div style={{ y: headingY }} className="mb-14 max-w-2xl">
					<motion.span
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.4 }}
						className="micro-label text-accent/50 mb-4 block"
					>
						Portfolio
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: 24 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
						transition={{ duration: 0.5 }}
						className="text-5xl md:text-6xl font-display font-bold tracking-[-0.03em] mb-4 text-zinc-900 dark:text-zinc-100"
					>
						Projects
					</motion.h2>
					<motion.div
						className="h-[2px] bg-accent rounded-full mb-4"
						initial={{ width: 0 }}
						animate={isInView ? { width: '60px' } : { width: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					/>
					<motion.p
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.5, delay: 0.15 }}
						className="text-zinc-500 text-lg dark:text-zinc-500"
					>
						Selected builds mixing AI, 3D, and fast web stacks.
					</motion.p>
				</motion.div>

				{/* Featured first project */}
				<FeaturedProjectCard project={projects[0]} />

				{/* Responsive grid for remaining projects */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.slice(1).map((project, idx) => (
						<ProjectCard
							key={project.title}
							project={project}
							idx={idx}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
