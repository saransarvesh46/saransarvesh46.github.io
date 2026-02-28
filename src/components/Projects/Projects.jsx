// eslint-disable-next-line no-unused-vars
import { useInView, motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

/* ── Projects — Pure CSS sticky overlapping cards ────────────────────
   Each card uses `position: sticky` with incrementing `top` values.
   No JS scroll listeners, no RAF loops, zero buffering.
   GPU-accelerated via will-change: transform.
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
	<div className="flex flex-wrap gap-3 mt-4">
		{project.github && (
			<motion.a
				href={project.github}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 px-5 py-2.5 rounded-xl
					bg-zinc-800/50 text-zinc-300 text-sm font-semibold
					border border-zinc-700/50 hover:border-accent hover:bg-accent/10 hover:text-accent
					transition-all duration-300"
				aria-label="GitHub"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<FiGithub className="w-4 h-4" />
				Source
			</motion.a>
		)}
		{project.demo && (
			<motion.a
				href={project.demo}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 px-5 py-2.5 rounded-xl
					bg-accent text-white text-sm font-semibold shadow-glow
					hover:bg-accent-hover transition-all duration-300"
				aria-label="Demo"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<FiExternalLink className="w-4 h-4" />
				Live Demo
			</motion.a>
		)}
	</div>
);

/* ── Sticky Case Study Card ──
   Uses pure CSS `position: sticky` with incrementing top values.
   Each successive card "covers" the previous as you scroll.
   Zero JS scroll listeners = zero buffering. ── */
const CaseStudyCard = ({ project, idx, total }) => {
	const { tilt, spotlight, handleMouseMove, handleMouseLeave } = useTilt();
	const isFeatured = idx === 0;

	// Each card sticks progressively lower so they stack
	const stickyTop = 80 + idx * 30; // 80px base (below nav) + 30px per card

	return (
		<motion.div
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
			className="sticky z-10"
			style={{
				top: `${stickyTop}px`,
				willChange: 'transform',
			}}
		>
			<div
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					transform: `perspective(1000px) rotateX(${tilt.x * 0.4}deg) rotateY(${tilt.y * 0.4}deg)`,
					transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
				}}
				className="group relative overflow-hidden rounded-[2rem] mx-auto w-full max-w-7xl
					bg-[#111119]/95 backdrop-blur-xl border border-zinc-800/80
					shadow-[0_-10px_40px_rgba(0,0,0,0.6)] hover:border-accent/40 transition-all duration-500
					dark:bg-[#0c0c14]/95 dark:border-zinc-800/60 min-h-[450px] md:min-h-[500px] flex flex-col justify-center"
			>
				{/* Gradient Top Lip */}
				<div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${isFeatured ? 'from-transparent via-accent to-transparent' : 'from-transparent via-accent/30 to-transparent'} opacity-80`} />

				{/* Spotlight on hover */}
				<div
					className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
					style={{
						background: `radial-gradient(800px circle at ${spotlight.x}px ${spotlight.y}px, rgba(14,165,233,0.08), transparent 40%)`,
					}}
				/>

				<div className="relative z-10 p-8 md:p-14 w-full h-full flex flex-col justify-center">
					{/* Header — number + title side by side */}
					<div className="flex items-start gap-6 mb-8">
						<span className="text-6xl md:text-7xl font-display font-bold text-zinc-800/30 leading-none select-none flex-shrink-0 tracking-tighter">
							{String(idx + 1).padStart(2, '0')}
						</span>
						<div className="flex flex-col gap-3 pt-1 min-w-0">
							<h3 className="text-2xl md:text-4xl font-display font-bold text-zinc-100 group-hover:text-accent transition-colors duration-500 leading-tight">
								{project.title}
							</h3>
							<div className="flex flex-wrap items-center gap-2">
								{isFeatured && (
									<span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded">
										<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
										Featured
									</span>
								)}
								<span className="text-zinc-600 font-mono text-[11px]">
									{String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
								</span>
							</div>
						</div>
					</div>

					{/* Description */}
					<div className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-none font-body space-y-4">
						{project.description.split('\n').map((paragraph, i) => (
							<p key={i}>{paragraph}</p>
						))}
					</div>

					{/* Tech tags */}
					<div className="mb-8">
						<TechTags technologies={project.technologies} max={8} />
					</div>

					{/* Buttons */}
					<div className="mt-auto pt-6 border-t border-zinc-800/50">
						<ActionButtons project={project} />
					</div>
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
			className="relative bg-zinc-100 dark:bg-[#030305] py-28 overflow-x-clip"
		>
			{/* Ambient gradients */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-gradient-to-r from-accent/[0.02] to-transparent" />
				<div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-zinc-200/15 to-transparent dark:from-zinc-900/20" />
			</div>

			{/* Decorative accent lines */}
			<div className="absolute top-32 right-12 w-px h-16 bg-gradient-to-b from-transparent via-accent/10 to-transparent hidden lg:block" />
			<div className="absolute bottom-40 left-16 w-20 h-px bg-gradient-to-r from-transparent via-accent/8 to-transparent hidden lg:block" />

			<div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
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

				{/* Pure CSS Sticky Stack — no JS scroll logic */}
				<div className="flex flex-col gap-8 relative w-full pb-20">
					{projects.map((project, idx) => (
						<CaseStudyCard
							key={project.title}
							project={project}
							idx={idx}
							total={projects.length}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
