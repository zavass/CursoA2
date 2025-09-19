import { Sidebar } from "@/components/sidebar"
import { SimpleFutureContent } from "@/components/simple-future-content"

export default function SimpleFuturePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <SimpleFutureContent />
      </main>
    </div>
  )
}
