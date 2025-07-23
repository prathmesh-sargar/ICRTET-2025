import { Card, CardContent } from "@/components/ui/card"

export default function ConferenceLegacy() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conference Legacy</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-blue-600 mb-2">10th</div>
                <div className="text-xl text-gray-600">Edition of ICRTET</div>
              </div>
              <p className="text-lg text-gray-600 mb-6 text-center">
                Since its inception in 2014 in Kochi, India, ICRTET has grown into a globally recognized platform for
                engineering and technology research, with previous editions held across India and internationally
                including Kuala Lumpur, Singapore, Berlin, and Taiwan.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">9+</div>
                  <div className="text-sm text-gray-600">Previous Editions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">11</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">Global</div>
                  <div className="text-sm text-gray-600">Reach & Impact</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
