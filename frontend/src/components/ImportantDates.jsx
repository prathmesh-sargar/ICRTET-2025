import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ImportantDates() {
  const importantDatesData = [
    { event: "Full Paper Submission", date: "10 October 2025", status: "upcoming" },
    { event: "Notification of Acceptance", date: "28 October 2025", status: "upcoming" },
    { event: "Camera Ready paper & Registration Deadline", date: "8 November 2025", status: "upcoming" },
    { event: "Conference Dates", date: "19–20 December 2025", status: "highlight" },
  ]

  return (
    <section id="dates" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {importantDatesData.map((item, index) => (
            <Card
              key={index}
              className={`${item.status === "highlight" ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white" : "bg-white"} hover:shadow-lg transition-shadow duration-300`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className={`h-5 w-5 ${item.status === "highlight" ? "text-white" : "text-blue-600"}`} />
                  <h3 className={`font-semibold ${item.status === "highlight" ? "text-white" : "text-gray-900"}`}>
                    {item.event}
                  </h3>
                </div>
                <p className={`text-lg font-bold ${item.status === "highlight" ? "text-white" : "text-blue-600"}`}>
                  {item.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
