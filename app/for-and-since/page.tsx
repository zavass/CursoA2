import { Sidebar } from "@/components/sidebar"
import { ForAndSinceContent } from "@/components/for-and-since-content"

export default function ForAndSincePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <ForAndSinceContent />
      </main>
    </div>
  )
}
