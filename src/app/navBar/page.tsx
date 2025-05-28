import Link from 'next/link';
import '../globals.css';
export default function NavBar() {
    return (
      <ul 
        className = "display-flex align-items-center flex-direction-column color-burlywood padding-1rem width-14rem height-full list-style-none">
        <li><Link className= "display-flex color-yellowgreen text-decoration-none font-weight-bolder font-size-2-5rem margin-top-2rem" href ="/">Home</Link></li>
        <li><Link className= "display-flex color-yellowgreen text-decoration-none font-weight-bolder font-size-2-5rem margin-top-2rem" href ="/aboutMe">About Me</Link></li>
        <li><Link className= "display-flex color-yellowgreen text-decoration-none font-weight-bolder font-size-2-5rem margin-top-2rem" href ="/projects">Projects</Link></li>
      </ul>
    )
  }