"use client"

import { useState, useEffect } from "react"
import { MotionNav } from "@/lib/motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
] as const

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section
      const sections = navItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section
  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <MotionNav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-bold text-xl text-primary">
            DevCraft
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md cursor-pointer
                  ${activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10" 
                    : "hover:text-primary"
                  }`}
              >
                {item.name}
              </button>
            ))}
          
          <LanguageSwitcher />
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </header>
  );
}


          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => handleNavClick("#contact")}>
              Contact
            </Button>
            <Button onClick={() => handleNavClick("#pricing")}>
              Get Started
            </Button>
          
          <LanguageSwitcher />
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </header>
  );
}


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          
          <LanguageSwitcher />
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </header>
  );
}

        
          <LanguageSwitcher />
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </header>
  );
}


        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-primary hover:bg-secondary rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 pb-3 border-t space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => handleNavClick("#contact")}
                >
                  Contact
                </Button>
                <Button 
                  className="w-full"
                  onClick={() => handleNavClick("#pricing")}
                >
                  Get Started
                </Button>
              
          <LanguageSwitcher />
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </header>
  );
}

            
          <LanguageSwitcher />
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </header>
  );
}

          
          <LanguageSwitcher />
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </header>
  );
}

        )}
      
          <LanguageSwitcher />
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </header>
  );
}

    </MotionNav>
  )
}

export default Navbar 