import React from 'react';
import { Section } from './Section';
import { Shield, UserX, MessageSquare, Lock } from 'lucide-react';
import { Rule } from '../types';

const rules: Rule[] = [
  { id: 1, title: '계급장 떼기', englishTitle: 'No Titles', description: '이곳에서 당신은 대리도, 팀장도, 누군가의 부모도 아닙니다. 오직 당신의 이름으로만 이야기합니다.' },
  { id: 2, title: '주어는 무조건 "나"', englishTitle: 'I-Message Only', description: "'회사가 시켜서', '상황이 어쩔 수 없어서' 금지. 외부 환경이 아닌 나의 감정과 생각에만 집중하세요." },
  { id: 3, title: '"그냥" 금지', englishTitle: 'No "Just Because"', description: "이유를 모르겠다면 '왜 모르는지'를 집요하게 파고들어야 합니다. 내가 나를 모른다는 사실을 직시하세요." },
  { id: 4, title: '비밀 보장', englishTitle: 'Vegas Rule', description: '이곳에서 나눈 모든 이야기는 이 문을 나가는 순간 증발합니다. 타인을 평가하거나 조언하지 말고 거울처럼 비추어 보세요.' },
];

export const Rules: React.FC = () => {
  return (
    <Section className="bg-nakDarkGray text-white">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Ground Rules</h2>
        <p className="text-gray-300 text-lg">안전하고 솔직한 대화를 위한 4가지 약속</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {rules.map((rule, idx) => (
          <div key={rule.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-nakYellow/50 transition-colors duration-300 group">
            <div className="mb-6 text-gray-400 group-hover:text-nakYellow transition-colors">
                {idx === 0 && <UserX size={40} strokeWidth={1.5} />}
                {idx === 1 && <MessageSquare size={40} strokeWidth={1.5} />}
                {idx === 2 && <Shield size={40} strokeWidth={1.5} />}
                {idx === 3 && <Lock size={40} strokeWidth={1.5} />}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{rule.title}</h3>
            <p className="text-xs uppercase tracking-widest text-nakYellow font-bold mb-6">{rule.englishTitle}</p>
            <p className="text-sm text-gray-300 leading-relaxed opacity-90">
              {rule.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};