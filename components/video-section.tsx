import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock, Users, Star } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Present Perfect Tense Explained",
    description: "Master the present perfect with clear examples and practice exercises",
    duration: "12:45",
    views: "125K",
    rating: 4.9,
    thumbnail: "/english-teacher-explaining-present-perfect-tense-o.jpg",
    category: "Present Perfect",
  },
  {
    id: 2,
    title: "For vs Since - Never Confuse Them Again!",
    description: "Learn the key differences between 'for' and 'since' with memory tricks",
    duration: "8:30",
    views: "89K",
    rating: 4.8,
    thumbnail: "/timeline-diagram-showing-for-and-since-usage.jpg",
    category: "For & Since",
  },
  {
    id: 3,
    title: "Simple Future: Will vs Going To",
    description: "Understand when to use 'will' and 'going to' for future expressions",
    duration: "15:20",
    views: "156K",
    rating: 4.9,
    thumbnail: "/future-tense-comparison-chart-with-examples.jpg",
    category: "Simple Future",
  },
  {
    id: 4,
    title: "Present Perfect Practice Session",
    description: "Interactive exercises to test your present perfect knowledge",
    duration: "10:15",
    views: "67K",
    rating: 4.7,
    thumbnail: "/students-practicing-english-grammar-exercises.jpg",
    category: "Present Perfect",
  },
  {
    id: 5,
    title: "Time Expressions with For and Since",
    description: "Complete guide to time expressions in English grammar",
    duration: "9:45",
    views: "92K",
    rating: 4.8,
    thumbnail: "/clock-and-calendar-showing-time-expressions.jpg",
    category: "For & Since",
  },
  {
    id: 6,
    title: "Future Forms Masterclass",
    description: "Advanced lesson covering all future forms in English",
    duration: "18:30",
    views: "134K",
    rating: 5.0,
    thumbnail: "/comprehensive-future-tense-lesson-with-multiple-ex.jpg",
    category: "Simple Future",
  },
]

export function VideoSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4">Video Lessons</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Watch engaging video explanations to reinforce your learning with visual examples and expert guidance
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Button size="lg" className="bg-white/90 text-primary hover:bg-white rounded-full w-16 h-16 p-0">
                  <Play className="w-6 h-6 ml-1" />
                </Button>
              </div>
              <div className="absolute top-3 left-3">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                  {video.category}
                </span>
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                {video.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{video.description}</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {video.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {video.views}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{video.rating}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" className="gradient-purple text-white hover:opacity-90">
          View All Video Lessons
        </Button>
      </div>
    </section>
  )
}
