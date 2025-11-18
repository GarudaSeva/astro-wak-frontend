import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { allServices } from "@/data/allServices";

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return <div className="p-10 text-center">❌ Service not found</div>;
  }

  const numericPrice = parseFloat(service.price.replace(/[^\d.-]/g, ""));

  return (
    <div className="container mx-auto py-10 px-4 pt-24">

      {/* 🔥 IMAGE */}
      {service.image && (
        <div className="w-full flex justify-center mb-8">
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-xl h-64 md:h-80 object-cover rounded-xl shadow-sm"
          />
        </div>
      )}

      {/* TITLE */}
      <h1 className="text-4xl font-playfair font-bold text-primary">
        {service.title}
      </h1>

      {/* PRICE */}
      <p className="text-2xl mt-2 text-secondary font-bold">
        {service.price}
      </p>

      {/* DESCRIPTION (FULL WIDTH) */}
      <div className="mt-6 text-secondary whitespace-pre-line leading-relaxed">
        {service.description}
      </div>

      {/* PROCESS (FULL WIDTH) */}
      {service.process && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-primary mb-3">Process</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-secondary">
            {service.process.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ------------------------------ */}
      {/* 🔥 BENEFITS + DELIVERABLES SIDE-BY-SIDE */}
      {/* ------------------------------ */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* BENEFITS */}
        {service.benefits && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-3">Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-1 gap-3 text-secondary">
              {service.benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* DELIVERABLES */}
        {service.deliverables && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-3">Deliverables</h2>
            <ul className="grid grid-cols-1 md:grid-cols-1 gap-3 text-secondary">
              {service.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
      {/* END SIDE BY SIDE */}

      {/* BOOK BUTTON */}
      <Button
        className="mt-14 bg-primary text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-primary/90"
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
