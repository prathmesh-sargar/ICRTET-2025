import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <CardTitle className="text-yellow-800">Platinum Sponsor</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <img src="/placeholder.svg?height=100&width=200" alt="Platinum Sponsor" className="mx-auto mb-4 h-20" />
              <p className="text-gray-600 text-sm">Premium visibility and benefits</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <CardTitle className="text-gray-800">Gold Sponsor</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <img src="/placeholder.svg?height=100&width=200" alt="Gold Sponsor" className="mx-auto mb-4 h-20" />
              <p className="text-gray-600 text-sm">Enhanced visibility and networking</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <CardTitle className="text-orange-800">Silver Sponsor</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <img src="/placeholder.svg?height=100&width=200" alt="Silver Sponsor" className="mx-auto mb-4 h-20" />
              <p className="text-gray-600 text-sm">Standard visibility package</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in sponsoring ICRTET 2025?</p>
          <p className="text-gray-600 mb-6">
            Contact Dr. Ajim Sutar: <span className="font-semibold text-blue-600">9834294437</span>
          </p>
          <Button variant="outline" size="lg">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  )
}
