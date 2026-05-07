const lastUpdated = "May 7, 2025";
const ownerName = "Emmanuel Udeme";
const ownerEmail = "emmanueludeme.fe@gmail.com";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-white text-lg font-bold mb-3 tracking-tight">
      {title}
    </h2>
    <div className="text-white/50 text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

export default function TermsOfService() {
  return (
    <main className="bg-transparent py-20 px-6 md:px-12 lg:px-24">
      <section className="lg:container mx-auto">
        {/* <div className="max-w-2xl mx-auto px-6 py-20 sm:py-28"> */}
        {/* Header */}
        <div className="mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-white/25 font-semibold">
            Legal
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase mt-3 mb-4 leading-tight"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
          >
            Terms of Service
          </h1>
          <p className="text-white/30 text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="w-full h-px bg-white/10 mb-12" />

        {/* Intro */}
        <p className="text-white/50 text-sm leading-relaxed mb-12">
          These terms govern the working relationship between you (the client)
          and {ownerName}
          (the freelancer). By engaging my services — whether through email, a
          signed proposal, or payment — you agree to these terms. Please read
          them before we begin working together.
        </p>

        <Section title="1. Services">
          <p>
            I provide Frontend web development
            service for websites and web applications. The specific scope,
            deliverables, timeline, and price for each project are agreed upon
            before work begins, typically outlined in a project proposal or
            contract.
          </p>
          <p>
            Any work outside the agreed scope is considered a change request and
            may affect the timeline and cost.
          </p>
        </Section>

        <Section title="2. Project Process">
          <p>A typical project follows these stages:</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "Discovery call to understand your goals and requirements",
              "Proposal outlining scope, timeline, and pricing",
              "Signed agreement and deposit payment before work begins",
              "Design and/or development phases with regular check-ins",
              "Revisions within the agreed revision rounds",
              "Final delivery and handoff upon full payment",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-white/20 mt-0.5 font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="3. Payment Terms">
          <p>
            A non-refundable deposit of{" "}
            <span className="text-white/70">50% of the total project fee</span>{" "}
            is required before any work begins. The remaining balance is due
            upon project completion, before final files or live site access are
            handed over.
          </p>
          <p>
            For larger projects, milestone-based payments may be agreed upon in
            the project proposal.
          </p>
          <p>
            Invoices are due within{" "}
            <span className="text-white/70">7 days</span> of receipt. Late
            payments may result in work being paused until the outstanding
            balance is cleared.
          </p>
        </Section>

        <Section title="4. Revisions">
          <p>
            Each project includes a set number of revision rounds as specified
            in the proposal (typically 2–3 rounds). A revision round means one
            consolidated set of feedback — not multiple back-and-forth changes.
          </p>
          <p>
            Additional revisions beyond the included rounds are billed at my
            standard hourly rate, which will be communicated before any extra
            work begins.
          </p>
        </Section>

        <Section title="5. Ownership & Intellectual Property">
          <p>
            Upon receipt of full payment, you own the final deliverables —
            design files, source code, and any custom assets created
            specifically for your project.
          </p>
          <p>
            I retain the right to display the completed work in my portfolio,
            case studies, and social media unless you explicitly request
            otherwise in writing before the project begins.
          </p>
          <p>
            Any third-party assets, fonts, plugins, or stock resources used in
            the project remain subject to their respective licenses. It is your
            responsibility to maintain any required subscriptions (e.g. Webflow,
            Framer, font licenses) after handoff.
          </p>
        </Section>

        <Section title="6. Client Responsibilities">
          <p>A successful project depends on your involvement. You agree to:</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "Provide necessary content (copy, images, branding) on time",
              "Give clear, consolidated feedback within agreed timeframes",
              "Ensure you have rights to any content or assets you provide",
              "Designate a single point of contact to avoid conflicting instructions",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-white/20 mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Delays caused by late content or feedback may push back the project
            timeline without affecting the agreed price.
          </p>
        </Section>

        <Section title="7. Cancellation Policy">
          <p>
            If you cancel the project after work has begun, the deposit is
            non-refundable. If work has progressed beyond the deposit value, you
            will be invoiced for the work completed to date at a pro-rated
            amount.
          </p>
          <p>
            If I need to cancel for any reason, I will refund any payments made
            for work not yet completed and provide any files created up to that
            point.
          </p>
        </Section>

        <Section title="8. Confidentiality">
          <p>
            I treat all client information as confidential and will not share
            your business details, project specifics, or proprietary information
            with third parties without your consent — except where required by
            law.
          </p>
          <p>
            If your project requires a Non-Disclosure Agreement (NDA), I'm happy
            to sign one before we discuss sensitive details.
          </p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>
            I deliver my work with care and professionalism, but I cannot
            guarantee specific business outcomes such as increased sales,
            traffic, or conversions as a result of the design or website.
          </p>
          <p>
            My total liability for any claim arising from a project will not
            exceed the total amount paid for that project. I am not liable for
            indirect, incidental, or consequential damages.
          </p>
        </Section>

        <Section title="10. Governing Law">
          <p>
            These terms are governed by the laws of the Federal Republic of
            Nigeria. Any disputes will first be attempted to be resolved
            amicably. If that fails, disputes will be subject to the
            jurisdiction of Nigerian courts.
          </p>
        </Section>

        <Section title="11. Changes to These Terms">
          <p>
            I may update these terms from time to time. The version in effect at
            the time your project begins is the one that applies to your
            engagement. I'll always display the last updated date at the top of
            this page.
          </p>
        </Section>

        <Section title="12. Contact">
          <p>
            Questions about these terms? Email me at{" "}
            <a
              href={`mailto:${ownerEmail}`}
              className="text-green-700 underline underline-offset-2 hover:text-green-500 transition-colors"
            >
              {ownerEmail}
            </a>{" "}
            and I'll be happy to clarify anything.
          </p>
        </Section>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} {ownerName}. All rights reserved.
          </p>
          <a
            href="/privacy"
            className="text-white/30 text-xs hover:text-white/60 transition-colors underline underline-offset-2"
          >
            Privacy Policy →
          </a>
        </div>
      </section>
    </main>
  );
}
