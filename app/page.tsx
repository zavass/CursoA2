import { Sidebar } from "@/components/sidebar"
import { WelcomePage } from "@/components/welcome-page"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <WelcomePage />
      </main>
    </div>
  )
}
