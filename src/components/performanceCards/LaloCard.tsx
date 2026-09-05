'use client'
import LaloPic from '../../assets/laloPic.png'
import PerformanceCard from './PerformanceCard'

export default function LaloCard() {
  return (
    <PerformanceCard
      href="https://www.youtube.com/watch?v=YZxJPlXp5wI"
      imageSrc={LaloPic}
      imageAlt="Lalo Cello Concerto No. 1 screenshot"
      composer="Eduardo Lalo"
      title="Lalo Cello Concerto in D Minor Movement 1"
      awards={["TMEA Solo and Ensemble Outstanding Performance Award (2024-2025)"]}
    />
  );
}
