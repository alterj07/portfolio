import Link from 'next/link';
export default function NavBar() {
    return (
      <ul class = "display-flex align-items-center flex-direction-column color-burlywood padding-1rem position-absolute left-0 width-14rem height-full list-style-none">
        <li><Link className= "display-flex color-yellowgreen text-decoration-none font-weight-bolder font-size-2-5rem margin-top-2rem" href ="/">Home</Link></li>
        <li><Link className= "display-flex color-yellowgreen text-decoration-none font-weight-bolder font-size-2-5rem margin-top-2rem" href ="../Pages/AboutMe">About Me</Link></li>
        <li><Link className= "display-flex color-yellowgreen text-decoration-none font-weight-bolder font-size-2-5rem margin-top-2rem" href ="../Pages/Projects">Projects</Link></li>
      </ul>
    )
  }