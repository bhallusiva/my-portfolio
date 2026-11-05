export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap grid gap-8 lg:grid-cols-12">
        <h2 className="h2 lg:col-span-4">About</h2>
        <div className="space-y-4 leading-relaxed lg:col-span-8">
          <p>
            I’m a B.Tech student (2025 to 2028) in Computer Science at Gayatri Vidhya Parishad College of Engineering in
            Visakhapatnam, with a CGPA of 9.02. Before that I completed a diploma in Computer Engineering with 92%.
          </p>
          <p>
            My focus is Java backend development: object-oriented design, Spring Boot REST APIs, SQL and testing. I
            learn by building small projects and then checking that the code behaves, which is why my Spring Boot and
            JUnit repositories sit next to my DSA practice.
          </p>
          <p className="text-muted">
            I also work in Python on computer vision and retrieval-augmented generation, and I’m looking for
            internship and entry-level roles where I can keep learning on a backend team.
          </p>
        </div>
      </div>
    </section>
  )
}
