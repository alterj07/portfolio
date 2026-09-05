'use client'
import AdagioPic from '../../assets/adagioPic.png'
import PerformanceCard from './PerformanceCard'

export default function AdagioCard() {
  return (
    <PerformanceCard
      href="https://www.youtube.com/watch?v=kQBsGy9die4&list=PL-GOq6NDX0SUXMqWKgnhEzP4qC_tnrx0k"
      imageSrc={AdagioPic}
      imageAlt="Adagio in G Minor screenshot"
      composer="Tomaso Albinoni and Remo Giazotto"
      title="Adagio in G Minor"
      awards={[
        "TMEA Solo and Ensemble Outstanding Performance Award (2023-2024)",
        "New York International Young Musician Competition 2nd Prize (2024)",
        "Charleston International Autumn Music Competition 3rd Prize (2024)",
      ]}
    />
  );
}
