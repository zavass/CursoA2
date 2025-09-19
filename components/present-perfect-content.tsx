import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VideoSection } from "@/components/video-section"
import { QuizComponent } from "@/components/quiz-component"

export function PresentPerfectContent() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Present Perfect Tense
          </h1>
          <p className="text-xl text-muted-foreground">Master the Present Perfect: Have/Has + Past Participle</p>
          <div className="flex justify-center my-6">
            <img
              src="/present-perfect-timeline-sticker.jpg"
              alt="Present Perfect Timeline"
              className="w-64 h-32 object-contain"
            />
          </div>
        </div>

        {/* Concept Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <img src="/lightbulb-idea-sticker.jpg" alt="Idea" className="w-8 h-8" />
              <span>Concept & Usage</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-4">
              <img
                src="/present-perfect-concept-illustration.jpg"
                alt="Present Perfect Concept"
                className="w-32 h-32 object-contain flex-shrink-0"
              />
              <div>
                <p className="text-muted-foreground">
                  The Present Perfect tense connects the past with the present. It describes actions that:
                </p>
                <ul className="space-y-2 text-muted-foreground mt-4">
                  <li>• Started in the past and continue to the present</li>
                  <li>• Happened at an unspecified time in the past</li>
                  <li>• Have present relevance or results</li>
                  <li>• Are repeated actions up to now</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Structure Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <img src="/building-blocks-sticker.jpg" alt="Structure" className="w-8 h-8" />
              <span>Structure</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg relative">
                <img src="/happy-face-sticker.jpg" alt="Positive" className="absolute top-2 right-2 w-6 h-6" />
                <Badge className="mb-2 bg-green-100 text-green-800">Positive</Badge>
                <p className="font-mono text-sm">Subject + have/has + past participle</p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg relative">
                <img src="/sad-face-sticker.jpg" alt="Negative" className="absolute top-2 right-2 w-6 h-6" />
                <Badge className="mb-2 bg-red-100 text-red-800">Negative</Badge>
                <p className="font-mono text-sm">Subject + haven't/hasn't + past participle</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg relative">
                <img src="/question-mark-sticker.jpg" alt="Question" className="absolute top-2 right-2 w-6 h-6" />
                <Badge className="mb-2 bg-blue-100 text-blue-800">Question</Badge>
                <p className="font-mono text-sm">Have/Has + subject + past participle?</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Examples Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <img src="/notebook-sticker.jpg" alt="Examples" className="w-8 h-8" />
              <span>Examples</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg relative">
                <img src="/checkmark-sticker.jpg" alt="Correct" className="absolute top-2 right-2 w-6 h-6" />
                <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">Positive Examples</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • I <strong>have lived</strong> in London for five years.
                  </li>
                  <li>
                    • She <strong>has finished</strong> her homework.
                  </li>
                  <li>
                    • They <strong>have visited</strong> Paris three times.
                  </li>
                  <li>
                    • We <strong>have known</strong> each other since childhood.
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg relative">
                <img src="/x-mark-sticker.jpg" alt="Negative" className="absolute top-2 right-2 w-6 h-6" />
                <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">Negative Examples</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • I <strong>haven't seen</strong> that movie yet.
                  </li>
                  <li>
                    • She <strong>hasn't called</strong> me today.
                  </li>
                  <li>
                    • They <strong>haven't arrived</strong> at the airport.
                  </li>
                  <li>
                    • We <strong>haven't met</strong> before.
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg relative">
                <img src="/thinking-face-sticker.jpg" alt="Question" className="absolute top-2 right-2 w-6 h-6" />
                <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Question Examples</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <strong>Have you ever been</strong> to Japan?
                  </li>
                  <li>
                    • <strong>Has she finished</strong> her project?
                  </li>
                  <li>
                    • <strong>Have they called</strong> you back?
                  </li>
                  <li>
                    • <strong>Has he studied</strong> English before?
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time Expressions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <img src="/clock-sticker.jpg" alt="Time" className="w-8 h-8" />
              <span>Common Time Expressions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <img src="/duration-arrow-sticker.jpg" alt="Duration" className="absolute top-0 right-0 w-12 h-12" />
                <h4 className="font-semibold mb-2">For & Since</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    • <strong>For</strong> - duration (for 3 years, for a long time)
                  </li>
                  <li>
                    • <strong>Since</strong> - starting point (since 2020, since Monday)
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/star-sticker.jpg" alt="Important" className="absolute top-0 right-0 w-8 h-8" />
                <h4 className="font-semibold mb-2">Other Expressions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Already, yet, just, ever, never</li>
                  <li>• Recently, lately, so far, up to now</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <VideoSection />

        <section className="mt-16">
          <h2 className="text-3xl font-light elegant-text text-foreground mb-8 flex items-center space-x-3">
            <img src="/quiz-sticker.jpg" alt="Quiz" className="w-10 h-10" />
            <span>Test Your Knowledge</span>
          </h2>
          <QuizComponent
            title="Present Perfect Quiz"
            icon="/quiz-sticker.jpg"
            questions={[
              {
                id: 1,
                question: "Which sentence uses the Present Perfect correctly?",
                options: [
                  "I have went to Paris last year.",
                  "I have gone to Paris last year.",
                  "I have been to Paris.",
                  "I have go to Paris.",
                ],
                correctAnswer: 2,
                explanation:
                  "Present Perfect uses 'have/has + past participle' and doesn't specify when the action happened. 'I have been to Paris' is correct.",
              },
              {
                id: 2,
                question: "Complete the sentence: 'She ___ her homework yet.'",
                options: ["hasn't finished", "haven't finished", "didn't finish", "doesn't finish"],
                correctAnswer: 0,
                explanation:
                  "With 'she' (third person singular), we use 'hasn't' (has not) + past participle. 'Yet' indicates Present Perfect.",
              },
            ]}
          />
        </section>
      </div>
    </div>
  )
}
