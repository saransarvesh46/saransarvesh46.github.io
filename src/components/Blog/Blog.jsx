import { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';

const articles = [
    {
        title: 'Optimizing MobileNet SSD for Edge Devices',
        excerpt: 'Detailed insights on reducing inference latency by 40% on low-power IoT hardware without sacrificing detection accuracy.',
        date: 'Oct 12, 2025',
        readTime: '8 min read',
        tags: ['Edge AI', 'TensorFlow', 'Optimization'],
        link: '#'
    },
    {
        title: 'Architecting Real-Time Traffic Audio Preemption',
        excerpt: 'How we used First-Come-First-Serve algorithms and custom audio models to give emergency vehicles right-of-way autonomously.',
        date: 'Sep 28, 2025',
        readTime: '6 min read',
        tags: ['Machine Learning', 'Embedded Systems', 'Audio AI'],
        link: '#'
    },
    {
        title: 'RAG Systems in Clinical Trial Matching',
        excerpt: 'Integrating Google Gemini with PubMed & ClinicalTrials.gov to drastically reduce patient matching time.',
        date: 'Aug 15, 2025',
        readTime: '10 min read',
        tags: ['GenAI', 'Healthcare', 'RAG'],
        link: '#'
    }
];

const BlogCard = ({ article, idx }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-20px' });

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-[#111119]/50 backdrop-blur-sm border border-zinc-200/60 dark:border-zinc-800/60 hover:border-accent/40 dark:hover:border-accent/40 transition-colors p-6 md:p-8 flex flex-col h-full"
        >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiArrowRight className="w-5 h-5 text-accent -rotate-45" />
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-4">
                <span className="flex items-center gap-1.5"><FiCalendar /> {article.date}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="flex items-center gap-1.5"><FiClock /> {article.readTime}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-accent transition-colors">
                {article.title}
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
                {article.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {article.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.article>
    );
};

const Blog = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const headingY = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section id="blog" ref={ref} className="py-28 relative bg-zinc-50 dark:bg-[#050508]">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-accent/[0.02] to-transparent" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div style={{ y: headingY }} className="mb-14">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        className="micro-label text-accent/50 mb-4 block"
                    >
                        Insights & Research
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                        className="text-4xl md:text-5xl font-display font-bold tracking-[-0.03em] mb-4 text-zinc-900 dark:text-zinc-100"
                    >
                        Technical Writings
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
                        transition={{ delay: 0.15 }}
                        className="text-zinc-500 text-lg dark:text-zinc-500 max-w-2xl"
                    >
                        Deep dives into AI model optimization, embedded computing architectures, and the mathematics of intelligence.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, idx) => (
                        <BlogCard key={article.title} article={article} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
