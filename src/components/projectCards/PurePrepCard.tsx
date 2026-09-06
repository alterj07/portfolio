'use client'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import ReactNativeComponent from '../libraryCards/reactnative'
import TensorFlowComponent from '../libraryCards/tensorflow'
import ExpoComponent from '../libraryCards/expo'
import ProjectCard from './ProjectCard'

export default function PurePrepCard() {
  return (
    <ProjectCard
      href="https://github.com/alterj07/PurePrep"
      githubHref="https://github.com/alterj07/PurePrep"
      title="PurePrep"
      date="May 2025"
      bullets={[
        "Cross-platform mobile app built with React Native and Expo for real-time food classification.",
        "Integrated TensorFlow machine learning models for computer vision and allergen detection.",
        "Developed as a CS3 capstone project focusing on mobile UI, camera input, and on-device inference.",
      ]}
      languages={<><ReactNativeComponent /><TensorFlowComponent /><ExpoComponent /></>}
      media={
        <Box sx={{ width: '100%', height: '100%', minHeight: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--color-bg-subtle)' }}>
          <CircularProgress sx={{ color: 'var(--color-accent)' }} />
        </Box>
      }
    />
  );
}
