import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VideoSection } from "@/components/video-section"
import { QuizComponent } from "@/components/quiz-component"

export function SimpleFutureContent() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Simple Future Tense
          </h1>
          <p className="text-xl text-muted-foreground">
            Express future actions with Will, Going to, and Present Continuous
          </p>
        </div>

        {/* Concept Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-2xl">💡</span>
              <span>Concept & Usage</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The Simple Future tense expresses actions that will happen in the future. There are three main ways:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold">Will + Base Verb</h4>
                <p className="text-sm text-muted-foreground">Predictions, promises, spontaneous decisions</p>
              </div>
              <div className="p-4 bg-secondary/5 rounded-lg">
                <h4 className="font-semibold">Going to + Base Verb</h4>
                <p className="text-sm text-muted-foreground">Plans, intentions, predictions with evidence</p>
              </div>
              <div className="p-4 bg-accent/5 rounded-lg">
                <h4 className="font-semibold">Present Continuous</h4>
                <p className="text-sm text-muted-foreground">Arranged future plans</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Will Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-2xl">🏗️</span>
              <span>Will Structure</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <Badge className="mb-2 bg-green-100 text-green-800">Positive</Badge>
                <p className="font-mono text-sm">Subject + will + base verb</p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                <Badge className="mb-2 bg-red-100 text-red-800">Negative</Badge>
                <p className="font-mono text-sm">Subject + won't + base verb</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <Badge className="mb-2 bg-blue-100 text-blue-800">Question</Badge>
                <p className="font-mono text-sm">Will + subject + base verb?</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Examples Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-2xl">📝</span>
              <span>Examples</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Will Examples</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-800 dark:text-green-400 mb-2">Positive</h5>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • I <strong>will help</strong> you with your homework.
                      </li>
                      <li>
                        • She <strong>will arrive</strong> at 3 PM.
                      </li>
                      <li>
                        • They <strong>will win</strong> the championship.
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <h5 className="font-semibold text-red-800 dark:text-red-400 mb-2">Negative</h5>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • I <strong>won't forget</strong> your birthday.
                      </li>
                      <li>
                        • She <strong>won't be</strong> late again.
                      </li>
                      <li>
                        • They <strong>won't come</strong> to the party.
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Questions</h5>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • <strong>Will you join</strong> us for dinner?
                      </li>
                      <li>
                        • <strong>Will she finish</strong> the project on time?
                      </li>
                      <li>
                        • <strong>Will they accept</strong> our proposal?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Going to Examples</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-800 dark:text-green-400 mb-2">Positive</h5>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • I <strong>am going to study</strong> abroad next year.
                      </li>
                      <li>
                        • She <strong>is going to buy</strong> a new car.
                      </li>
                      <li>
                        • They <strong>are going to move</strong> to Canada.
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <h5 className="font-semibold text-red-800 dark:text-red-400 mb-2">Negative</h5>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • I <strong>am not going to quit</strong> my job.
                      </li>
                      <li>
                        • She <strong>isn't going to attend</strong> the meeting.
                      </li>
                      <li>
                        • They <strong>aren't going to sell</strong> their house.
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Questions</h5>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • <strong>Are you going to travel</strong> this summer?
                      </li>
                      <li>
                        • <strong>Is she going to apply</strong> for the job?
                      </li>
                      <li>
                        • <strong>Are they going to renovate</strong> their kitchen?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Differences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-2xl">⚖️</span>
              <span>Will vs Going to</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Use WILL for:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Spontaneous decisions: "I'll help you!"</li>
                  <li>• Promises: "I will call you tomorrow."</li>
                  <li>• Predictions: "It will rain tomorrow."</li>
                  <li>• Offers: "I'll carry your bag."</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Use GOING TO for:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Plans: "I'm going to visit my parents."</li>
                  <li>• Intentions: "She's going to learn French."</li>
                  <li>• Predictions with evidence: "Look at those clouds! It's going to rain."</li>
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
            title="Simple Future Quiz"
            icon="/quiz-sticker.jpg"
            questions={[
              {
                id: 1,
                question: "Which sentence expresses a spontaneous decision?",
                options: [
                  "I'm going to help you tomorrow.",
                  "I'll help you with that!",
                  "I am helping you later.",
                  "I help you every day.",
                ],
                correctAnswer: 1,
                explanation:
                  "'Will' (I'll) is used for spontaneous decisions made at the moment of speaking. The exclamation mark shows it's immediate.",
              },
              {
                id: 2,
                question: "Complete: 'Look at those dark clouds! It ___ rain.'",
                options: ["will", "is going to", "is", "might"],
                correctAnswer: 1,
                explanation:
                  "'Going to' is used for predictions based on present evidence. The dark clouds are evidence that it will rain.",
              },
            ]}
          />
        </section>
      </div>
    </div>
  )
}
