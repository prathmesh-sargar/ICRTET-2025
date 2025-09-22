import { BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

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
              <div className="space-y-8 text-left">
                <h4 className="font-semibold text-gray-900 text-lg">Submission Guidelines</h4>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Abstract: 300–400 words on the second page of the main paper.</li>
                  <li>Keywords: 4–6 words listed below the abstract.</li>
                  <li>Figures, Tables & Charts: Number sequentially, cite in text, and place after references.</li>
                  <li>References: Follow APA citation style, arranged alphabetically.</li>
                </ul>

                <h4 className="font-semibold text-gray-900 text-lg">Conflict of Interest (COI)</h4>
                <p className="text-gray-600">
                  At the time of submission in CMT, authors must declare all conflicts of interest, including:
                </p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Current institution</li>
                  <li>Past affiliations (last 3 years)</li>
                </ul>

                <h4 className="font-semibold text-gray-900 text-lg">Mode of Presentation</h4>
                <p className="text-gray-600">
                  The conference will be conducted in Hybrid Mode to facilitate participation from both national and
                  international authors.
                </p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>
                    <strong>Onsite Presentation:</strong> Authors can present their papers physically at the conference
                    venue.
                  </li>
                  <li>
                    <strong>Online Presentation:</strong> Authors who cannot travel may present virtually through the
                    designated online platform.
                  </li>
                  <li>Authors must indicate their preferred mode of presentation at the time of registration.</li>
                </ul>

                <h4 className="font-semibold text-gray-900 text-lg">Review Process</h4>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Double-blind peer review</li>
                  <li>Expert panel evaluation</li>
                  <li>Feedback provided to authors</li>
                  <li>Acceptance notification by Oct 28</li>
                </ul>
              </div>

              <div className="text-center mt-10">
                <Link to={"https://hosturl.site/fTtnX2"}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Submit Your Paper
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
