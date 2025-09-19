import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Clock, Users, Star } from "lucide-react"
import { QuizComponent } from "@/components/quiz-component"

export function ForAndSinceContent() {
  return (
    <div className="p-12 max-w-6xl mx-auto">
      <div className="modern-hero p-12 rounded-lg mb-12 relative">
        <img
          src="/for-vs-since-banner.jpg"
          alt="For vs Since"
          className="absolute top-4 right-4 w-24 h-24 object-contain"
        />
        <img src="/timeline-sticker.jpg" alt="Timeline" className="absolute bottom-4 left-4 w-16 h-16 object-contain" />
        <h1 className="text-5xl font-light elegant-text text-foreground mb-6">For & Since</h1>
        <p className="text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
          Master the distinction between duration and starting points in English. Learn when to use "for" and "since"
          with clear examples and practical exercises.
        </p>
      </div>

      <div className="section-divider mb-12"></div>

      {/* Concept Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-light elegant-text text-foreground mb-8 flex items-center space-x-3">
          <img src="/brain-concept-sticker.jpg" alt="Concept" className="w-10 h-10" />
          <span>Concept</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-0 bg-muted/30 relative">
            <img src="/hourglass-duration-sticker.jpg" alt="Duration" className="absolute top-4 right-4 w-12 h-12" />
            <h3 className="text-2xl font-medium text-foreground mb-4">FOR</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Used to express <strong>duration</strong> - how long something has been happening.
            </p>
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs">
                Duration
              </Badge>
              <Badge variant="outline" className="text-xs">
                Period of time
              </Badge>
            </div>
          </Card>

          <Card className="p-8 border-0 bg-muted/30 relative">
            <img
              src="/flag-starting-point-sticker.jpg"
              alt="Starting Point"
              className="absolute top-4 right-4 w-12 h-12"
            />
            <h3 className="text-2xl font-medium text-foreground mb-4">SINCE</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Used to express <strong>starting point</strong> - when something began.
            </p>
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs">
                Starting point
              </Badge>
              <Badge variant="outline" className="text-xs">
                Specific time
              </Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Usage Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-light elegant-text text-foreground mb-8 flex items-center space-x-3">
          <img src="/usage-guide-sticker.jpg" alt="Usage" className="w-10 h-10" />
          <span>Usage</span>
        </h2>
        <div className="space-y-8">
          <Card className="p-8 border-0 bg-card relative">
            <img
              src="/for-usage-illustration.jpg"
              alt="For Usage"
              className="absolute top-4 right-4 w-20 h-20 object-contain"
            />
            <h3 className="text-xl font-medium text-foreground mb-6">When to use FOR</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-3">
                <img src="/bullet-point-sticker.jpg" alt="Bullet" className="w-4 h-4 mt-1" />
                <span>With periods of time: minutes, hours, days, weeks, months, years</span>
              </li>
              <li className="flex items-start space-x-3">
                <img src="/bullet-point-sticker.jpg" alt="Bullet" className="w-4 h-4 mt-1" />
                <span>With expressions like: a long time, ages, ever, a while</span>
              </li>
              <li className="flex items-start space-x-3">
                <img src="/bullet-point-sticker.jpg" alt="Bullet" className="w-4 h-4 mt-1" />
                <span>To answer "How long?" questions</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 border-0 bg-card relative">
            <img
              src="/since-usage-illustration.jpg"
              alt="Since Usage"
              className="absolute top-4 right-4 w-20 h-20 object-contain"
            />
            <h3 className="text-xl font-medium text-foreground mb-6">When to use SINCE</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-3">
                <img src="/bullet-point-sticker.jpg" alt="Bullet" className="w-4 h-4 mt-1" />
                <span>With specific points in time: dates, times, events</span>
              </li>
              <li className="flex items-start space-x-3">
                <img src="/bullet-point-sticker.jpg" alt="Bullet" className="w-4 h-4 mt-1" />
                <span>With expressions like: yesterday, last week, 2020, childhood</span>
              </li>
              <li className="flex items-start space-x-3">
                <img src="/bullet-point-sticker.jpg" alt="Bullet" className="w-4 h-4 mt-1" />
                <span>To answer "Since when?" questions</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Structure Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-light elegant-text text-foreground mb-8">Structure</h2>
        <div className="grid gap-8">
          <Card className="p-8 border-0 bg-card">
            <h3 className="text-xl font-medium text-green-600 mb-6">✓ Positive</h3>
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                <p className="font-mono text-sm">Subject + have/has + past participle + for/since + time</p>
              </div>
              <div className="space-y-2">
                <p>
                  <strong>FOR:</strong> I have lived here{" "}
                  <span className="text-green-600 font-semibold">for five years</span>.
                </p>
                <p>
                  <strong>SINCE:</strong> I have lived here{" "}
                  <span className="text-green-600 font-semibold">since 2019</span>.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 bg-card">
            <h3 className="text-xl font-medium text-red-600 mb-6">✗ Negative</h3>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                <p className="font-mono text-sm">Subject + haven't/hasn't + past participle + for/since + time</p>
              </div>
              <div className="space-y-2">
                <p>
                  <strong>FOR:</strong> I haven't seen him{" "}
                  <span className="text-red-600 font-semibold">for two weeks</span>.
                </p>
                <p>
                  <strong>SINCE:</strong> I haven't seen him{" "}
                  <span className="text-red-600 font-semibold">since Monday</span>.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 bg-card">
            <h3 className="text-xl font-medium text-blue-600 mb-6">? Interrogative</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                <p className="font-mono text-sm">Have/Has + subject + past participle + for/since + time?</p>
              </div>
              <div className="space-y-2">
                <p>
                  <strong>FOR:</strong> Have you worked here{" "}
                  <span className="text-blue-600 font-semibold">for long</span>?
                </p>
                <p>
                  <strong>SINCE:</strong> Have you worked here{" "}
                  <span className="text-blue-600 font-semibold">since January</span>?
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Examples Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-light elegant-text text-foreground mb-8">Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-0 bg-card">
            <h3 className="text-xl font-medium text-foreground mb-6">FOR Examples</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <p className="text-green-700 dark:text-green-300">✓ She has studied English for three years.</p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                <p className="text-red-700 dark:text-red-300">✗ They haven't traveled for months.</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-blue-700 dark:text-blue-300">? Have you been waiting for a long time?</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 bg-card">
            <h3 className="text-xl font-medium text-foreground mb-6">SINCE Examples</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <p className="text-green-700 dark:text-green-300">✓ She has studied English since 2021.</p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                <p className="text-red-700 dark:text-red-300">✗ They haven't traveled since last summer.</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-blue-700 dark:text-blue-300">? Have you been here since morning?</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Video Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-light elegant-text text-foreground mb-8">Video Lessons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "For vs Since: Complete Guide",
              duration: "8:45",
              views: "125K",
              rating: 4.9,
              thumbnail: "/english-teacher-explaining-for-and-since-on-whiteb.jpg",
            },
            {
              title: "Common Mistakes with For & Since",
              duration: "6:30",
              views: "89K",
              rating: 4.8,
              thumbnail: "/timeline-diagram-showing-for-and-since-usage.jpg",
            },
            {
              title: "Practice Exercises: For & Since",
              duration: "12:15",
              views: "67K",
              rating: 4.7,
              thumbnail: "/placeholder-i7mcx.png",
            },
          ].map((video, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-card">
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <Button
                  size="icon"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary/90 hover:bg-primary"
                >
                  <Play className="w-6 h-6 ml-1" />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="font-medium text-foreground mb-3 leading-tight">{video.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{video.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{video.views}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{video.rating}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-light elegant-text text-foreground mb-8 flex items-center space-x-3">
          <img src="/quiz-sticker.jpg" alt="Quiz" className="w-10 h-10" />
          <span>Test Your Knowledge</span>
        </h2>
        <QuizComponent
          title="For & Since Quiz"
          icon="/quiz-sticker.jpg"
          questions={[
            {
              id: 1,
              question: "Choose the correct option: 'I have lived here ___ 2020.'",
              options: ["for", "since", "from", "during"],
              correctAnswer: 1,
              explanation:
                "'Since' is used with a specific starting point in time. '2020' is a specific year when the action began.",
            },
            {
              id: 2,
              question: "Which sentence is correct?",
              options: [
                "She has worked here for Monday.",
                "She has worked here since five years.",
                "She has worked here for five years.",
                "She has worked here since five years ago.",
              ],
              correctAnswer: 2,
              explanation: "'For' is used with duration (how long). 'Five years' is a period of time, so we use 'for'.",
            },
          ]}
        />
      </section>
    </div>
  )
}
