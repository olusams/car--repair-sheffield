import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="group text-center bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      {/* Team Member Image */}
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto shadow-lg bg-gray-200 flex items-center justify-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.parentElement?.querySelector('.fallback-text');
              if (fallback) {
                fallback.classList.remove('hidden');
              }
            }}
          />
          <div className="fallback-text hidden absolute inset-0 flex items-center justify-center bg-primary-600 text-white font-bold text-2xl rounded-full">
            {member.name.charAt(0)}
          </div>
        </div>
        
        {/* Experience Badge */}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 text-sm font-medium text-primary-600 shadow-lg">
          {member.bio}
        </div>
      </div>
      
      {/* Member Info */}
      <div>
        <h3 className="font-display font-semibold text-xl mb-2">{member.name}</h3>
        <p className="text-primary-600 font-medium mb-3">{member.role}</p>
        <p className="text-secondary-600 text-sm leading-relaxed">
          Experienced professional with {member.bio} of expertise in automotive services.
        </p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard; 