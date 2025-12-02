export interface Persona {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  symptoms: string[];
}

export interface WeekModule {
  week: number;
  title: string;
  concept: string;
  description: string;
  activities: string[];
  homework: string;
}

export interface Rule {
  id: number;
  title: string;
  englishTitle: string;
  description: string;
}

export interface Comparison {
  brand: string;
  concept: string;
  duration: string;
  price: string;
  perSession: string;
  feature: string;
}