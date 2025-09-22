import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConferenceTracks() {
  const conferenceTrackData = [
    {
      title: "Computer Science and Engineering/AIML/DS",
      icon: "💻",
      topics: [
        "Machine Learning",
        "Deep Learning & Generative AI",
        "Natural Language Processing",
        "Computer Vision",
        "Big Data Analytics",
        "Cloud Computing",
        "Cybersecurity & Cryptography",
      ],
    },
    {
      title: "Electrical & Electronics & Telecommunication Engineering",
      icon: "⚡",
      topics: [
        "Wireless & Space Communication Technologies",
        "AI & Machine Learning Applications in ECE",
        "Advances in Signal, Image & Speech Processing",
        "Power Electronics & Renewable Energy Systems",
        "Cybersecurity & Blockchain for Communication Systems",
        "Embedded Systems, IoT & VLSI Design",
        "Intelligent Robotics & Automation",
        "Quantum & Nanoelectronics Innovations",
        "Sustainable & Green Communication Networks",
      ],
    },
    {
      title: "Civil Engineering",
      icon: "🏗️",
      topics: [
        "Environmental Engineering and Sustainable Development",
        "Sustainable Pavement Design and Materials",
        "Advance Construction and project management techniques",
        "Green and sustainable Construction Practices",
        "Role of Artificial Intelligence in Civil Engineering",
        "Sustainable development in High-Performance Concrete",
        "Sustainable Water Resources Management",
        "Building Information Modeling (BIM)",
        "Disaster Management and Resilient Structures",
        "Sustainable Urban and Rural Development",
      ],
    },
    {
      title: "Architecture Engineering",
      icon: "🏛️",
      topics: [
        "Net-Zero Architecture: Designing for a Carbon-Neutral Future",
        "Smart Cities and Smart Buildings: Technology for Sustainable Urban Futures",
        "Inclusive Architecture: Designing for Equity, Accessibility, and Well-being",
        "Mobility & Infrastructure: Architecture for Sustainable Transit Systems",
        "Healthy Spaces: Post-Pandemic Trends in Architectural Design",
        "Architecture for Education: Learning Environments of the Future",
        "Green Infrastructure: Urban Forests, Roof Gardens, and Eco-Systems in Design",
        "Artificial Intelligence and Digital Transformation in Architecture",
        "Parametric and Computational Design for Sustainable Innovation",
        "The Metaverse and Virtual Architecture: Opportunities for a Sustainable Digital Future",
      ],
    },
    {
      title: "Chemical Engineering",
      icon: "⚗️",
      topics: [
        "Sustainable and Green Chemical Processes",
        "Process Intensification and Optimization",
        "Biochemical and Bioprocess Engineering",
        "Nanotechnology and Advanced Materials",
        "Energy Engineering and Renewable Energy",
        "Environmental Engineering and Pollution Control",
        "Polymer Science and Engineering",
        "Computational Chemical Engineering",
        "Food and Pharmaceutical Engineering",
        "Sustainable wastewater Treatment Technologies",
        "Catalysis and Green Chemistry",
      ],
    },
    {
      title: "General Engineering",
      icon: "⚙️",
      topics: [
        "Nanomaterials",
        "High Energy Physics",
        "Optics and Lasers",
        "Material Chemistry",
        "Wireless Technology",
        "Computational and Numerical Simulations",
      ],
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
            <Card
              key={index}
              className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-purple-50 border border-transparent hover:border-blue-300 hover:shadow-2xl transition-all duration-300 rounded-2xl"
            >
              <CardHeader className="flex flex-col items-start">
                <div className="text-4xl mb-3">{track.icon}</div>
                <CardTitle className="text-lg font-bold text-gray-800">{track.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <h4 className="font-semibold text-gray-700 mb-3">Paper Submission Topics:</h4>
                <ul className="space-y-2 text-gray-600 list-disc list-inside overflow-y-auto pr-2 max-h-50 custom-scrollbar">
                  {track.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
