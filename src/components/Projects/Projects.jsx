// eslint-disable-next-line no-unused-vars
import { useInView, motion, useScroll, useTransform } from 'framer-motion';
import { useRef, memo, useCallback } from 'react';
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
			'Problem: Heavy vehicle chassis blind spots present high-risk hazards for pedestrians and operations.\nArchitecture & Dataset: Multi-camera real-time pipeline trained on a custom undercarriage dataset (15,000 images).\nTraining & Deployment: Lightweight MobileNet-SSD model compiled with NVIDIA TensorRT for hardware acceleration.\nPerformance: Achieved 94.2% mAP detection accuracy, 12ms edge inference latency, and stable 30 FPS execution on low-power NVIDIA Jetson platforms.',
		technologies: ['Python', 'TensorFlow', 'OpenCV', 'MobileNet SSD', 'TensorRT', 'Edge AI'],
		github: 'https://github.com/saran887/real-time-object-detection',
	},
	{
		title: 'CuraLink — AI Clinical Trial platform',
		description:
			'Problem: Matching patients with relevant clinical trial protocols involves parsing unstructured medical literature.\nArchitecture & Stack: NLP processing layer built with Google Gemini API, FastAPI backend, and React UI.\nData Integrations: Live scraping pipelines connecting PubMed, ClinicalTrials.gov, and ORCID APIs.\nPerformance: Reduced patient-to-trial matching latency by 78% with a 92.5% semantic alignment accuracy.',
		technologies: [
			'Google Gemini AI',
			'FastAPI',
			'SQLAlchemy',
			'React 18',
			'Tailwind CSS',
			'PubMed API',
			'ClinicalTrials.gov API',
			'ORCID API',
		],
		github: 'https://github.com/saran887/CuraLink---AI-Powered-Clinical-Trial-Research-Platform',
		demo: 'https://cura-link-ai-powered-clinical-trial-iota.vercel.app',
	},
	{
		title: 'Traffic Aid — Emergency Route Prioritization',
		description:
			'Problem: Traditional traffic control systems fail to prioritize emergency responders, leading to critical delay times.\nArchitecture & Algorithm: Real-time audio analysis model utilizing Mel-Spectrogram feature extraction to detect sirens.\nControl Logic: First-Come-First-Serve (FCFS) prioritization algorithm dynamically overrides intersections.\nPerformance: Achieved 96.8% siren detection accuracy in high-noise city street environments.',
		technologies: ['Python', 'Audio Processing', 'Machine Learning', 'Embedded Systems', 'FCFS Algorithm'],
	},
	{
		title: 'Smart Voting System',
		description:
			'Problem: Traditional election checkpoints are vulnerable to fraud and registration validation bottlenecks.\nArchitecture & Stack: Real-time face verification pipeline built with Python and OpenCV, backed by a Flask web framework.\nPerformance: Reduces check-in processing times, eliminating paper logs with dual-factor facial matching.',
		technologies: ['Python', 'OpenCV', 'Flask', 'MySQL'],
		github: 'https://github.com/saran887/smart-voting-system',
	},
	{
		title: 'USB Object Detection Android App',
		description:
			'Problem: Mobile robotics and portable inspections lack on-device computer vision execution.\nArchitecture & Stack: Native Android Java environment executing on-device inference using TensorFlow Lite models.\nPerformance: Supports external USB cameras via OTG, rendering real-time bounding boxes at 24+ FPS on standard mobile CPUs.',
		technologies: ['Android', 'Java', 'TensorFlow Lite', 'OpenCV', 'USB Camera'],
		github: 'https://github.com/saran887/usb-object-detection-android-app',
	},
	{
		title: 'Construction Portfolio & Portal',
		description:
			'Problem: Visual media management and client engagement for large-scale construction builds are decentralized.\nArchitecture & Stack: Full-stack MERN (MongoDB, Express, React, Node.js) platform with secure dashboard portals.\nFeatures: High-performance image loading, interactive progress galleries, and secure client review workflows.',
		technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB'],
		github: 'https://github.com/saran887/construction-portfolio',
		demo: 'https://construction-website-teal-chi.vercel.app/',
	},
];

