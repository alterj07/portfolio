import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="group fixed top-0 left-0 h-screen opacity-0 hover:opacity-100 transition-opacity duration-[0.9s] ease-in-out z-50">
      <ul className="h-full bg-white/10 backdrop-blur-lg shadow-lg flex flex-col items-start justify-start px-2 py-8 overflow-hidden space-y-6">
        <li>
          <Link
            className="text-lime-300 text-lg font-semibold hover:text-white transition-colors duration-200"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-lime-300 text-lg font-semibold hover:text-white transition-colors duration-200"
            href="/aboutMe"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            className="text-lime-300 text-lg font-semibold hover:text-white transition-colors duration-200"
            href="/projects"
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}
