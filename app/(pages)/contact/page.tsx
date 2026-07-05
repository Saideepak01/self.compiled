import { ContactForm } from "@/components/content/contact-form";
import { SectionTitle } from "@/components/content/section-title";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Saideepak about full-stack roles, product engineering, or anything you are building.",
};

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-tight">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s work together"
          description="Have a project, role, or idea in mind? I would love to hear from you."
          align="center"
        />

        <FadeIn className="mt-12">
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
