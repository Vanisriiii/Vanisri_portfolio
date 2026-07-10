import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Projects",
    "Experience",
    "Certifications",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "experience",
        "certifications",
        "contact",
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // If user reaches the bottom, highlight Contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        setActiveSection("contact");
        return;
      }

      // Find current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-12 py-5">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "home")}
          className="text-3xl font-black tracking-widest bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          DV
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            const id = item.toLowerCase().replace(/\s/g, "");

            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`relative pb-2 text-sm tracking-wide transition-all duration-300 ${
                  activeSection === id
                    ? "text-violet-400"
                    : "text-gray-300 hover:text-violet-400"
                }`}
              >
                {item}

                {activeSection === id && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-violet-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-2xl border-t border-white/10">
          <div className="flex flex-col px-8 py-6 gap-5">
            {navLinks.map((item) => {
              const id = item.toLowerCase().replace(/\s/g, "");

              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`transition-all duration-300 text-lg ${
                    activeSection === id
                      ? "text-violet-400"
                      : "text-gray-300 hover:text-violet-400"
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;