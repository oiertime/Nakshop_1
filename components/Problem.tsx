import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { User, Zap, Compass, ArrowRight } from 'lucide-react';
import { Persona } from '../types';

const personas: Persona[] = [
  {
    id: 'perfectionist',
    title: '게으른 완벽주의자',
    subtitle: 'Lazy Perfectionist',
    description: '목표를 100% 달성하지 못하면 실패라고 생각하고, 실패한 스스로를 받아들이기 어려워 아무 시도도 못하는 사람.',
    symptoms: ['머릿속 시도만 쌓이고 있음', '남들보다 늦어지는 것에 대한 불안', '자신의 욕망을 비판으로 포장']
  },
  {
    id: 'burnout',
    title: '번아웃 슈퍼맨/우먼',
    subtitle: 'Burnout Superman/Woman',
    description: '내가 가짜라고 생각하고 들키지 않기 위해 남들보다 더 많이, 더 늦게까지 일하며 스스로를 증명하려고 하는 사람.',
    symptoms: ['목적 없이 최선을 다해 지침', '퇴근 후 보상심리 폭발', '이대로 살다 죽으면 내 인생은 뭔가 싶은 공허함']
  },
  {
    id: 'soloist',
    title: '길 잃은 솔로이스트',
    subtitle: 'Lost Soloist',
    description: '남의 도움을 받으면 무능함을 인정한다고 생각하여 모든 것을 혼자 해내려고 하는 사람.',
    symptoms: ['어떻게 해야 하는지 방법을 모름', '성장의 속도만 신경 쓰고 방향을 잃음', '열심히는 하는데 막막함']
  }
];

export const Problem: React.FC = () => {
  return (
    <Section id="who" className="bg-white">
      <div className="mb-24 max-w-3xl">
        <h3 className="text-nakYellow font-bold uppercase tracking-widest text-sm mb-4">Who is this for?</h3>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 text-nakBlack leading-tight">
          왜 세상에 존재해야 할까?<br/>
          <span className="text-gray-300">제자리에 있는 것만 같은 당신에게.</span>
        </h2>
        <p className="text-xl text-nakDarkGray leading-relaxed">
          열심히는 살고 있는데 방향을 잃었거나, <br/>
          타인의 기준에 맞추느라 정작 '나'를 잃어버리진 않았나요?
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {personas.map((persona, index) => (
          <motion.div 
            key={persona.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-nakDarkGray text-white p-10 md:p-12 rounded-2xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 shadow-xl relative overflow-hidden group"
          >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-nakYellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="mb-8 text-nakYellow">
              {index === 0 && <User size={48} strokeWidth={1.5} />}
              {index === 1 && <Zap size={48} strokeWidth={1.5} />}
              {index === 2 && <Compass size={48} strokeWidth={1.5} />}
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-white">{persona.title}</h3>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-8">{persona.subtitle}</p>
            
            <p className="text-gray-300 leading-relaxed mb-10 font-medium text-lg">
              {persona.description}
            </p>

            <div className="mt-auto pt-8 border-t border-gray-600">
              <h4 className="text-xs font-bold uppercase text-nakYellow mb-4">Main Symptoms</h4>
              <ul className="space-y-3">
                {persona.symptoms.map((symptom, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                    <span className="block w-1.5 h-1.5 bg-nakYellow rounded-full mt-2 flex-shrink-0" />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 flex justify-center">
        <a href="#price" className="inline-flex items-center gap-2 border-2 border-nakBlack bg-white text-nakBlack px-10 py-4 rounded-full font-bold uppercase hover:bg-nakYellow hover:border-nakYellow transition-all duration-300">
          나크샵 참여하기 <ArrowRight size={20} />
        </a>
      </div>
    </Section>
  );
};