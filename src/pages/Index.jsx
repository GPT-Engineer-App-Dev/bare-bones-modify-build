import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-4 lg:gap-6 lg:p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Your Bare-Bones App</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a minimal web application with a simple structure that you can modify and build upon.</p>
          <Button className="mt-4" variant="outline">Get Started</Button>
        </CardContent>
      </Card>
    </main>
  );
}

export default Index;