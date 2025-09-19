import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-purple opacity-90" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Master English Grammar
            <span className="block text-white/90">with Confidence</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 text-pretty max-w-2xl mx-auto">
            Learn Present Perfect, For/Since usage, and Simple Future with interactive examples, clear explanations, and
            engaging video content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Start Learning Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
            >
              Watch Videos
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <BookOpen className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Present Perfect</h3>
              <p className="text-sm text-white/80">
                Master the present perfect tense with clear structures and examples
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Clock className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">For & Since</h3>
              <p className="text-sm text-white/80">Learn when and how to use 'for' and 'since' correctly</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Calendar className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Simple Future</h3>
              <p className="text-sm text-white/80">
                Express future actions with will, going to, and present continuous
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
