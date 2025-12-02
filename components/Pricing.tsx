import React from 'react';
import { Section } from './Section';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <Section id="price" className="bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 rounded-l-[100px] hidden lg:block"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
           <div className="inline-block px-4 py-2 bg-nakYellow/20 text-nakBlack font-bold text-sm rounded-full mb-6">
              Invest in Yourself
           </div>
           <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 text-nakBlack">
             PRICING<br />
             PLAN
           </h2>
           <p className="text-xl text-nakDarkGray leading-relaxed mb-8">
             술자리 2번 안 가면 내 인생을 정리할 수 있는 합리적인 투자. <br/><br/>
             지금까지의 삶을 회고하고, 앞으로 30년의 방향을 설정하는 비용으로 20만원은 결코 비싸지 않습니다.
           </p>
           
           <div className="p-6 bg-gray-100 rounded-2xl border border-gray-200">
             <h4 className="font-bold text-nakBlack flex items-center gap-2 mb-2">
               <Sparkles size={18} className="text-nakYellow fill-nakYellow" />
               Manifesto Promise
             </h4>
             <p className="text-sm text-gray-600">
               "이 워크샵이 끝나면 당신의 책상 앞엔 [나만의 의사결정 매니페스토]가 붙어있게 됩니다."
             </p>
           </div>
        </div>

        {/* Pricing Card */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-nakYellow to-nakDarkGray rounded-[32px] blur opacity-30"></div>
          <div className="relative bg-white border-2 border-nakBlack rounded-[30px] p-8 md:p-12 shadow-2xl">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-nakYellow text-black px-6 py-2 rounded-full font-black uppercase tracking-wide border border-black shadow-sm">
              Early Bird
            </div>
            
            <h3 className="text-3xl font-black mb-2 text-nakBlack">Beta Season</h3>
            <p className="text-gray-500 font-medium mb-8">Limited time offer for the first cohort</p>
            
            <div className="flex items-baseline mb-8 pb-8 border-b border-gray-100">
              <span className="text-6xl font-black tracking-tighter text-nakBlack">₩220,000</span>
              <span className="ml-2 text-gray-400 font-medium text-lg">/ 4 weeks</span>
            </div>
            
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-nakYellow rounded-full p-1 mt-0.5">
                  <Check size={14} className="text-black stroke-[3px]" />
                </div>
                <span className="font-medium text-nakDarkGray">오프라인 워크샵 3시간 x 4회</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-nakYellow rounded-full p-1 mt-0.5">
                  <Check size={14} className="text-black stroke-[3px]" />
                </div>
                <span className="font-medium text-nakDarkGray">온라인 코칭 및 과제 피드백</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-nakYellow rounded-full p-1 mt-0.5">
                  <Check size={14} className="text-black stroke-[3px]" />
                </div>
                <span className="font-medium text-nakDarkGray">퍼실리테이터의 인사이트 리포트</span>
              </div>
              <div className="flex items-start gap-4 bg-nakDarkGray/5 p-4 rounded-xl">
                <div className="bg-nakBlack rounded-full p-1 mt-0.5">
                  <Check size={14} className="text-nakYellow stroke-[3px]" />
                </div>
                <div>
                  <span className="font-bold text-nakBlack block">Payback 제도</span>
                  <span className="text-sm text-gray-600">4주 완주 시 5만원 현금 환급</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-nakBlack text-white py-5 rounded-xl font-bold text-lg uppercase tracking-wide hover:bg-nakYellow hover:text-black transition-all duration-300 flex justify-center items-center gap-2 shadow-lg group">
              Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-gray-400 mt-4 font-medium">
              * 정원 8명 마감 시 조기 종료될 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};