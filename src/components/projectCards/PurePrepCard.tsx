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
      description={<>My first attempt at creating a mobile application that can identify allergens in a food using a picture of said food. First created as a passion project, this was soon used as my CS3 class&apos; final project; however, due to the time restraint on the project, I was unable to create the final product and instead had to pivot the app for it to become a hotdog identification app.</>}
      languages={<><ReactNativeComponent /><TensorFlowComponent /><ExpoComponent /></>}
      media={
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: 'var(--color-bg-subtle)' }}>
          <CircularProgress sx={{ color: 'var(--color-accent)' }} />
        </Box>
      }
    />
  );
}
