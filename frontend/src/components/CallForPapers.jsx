import { BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CallForPapers() {
  return (
    <section id="call-for-papers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Call for Papers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Your Research</h3>
                <p className="text-lg text-gray-600">
                  We invite researchers, academicians, and industry professionals to submit their original, unpublished
                  work for presentation at ICRTET 2025.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Submission Guidelines</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Original and unpublished research</li>
                    <li>• IEEE format for full papers</li>
                    <li>• Maximum 6 pages including references</li>
                    <li>• Plagiarism check mandatory</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Review Process</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Double-blind peer review</li>
                    <li>• Expert panel evaluation</li>
                    <li>• Feedback provided to authors</li>
                    <li>• Acceptance notification by Oct 25</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Submit Your Paper
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
