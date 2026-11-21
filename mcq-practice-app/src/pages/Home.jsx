
import subjects from "../data/subjects";
import SubjectCard from "../components/SubjectCard";

function Home() {
  return (
    <div className="home-container">

      <section className="hero">
        <h1>
          Welcome to <span>CodePractice</span>
        </h1>

        <p>
          Improve your programming knowledge with interactive MCQ practice
          tests.
        </p>

        <h3>Choose Your Subject</h3>
      </section>

      <section className="subject-grid" id="subjects">
        {subjects.map((subject) => (

        // Here passing subjects Details using props to SubjectCard Component
        
          <SubjectCard
            key={subject.id}
            subject={subject}
          />

        ))}
      </section>

    </div>
  );
}

export default Home;
