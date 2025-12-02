import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';

export const Solution: React.FC = () => {
  return (
    <Section id="how" className="bg-gray-50">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-5 sticky top-24">
          <h3 className="text-nakYellow font-bold uppercase tracking-widest text-sm mb-4">The Philosophy</h3>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-nakBlack">
            좋은 질문을 하고<br/>
            나만의 답을 찾다.
          </h2>
          <p className="text-nakDarkGray text-lg leading-relaxed mb-12">
            '나크샵'은 단순한 힐링이 아닙니다.<br/>
            깊이 있는 자아 탐구를 통해 당신의 코어(Core)를<br/>
            논리적으로 정의하는 과정입니다.
          </p>
          
          <div className="space-y-8">
            <div className="border-l-4 border-nakYellow pl-6">
              <p className="font-bold text-xl mb-2 text-nakBlack">메타 인지</p>
              <p className="text-gray-600">내가 왜 질투하는지, 왜 이때 시간이 빨리 가는지 'Why'를 씀으로써 내 감정의 근원을 파악합니다.</p>
            </div>
            <div className="border-l-4 border-nakDarkGray pl-6">
              <p className="font-bold text-xl mb-2 text-nakBlack">직무 재정의</p>
              <p className="text-gray-600">"회사를 때려치워야지"가 아니라, 현재 직무에서 내가 몰입할 수 있는 요소를 찾거나 일하는 방식을 바꿉니다.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <p className="font-bold text-xl mb-2 text-nakBlack">중요 기준</p>
              <p className="text-gray-600">1년 뒤 죽는다는 가정은 불필요한 고민과 타인의 시선을 걷어내고, 진짜 중요한 것에 집중하게 만듭니다.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 text-right">The 4 Core Quadrants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'Q1', title: '몰입', eng: 'Immersion', desc: '나의 무의식적 흥미와 재능 발견', detail: '시간 가는 줄 모르는 순간은 언제인가?' },
                { id: 'Q2', title: '욕망', eng: 'Desire', desc: '나의 숨겨진 욕망과 잠재력 확인', detail: '나는 누구를 질투하고 있는가?' },
                { id: 'Q3', title: '동경', eng: 'Admiration', desc: '이상적인 워크 & 라이프스타일', detail: '내가 진정으로 닮고 싶은 모습은?' },
                { id: 'Q4', title: '가치', eng: 'Value', desc: '삶의 핵심 가치관과 우선순위 정립', detail: '오늘 죽어도 후회하지 않을 선택인가?' },
              ].map((q, idx) => (
                <motion.div 
                  key={q.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-nakYellow"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-black text-gray-100 group-hover:text-nakYellow transition-colors duration-300">{q.id}</span>
                    <div className="w-2 h-2 rounded-full bg-nakBlack opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-1 text-nakBlack flex items-baseline gap-2">
                    {q.title} <span className="text-sm font-normal text-gray-400 uppercase">{q.eng}</span>
                  </h4>
                  <p className="text-sm text-nakDarkGray font-medium mb-6">{q.desc}</p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-base font-bold text-nakBlack">"{q.detail}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </div>
    </Section>
  );
};