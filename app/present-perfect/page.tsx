import { Sidebar } from "@/components/sidebar"
import { PresentPerfectContent } from "@/components/present-perfect-content"

export default function PresentPerfectPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <PresentPerfectContent />
      </main>
    </div>
  )
}
