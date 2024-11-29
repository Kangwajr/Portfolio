import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  delay: number;
}

export default function SkillCard({ icon: Icon, title, skills, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all hover:shadow-lg"
    >
      <Icon className="text-blue-400 mb-4" size={32} />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 flex items-center gap-2">
            <span className="text-blue-400">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}