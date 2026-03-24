import type { PropertySlug } from "@/data/availability";
import { ContactRentalForm } from "@/components/contact-rental-form";
import { PropertyAvailabilityCalendar } from "@/components/property-availability-calendar";

type AvailabilityBookingSectionProps = {
  propertySlug: PropertySlug;
};

export function AvailabilityBookingSection({
  propertySlug,
}: AvailabilityBookingSectionProps) {
  return (
    <section
      id="availability"
      className="scroll-mt-24 space-y-10 rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm sm:p-10"
    >
      <div className="space-y-2 border-b border-slate-200/80 pb-6">
        <h2 className="font-serif text-2xl text-slate-900 sm:text-3xl">
          Availability &amp; contact
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          Availability is maintained here on the site—when a stay is booked, we
          block those dates in code. Use the form to reach us about a rental; we
          reply by email.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <PropertyAvailabilityCalendar propertySlug={propertySlug} />
        <ContactRentalForm propertySlug={propertySlug} />
      </div>
    </section>
  );
}
