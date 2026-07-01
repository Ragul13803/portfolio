import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] h-16 bg-orange-400 backdrop-blur-md border-b border-[#1b2440]">
      <div className="h-full mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] flex items-center justify-between">
        <Link href="/" className="text-[#16f2b3] text-3xl font-bold whitespace-nowrap">
          RAGUL SURESH
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/#about" className="text-white hover:text-blue-500 transition hover:border-b-2 hover:border-blue-500">
              ABOUT
            </Link>
          </li>

          <li>
            <Link href="/#experience" className="text-white hover:text-blue-500 transition hover:border-b-2 hover:border-blue-500">
              EXPERIENCE
            </Link>
          </li>

          <li>
            <Link href="/#skills" className="text-white hover:text-blue-500 transition hover:border-b-2 hover:border-blue-500">
              SKILLS
            </Link>
          </li>

          <li>
            <Link href="/#projects" className="text-white hover:text-blue-500 transition hover:border-b-2 hover:border-blue-500">
              PROJECTS
            </Link>
          </li>
          
          <li>
            <Link href="/#education" className="text-white hover:text-blue-500 transition hover:border-b-2 hover:border-blue-500">
              EDUCATION
            </Link>
          </li>

          <li>
            <Link href="/#contact" className="text-white hover:text-blue-500 transition hover:border-b-2 hover:border-blue-500">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}