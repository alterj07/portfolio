'use client'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import ReactNativeComponent from '../libraryCards/reactnative'
import TensorFlowComponent from '../libraryCards/tensorflow'
import ExpoComponent from '../libraryCards/expo'
import "../../css/projects.css"
export default function PurePrepCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}
        className = "cardClass">
            <a href = "https://github.com/alterj07/PurePrep" target = "_blank" rel="noopener noreferrer">
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10vh', paddingBottom: '10vh' }}>
                    <CircularProgress />
                </Box>
                <CardContent 
                    sx = {{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                        borderRadius: '0 0 16px 16px',
                    }}>
                    <div style={{ display: 'flex', gap: "0.5vw", flexDirection: 'row', fontSize: "smaller", color: "#888", marginBottom: '0.5vh' }}>
                        <ReactNativeComponent/>
                        <TensorFlowComponent/>
                        <ExpoComponent/>
                    </div>
                    <div style={{ fontWeight: "bold", fontSize: "medium" }}>PurePrep</div>
                    <div style={{ fontSize: "small", color: "#555" }}>
                        My first attempt at creating a mobile application that can identify allergens in a food using a picture of said food. First created as a passion project, this was soon used as my CS3 class&apos; final project; however, due to the time restraint on the project, I was unable to create the final product and instead had to pivot the app for it to become a hotdog identification app.
                    </div>
                </CardContent>
            </a>
        </Card>
  );
}