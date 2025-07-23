import { Card, CardContent } from "@/components/ui/card"

export default function OrganizingCommittee() {
  const organizingTeamMembers = [
    "Dr. Rajesh Kumar",
    "Prof. Priya Sharma",
    "Dr. Amit Patel",
    "Prof. Neha Gupta",
    "Dr. Suresh Reddy",
    "Prof. Kavita Singh",
    "Dr. Manoj Verma",
    "Prof. Ritu Agarwal",
  ]

  const advisoryCommitteeMembers = [
    "Dr. Ramesh Babu (IIT Delhi)",
    "Prof. Sunita Rao (IISc Bangalore)",
    "Dr. Vikram Singh (NIT Trichy)",
    "Prof. Meera Joshi (BITS Pilani)",
    "Dr. Arun Kumar (IIT Bombay)",
    "Prof. Deepa Nair (IIT Madras)",
  ]

  return (
    <section id="committee" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Organizing Committee</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Chief Patrons */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Chief Patrons</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg text-gray-900">Dr. D.Y. Patil</h4>
                <p className="text-gray-600">Chancellor, DY Patil University</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg text-gray-900">Dr. Sanjay D. Patil</h4>
                <p className="text-gray-600">Pro-Chancellor, DY Patil University</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chairpersons */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Chairpersons</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg text-gray-900">Dr. A.K. Gupta</h4>
                <p className="text-gray-600">Principal, DYPCET Kolhapur</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg text-gray-900">Dr. S.D. Chede</h4>
                <p className="text-gray-600">Vice Principal, DYPCET Kolhapur</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Organizing Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Organizing Team</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {organizingTeamMembers.map((name, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-gray-900">{name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisory Committee */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Advisory Committee</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advisoryCommitteeMembers.map((name, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
