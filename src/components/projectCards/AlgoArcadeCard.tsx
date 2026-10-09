'use client'
import Image from 'next/image'
import AlgoArcadePic from '../../assets/algoarcade.png'
import PytorchComponent from '../libraryCards/pytorch'
import BaselinesComponent from '../libraryCards/baselines'
import GymnasiumComponent from '../libraryCards/gymnasium'
import PyGBAComponent from '../libraryCards/pygba'
import PythonComponent from '../libraryCards/python'
import ProjectCard from './ProjectCard'

export default function AlgoArcadeCard() {
  return (
    <ProjectCard
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      githubHref="https://github.com/alterj07"
      title="AlgoArcade"
      date="October 2026 - Current"
      bullets={[
        "A reinforcement learning framework for training and comparing AI agents on Pokémon FireRed using game-state observations and gameplay interactions.",
        "Developing a custom Gymnasium environment that extracts live game-state data from emulator RAM to provide structured observations for reinforcement learning agents.",
        "Implementing and comparing PPO and DQN agents using PyTorch and Stable-Baselines3, with multi-seed experiments tracked through Weights & Biases and Matplotlib.",
      ]}
      languages={<><PythonComponent /><PytorchComponent /><BaselinesComponent /><GymnasiumComponent /><PyGBAComponent /></>}
      media={<Image src={AlgoArcadePic.src} alt="Words-Of-Wisdom project screenshot" width="500" height="500" />}
    />
  );
}
