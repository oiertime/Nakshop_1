import React from 'react';
import { Section } from './Section';
import { WeekModule } from '../types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const weeks: WeekModule[] = [
  {
    week: 1,
    title: '발굴',
    concept: '3시간 딥 워크샵',
    description: '스스로 질문하기 어려웠던 질문과 답을 통해 날것의 욕망과 가치관을 확인하기',
    activities: ['4가지 질문(Core Question)에 대해 쓰고 나누기', 'Drill Down을 통해 껍질 깨기'],
    homework: '1주 동안 4가지 질문을 머릿속에 담고 살아가기 (답안지 봉인)'
  },
  {
    week: 2,
    title: '검증',
    concept: '블라인드 라이팅 & 갭 분석',
    description: "'진짜 내 것'과 '그때의 기분'을 걸러내는 과정",
    activities: ['다시쓰기: 1주차 답안 보지 않고 다시 쓰기', '비교하기: 1주차와 2주차 답안 비교', '토론하기: 왜 바뀌었는가? 왜 같은가?'],
    homework: '감정과 이성적 답변 분리해보기'
  },
  {
    week: 3,
    title: '선언',
    concept: '스피치 & 인터뷰 (No Script)',
    description: '망설임 없이 튀어나오는 말이 진짜 내 신념이 되었는지 확인하기',
    activities: ['노트 없이 말하기', '압박 질문: "그럼 왜 지금 회사 다니나요?"', '방어와 설득: 즉석에서 생각 정리하기'],
    homework: '내면의 나침반 재설정'
  },
  {
    week: 4,
    title: '적용',
    concept: '나 사용 설명서',
    description: '앞으로 인생의 중요한 선택을 할 때 사용할 매니페스토 정의',
    activities: ['나만의 매니페스토(Manifesto) 만들기', '기준표 시각화 및 공유'],
    homework: '휴대폰 배경화면으로 만들어 매일 확인하기'
  }
];

export const Curriculum: React.FC = () => {
  return (
    <Section id="curriculum" className="bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div>
           <h3 className="text-nakYellow font-bold uppercase tracking-widest text-sm mb-4">Curriculum</h3>
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-nakBlack">4 WEEKS</h2>
           <p className="mt-4 text-xl text-nakDarkGray font-medium">
            답답했던 고민이 명확한 확신으로 바뀌는 시간.
           </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {weeks.map((week, index) => (
          <motion.div 
            key={week.week}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white border-2 border-transparent hover:border-nakYellow rounded-3xl p-8 md:p-12 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-nakYellow/10 rounded-bl-full -z-10 group-hover:bg-nakYellow/20 transition-colors"></div>

            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="lg:w-1/4">
                <span className="text-7xl font-black text-gray-100 group-hover:text-nakYellow transition-colors duration-300 leading-none">0{week.week}</span>
                <h3 className="text-3xl font-bold mt-4 text-nakBlack">{week.title}</h3>
                <p className="text-sm font-bold text-nakYellow mt-2 uppercase tracking-wide bg-nakBlack inline-block px-2 py-1 rounded">{week.concept}</p>
              </div>
              
              <div className="lg:w-1/2 pt-4">
                <p className="text-xl font-bold leading-relaxed mb-6 text-nakBlack">
                  {week.description}
                </p>
                <ul className="space-y-3">
                  {week.activities.map((act, i) => (
                    <li key={i} className="flex items-start text-nakDarkGray">
                      <div className="w-1.5 h-1.5 bg-nakDarkGray rounded-full mt-2 mr-3 flex-shrink-0"></div> 
                      {act}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-1/4 bg-gray-50 rounded-xl p-6 self-stretch flex flex-col justify-center border border-gray-100 group-hover:border-nakYellow/50 transition-colors">
                <span className="text-xs font-bold uppercase text-gray-400 block mb-2">Weekly Mission</span>
                <p className="text-sm font-medium text-nakBlack">{week.homework}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <a href="#price" className="inline-flex items-center gap-2 bg-nakBlack text-white px-10 py-4 rounded-full font-bold uppercase hover:bg-nakYellow hover:text-black transition-all duration-300 shadow-lg transform hover:-translate-y-1">
          커리큘럼 상세 문의하기 <ArrowRight size={20} />
        </a>
      </div>
    </Section>
  );
};