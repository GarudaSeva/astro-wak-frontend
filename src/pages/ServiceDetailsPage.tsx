import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { allServices } from "@/data/allServices";

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find service by slug
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return <div className="p-10 text-center">❌ Service not found</div>;
  }

  // Convert price string → number
  const numericPrice = parseFloat(service.price.replace(/[^\d.-]/g, ""));

  return (
    <div className="container mx-auto py-10 px-4">

      <h1 className="text-4xl font-playfair font-bold text-primary">
        {service.title}
      </h1>

      <p className="text-2xl mt-2 text-secondary font-bold">
        {service.price}
      </p>

      <div className="mt-6 text-secondary whitespace-pre-line">
        {service.description}
      </div>

      {service.benefits && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-primary mb-3">Benefits</h2>
          <ul className="space-y-2">
            {service.benefits.map((b, i) => <li key={i}>• {b}</li>)}
          </ul>
        </div>
      )}

      {service.process && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-primary mb-3">Process</h2>
          <ul className="space-y-2">
            {service.process.map((p, i) => <li key={i}>• {p}</li>)}
          </ul>
        </div>
      )}

      {service.deliverables && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-primary mb-3">Deliverables</h2>
          <ul className="space-y-2">
            {service.deliverables.map((d, i) => <li key={i}>• {d}</li>)}
          </ul>
        </div>
      )}

      {/* BOOKING BUTTON */}
      <Button
        className="mt-10 bg-primary text-white px-6 py-3 text-lg"
        onClick={() =>
          navigate(`/book/${service.serviceType}`, {
            state: {
              price: numericPrice,
              title: service.title,
              serviceType: service.serviceType,
            },
          })
        }
      >
        Book Now
      </Button>
    </div>
  );
}
