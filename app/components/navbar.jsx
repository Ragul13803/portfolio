import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] h-16 bg-[#FF6A1C] backdrop-blur-md border-b border-[#1b2440]">
      <div className="h-full mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] flex items-center justify-between">
        <Link href="/" className="text-[#16f2b3] text-3xl font-bold whitespace-nowrap">
          RAGUL SURESH
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/#about" className="text-white hover:text-pink-500 transition">
              ABOUT
            </Link>
          </li>

          <li>
            <Link href="/#experience" className="text-white hover:text-pink-500 transition">
              EXPERIENCE
            </Link>
          </li>

          <li>
            <Link href="/#skills" className="text-white hover:text-pink-500 transition">
              SKILLS
            </Link>
          </li>

          <li>
            <Link href="/#projects" className="text-white hover:text-pink-500 transition">
              PROJECTS
            </Link>
          </li>
          
          <li>
            <Link href="/#education" className="text-white hover:text-pink-500 transition">
              EDUCATION
            </Link>
          </li>

          <li>
            <Link href="/#contact" className="text-white hover:text-pink-500 transition">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}