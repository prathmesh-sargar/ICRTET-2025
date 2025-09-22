import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Registration() {
  const registrationData = [
    { category: "UG/PG Students/Academicians", fee: "₹3,500/-", fees_dollar: "$40" },
    { category: "Industry Delegates", fee: "₹4,000/-", fees_dollar: "$46" },
    { category: "International Authors", fee: "₹5,000/-", fees_dollar: "$57" },
  ]

  return (
    <section id="registration" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Registration & Fees</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-left font-semibold">Fees</th>
                      <th className="px-6 py-4 text-left font-semibold">Fees in Dollars</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {registrationData.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.category}</td>
                        <td className="px-6 py-4 text-blue-600 font-bold">{row.fee}</td>
                        <td className="px-6 py-4 text-gray-600">{row.fees_dollar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
