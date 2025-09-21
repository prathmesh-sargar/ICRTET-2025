import { Card, CardContent } from "@/components/ui/card"

export default function OrganizingCommittee() {
  const chiefPatrons = [
    {
      name: "Hon. Dr. D. Y. Patil",
      title: "Founder, D. Y. Patil Education Society",
      image: "/dyp.png",
    },
    {
      name: "Hon. Dr. Sanjay D. Patil",
      title: "President, D. Y. Patil Trust",
      image: "/sp.jpg",
    },
    {
      name: "Hon. Satej D. Patil",
      title: "Vice-President, D.Y.Patil Trust",
      image: "/sp2.jpg",
    },
    {
      name: "Hon. Ruturaj S. Patil",
      title: "Trustee, D.Y.Patil Trust",
      image: "/rp.jpeg",
    },
    {
      name: "Hon. Prithviraj Patil",
      title: "Trustee, D.Y.Patil Trust",
      image: "/pp.jpeg",
    },
  ]

  const chairpersons = [
    {
      name: "Dr. A.K. Gupta",
      title: "Executive Director, DY Patil University",
      image: "/ak.jpeg",
    },
    {
      name: "Dr. S.D. Chede",
      title: "Principal, DYPCET Kolhapur",
      image: "/chede.png",
    },
    {
      name: "Prof. Dr. L. V. Malade",
      title: "Registrar, DYPCET Kolhapur",
      image: "/lm.jpg",
    },
  ]

  const convenorCoordinator = [
    {
      name: "Dr. Mrs. Manisha Bhanuse",
      title: "Conference Convenor & Coordinator",
      image: "/mb.jpg",
    },
  ]

  const organizingTeamMembers = [
    {
      name: "Dr. Amol Jadhav",
      department: "Computer Science & Engineering",
      image: "/amol.jpg",
    },
    {
      name: "Mrs. Padmavati Pise",
      department: "E & TC Engineering",
      image: "/e&tc.jpg",
    },
    {
      name: "Dr. Sunny Mohite",
      department: "International Affairs",
      image: "/if.jpg",
    },
    {
      name: "Dr. B. D. Vhanmore",
      department: "General Engineering",
      image: "/ge.jpg",
    },
    {
      name: "Dr. Pralhad Gavali",
      department: "Computer Science & Engineering",
      image: "/cse.jpg",
    },
    {
      name: "Dr. Yogesh Danolikar",
      department: "Chemical Engineering",
      image: "/chem.jpg",
    },
    {
      name: "Dr. Ajim Sutar",
      department: "Civil Engineering",
      image: "/civ.jpg",
    },
    {
      name: "Ms. Rajanigandha Patil",
      department: "CSE (AIML)",
      image: "/aiml.jpg",
    },
    {
      name: "Tejashri Deokar",
      department: "CSE (DS)",
      image: "/ds.jpg",
    },
  ]

  const advisoryCommitteeMembers = [
    { name: "Dr. Amarsinh Jadhav", affiliation: "Dean (R & D)", image: "/deanrnd.jpg" },
    { name: "Dr. T. B. MohitePatil", affiliation: "HoD, E & TC", image: "/hodentc.jpg" },
    { name: "Dr. K. T. Jadhav", affiliation: "HoD, Chemical", image: "/hodchem.jpg" },
    { name: "Dr. K. Mane", affiliation: "HoD, Civil", image: "/hodciv.png" },
    { name: "Ms. Radhika Dhanal", affiliation: "HoD, CSE", image: "/hodcse.jpg" },
    { name: "Mr. Indrajeet Jadhav", affiliation: "HoD, Arch.", image: "/hodarch.jpg" },
    {
      name: "Dr. Siddheshwar Patil",
      affiliation: "HoD, AIML",
      image: "/hodaiml.jpg",
    },
    { name: "Dr. Ganesh Pujari", affiliation: "HoD, DS", image: "/hodds.jpg" },
  ]

  const studentCommittee = [
    { name: "Ayush Karnewar", phone: "+91 9960670950", image: "ak.jpg" },
    { name: "Tufailahamad Sayyad", phone: "+91 8421120445", image: "/ts.jpg" },
    { name: "Mukta Tamhankar", phone: "+91 9405488622", image: "/mt.jpg" },
    { name: "Ritwik Kanojia", phone: "+91 7777086457", image: "/rk.jpg" },
    { name: "Prathamesh Sargar", phone: "+91 8010618424", image: "/ps.jpg" },
    { name: "Sahil Chavan", phone: "+91 9307480797", image: "/sc.jpg" },
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {chiefPatrons.map((person, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top" />
                  <h4 className="font-bold text-lg text-gray-900">{person.name}</h4>
                  <p className="text-blue-600">{person.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chairpersons */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Chairpersons</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chairpersons.map((person, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top" />
                  <h4 className="font-bold text-lg text-gray-900">{person.name}</h4>
                  <p className="text-blue-600">{person.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Convenor & Coordinator */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Convenor & Coordinator</h3>
          <div className="max-w-md mx-auto">
            {convenorCoordinator.map((person, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top" />
                  <h4 className="font-bold text-lg text-gray-900">{person.name}</h4>
                  <p className="text-blue-600">{person.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Organizing Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Organizing Team</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {organizingTeamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover object-top" />
                  <h4 className="font-semibold text-gray-900 text-base">{member.name}</h4>
                  <p className="text-sm text-blue-600">{member.department}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisory Committee */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Departmental Advisory Committee
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advisoryCommitteeMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover object-top" />
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-blue-600">{member.affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Committee */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Student Committee</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {studentCommittee.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover object-top" />
                  <h4 className="font-semibold text-gray-900 text-base">{member.name}</h4>
                  <p className="text-sm text-blue-600">{member.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