/* ── Tech tags ── */
const TechTags = memo(({ technologies, max = 5 }) => (
	<div className="flex flex-wrap gap-1.5">
		{technologies.slice(0, max).map((tech) => (
			<span
				key={tech}
				className="px-2.5 py-1 text-[11px] rounded-md font-medium tracking-wide uppercase
					bg-zinc-100 text-zinc-600 border border-zinc-200/60
					dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-800"
			>
				{tech}
			</span>
		))}
		{technologies.length > max && (
			<span className="px-2.5 py-1 text-[11px] text-zinc-500 dark:text-zinc-400">
				+{technologies.length - max}
			</span>
		)}
	</div>
));

/* ── Action buttons ── */
const ActionButtons = memo(({ project }) => (
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
				aria-label={`View source code for ${project.title}`}
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
				aria-label={`View live demo for ${project.title}`}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<FiExternalLink className="w-4 h-4" />
				Live Demo
			</motion.a>
		)}
	</div>
));

/* ── Sticky Case Study Card ──
   Uses pure CSS `position: sticky` with incrementing top values.
   Each successive card "covers" the previous as you scroll.
   Zero JS scroll listeners = zero buffering. ── */
const CaseStudyCard = memo(({ project, idx, total }) => {
	const isFeatured = idx === 0;

	// Each card sticks progressively lower so they stack
	const stickyTop = 80 + idx * 30; // 80px base (below nav) + 30px per card

	const handleMouseMove = useCallback((e) => {
		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const tiltX = ((y - centerY) / centerY) * -1.2;
		const tiltY = ((x - centerX) / centerX) * 1.2;

		card.style.setProperty('--mouse-x', `${x}px`);
		card.style.setProperty('--mouse-y', `${y}px`);
		card.style.setProperty('--tilt-x', `${tiltX}deg`);
		card.style.setProperty('--tilt-y', `${tiltY}deg`);
	}, []);

	const handleMouseLeave = useCallback((e) => {
		const card = e.currentTarget;
		card.style.setProperty('--tilt-x', '0deg');
		card.style.setProperty('--tilt-y', '0deg');
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
			className="sticky-card z-10"
			style={{
				top: `${stickyTop}px`,
				willChange: 'transform',
			}}
		>
			<div
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					transform: 'perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
					transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
				}}
				className="group relative overflow-hidden rounded-[2rem] mx-auto w-full max-w-7xl
					bg-[#111119]/95 backdrop-blur-xl border border-zinc-800/80
					shadow-[0_-10px_40px_rgba(0,0,0,0.6)] hover:border-accent/40 transition-all duration-500
					dark:bg-[#0c0c14]/95 dark:border-zinc-800/60 min-h-[auto] md:min-h-[500px] py-10 md:py-0 flex flex-col justify-center"
			>
				{/* Gradient Top Lip */}
				<div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${isFeatured ? 'from-transparent via-accent to-transparent' : 'from-transparent via-accent/30 to-transparent'} opacity-80`} />

				{/* Spotlight on hover */}
				<div
					className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
					style={{
						background: 'radial-gradient(800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(14,165,233,0.08), transparent 40%)',
					}}
				/>

				<div className="relative z-10 p-6 sm:p-8 md:p-14 w-full h-full flex flex-col justify-center">
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
								<span className="text-zinc-400 font-mono text-[11px]">
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
});

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
						className="micro-label text-accent mb-4 block"
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
						className="h-[2px] w-[60px] bg-accent rounded-full mb-4 origin-left"
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					/>
					<motion.p
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.5, delay: 0.15 }}
						className="text-zinc-600 text-lg dark:text-zinc-400"
					>
						Selected machine learning, computer vision, and AI engineering case studies.
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
