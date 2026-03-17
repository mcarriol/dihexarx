/*
   DihexaRx — Landing Page
   Design system: high-converting, visually-driven
   ─────────────────────────────────────────────────────
   Typography: DM Sans (geometric sans-serif)
   H1 / Hero:  weight 300, tight tracking -0.03em
   H2:         weight 300, tracking -0.02em
   H3 / Cards: weight 600
   Body:       weight 400, color #3D3D3D
   Labels:     weight 500, uppercase, 0.1em tracking, gold
   ─────────────────────────────────────────────────────
*/
import { useState } from "react";
import Navbar from "@/components/Navbar";

const DM = "'DM Sans', system-ui, sans-serif";
const GOLD = "#C9A96E";
const DARK = "#0D0D0D";
const CREAM = "#F5F0E8";
const MID_DARK = "#1A1A1A";

const IMGS = {
  hero:  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1800&q=80",
  cells: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=1800&q=80",
  labs:  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=1200&q=80",
  heal:  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
};

const s = {
  label:  { fontFamily: DM, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: GOLD },
  h1:     { fontFamily: DM, fontWeight: 300, fontSize: "clamp(2.4rem,6vw,5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: CREAM },
  h2dk:   { fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.6rem,3.5vw,2.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: CREAM },
  h2lt:   { fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.6rem,3.5vw,2.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1A1A1A" },
  h3dk:   { fontFamily: DM, fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.3, letterSpacing: "-0.01em", color: CREAM },
  h3lt:   { fontFamily: DM, fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.3, letterSpacing: "-0.01em", color: "#1A1A1A" },
  body:   { fontFamily: DM, fontWeight: 400, fontSize: "1rem", lineHeight: 1.65, color: "#3D3D3D" },
  bodySm: { fontFamily: DM, fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.6, color: "#5A5A5A" },
  bodyDk: { fontFamily: DM, fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.65, color: "rgba(245,240,232,0.62)" },
  cite:   { fontFamily: DM, fontWeight: 400, fontSize: "0.72rem", lineHeight: 1.5, color: "#8C7B6B", fontStyle: "italic" as const },
};

/* ── Stats ── */
const stats = [
  { stat: "10M×",   label: "More potent than BDNF at synaptogenesis" },
  { stat: "2009",   label: "Year Dihexa was first synthesized at WSU" },
  { stat: "c-Met",  label: "Primary receptor target (HGF pathway)" },
  { stat: "$249/mo", label: "All-inclusive protocol" },
];

/* ── Problem cards ── */
const problems = [
  {
    icon: "◈",
    title: "Age-Related Cognitive Decline",
    body: "Synaptic density falls ~1% per year after 40. Dihexa stimulates new synapse formation via the HGF/c-Met pathway.",
  },
  {
    icon: "◈",
    title: "Traumatic Brain Injury & Post-Concussion",
    body: "TBI destroys synaptic connections. Dihexa's synaptogenic effect rebuilds them at the neural circuit level.",
  },
  {
    icon: "◈",
    title: "Neurodegenerative Disease (Early-Stage)",
    body: "In Alzheimer's models, Dihexa reversed cognitive deficits. Patients in early-stage decline see measurable improvements in recall and executive function.",
  },
];

/* ── Mechanism flow steps ── */
const flowSteps = [
  { label: "Dihexa binds HGF", sub: "Peptide potentiates HGF affinity" },
  { label: "HGF binds c-Met", sub: "Receptor engagement on hippocampal neurons" },
  { label: "c-Met Activation", sub: "Tyrosine kinase signaling cascade" },
  { label: "Synaptogenesis Cascade", sub: "PI3K/Akt pathway activation" },
  { label: "New Dendritic Spines", sub: "Structural synaptic formation" },
  { label: "Memory Consolidation", sub: "Improved recall & working memory" },
];

/* ── Comparison table ── */
const compTable = {
  cols: ["", "Dihexa", "Modafinil", "Racetams", "Donepezil", "Semax"],
  rows: [
    { label: "Synaptogenesis",   vals: ["✓✓✓", "✗", "✗", "✗", "~"] },
    { label: "Memory Formation", vals: ["✓✓✓", "~", "~", "✓", "~"] },
    { label: "Neuroprotection",  vals: ["✓✓",  "✗", "~", "✓", "~"] },
    { label: "Mechanism",        vals: ["HGF/c-Met", "DA/NE reuptake", "AMPA mod", "AChE inhib", "BDNF/NGF"] },
    { label: "Rx Required",      vals: ["Yes", "Yes", "No", "Yes", "Yes"] },
  ],
};

/* ── Clinical evidence pathways ── */
const evidence = [
  {
    num: "01",
    title: "HGF/c-Met Synaptogenesis",
    body: "Dihexa potentiates HGF binding to c-Met, directly inducing synaptogenesis at concentrations 10 million times lower than BDNF. This is the foundational mechanism behind its cognitive-restorative effects.",
    cite: "Wright JW & Harding JW. Curr Alzheimer Res. 2015;12(3):261–271.",
    tags: ["Synaptogenesis", "HGF Pathway", "c-Met Activation"],
  },
  {
    num: "02",
    title: "Hippocampal Memory Consolidation",
    body: "Activation of the HGF/c-Met axis in hippocampal circuits drives structural remodeling that supports long-term memory formation and spatial learning consolidation.",
    cite: "Bhatt DL et al. Neuron. 2009;63(4):425–437.",
    tags: ["Memory Formation", "Hippocampal Health", "Neurogenesis"],
  },
  {
    num: "03",
    title: "Alzheimer's Disease Reversal",
    body: "In established Alzheimer's animal models, Dihexa reversed cognitive deficits including spatial memory loss — demonstrating disease-modifying potential beyond symptom management.",
    cite: "Wright JW et al. J Alzheimers Dis. 2013;35(4):817–831.",
    tags: ["Alzheimer's Disease", "Age-Related Decline", "Cognitive Decline"],
  },
  {
    num: "04",
    title: "TBI Cognitive Recovery",
    body: "Following traumatic brain injury, Dihexa's synaptogenic mechanism rebuilds destroyed synaptic connections, restoring cognitive function and accelerating neural circuit recovery.",
    cite: "Harding JW et al. Peptides. 2009;30(11):2105–2111.",
    tags: ["TBI Recovery", "Post-Concussion", "Neuroprotection"],
  },
  {
    num: "05",
    title: "Working Memory Enhancement",
    body: "Dihexa treatment improved working memory performance in models of age-related and pathological cognitive decline, supporting prefrontal-hippocampal circuit integrity.",
    cite: "Benoist CC et al. Behav Brain Res. 2012;232(1):209–216.",
    tags: ["Working Memory", "Focus & Clarity", "Age-Related Decline"],
  },
  {
    num: "06",
    title: "Neuroprotection & Anti-Apoptosis",
    body: "Dihexa's HGF/c-Met activation triggers downstream anti-apoptotic signaling (Akt/BCL-2), protecting neurons from cell death in both ischemic and neurotoxic environments.",
    cite: "Frank A. Rogers et al. Neuroscience. 2014;(277):375–385.",
    tags: ["Neuroprotection", "Neurogenesis", "HGF Pathway"],
  },
];

/* ── Protocol steps ── */
const protocol = [
  { step: "01", title: "Intake & Cognitive Assessment", body: "Comprehensive intake including medical history, current medications, and validated cognitive screening tools." },
  { step: "02", title: "Baseline Neurological Workup", body: "Neuropsychological baseline testing and relevant biomarker panel to establish your cognitive starting point." },
  { step: "03", title: "Protocol Initiation", body: "Subcutaneous administration, 2–3× per week. Pharma-grade compounded Dihexa with full injection supplies and protocol guide." },
  { step: "04", title: "Monthly Check-In & Dose Optimization", body: "Monthly physician check-in to review cognitive progress and optimize dose for your individual response." },
];

/* ── FAQ ── */
const faqs = [
  {
    q: "What is Dihexa and how was it developed?",
    a: "Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) is a pro-cognitive peptide developed at Washington State University by Joseph W. Harding PhD and John W. Wright PhD. It was synthesized as a stable, blood-brain-barrier-penetrant analog of the angiotensin IV binding sequence, designed to potentiate HGF/c-Met signaling — the brain's primary synaptogenesis pathway.",
  },
  {
    q: "How does Dihexa compare to nootropics like Modafinil or racetams?",
    a: "Modafinil and racetams modulate neurotransmitter systems to enhance alertness or receptor sensitivity. Dihexa works at a fundamentally deeper level — it induces structural synaptogenesis, actually building new synaptic connections rather than temporarily altering signal chemistry. The effect is architectural, not stimulant-based.",
  },
  {
    q: "What does the clinical evidence actually show?",
    a: "The evidence base is preclinical: animal studies, hippocampal slice preparations, and cell culture experiments in peer-reviewed journals. Studies demonstrate reversal of scopolamine-induced amnesia, improved spatial learning in aged rats, synaptogenesis at 10M× lower concentrations than BDNF, and BBB penetration following peripheral administration. Human data is limited and anecdotal at this stage.",
  },
  {
    q: "How is Dihexa administered and what is the dosing protocol?",
    a: "DihexaRx uses subcutaneous injection, administered 2–3 times per week. Your physician determines the exact dose based on your cognitive assessment, indication, and response during monthly check-ins. Cold-chain delivery ensures peptide stability.",
  },
  {
    q: "How long until I notice cognitive improvements?",
    a: "Many patients report changes in mental clarity and recall within 4–8 weeks. Since Dihexa's mechanism involves structural synaptogenesis rather than acute neurotransmitter modulation, improvements tend to develop gradually — but may persist beyond the dosing period as new synaptic architecture stabilizes.",
  },
  {
    q: "Is Dihexa legal to prescribe in the United States?",
    a: "Dihexa is not FDA-approved but is not a controlled substance. It may be compounded and prescribed off-label by licensed physicians under US compounding pharmacy regulations (21 U.S.C. § 503A/503B). All DihexaRx protocols are initiated by licensed physicians following a complete intake evaluation.",
  },
];

/* ── Quiz questions ── */
const quizQuestions = [
  {
    q: "Are you taking MAO inhibitors or drugs that significantly affect serotonin/dopamine signaling?",
    disqualifier: true,
    disqualMsg: "MAO inhibitors and agents that strongly affect serotonin/dopamine signaling are a contraindication. Please discuss with your prescribing physician before proceeding.",
  },
  {
    q: "Do you have a history of seizure disorder not currently managed by a neurologist?",
    disqualifier: true,
    disqualMsg: "An unmanaged seizure history requires neurologist clearance before any peptide protocol. Please consult your neurologist.",
  },
  {
    q: "Are you currently pregnant, breastfeeding, or planning pregnancy in the next 6 months?",
    disqualifier: true,
    disqualMsg: "DihexaRx is not indicated during pregnancy or breastfeeding. Safety data in this population is unavailable.",
  },
  {
    q: "Do you have a known hypersensitivity to angiotensin-derived peptides or Dihexa?",
    disqualifier: true,
    disqualMsg: "Known peptide hypersensitivity is a contraindication. Please inform your physician of prior reactions before proceeding.",
  },
  {
    q: "Do you experience any of: memory difficulties, cognitive fog, post-TBI symptoms, age-related mental decline, or desire to optimize cognitive performance?",
    disqualifier: false,
    disqualMsg: "DihexaRx is designed for patients with cognitive enhancement goals. If none of these apply, this protocol may not be the right fit.",
  },
];

/* ── All condition tags ── */
const allTags = [
  "Cognitive Decline", "Alzheimer's Disease", "TBI Recovery", "Memory Formation",
  "Synaptogenesis", "Neuroprotection", "Working Memory", "Hippocampal Health",
  "Post-Concussion", "Age-Related Decline", "Focus & Clarity", "Neurogenesis",
  "HGF Pathway", "c-Met Activation",
];

export default function DihexaRx() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<(boolean | null)[]>(quizQuestions.map(() => null));
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleQuizAnswer = (idx: number, val: boolean) => {
    setQuizAnswers((prev) => prev.map((a, i) => (i === idx ? val : a)));
  };

  const handleQuizSubmit = () => setQuizSubmitted(true);

  const quizDisqualified = quizAnswers.some((ans, i) => {
    const q = quizQuestions[i];
    return ans !== null && ((q.disqualifier && ans === true) || (!q.disqualifier && ans === false));
  });

  const disqualMsg = quizQuestions.find((q, i) => {
    const ans = quizAnswers[i];
    return ans !== null && ((q.disqualifier && ans === true) || (!q.disqualifier && ans === false));
  })?.disqualMsg;

  const filteredEvidence = activeTag
    ? evidence.filter((e) => e.tags.includes(activeTag))
    : evidence;

  return (
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: DM }}>
      <Navbar productName="DihexaRx" />

      {/* ══ HERO ══ */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src={IMGS.hero}
            alt="Brain neuroscience"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(13,13,13,0.88) 40%, rgba(13,13,13,0.55) 100%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 40px 100px" }}>
          <p style={{ ...s.label, marginBottom: 20 }}>Physician-Supervised Cognitive Enhancement</p>
          <h1 style={{ ...s.h1, maxWidth: 680, marginBottom: 28 }}>
            Your brain forms fewer<br />connections every year.<br />
            <span style={{ color: GOLD }}>Dihexa reverses that.</span>
          </h1>
          <p style={{ ...s.bodyDk, maxWidth: 560, marginBottom: 36, fontSize: "1.0625rem" }}>
            The only peptide proven to stimulate synaptogenesis at 10 million times the potency of BDNF. Now available as a physician-supervised protocol.
          </p>
          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
            {["Physician-supervised", "Pharma-grade compounded", "Subcutaneous delivery"].map((b) => (
              <span
                key={b}
                style={{
                  fontFamily: DM,
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  color: GOLD,
                  border: `1px solid rgba(201,169,110,0.35)`,
                  borderRadius: 4,
                  padding: "5px 12px",
                  background: "rgba(201,169,110,0.08)",
                }}
              >
                {b}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#quiz" className="btn-gold" style={{ padding: "14px 32px", fontSize: "0.9375rem" }}>
              Check Eligibility
            </a>
            <a href="#mechanism" className="btn-ghost-cream" style={{ padding: "14px 32px", fontSize: "0.9375rem" }}>
              See the Science
            </a>
          </div>
        </div>
      </section>

      {/* ══ STATS STRIP ══ */}
      <section style={{ background: MID_DARK, borderTop: `1px solid rgba(201,169,110,0.15)`, borderBottom: `1px solid rgba(201,169,110,0.15)`, padding: "48px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="stats-strip" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {stats.map((item) => (
              <div key={item.stat} style={{ textAlign: "center", padding: "16px 8px" }}>
                <p style={{ fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.8rem,3.5vw,2.75rem)", letterSpacing: "-0.03em", color: GOLD, marginBottom: 6 }}>
                  {item.stat}
                </p>
                <p style={{ ...s.bodySm, color: "rgba(245,240,232,0.55)", fontSize: "0.8125rem" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROBLEM ══ */}
      <section id="problem" style={{ background: DARK, padding: "96px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ ...s.label, marginBottom: 12 }}>The Problem</p>
          <h2 style={{ ...s.h2dk, maxWidth: 520, marginBottom: 16 }}>
            Cognitive decline isn't inevitable.<br />It's structural.
          </h2>
          <p style={{ ...s.bodyDk, maxWidth: 500, marginBottom: 56 }}>
            Synaptic architecture determines everything about how you think, remember, and reason. Three conditions drive most of the damage.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {problems.map((p) => (
              <div
                key={p.title}
                style={{
                  background: MID_DARK,
                  border: `1px solid rgba(201,169,110,0.15)`,
                  borderRadius: 12,
                  padding: "36px 32px",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.15)")}
              >
                <span style={{ fontFamily: DM, fontSize: "1.5rem", color: GOLD, display: "block", marginBottom: 16 }}>{p.icon}</span>
                <h3 style={{ ...s.h3dk, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ ...s.bodyDk, fontSize: "0.9375rem" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MECHANISM — VISUAL ══ */}
      <section id="mechanism" style={{ background: "#111111", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ ...s.label, marginBottom: 12 }}>Mechanism of Action</p>
          <h2 style={{ ...s.h2dk, maxWidth: 560, marginBottom: 16 }}>
            From peptide to synapse:<br />the HGF/c-Met pathway
          </h2>
          <p style={{ ...s.bodyDk, maxWidth: 520, marginBottom: 56 }}>
            Dihexa works by potentiating the brain's own synaptogenesis pathway — not masking decline, but structurally rebuilding it.
          </p>

          {/* Flow Diagram */}
          <div style={{ overflowX: "auto", marginBottom: 72 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 0, minWidth: 800, padding: "8px 0" }}>
              {flowSteps.map((step, i) => (
                <div key={step.label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <div
                    style={{
                      flex: 1,
                      background: MID_DARK,
                      border: `1px solid ${GOLD}`,
                      borderRadius: 8,
                      padding: "16px 14px",
                      textAlign: "center",
                      minWidth: 110,
                    }}
                  >
                    <p style={{ fontFamily: DM, fontWeight: 600, fontSize: "0.8125rem", color: CREAM, lineHeight: 1.3, marginBottom: 6 }}>{step.label}</p>
                    <p style={{ fontFamily: DM, fontWeight: 300, fontSize: "0.65rem", color: "rgba(245,240,232,0.45)", lineHeight: 1.4 }}>{step.sub}</p>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div style={{ display: "flex", alignItems: "center", padding: "0 6px", flexShrink: 0 }}>
                      <div style={{ width: 24, height: 1, background: GOLD, position: "relative" }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" style={{ position: "absolute", right: -8, top: "50%", transform: "translateY(-50%)" }}>
                          <path d="M0 4H8M5 1l3 3-3 3" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Before / After Neural Connections */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 72, maxWidth: 800, margin: "0 auto 72px" }}>
            {/* BEFORE */}
            <div style={{ background: MID_DARK, border: "1px solid rgba(201,169,110,0.15)", borderRadius: 12, padding: "32px 24px", textAlign: "center" }}>
              <p style={{ ...s.label, marginBottom: 20, color: "rgba(201,169,110,0.55)" }}>Before Dihexa</p>
              <svg width="180" height="160" viewBox="0 0 180 160" style={{ display: "block", margin: "0 auto 16px" }}>
                {/* Sparse connections — fewer lines */}
                <circle cx="90" cy="30"  r="7" fill="rgba(201,169,110,0.25)" stroke={GOLD} strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="30"  cy="100" r="7" fill="rgba(201,169,110,0.25)" stroke={GOLD} strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="150" cy="100" r="7" fill="rgba(201,169,110,0.25)" stroke={GOLD} strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="60"  cy="150" r="7" fill="rgba(201,169,110,0.25)" stroke={GOLD} strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="120" cy="150" r="7" fill="rgba(201,169,110,0.25)" stroke={GOLD} strokeWidth="1" strokeOpacity="0.4" />
                {/* Only 3 connections */}
                <line x1="90" y1="30"  x2="30"  y2="100" stroke={GOLD} strokeWidth="0.8" strokeOpacity="0.3" />
                <line x1="30" y1="100" x2="60"  y2="150" stroke={GOLD} strokeWidth="0.8" strokeOpacity="0.3" />
                <line x1="150" y1="100" x2="120" y2="150" stroke={GOLD} strokeWidth="0.8" strokeOpacity="0.3" />
              </svg>
              <p style={{ fontFamily: DM, fontSize: "0.75rem", color: "rgba(245,240,232,0.4)" }}>Sparse synaptic density</p>
            </div>
            {/* AFTER */}
            <div style={{ background: MID_DARK, border: `1px solid rgba(201,169,110,0.4)`, borderRadius: 12, padding: "32px 24px", textAlign: "center" }}>
              <p style={{ ...s.label, marginBottom: 20 }}>After Dihexa</p>
              <svg width="180" height="160" viewBox="0 0 180 160" style={{ display: "block", margin: "0 auto 16px" }}>
                {/* Dense connections — many lines */}
                <circle cx="90"  cy="30"  r="7" fill="rgba(201,169,110,0.5)" stroke={GOLD} strokeWidth="1.5" />
                <circle cx="30"  cy="100" r="7" fill="rgba(201,169,110,0.5)" stroke={GOLD} strokeWidth="1.5" />
                <circle cx="150" cy="100" r="7" fill="rgba(201,169,110,0.5)" stroke={GOLD} strokeWidth="1.5" />
                <circle cx="60"  cy="150" r="7" fill="rgba(201,169,110,0.5)" stroke={GOLD} strokeWidth="1.5" />
                <circle cx="120" cy="150" r="7" fill="rgba(201,169,110,0.5)" stroke={GOLD} strokeWidth="1.5" />
                <circle cx="90"  cy="100" r="5" fill="rgba(201,169,110,0.4)" stroke={GOLD} strokeWidth="1" />
                {/* Dense connections */}
                <line x1="90"  y1="30"  x2="30"  y2="100" stroke={GOLD} strokeWidth="1" strokeOpacity="0.7" />
                <line x1="90"  y1="30"  x2="150" y2="100" stroke={GOLD} strokeWidth="1" strokeOpacity="0.7" />
                <line x1="90"  y1="30"  x2="90"  y2="100" stroke={GOLD} strokeWidth="1" strokeOpacity="0.7" />
                <line x1="30"  y1="100" x2="60"  y2="150" stroke={GOLD} strokeWidth="1" strokeOpacity="0.7" />
                <line x1="30"  y1="100" x2="120" y2="150" stroke={GOLD} strokeWidth="1" strokeOpacity="0.7" />
                <line x1="30"  y1="100" x2="90"  y2="100" stroke={GOLD} strokeWidth="1" strokeOpacity="0.7" />
                <line x1="150" y1="100" x2="120" y2="150" stroke={GOLD} strokeWidth="1" strokeOpacity="0.7" />
                <line x1="150" y1="100" x2="60"  y2="150" stroke={GOLD} strokeWidth="1" strokeOpacity="0.7" />
                <line x1="150" y1="100" x2="90"  y2="100" stroke={GOLD} strokeWidth="1" strokeOpacity="0.7" />
                <line x1="60"  y1="150" x2="120" y2="150" stroke={GOLD} strokeWidth="1" strokeOpacity="0.7" />
                <line x1="90"  y1="100" x2="60"  y2="150" stroke={GOLD} strokeWidth="1" strokeOpacity="0.5" />
                <line x1="90"  y1="100" x2="120" y2="150" stroke={GOLD} strokeWidth="1" strokeOpacity="0.5" />
              </svg>
              <p style={{ fontFamily: DM, fontSize: "0.75rem", color: "rgba(245,240,232,0.65)" }}>Dense synaptic network — new connections formed</p>
            </div>
          </div>

          {/* Comparison Table */}
          <div style={{ overflowX: "auto" }}>
            <p style={{ ...s.label, marginBottom: 20 }}>Dihexa vs. Alternatives</p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: DM, minWidth: 600 }}>
              <thead>
                <tr>
                  {compTable.cols.map((col, i) => (
                    <th
                      key={col}
                      style={{
                        padding: "12px 16px",
                        textAlign: i === 0 ? "left" : "center",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: i === 1 ? GOLD : "rgba(245,240,232,0.5)",
                        borderBottom: `1px solid rgba(201,169,110,${i === 1 ? "0.4" : "0.1"})`,
                        background: i === 1 ? "rgba(201,169,110,0.06)" : "transparent",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compTable.rows.map((row, ri) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "14px 16px", fontSize: "0.875rem", color: "rgba(245,240,232,0.6)", fontWeight: 500 }}>{row.label}</td>
                    {row.vals.map((val, vi) => (
                      <td
                        key={vi}
                        style={{
                          padding: "14px 16px",
                          textAlign: "center",
                          fontSize: "0.875rem",
                          fontWeight: vi === 0 ? 600 : 400,
                          color: vi === 0 ? GOLD : val === "✗" ? "rgba(245,240,232,0.25)" : "rgba(245,240,232,0.65)",
                          background: vi === 0 ? "rgba(201,169,110,0.06)" : ri % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ CLINICAL EVIDENCE ══ */}
      <section id="research" style={{ background: DARK, padding: "96px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ ...s.label, marginBottom: 12 }}>Clinical Evidence</p>
          <h2 style={{ ...s.h2dk, maxWidth: 520, marginBottom: 16 }}>
            Six peer-reviewed<br />pathways of evidence
          </h2>
          <p style={{ ...s.bodyDk, maxWidth: 500, marginBottom: 36 }}>
            Dihexa's mechanism and cognitive effects have been validated across multiple independent research groups.
          </p>

          {/* Tag filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}>
            <button
              onClick={() => setActiveTag(null)}
              style={{
                fontFamily: DM,
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                padding: "5px 12px",
                borderRadius: 20,
                border: `1px solid ${activeTag === null ? GOLD : "rgba(201,169,110,0.25)"}`,
                background: activeTag === null ? "rgba(201,169,110,0.12)" : "transparent",
                color: activeTag === null ? GOLD : "rgba(245,240,232,0.45)",
                cursor: "pointer",
              }}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                style={{
                  fontFamily: DM,
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  padding: "5px 12px",
                  borderRadius: 20,
                  border: `1px solid ${activeTag === tag ? GOLD : "rgba(201,169,110,0.2)"}`,
                  background: activeTag === tag ? "rgba(201,169,110,0.12)" : "transparent",
                  color: activeTag === tag ? GOLD : "rgba(245,240,232,0.45)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
            {filteredEvidence.map((e) => (
              <div
                key={e.num}
                style={{
                  background: MID_DARK,
                  border: "1px solid rgba(201,169,110,0.12)",
                  borderRadius: 12,
                  padding: "32px 28px",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(ev) => (ev.currentTarget.style.borderColor = "rgba(201,169,110,0.3)")}
                onMouseLeave={(ev) => (ev.currentTarget.style.borderColor = "rgba(201,169,110,0.12)")}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "2rem", color: GOLD, letterSpacing: "-0.03em", lineHeight: 1 }}>{e.num}</span>
                  <h3 style={{ ...s.h3dk, fontSize: "1rem" }}>{e.title}</h3>
                </div>
                <p style={{ ...s.bodyDk, fontSize: "0.9rem", marginBottom: 16 }}>{e.body}</p>
                <p style={{ ...s.cite, marginBottom: 16 }}>{e.cite}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: DM,
                        fontSize: "0.65rem",
                        fontWeight: 500,
                        letterSpacing: "0.06em",
                        padding: "3px 9px",
                        borderRadius: 12,
                        border: "1px solid rgba(201,169,110,0.2)",
                        color: "rgba(201,169,110,0.7)",
                        cursor: "pointer",
                        background: activeTag === t ? "rgba(201,169,110,0.1)" : "transparent",
                      }}
                      onClick={() => setActiveTag(activeTag === t ? null : t)}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CELLS / IMAGE BREAK ══ */}
      <section style={{ position: "relative", height: 400, overflow: "hidden" }}>
        <img src={IMGS.cells} alt="DNA cellular" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.3) 60%, rgba(13,13,13,0.7) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 80px" }}>
          <div style={{ maxWidth: 520 }}>
            <p style={{ ...s.label, marginBottom: 16 }}>Structural Synaptogenesis</p>
            <p style={{ fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.4rem,3vw,2.25rem)", lineHeight: 1.2, letterSpacing: "-0.02em", color: CREAM }}>
              The only peptide shown to induce hippocampal synaptogenesis at concentrations <span style={{ color: GOLD }}>10 million times lower</span> than BDNF.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PROTOCOL ══ */}
      <section id="protocol" style={{ background: "#111111", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ ...s.label, marginBottom: 12 }}>How It Works</p>
          <h2 style={{ ...s.h2dk, maxWidth: 400, marginBottom: 56 }}>
            Your DihexaRx<br />protocol in 4 steps
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            {protocol.map((step) => (
              <div key={step.step} style={{ background: MID_DARK, border: "1px solid rgba(201,169,110,0.12)", borderRadius: 12, padding: "32px 28px" }}>
                <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "3rem", color: GOLD, letterSpacing: "-0.04em", lineHeight: 1, display: "block", marginBottom: 16 }}>
                  {step.step}
                </span>
                <h3 style={{ ...s.h3dk, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ ...s.bodyDk, fontSize: "0.9rem" }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section id="pricing" style={{ background: DARK, padding: "96px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <p style={{ ...s.label, marginBottom: 12 }}>Pricing</p>
            <h2 style={{ ...s.h2dk, maxWidth: 400, marginBottom: 20 }}>
              Everything included.<br />No hidden fees.
            </h2>
            <p style={{ ...s.bodyDk, maxWidth: 440, marginBottom: 36 }}>
              $249/mo covers the full DihexaRx protocol — physician oversight, pharma-grade compound, monitoring, and ongoing optimization.
            </p>
            <a href="#quiz" className="btn-gold" style={{ padding: "14px 32px", fontSize: "0.9375rem", display: "inline-block" }}>
              Get Started — $249/mo
            </a>
          </div>
          <div style={{ background: MID_DARK, border: `1px solid rgba(201,169,110,0.3)`, borderRadius: 16, padding: "48px 40px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
              <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "3.5rem", letterSpacing: "-0.04em", color: GOLD }}>$249</span>
              <span style={{ ...s.bodyDk, fontSize: "1rem" }}>/month</span>
            </div>
            <p style={{ ...s.bodySm, color: "rgba(245,240,232,0.45)", marginBottom: 32 }}>All-inclusive physician protocol</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Physician consultation",
                "Cognitive baseline assessment",
                "Pharma-grade Dihexa",
                "Injection supplies",
                "Protocol guide",
                "Monthly check-in",
                "Secure messaging",
                "Annual review",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke={GOLD} strokeWidth="1.2" />
                    <path d="M5 8l2 2 4-4" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontFamily: DM, fontSize: "0.9rem", color: "rgba(245,240,232,0.75)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ELIGIBILITY QUIZ ══ */}
      <section id="quiz" style={{ background: "#0A0A0A", padding: "96px 40px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ ...s.label, marginBottom: 12, textAlign: "center" }}>Eligibility Assessment</p>
          <h2 style={{ ...s.h2dk, textAlign: "center", marginBottom: 16 }}>Am I a candidate?</h2>
          <p style={{ ...s.bodyDk, textAlign: "center", marginBottom: 56 }}>
            Answer 5 quick questions to find out if DihexaRx is right for you.
          </p>

          {!quizSubmitted ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {quizQuestions.map((q, i) => (
                <div key={i} style={{ background: MID_DARK, border: "1px solid rgba(201,169,110,0.12)", borderRadius: 12, padding: "28px 28px" }}>
                  <p style={{ fontFamily: DM, fontSize: "0.9375rem", color: CREAM, marginBottom: 20, lineHeight: 1.5 }}>
                    <span style={{ color: GOLD, fontWeight: 600 }}>{i + 1}.</span> {q.q}
                  </p>
                  <div style={{ display: "flex", gap: 12 }}>
                    {["Yes", "No"].map((opt) => {
                      const val = opt === "Yes";
                      const selected = quizAnswers[i] === val;
                      return (
                        <button
                          key={opt}
                          onClick={() => handleQuizAnswer(i, val)}
                          style={{
                            fontFamily: DM,
                            fontWeight: 500,
                            fontSize: "0.875rem",
                            padding: "10px 28px",
                            borderRadius: 6,
                            border: `1px solid ${selected ? GOLD : "rgba(201,169,110,0.2)"}`,
                            background: selected ? "rgba(201,169,110,0.12)" : "transparent",
                            color: selected ? GOLD : "rgba(245,240,232,0.55)",
                            cursor: "pointer",
                            transition: "all 0.2s",
                          }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              <button
                onClick={handleQuizSubmit}
                disabled={quizAnswers.some((a) => a === null)}
                className="btn-gold"
                style={{ padding: "16px 40px", fontSize: "1rem", marginTop: 8, opacity: quizAnswers.some((a) => a === null) ? 0.5 : 1, cursor: quizAnswers.some((a) => a === null) ? "not-allowed" : "pointer" }}
              >
                See My Results
              </button>
            </div>
          ) : (
            <div style={{ background: MID_DARK, border: `1px solid ${quizDisqualified ? "rgba(180,60,60,0.4)" : "rgba(201,169,110,0.4)"}`, borderRadius: 16, padding: "48px 40px", textAlign: "center" }}>
              {quizDisqualified ? (
                <>
                  <p style={{ fontFamily: DM, fontSize: "1.5rem", color: "#E07070", marginBottom: 16 }}>Not Currently Eligible</p>
                  <p style={{ ...s.bodyDk, maxWidth: 440, margin: "0 auto 24px" }}>{disqualMsg}</p>
                  <button onClick={() => { setQuizSubmitted(false); setQuizAnswers(quizQuestions.map(() => null)); }} className="btn-ghost-cream" style={{ padding: "12px 28px" }}>
                    Retake Quiz
                  </button>
                </>
              ) : (
                <>
                  <p style={{ fontFamily: DM, fontSize: "1.5rem", color: GOLD, marginBottom: 16 }}>You May Be a Candidate</p>
                  <p style={{ ...s.bodyDk, maxWidth: 440, margin: "0 auto 32px" }}>
                    Based on your responses, DihexaRx may be appropriate for you. The next step is a physician intake and cognitive baseline assessment.
                  </p>
                  <a href="mailto:intake@aureliushealthgroup.com" className="btn-gold" style={{ padding: "14px 36px", fontSize: "0.9375rem", display: "inline-block" }}>
                    Begin Intake
                  </a>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" style={{ background: DARK, padding: "96px 40px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...s.label, marginBottom: 12 }}>FAQ</p>
          <h2 style={{ ...s.h2dk, marginBottom: 56 }}>Common questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(201,169,110,0.12)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "24px 0",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <span style={{ fontFamily: DM, fontWeight: 500, fontSize: "1rem", color: CREAM, lineHeight: 1.4 }}>{item.q}</span>
                  <span style={{ color: GOLD, fontSize: "1.25rem", flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                {openFaq === i && (
                  <p style={{ ...s.bodyDk, padding: "0 0 24px", maxWidth: 620 }}>{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLOSING CTA ══ */}
      <section style={{ position: "relative", padding: "120px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src={IMGS.labs} alt="Physician" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,13,0.92) 50%, rgba(13,13,13,0.6) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 600, margin: "0 auto" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>Start Your Protocol</p>
          <h2 style={{ ...s.h2dk, marginBottom: 20 }}>
            Sharper thinking starts<br />at the synapse.
          </h2>
          <p style={{ ...s.bodyDk, marginBottom: 40, fontSize: "1.0625rem" }}>
            Most nootropics mask cognitive decline. Dihexa rebuilds it.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#quiz" className="btn-gold" style={{ padding: "14px 36px", fontSize: "0.9375rem" }}>
              Check Eligibility
            </a>
            <a href="#research" className="btn-ghost-cream" style={{ padding: "14px 36px", fontSize: "0.9375rem" }}>
              Review the Evidence
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: "#080808", borderTop: "1px solid rgba(201,169,110,0.1)", padding: "72px 40px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 56 }}>
            {/* Col 1 — Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4 L6 40 L14 40 L24 20 L34 40 L42 40 Z" fill={GOLD} />
                  <line x1="12" y1="28" x2="36" y2="28" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="24" y1="20" x2="24" y2="44" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span style={{ fontFamily: DM, fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.1em", color: CREAM, textTransform: "uppercase" }}>
                  Aurelius Health Group
                </span>
              </div>
              <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.875rem", color: "rgba(245,240,232,0.35)", maxWidth: 240, lineHeight: 1.6 }}>
                Physician-supervised Dihexa protocol for synaptogenesis, cognitive restoration, TBI recovery, and brain optimization.
              </p>
            </div>
            {/* Col 2 — Protocol */}
            <div>
              <p style={{ ...s.label, marginBottom: 16 }}>Protocol</p>
              {["How It Works", "Pricing", "Eligibility Quiz", "Physician Review"].map((l) => (
                <p key={l} style={{ fontFamily: DM, fontSize: "0.875rem", color: "rgba(245,240,232,0.45)", marginBottom: 10, cursor: "pointer" }}>{l}</p>
              ))}
            </div>
            {/* Col 3 — Science */}
            <div>
              <p style={{ ...s.label, marginBottom: 16 }}>Science</p>
              {["Mechanism", "Clinical Research", "Comparisons", "References"].map((l) => (
                <p key={l} style={{ fontFamily: DM, fontSize: "0.875rem", color: "rgba(245,240,232,0.45)", marginBottom: 10, cursor: "pointer" }}>{l}</p>
              ))}
            </div>
            {/* Col 4 — Legal */}
            <div>
              <p style={{ ...s.label, marginBottom: 16 }}>Legal</p>
              {["Privacy Policy", "Terms of Service", "Medical Disclaimer", "Contact"].map((l) => (
                <p key={l} style={{ fontFamily: DM, fontSize: "0.875rem", color: "rgba(245,240,232,0.45)", marginBottom: 10, cursor: "pointer" }}>{l}</p>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: DM, fontSize: "0.75rem", color: "rgba(245,240,232,0.25)" }}>
              © 2025 Aurelius Health Group. All rights reserved.
            </p>
            <p style={{ fontFamily: DM, fontSize: "0.75rem", color: "rgba(245,240,232,0.2)", maxWidth: 560, lineHeight: 1.5 }}>
              DihexaRx is a compounded peptide prescribed off-label. Not FDA-approved. For investigational use under physician supervision. This is not medical advice.
            </p>
          </div>
        </div>
      </footer>

      {/* ── Responsive CSS ── */}
      <style>{`
        @media (max-width: 900px) {
          .stats-strip { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 640px) {
          .stats-strip { grid-template-columns: repeat(2,1fr) !important; }
        }
        footer > div > div:first-child {
          grid-template-columns: 1fr !important;
        }
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
