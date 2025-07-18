import ProjectDetails from "@/app/components/ProjectDetails";
import { eventsData } from "@/app/events";

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    event_id: event.event_id,
  }));
}

// Example dynamic page component
export default function EventPage({ params }) {
  const { event_id } = params;

  return (
    <div className="overflow-hidden">
      <ProjectDetails />
    </div>
  );
}
