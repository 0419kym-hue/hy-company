import type { Metadata } from 'next';
export const metadata: Metadata = { title: '나의 채용 분석' };
export default function CareerPage() {
 return <main id="main" className="career"><p className="eyebrow">MY CAREER ANALYSIS</p><h1>나의 채용 분석</h1><p className="career-notice">공고 데이터를 준비하고 있어요</p></main>;
}
