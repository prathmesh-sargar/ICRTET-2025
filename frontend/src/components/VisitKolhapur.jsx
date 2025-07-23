import { MapPin } from "lucide-react"

export default function VisitKolhapur() {
  const touristAttractions = [
    { name: "Rankala Lake", description: "Scenic beauty and boating" },
    { name: "Mahalaxmi Temple", description: "Historic religious site" },
    { name: "New Palace", description: "Royal architecture" },
    { name: "Panhala Fort", description: "Historical fortress" },
  ]

  const accommodationOptions = [
    { type: "Budget hotels", price: "₹1,500 - ₹3,000 per night" },
    { type: "Mid-range hotels", price: "₹3,000 - ₹6,000 per night" },
    { type: "Luxury resorts", price: "₹6,000+ per night" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Kolhapur</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tourist Attractions</h3>
            <div className="space-y-4">
              {touristAttractions.map((attraction, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">
                    {attraction.name} - {attraction.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Accommodation</h3>
            <p className="text-gray-600 mb-4">
              Kolhapur offers a range of accommodation options from budget-friendly hotels to luxury resorts. The
              conference organizing committee can assist with booking recommendations.
            </p>
            <div className="space-y-2">
              {accommodationOptions.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">
                    {option.type}: {option.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
