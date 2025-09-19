"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Card } from "@/components/ui/card"

const menuItems = [
  {
    href: "/",
    label: "Home",
    icon: "○",
    description: "Welcome & Overview",
  },
  {
    href: "/present-perfect",
    label: "Present Perfect",
    icon: "○",
    description: "Have/Has + Past Participle",
  },
  {
    href: "/for-and-since",
    label: "For & Since",
    icon: "○",
    description: "Duration vs Starting Point",
  },
  {
    href: "/simple-future",
    label: "Simple Future",
    icon: "○",
    description: "Will + Base Verb",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-80 bg-sidebar border-r border-sidebar-border p-8">
      <div className="space-y-8">
        <div className="text-left">
          <h1 className="text-3xl font-light elegant-text text-foreground">English Grammar</h1>
          <p className="text-sm text-muted-foreground mt-1 font-light">Master the fundamentals</p>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Card
                  className={`p-6 transition-all duration-200 cursor-pointer border-0 ${
                    isActive ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted/50 bg-transparent"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <span className={`text-sm mt-1 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`}>
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <h3
                        className={`font-medium text-base ${isActive ? "text-primary-foreground" : "text-foreground"}`}
                      >
                        {item.label}
                      </h3>
                      <p
                        className={`text-sm mt-1 ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </nav>

        <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border/50">
          <h4 className="font-medium text-sm mb-3 text-foreground">Learning Tips</h4>
          <ul className="text-xs text-muted-foreground space-y-2 font-light">
            <li>Practice with real examples</li>
            <li>Watch explanatory videos</li>
            <li>Focus on structure patterns</li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
