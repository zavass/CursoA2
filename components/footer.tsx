import { Button } from "@/components/ui/button"
import { BookOpen, Youtube, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">GrammarHub</span>
            </div>
            <p className="text-muted-foreground">
              Master English grammar with confidence through interactive lessons, clear explanations, and engaging video
              content.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#present-perfect" className="text-muted-foreground hover:text-primary transition-colors">
                  Present Perfect
                </a>
              </li>
              <li>
                <a href="#for-since" className="text-muted-foreground hover:text-primary transition-colors">
                  For & Since
                </a>
              </li>
              <li>
                <a href="#simple-future" className="text-muted-foreground hover:text-primary transition-colors">
                  Simple Future
                </a>
              </li>
              <li>
                <a href="#videos" className="text-muted-foreground hover:text-primary transition-colors">
                  Video Lessons
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Practice Exercises
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Grammar Tests
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Study Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Teacher Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="p-2 bg-transparent">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 bg-transparent">
                <Mail className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 bg-transparent">
                <Globe className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Join our community of English learners and get weekly grammar tips!
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 GrammarHub. Made with ❤️ for English learners worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
