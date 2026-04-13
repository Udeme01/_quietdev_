const lastUpdated = "April 13, 2025";
const ownerName = "Emmanuel Udeme";
const ownerEmail = "emmanueludeme.fe@gmail.com";
const websiteUrl = "emmanueludeme.dev"; // update this

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

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-white/30 text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="w-full h-px bg-white/10 mb-12" />

        {/* Intro */}
        <p className="text-white/50 text-sm leading-relaxed mb-12">
          Your privacy matters. This policy explains what information I collect
          when you visit <span className="text-white/70">{websiteUrl}</span> or
          reach out to work with me, how I use it, and what rights you have over
          it. I keep things simple — I'm a solo freelancer, not a corporation.
        </p>

        <Section title="1. Who I Am">
          <p>
            I'm {ownerName}, a freelance UX/UI Designer and Web Developer. This
            website is my personal portfolio and the primary way potential
            clients get in touch with me. You can reach me at{" "}
            <a
              href={`mailto:${ownerEmail}`}
              className="text-white/70 underline underline-offset-2 hover:text-white transition-colors"
            >
              {ownerEmail}
            </a>
            .
          </p>
        </Section>

        <Section title="2. What Information I Collect">
          <p>I only collect information you voluntarily provide:</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "Your name and email address when you fill out my contact form",
              "Project details or messages you send me",
              "Your email if you reply to or initiate communication with me directly",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-white/20 mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            I do not collect payment information directly. Any payments are
            processed through third-party platforms (e.g. Paystack, Wise, or
            PayPal) with their own privacy policies.
          </p>
        </Section>

        <Section title="3. How I Use Your Information">
          <p>Your information is used only to:</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "Respond to your inquiry or project request",
              "Send project updates, contracts, or invoices related to work we've agreed on",
              "Follow up if we've previously been in contact",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-white/20 mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            I will never sell, rent, or share your personal information with
            third parties for marketing purposes.
          </p>
        </Section>

        <Section title="4. Cookies & Analytics">
          <p>
            This website may use basic analytics tools (such as Google Analytics
            or Vercel Analytics) to understand how visitors interact with the
            site — things like page views and traffic sources. This data is
            anonymous and aggregated. No personally identifiable information is
            tracked.
          </p>
          <p>
            You can opt out of Google Analytics tracking by using the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 underline underline-offset-2 hover:text-white transition-colors"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </Section>

        <Section title="5. Third-Party Tools">
          <p>
            This site may be built on or hosted through platforms like Vercel,
            Netlify, Webflow, or Framer. These services have their own privacy
            policies and may process technical data (like IP addresses and
            browser types) as part of their infrastructure. I encourage you to
            review their policies if you have concerns.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            I keep your contact information only as long as necessary —
            typically for the duration of our working relationship plus a
            reasonable period afterward for legal and accounting purposes. If
            you'd like your data removed, just email me and I'll delete it
            promptly.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>You have the right to:</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "Request a copy of any personal data I hold about you",
              "Ask me to correct inaccurate information",
              "Request deletion of your data at any time",
              "Withdraw consent for me to contact you",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-white/20 mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email me at{" "}
            <a
              href={`mailto:${ownerEmail}`}
              className="text-white/70 underline underline-offset-2 hover:text-white transition-colors"
            >
              {ownerEmail}
            </a>
            .
          </p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            I may update this policy occasionally. When I do, I'll update the
            "Last updated" date at the top of this page. Continued use of the
            site after changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            Questions about this policy? Reach me at{" "}
            <a
              href={`mailto:${ownerEmail}`}
              className="text-white/70 underline underline-offset-2 hover:text-white transition-colors"
            >
              {ownerEmail}
            </a>
            .
          </p>
        </Section>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} {ownerName}. All rights reserved.
          </p>
          <a
            href="/terms"
            className="text-white/30 text-xs hover:text-white/60 transition-colors underline underline-offset-2"
          >
            Terms of Service →
          </a>
        </div>
      </section>
    </main>
  );
}
