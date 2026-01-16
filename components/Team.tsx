export default function Team() {
    return (
        <section id="team">
            <h2 className="section-title">Team</h2>
            <div className="team-grid">
                {[1, 2, 3, 4].map((member) => (
                    <div key={member} className="team-card">
                        <div className="img-placeholder member-img"></div>
                        <h3>Team Member {member}</h3>
                        <p>Role / Position</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
