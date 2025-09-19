"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const tabs = [
  { id: "present-perfect", label: "Present Perfect", icon: "✓" },
  { id: "for-since", label: "For & Since", icon: "⏰" },
  { id: "simple-future", label: "Simple Future", icon: "🔮" },
]

export function NavigationTabs() {
  const [activeTab, setActiveTab] = useState("present-perfect")

  return (
    <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-center py-4">
          <div className="flex bg-muted rounded-lg p-1">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === tab.id ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-background"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
