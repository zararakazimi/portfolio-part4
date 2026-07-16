import { useEffect, useState } from "react";

function ProjectUpdates() {
  const updates = [
    "Portfolio design updated.",
    "Added new React project.",
    "Contact form improved.",
    "Portfolio deployed successfully.",
    "New animations added.",
  ];

  const [currentUpdate, setCurrentUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUpdate((prev) =>
        (prev + 1) % updates.length
      );
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="updates-section">
      <h2>Latest Project Updates</h2>

      <div className="update-card">
        {updates[currentUpdate]}
      </div>
    </section>
  );
}

export default ProjectUpdates;