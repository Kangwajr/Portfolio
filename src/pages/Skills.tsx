import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skillsData';

export default function Skills() {
  return (
    <PageTransition>
      <section className="py-20 bg-gray-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 pt-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills, tools, and technologies I work with
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skillset, index) => (
              <SkillCard
                key={index}
                {...skillset}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}