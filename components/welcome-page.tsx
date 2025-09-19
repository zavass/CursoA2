import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WelcomePage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to the second unit of the A2 course
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In this unit, we'll review topics such as For and Since, the present perfect, and the simple future. We've covered these topics throughout the unit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">✓</span>
                <span>Present Perfect Tense</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Learn how to use "have/has + past participle" to express actions that started in the past and continue
                to the present, or completed actions with present relevance.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">You'll learn:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Formation and structure</li>
                  <li>• When to use Present Perfect</li>
                  <li>• Positive, negative & question forms</li>
                  <li>• Common time expressions</li>
                </ul>
              </div>
              <Link href="/present-perfect">
                <Button className="w-full">Start Learning</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">🔮</span>
                <span>Simple Future Tense</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Master the different ways to express future actions in English, including "will", "going to", and
                present continuous for future plans.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">You'll learn:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Will vs Going to</li>
                  <li>• Future predictions & promises</li>
                  <li>• Planned future actions</li>
                  <li>• Question and negative forms</li>
                </ul>
              </div>
              <Link href="/simple-future">
                <Button className="w-full">Start Learning</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold">How This Site Works</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl">📚</span>
                  </div>
                  <h4 className="font-semibold">Learn Concepts</h4>
                  <p className="text-sm text-muted-foreground">
                    Understand the theory and rules behind each grammar topic
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl">💡</span>
                  </div>
                  <h4 className="font-semibold">See Examples</h4>
                  <p className="text-sm text-muted-foreground">
                    Practice with clear positive, negative, and question examples
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl">🎥</span>
                  </div>
                  <h4 className="font-semibold">Watch Videos</h4>
                  <p className="text-sm text-muted-foreground">Reinforce learning with explanatory video content</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
