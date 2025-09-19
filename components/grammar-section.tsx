import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, HelpCircle } from "lucide-react"

export function GrammarSection() {
  return (
    <div className="space-y-12">
      <Tabs defaultValue="present-perfect" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="present-perfect">Present Perfect</TabsTrigger>
          <TabsTrigger value="for-since">For & Since</TabsTrigger>
          <TabsTrigger value="simple-future">Simple Future</TabsTrigger>
        </TabsList>

        {/* Present Perfect Tab */}
        <TabsContent value="present-perfect" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold gradient-text mb-4">Present Perfect Tense</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect past actions to the present moment with perfect clarity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Concept */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Concept
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  The Present Perfect tense connects past actions or experiences to the present moment.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Key Uses:</p>
                  <ul className="space-y-2">
                    <li>• Experiences in life</li>
                    <li>• Actions that started in the past and continue now</li>
                    <li>• Recent actions with present results</li>
                    <li>• Unfinished time periods</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Structure */}
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🏗️</span>
                  Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <Badge variant="secondary">Positive</Badge>
                    </div>
                    <p className="font-mono text-lg">Subject + have/has + past participle</p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <Badge variant="secondary">Negative</Badge>
                    </div>
                    <p className="font-mono text-lg">Subject + haven't/hasn't + past participle</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                      <Badge variant="secondary">Question</Badge>
                    </div>
                    <p className="font-mono text-lg">Have/Has + subject + past participle?</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📝</span>
                Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Positive</Badge>
                  <div className="space-y-2">
                    <p className="font-mono bg-muted p-3 rounded">I have visited Paris.</p>
                    <p className="font-mono bg-muted p-3 rounded">She has finished her homework.</p>
                    <p className="font-mono bg-muted p-3 rounded">They have lived here for 5 years.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Negative</Badge>
                  <div className="space-y-2">
                    <p className="font-mono bg-muted p-3 rounded">I haven't seen that movie.</p>
                    <p className="font-mono bg-muted p-3 rounded">He hasn't called me yet.</p>
                    <p className="font-mono bg-muted p-3 rounded">We haven't met before.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Question</Badge>
                  <div className="space-y-2">
                    <p className="font-mono bg-muted p-3 rounded">Have you ever been to Japan?</p>
                    <p className="font-mono bg-muted p-3 rounded">Has she finished the project?</p>
                    <p className="font-mono bg-muted p-3 rounded">Have they arrived yet?</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* For & Since Tab */}
        <TabsContent value="for-since" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold gradient-text mb-4">For & Since</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master the difference between duration and starting points in time
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⏰</span>
                  FOR - Duration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">Use FOR to express a period of time (how long)</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Examples:</p>
                  <ul className="space-y-2 font-mono">
                    <li>• for 3 hours</li>
                    <li>• for 2 weeks</li>
                    <li>• for a long time</li>
                    <li>• for ages</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Complete Sentences:</p>
                  <div className="space-y-1 text-sm">
                    <p>✓ I have studied English for 5 years.</p>
                    <p>✓ She hasn't called for a week.</p>
                    <p>✓ Have you worked here for long?</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  SINCE - Starting Point
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">Use SINCE to express a starting point in time (when it began)</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Examples:</p>
                  <ul className="space-y-2 font-mono">
                    <li>• since 2020</li>
                    <li>• since Monday</li>
                    <li>• since I was a child</li>
                    <li>• since last month</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <p className="font-semibold text-green-800 dark:text-green-200 mb-2">Complete Sentences:</p>
                  <div className="space-y-1 text-sm">
                    <p>✓ I have lived here since 2018.</p>
                    <p>✓ He hasn't eaten since breakfast.</p>
                    <p>✓ Have you been waiting since 9 AM?</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Reference */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Quick Reference Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary">Use FOR with:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline">3 minutes</Badge>
                    <Badge variant="outline">2 hours</Badge>
                    <Badge variant="outline">5 days</Badge>
                    <Badge variant="outline">a week</Badge>
                    <Badge variant="outline">months</Badge>
                    <Badge variant="outline">years</Badge>
                    <Badge variant="outline">a long time</Badge>
                    <Badge variant="outline">ages</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-accent">Use SINCE with:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline">2020</Badge>
                    <Badge variant="outline">January</Badge>
                    <Badge variant="outline">Monday</Badge>
                    <Badge variant="outline">yesterday</Badge>
                    <Badge variant="outline">last week</Badge>
                    <Badge variant="outline">I was born</Badge>
                    <Badge variant="outline">we met</Badge>
                    <Badge variant="outline">9 o'clock</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Simple Future Tab */}
        <TabsContent value="simple-future" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold gradient-text mb-4">Simple Future Tense</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Express future actions, plans, and predictions with confidence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🔮</span>
                  WILL
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Predictions, promises, spontaneous decisions</p>
                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Positive</p>
                    <p className="font-mono text-sm">I will help you.</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded">
                    <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Negative</p>
                    <p className="font-mono text-sm">It won't rain tomorrow.</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Question</p>
                    <p className="font-mono text-sm">Will you come with us?</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  GOING TO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Plans, intentions, predictions with evidence</p>
                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Positive</p>
                    <p className="font-mono text-sm">I'm going to study tonight.</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded">
                    <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Negative</p>
                    <p className="font-mono text-sm">She's not going to join us.</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Question</p>
                    <p className="font-mono text-sm">Are you going to travel?</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-chart-3/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⏰</span>
                  PRESENT CONTINUOUS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Fixed arrangements, scheduled events</p>
                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Positive</p>
                    <p className="font-mono text-sm">I'm meeting him at 3 PM.</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded">
                    <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Negative</p>
                    <p className="font-mono text-sm">We're not flying tomorrow.</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Question</p>
                    <p className="font-mono text-sm">Are they coming tonight?</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Usage Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⚖️</span>
                When to Use Each Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">WILL for:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Spontaneous decisions</li>
                    <li>• Promises and offers</li>
                    <li>• Predictions without evidence</li>
                    <li>• Future facts</li>
                  </ul>
                  <div className="bg-muted p-3 rounded text-sm">
                    <p className="font-semibold mb-1">Example:</p>
                    <p>{'"I\'ll help you with that!"'} (spontaneous offer)</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-accent">GOING TO for:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Pre-planned intentions</li>
                    <li>• Predictions with evidence</li>
                    <li>• Things you've decided to do</li>
                  </ul>
                  <div className="bg-muted p-3 rounded text-sm">
                    <p className="font-semibold mb-1">Example:</p>
                    <p>{'"Look at those clouds! It\'s going to rain."'} (evidence-based prediction)</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-chart-3">PRESENT CONTINUOUS for:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Fixed arrangements</li>
                    <li>• Scheduled meetings</li>
                    <li>• Definite plans with time/place</li>
                  </ul>
                  <div className="bg-muted p-3 rounded text-sm">
                    <p className="font-semibold mb-1">Example:</p>
                    <p>{'"I\'m flying to London tomorrow at 8 AM."'} (fixed arrangement)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
