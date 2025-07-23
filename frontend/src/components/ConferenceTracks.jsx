import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ConferenceTracks() {
  const conferenceTrackData = [
    {
      title: "Computer Science and Engineering",
      icon: "💻",
      topics: ["AI & Machine Learning", "Data Science", "Cybersecurity", "IoT"],
    },
    {
      title: "Electrical & Electronics & Telecommunication Engineering",
      icon: "⚡",
      topics: ["Power Systems", "Signal Processing", "Communication", "Control Systems"],
    },
    {
      title: "Civil Engineering",
      icon: "🏗️",
      topics: ["Structural Engineering", "Transportation", "Environmental", "Geotechnical"],
    },
    {
      title: "Architecture Engineering",
      icon: "🏛️",
      topics: ["Sustainable Design", "Urban Planning", "Building Technology", "Heritage Conservation"],
    },
    {
      title: "Chemical Engineering",
      icon: "⚗️",
      topics: ["Process Engineering", "Materials Science", "Biotechnology", "Environmental Engineering"],
    },
  ]

  return (
    <section id="tracks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conference Tracks</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conferenceTrackData.map((track, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{track.icon}</div>
                <CardTitle className="text-lg">{track.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {track.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="secondary" className="mr-2 mb-2">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
