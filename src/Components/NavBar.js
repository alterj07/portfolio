import Link from 'next/link';
export default function NavBar() {
    return (
      <ul class = "display-flex align-items-center flex-direction-column color-burlywood padding-1rem position-absolute left-0 width-14rem height-full list-style-none">
        <li class = "display-flex color-yellowgreen text-decoration-none font-weight-bolder font-size-2-5rem margin-top-2rem"><Link href ="/">Home</Link></li>
        <li class = "display-flex color-yellowgreen text-decoration-none font-weight-bolder font-size-2-5rem margin-top-2rem"><Link href ="../Pages/AboutMe.js">About Me</Link></li>
        <li class = "display-flex color-yellowgreen text-decoration-none font-weight-bolder font-size-2-5rem margin-top-2rem"><Link href ="../Pages/Projects.js">Projects</Link></li>
      </ul>
    )
  }