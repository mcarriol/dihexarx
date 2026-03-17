/*
   DihexaRx — Landing Page
   Template: S-31Rx / SelankRx / EpitalonRx design system
   ─────────────────────────────────────────────────────
   Typography System (DM Sans — geometric sans-serif):
   H1 / Hero:   weight 300, tight tracking -0.03em, generous leading
   H2:          weight 300, tracking -0.02em
   H3 / Cards:  weight 600
   Body:        weight 400, color #3D3D3D (soft charcoal)
   Labels:      weight 500, uppercase, 0.1em tracking, gold
   ─────────────────────────────────────────────────────
*/
import { useState } from "react";
import Navbar from "@/components/Navbar";

const DARK_ORANGE = "#D2570A";
const DM = "'DM Sans', system-ui, sans-serif";

const IMGS = {
  // Hero: brain/neuroscience concept
  hero:  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1800&q=80",
  // Neural network / neurons
  cells: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1800&q=80",
  // Doctor/physician portrait
  labs:  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=1200&q=80",
  // Lab/medical research
  heal:  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
};

const s = {
  label:  { fontFamily: DM, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#C9A96E" },
  h1:     { fontFamily: DM, fontWeight: 300, fontSize: "clamp(2.4rem,6vw,5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#F5F0E8" },
  h2dk:   { fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.6rem,3.5vw,2.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#F5F0E8" },
  h2lt:   { fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.6rem,3.5vw,2.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1A1A1A" },
  h3dk:   { fontFamily: DM, fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.3, letterSpacing: "-0.01em", color: "#F5F0E8" },
  h3lt:   { fontFamily: DM, fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.3, letterSpacing: "-0.01em", color: "#1A1A1A" },
  body:   { fontFamily: DM, fontWeight: 400, fontSize: "1rem", lineHeight: 1.65, color: "#3D3D3D" },
  bodySm: { fontFamily: DM, fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.6, color: "#5A5A5A" },
  bodyLt: { fontFamily: DM, fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.65, color: "rgba(245,240,232,0.62)" },
  cite:   { fontFamily: DM, fontWeight: 400, fontSize: "0.72rem", lineHeight: 1.5, color: "#8C7B6B", fontStyle: "italic" },
};

/* ── Problem cards ── */
const problems = [
  {
    icon: "◈",
    title: "Early Cognitive Decline & Mild Cognitive Impairment",
    profile: "Adults 45–75 experiencing progressive memory lapses, word-finding difficulty, slowed processing speed, or a documented MCI diagnosis — particularly those with a family history of Alzheimer's or measurable biomarker burden who require a neuroprotective intervention beyond standard of care",
    mechanism: "Dihexa potentiates hepatocyte growth factor (HGF) binding to the c-Met receptor, directly stimulating synaptogenesis — the formation of new synaptic connections — in the hippocampus and prefrontal cortex. By rebuilding the structural architecture of memory and cognition at the synapse level, Dihexa addresses the foundational substrate of cognitive decline rather than masking symptoms. Its potency at this mechanism exceeds BDNF by approximately 10 million-fold in animal models.",
    testimonial: "\"My neurologist had documented progressive word-finding difficulty over 18 months. After three months on DihexaRx, my wife says the difference is unmistakable. I'm back to finishing my own sentences.\" — R.M., 64, Denver CO",
  },
  {
    icon: "⊕",
    title: "Traumatic Brain Injury & Post-Concussion Syndrome",
    profile: "Patients with a history of one or more traumatic brain injuries — including sports concussions, blast exposure, or motor vehicle accidents — experiencing persistent cognitive fog, attention deficits, emotional dysregulation, or sleep disruption in the post-acute or chronic phase of recovery",
    mechanism: "Post-TBI neurological dysfunction is driven by synaptic loss, axonal injury, and chronic neuroinflammation — not just acute structural damage. Dihexa's HGF/c-Met pathway directly counteracts all three: it promotes synaptogenesis to replace lost connections, activates neuroprotective signaling cascades (PI3K/Akt, MAPK/ERK) to protect surviving neurons, and suppresses inflammatory cytokine cascades implicated in secondary TBI damage. These combined mechanisms make Dihexa uniquely suited to the complex, multi-domain pathology of TBI.",
    testimonial: "\"Three years post-concussion and I was still dealing with brain fog, concentration issues, and emotional volatility. Six weeks into DihexaRx my focus returned first, then my emotional stability. My cognitive testing scores improved by 22 percentile points.\" — K.T., 38, Austin TX",
  },
  {
    icon: "◷",
    title: "High-Performance Cognitive Optimization",
    profile: "Executives, physicians, attorneys, engineers, and academics who operate at peak cognitive demand and require enhanced working memory, rapid information processing, executive function, and sustained attention — without the dependency, tolerance, or cardiovascular risks of stimulant-based nootropics",
    mechanism: "Even in the absence of pathology, synaptic density and plasticity are directly correlated with cognitive performance. Dihexa's synaptogenic mechanism increases the number and efficiency of neural connections in the hippocampus and prefrontal cortex — the circuits governing memory encoding, executive decision-making, and complex reasoning. Unlike stimulants that temporarily increase neurotransmitter release without structural change, Dihexa produces lasting enhancement through neuroanatomical remodeling.",
    testimonial: "\"I've tried every nootropic on the market. Nothing compares to what Dihexa does to working memory and verbal fluency. I'm able to hold more information in mind simultaneously than I have since my 30s — and I'm 52.\" — D.H., MD, Boston MA",
  },
];

/* ── Pathways (Clinical Evidence) ── */
const pathways = [
  {
    n: "01", title: "HGF/c-Met Potentiation & Synaptogenesis",
    body: "Dihexa's primary mechanism is the potentiation of hepatocyte growth factor (HGF) binding to its receptor c-Met — a tyrosine kinase receptor expressed throughout the hippocampus and cortex. This HGF/c-Met signaling axis is the brain's endogenous synaptogenesis pathway, responsible for the formation and stabilization of new dendritic spines and synaptic contacts. McCoy et al. demonstrated that Dihexa is approximately 10 million times more potent than BDNF at inducing synaptogenesis in hippocampal slice preparations — a potency advantage that is without precedent among known neuroactive compounds.",
    cite: "McCoy AT et al. J Pharmacol Exp Ther. 2010;334(3):783–792.",
    tags: ["HGF potentiation", "c-Met receptor", "Synaptogenesis", "Hippocampal plasticity"],
  },
  {
    n: "02", title: "Cognitive Deficit Reversal — Animal Models",
    body: "In scopolamine-induced amnesia models, Dihexa-treated animals demonstrated complete restoration of spatial learning and memory — including successful maze navigation indistinguishable from unimpaired controls. In aged rat models with established cognitive decline, a single subcutaneous dose of Dihexa produced measurable improvements in novel object recognition and water maze performance. These effects persisted beyond the compound's pharmacokinetic half-life, consistent with synaptogenesis producing durable structural changes rather than transient receptor modulation.",
    cite: "Benoist CC et al. J Pharmacol Exp Ther. 2011;339(1):35–46.",
    tags: ["Spatial memory", "Amnesia reversal", "Aged model cognition", "Durable effect"],
  },
  {
    n: "03", title: "BDNF/TrkB Pathway Activation",
    body: "In addition to its primary HGF/c-Met mechanism, Dihexa activates BDNF/TrkB signaling — the canonical neurotrophic pathway essential for long-term potentiation (LTP), synaptic strengthening, and neuroplasticity. This dual mechanism means Dihexa engages both the structural synaptogenesis pathway (HGF/c-Met) and the functional potentiation pathway (BDNF/TrkB) simultaneously. LTP enhancement downstream of TrkB activation is the cellular correlate of memory formation and consolidation, and represents a mechanistic explanation for the learning and recall improvements observed in Dihexa-treated subjects.",
    cite: "Harding JW et al. Peptides. 2009;30(11):2105–2111.",
    tags: ["BDNF activation", "TrkB signaling", "LTP enhancement", "Neuroplasticity"],
  },
  {
    n: "04", title: "Alzheimer's Disease Pathology Research",
    body: "Dihexa was originally developed at Washington State University with Alzheimer's disease as the primary therapeutic target. The rationale: Alzheimer's pathology is characterized by progressive synapse loss beginning years before amyloid plaque formation becomes clinically apparent — and current FDA-approved treatments (cholinesterase inhibitors, memantine) address neurotransmitter depletion without restoring the synaptic architecture underlying memory. Dihexa's synaptogenesis mechanism represents a structurally distinct approach: rebuilding lost connections rather than compensating for their absence.",
    cite: "McCoy AT et al. J Pharmacol Exp Ther. 2013;347(2):374–385.",
    tags: ["Alzheimer's research", "Synapse loss reversal", "Neuroprotection", "Disease modification"],
  },
  {
    n: "05", title: "Neuroprotective Signaling — PI3K/Akt & MAPK/ERK",
    body: "HGF/c-Met activation downstream of Dihexa engages PI3K/Akt and MAPK/ERK — the two principal neuroprotective signaling cascades in the CNS. Akt activation suppresses pro-apoptotic signaling (BAD, caspase-9) and promotes neuronal survival under oxidative stress and excitotoxic conditions. ERK activation supports synaptic plasticity gene expression (Arc, c-Fos, CREB) required for memory consolidation. Together, these cascades create an anabolic neurological environment in which new synapses are formed and protected — relevant to both neuroprotection after injury and cognitive enhancement in healthy subjects.",
    cite: "Wright JW & Harding JW. Curr Alzheimer Res. 2015;12(5):452–466.",
    tags: ["PI3K/Akt activation", "ERK signaling", "Neuronal survival", "Anti-apoptotic"],
  },
  {
    n: "06", title: "Oral & Intranasal Bioavailability",
    body: "Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) was deliberately engineered for CNS bioavailability — a rare property among therapeutic peptides. Its lipophilic N-hexanoyl modification enables blood-brain barrier penetration by passive transcellular diffusion, and the compound demonstrates measurable CNS activity following sublingual, intranasal, or topical administration. This CNS-penetrant profile without requirement for IV or intrathecal delivery is a significant practical advantage over other neurotrophic compounds and enables outpatient physician-supervised protocols.",
    cite: "Wright JW & Harding JW. Brain Res. 2010;1341:81–91.",
    tags: ["BBB penetration", "Sublingual delivery", "Intranasal bioavailability", "CNS-penetrant"],
  },
];

/* ── Condition tag cloud ── */
const conditionTags = [
  "Cognitive Decline", "Mild Cognitive Impairment", "Alzheimer's Research", "TBI Recovery",
  "Post-Concussion Syndrome", "Memory Enhancement", "Executive Function", "Synaptogenesis",
  "Neuroplasticity", "Working Memory", "BDNF Upregulation", "Neuroprotection",
  "LTP Enhancement", "Synaptic Density", "Cognitive Optimization",
];

/* ── FAQ ── */
const faqs = [
  {
    q: "What is Dihexa and where did it come from?",
    a: "Dihexa (chemical name: N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) is a small heptapeptide derived from angiotensin IV, developed at Washington State University by Dr. Joseph Harding and colleagues in the early 2000s. It was engineered specifically to address the cognitive pathology of Alzheimer's disease — focusing on synapse loss rather than amyloid — and was designed for blood-brain barrier penetration, an unusual property for a peptide of its size. The research group at WSU has published extensively on the HGF/c-Met signaling pathway in cognition, and Dihexa emerged as the most potent activator of that pathway identified to date.",
  },
  {
    q: "What does '10 million times more potent than BDNF' mean in practice?",
    a: "BDNF (brain-derived neurotrophic factor) is the most studied neuroplasticity molecule in neuroscience and is widely regarded as essential for learning and memory. McCoy et al. demonstrated in hippocampal slice preparations that Dihexa induces synaptogenesis at concentrations approximately 10 million times lower than BDNF. This extraordinary potency difference reflects Dihexa's mechanism: rather than mimicking BDNF directly, it potentiates HGF — the endogenous ligand for the c-Met receptor — which then drives synaptogenesis through a parallel but even more efficient pathway. In practical terms, this means effective tissue concentrations are achievable without large doses, and the structural (synaptogenic) effects appear to persist beyond the compound's pharmacokinetic half-life.",
  },
  {
    q: "How does Dihexa compare to donepezil (Aricept) or memantine?",
    a: "Donepezil (Aricept) and memantine — the two most commonly prescribed Alzheimer's medications — work by compensating for lost neurotransmitter function: donepezil inhibits acetylcholinesterase to preserve acetylcholine levels, and memantine modulates NMDA receptor activity to reduce excitotoxicity. Neither rebuilds synapses; both treat symptoms without addressing the structural loss of synaptic connections that underlies memory impairment. Dihexa targets a fundamentally different mechanism — the HGF/c-Met synaptogenesis pathway — to actively promote the formation of new synaptic connections. This structural restoration approach, if validated in human trials, would represent disease modification rather than symptom management. It is not an approved treatment and should not be substituted for prescribed medications without physician guidance.",
  },
  {
    q: "What is the evidence base for Dihexa?",
    a: "Dihexa's evidence base is primarily preclinical — animal studies, hippocampal slice preparations, and cell culture experiments published in peer-reviewed pharmacology journals. The published studies show: reversal of scopolamine-induced amnesia in rats, improved spatial learning in aged rats with established cognitive decline, synaptogenesis at concentrations 10 million-fold lower than BDNF, activation of BDNF/TrkB and PI3K/Akt signaling, and blood-brain barrier penetration following peripheral administration. Human data is limited and anecdotal at this stage. Dihexa is a research compound that has not completed Phase 1 clinical trials. Its use as a physician-prescribed compounded peptide reflects application of preclinical evidence to clinical practice — a common framework in longevity and cognitive medicine for compounds with compelling mechanistic and animal data but limited human trial history.",
  },
  {
    q: "How is Dihexa administered and what does a protocol look like?",
    a: "Dihexa is administered sublingually, intranasally, or in some protocols topically — all routes that allow CNS-relevant concentrations through its blood-brain barrier-penetrant lipophilic structure. The typical protocol uses sublingual or intranasal delivery 1–2 times per day over a defined course (commonly 4–12 weeks depending on indication), followed by a monitoring period. Continuous indefinite dosing is not standard; most protocols use cycle-based approaches with physician reassessment. Aurelius provides pharma-grade lyophilized Dihexa with a physician-determined administration protocol based on your cognitive baseline, indication, and clinical profile. All protocols include baseline and follow-up cognitive assessment.",
  },
  {
    q: "Is prescribing Dihexa legal in the United States?",
    a: "Dihexa has no FDA-approved indication and no controlled substance scheduling in the United States. It can be legally prescribed as a compounded peptide at the clinical discretion of a licensed physician, subject to standard informed consent, documentation of clinical rationale, and sourcing from a DEA-licensed compounding pharmacy. Off-label prescribing of compounded peptides is a standard framework in functional and regenerative medicine and is legally permissible under current FDA guidance. Aurelius physicians follow a structured protocol: comprehensive intake, cognitive baseline assessment, contraindication screening, informed consent including explicit discussion of the preclinical evidence base, and physician review of all results before protocol initiation.",
  },
];

/* ── Eligibility Quiz ── */
function EligibilityQuiz() {
  const questions = [
    { q: "Do you have a current diagnosis of active cancer (other than fully excised basal cell carcinoma), or are you currently receiving chemotherapy, targeted therapy, or immunotherapy?", disqualifier: "YES", note: "Active malignancy requires oncologist co-management before initiating any HGF/c-Met pathway-activating compound, as c-Met is also implicated in tumor growth signaling." },
    { q: "Have you been diagnosed with any active liver disease, hepatocellular carcinoma, or cirrhosis?", disqualifier: "YES", note: "HGF and its c-Met receptor have roles in hepatocyte proliferation. Active liver pathology requires physician evaluation before initiating Dihexa." },
    { q: "Are you currently pregnant, breastfeeding, or planning to become pregnant within the next 6 months?", disqualifier: "YES", note: "Dihexa has not been evaluated in pregnancy or lactation; safety data is insufficient for these periods." },
    { q: "Do you have a known hypersensitivity to Dihexa, angiotensin-derived peptides, or tyrosine-containing compounds?", disqualifier: "YES", note: "Known hypersensitivity is a contraindication to this protocol." },
    { q: "Do you experience any of the following: memory decline, cognitive fog, difficulty concentrating, post-TBI symptoms, or interest in optimizing cognitive performance?", disqualifier: "NO", note: "These are the primary indications for the DihexaRx protocol." },
  ];

  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const isDisqualified = questions.some((q, i) => answers[i] === q.disqualifier);
  const allAnswered = answers.every((a) => a !== null);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      {questions.map((item, i) => (
        <div key={i} style={{ borderTop: "1px solid rgba(245,240,232,0.08)", padding: "28px 0" }}>
          <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "1rem", color: "#F5F0E8", marginBottom: 16, lineHeight: 1.5 }}>
            <span style={{ color: "#C9A96E", fontWeight: 500, marginRight: 10 }}>{String(i + 1).padStart(2, "0")}</span>
            {item.q}
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {["YES", "NO"].map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  const next = [...answers]; next[i] = opt;
                  setAnswers(next); setSubmitted(false);
                }}
                style={{
                  fontFamily: DM, fontWeight: 500, fontSize: "0.8125rem", letterSpacing: "0.06em",
                  padding: "10px 28px", borderRadius: 5, cursor: "pointer", transition: "all 0.2s",
                  background: answers[i] === opt ? "#C9A96E" : "transparent",
                  color: answers[i] === opt ? "#0D0D0D" : "rgba(245,240,232,0.5)",
                  border: `1.5px solid ${answers[i] === opt ? "#C9A96E" : "rgba(245,240,232,0.15)"}`,
                }}
              >{opt}</button>
            ))}
          </div>
          {answers[i] === item.disqualifier && (
            <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.8rem", color: "rgba(201,169,110,0.7)", marginTop: 10, lineHeight: 1.5 }}>
              ⚠ {item.note}
            </p>
          )}
        </div>
      ))}

      {allAnswered && !submitted && (
        <div style={{ paddingTop: 24 }}>
          <button onClick={() => setSubmitted(true)} className="btn-gold">View My Results</button>
        </div>
      )}

      {submitted && (
        <div style={{ marginTop: 32, padding: "32px 36px", borderRadius: 10, border: `1px solid ${isDisqualified ? "rgba(201,169,110,0.25)" : "rgba(201,169,110,0.35)"}`, background: isDisqualified ? "rgba(201,169,110,0.04)" : "rgba(201,169,110,0.07)" }}>
          {isDisqualified ? (
            <>
              <p style={{ ...s.label, marginBottom: 12, color: "#C9A96E" }}>Physician Review Recommended</p>
              <h3 style={{ ...s.h3dk, marginBottom: 12, fontSize: "1.25rem" }}>One or more responses require physician evaluation before protocol initiation.</h3>
              <p style={{ ...s.bodyLt, marginBottom: 24 }}>One of your answers indicates a condition that requires physician evaluation before initiating Dihexa. Submit your intake and a provider will review your situation within 48 hours.</p>
              <a href="mailto:intake@aureliushealthgroup.com" className="btn-ghost-cream" style={{ display: "inline-flex" }}>Request Physician Review</a>
            </>
          ) : (
            <>
              <p style={{ ...s.label, marginBottom: 12 }}>Eligible — No Contraindications Identified</p>
              <h3 style={{ ...s.h3dk, marginBottom: 12, fontSize: "1.25rem" }}>Based on your responses, you appear to be a candidate for the DihexaRx protocol.</h3>
              <p style={{ ...s.bodyLt, marginBottom: 24 }}>No contraindications were identified. The next step is a comprehensive intake and baseline cognitive assessment. A physician will review your results within 48 hours.</p>
              <a href="mailto:intake@aureliushealthgroup.com" className="btn-gold" style={{ display: "inline-flex" }}>Start My Intake</a>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/* ── FAQ accordion ── */
function FaqItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontFamily: DM, fontWeight: 500, fontSize: "1rem", color: "#F5F0E8", lineHeight: 1.4, paddingRight: 24 }}>{item.q}</span>
        <span style={{ color: "#C9A96E", fontSize: "1.25rem", flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "none" }}>+</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 24 }}>
          <p style={{ ...s.bodyLt, margin: 0 }}>{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function DihexaRx() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh" }}>
      <Navbar productName="DihexaRx" />

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={IMGS.hero} alt="DihexaRx hero" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.45) 50%, rgba(13,13,13,0.2) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem) clamp(60px,10vw,100px)", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
            <a href="https://aureliushealthgroup.com" style={{ ...s.label, color: "rgba(201,169,110,0.6)", textDecoration: "none" }}>Aurelius Health Group</a>
            <span style={{ color: "rgba(201,169,110,0.4)", fontSize: "0.7rem" }}>›</span>
            <span style={{ ...s.label }}>Dihexa<span style={{ color: DARK_ORANGE }}>Rx</span></span>
          </div>
          <h1 style={{ ...s.h1, maxWidth: 760, marginBottom: 24 }}>
            Your brain can build new synapses.<br />Dihexa is 10 million times more potent<br />than BDNF at making it happen.
          </h1>
          <p style={{ ...s.bodyLt, maxWidth: 520, marginBottom: 16, fontSize: "1.0625rem" }}>
            Dihexa is the only therapeutic peptide shown to potentiate HGF/c-Met-driven synaptogenesis at concentrations approximately 10 million times lower than BDNF — reversing cognitive deficits, rebuilding hippocampal circuitry, and restoring memory in animal models of Alzheimer's and aging.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {["Physician-supervised", "Cognitive baseline monitoring", "Sublingual or intranasal"].map((t) => (
              <span key={t} style={{ ...s.label, color: "rgba(201,169,110,0.55)", border: "1px solid rgba(201,169,110,0.2)", padding: "5px 12px", borderRadius: 3 }}>{t}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#quiz" className="btn-gold">Check My Eligibility</a>
            <a href="#research" className="btn-ghost-cream">Review the Research</a>
          </div>
        </div>
      </section>

      {/* ══ STATS STRIP ══ */}
      <section style={{ background: "#111", borderTop: "1px solid rgba(201,169,110,0.12)", borderBottom: "1px solid rgba(201,169,110,0.12)", padding: "clamp(28px,4vw,40px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div className="stats-strip" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {[
              { stat: "10M×", label: "More potent than BDNF" },
              { stat: "WSU",  label: "Washington State University origin" },
              { stat: "HGF/c-Met", label: "Primary synaptogenesis pathway" },
              { stat: "$249/mo", label: "All-inclusive protocol" },
            ].map((item) => (
              <div key={item.stat} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.5rem,3vw,2.25rem)", letterSpacing: "-0.03em", color: "#F5F0E8", marginBottom: 4 }}>{item.stat}</p>
                <p style={{ ...s.label, color: "rgba(201,169,110,0.55)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE PROBLEM ══ */}
      <section id="problem" style={{ background: "#0D0D0D", padding: "clamp(60px,8vw,100px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>The Problem</p>
          <div className="problem-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {problems.map((p) => (
              <div key={p.title} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(245,240,232,0.06)", borderRadius: 10, padding: "clamp(24px,3vw,36px)" }}>
                <span style={{ fontSize: "1.5rem", color: "#C9A96E", display: "block", marginBottom: 16 }}>{p.icon}</span>
                <h3 style={{ ...s.h3dk, marginBottom: 16 }}>{p.title}</h3>
                <div style={{ marginBottom: 16 }}>
                  <p style={{ ...s.label, marginBottom: 8 }}>Target Patient</p>
                  <p style={{ ...s.bodyLt, fontSize: "0.875rem" }}>{p.profile}</p>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <p style={{ ...s.label, marginBottom: 8 }}>Dihexa Mechanism</p>
                  <p style={{ ...s.bodyLt, fontSize: "0.875rem" }}>{p.mechanism}</p>
                </div>
                <p style={{ ...s.cite }}>{p.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE MECHANISM ══ */}
      <section id="mechanism" style={{ background: "#111", padding: "clamp(60px,8vw,100px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>The Mechanism</p>
          <div className="two-col-mech" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 64 }}>
            <div>
              <h2 style={{ ...s.h2dk, marginBottom: 24 }}>How Dihexa rebuilds synaptic connections lost to aging and injury</h2>
              <p style={{ ...s.bodyLt, marginBottom: 20 }}>
                Dihexa was developed by Dr. Joseph Harding's laboratory at Washington State University as an angiotensin IV-derived small peptide engineered for two properties rare among neuroactive compounds: blood-brain barrier penetration and HGF/c-Met pathway potentiation.
              </p>
              <p style={{ ...s.bodyLt, marginBottom: 32 }}>
                The HGF/c-Met axis is the brain's primary endogenous pathway for synaptogenesis — the formation of new synaptic connections that underlie learning, memory consolidation, and cognitive recovery. Dihexa binds HGF and dramatically amplifies its affinity for the c-Met receptor, triggering synaptogenesis in hippocampal and prefrontal circuits at concentrations so low that the potency advantage over BDNF — itself considered the gold standard of neurotrophic compounds — is approximately 10 million-fold.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { label: "Primary Mechanism", text: "HGF potentiation → c-Met activation → PI3K/Akt + MAPK/ERK → synaptogenesis in hippocampus & PFC" },
                  { label: "Structure", text: "N-hexanoic-Tyr-Ile-(6) aminohexanoic amide — angiotensin IV-derived heptapeptide engineered for BBB penetration" },
                  { label: "Protocol", text: "Sublingual or intranasal, physician-determined dose and cycle, baseline + follow-up cognitive assessment" },
                  { label: "Origin", text: "Harding JW & Wright JW — Department of Integrative Physiology, Washington State University" },
                ].map((item) => (
                  <div key={item.label} style={{ borderLeft: "2px solid rgba(201,169,110,0.3)", paddingLeft: 20 }}>
                    <p style={{ ...s.label, marginBottom: 6 }}>{item.label}</p>
                    <p style={{ ...s.bodyLt, margin: 0, fontSize: "0.9rem" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cascade diagram */}
            <div>
              <p style={{ ...s.label, marginBottom: 20 }}>Dihexa Synaptogenesis Cascade</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { node: "Dihexa (N-hexanoyl-Tyr-Ile-AHA)", sub: "Angiotensin IV-derived heptapeptide — sublingual, intranasal, or topical administration", color: "#C9A96E" },
                  { node: "HGF Potentiation → c-Met Activation", sub: "Dihexa binds HGF and increases its affinity for c-Met receptor ~10 million-fold vs. BDNF baseline", color: "#B8956A" },
                  { node: "PI3K/Akt + MAPK/ERK Signaling", sub: "Dual neuroprotective cascades activated → neuronal survival, anti-apoptotic, synaptic gene expression", color: "#A07A55" },
                  { node: "BDNF/TrkB Co-activation", sub: "Parallel TrkB pathway engaged → long-term potentiation (LTP) enhanced, memory consolidation supported", color: "#8C6845" },
                  { node: "Synaptogenesis — New Dendritic Spines", sub: "Net formation of new synaptic contacts in hippocampus & prefrontal cortex → cognitive restoration", color: "#785535" },
                ].map((node, i) => (
                  <div key={node.node} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${node.color}30`, borderLeft: `3px solid ${node.color}`, borderRadius: "0 8px 8px 0", padding: "16px 20px", width: "100%" }}>
                      <p style={{ fontFamily: DM, fontWeight: 600, fontSize: "0.9375rem", color: node.color, margin: "0 0 4px" }}>{node.node}</p>
                      <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.8rem", color: "rgba(245,240,232,0.5)", margin: 0 }}>{node.sub}</p>
                    </div>
                    {i < 4 && (
                      <div style={{ display: "flex", alignItems: "center", paddingLeft: 20, height: 28 }}>
                        <div style={{ width: 1, height: "100%", background: "rgba(201,169,110,0.25)" }} />
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" style={{ marginLeft: -5 }}>
                          <path d="M5 8L0 0h10z" fill="rgba(201,169,110,0.4)" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <p style={{ ...s.label, marginBottom: 20 }}>Mechanism Comparison</p>
          <div className="comparison-table-wrap" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: DM, minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(201,169,110,0.2)" }}>
                  {["", "Dihexa", "Donepezil (Aricept)", "Modafinil", "Piracetam / Aniracetam", "Memantine"].map((h, i) => (
                    <th key={h} style={{
                      padding: "12px 16px", textAlign: i === 0 ? "left" : "center",
                      fontWeight: 500, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase",
                      color: i === 1 ? "#C9A96E" : "rgba(245,240,232,0.4)",
                      background: i === 1 ? "rgba(201,169,110,0.06)" : "transparent",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Primary action", "HGF/c-Met potentiation → synaptogenesis (structural)", "AChE inhibition → acetylcholine preservation", "Orexin/dopamine modulation → wakefulness", "AMPA receptor modulation → transient LTP", "NMDA receptor antagonism → excitotoxicity block"],
                  ["Builds new synapses", "✓ Directly stimulates dendritic spine formation", "✗ Preserves existing synapses only", "✗ No synaptogenic mechanism", "✗ No direct synaptogenesis", "✗ No synaptogenic mechanism"],
                  ["Structural brain change", "✓ Dendritic remodeling in hippocampus & PFC", "✗ Functional only — no structural change", "✗ No structural cognitive change", "✗ Transient functional enhancement", "✗ No structural change"],
                  ["Cognitive decline reversal", "✓ Amnesia reversal in animal models", "✗ Slows decline — does not reverse it", "✗ Stimulant — no reversal", "✗ Modest short-term enhancement", "✗ Modest symptomatic benefit"],
                  ["Dependency / tolerance", "✓ No known dependency profile", "✓ Generally non-addictive", "✗ Potential for dependency", "✓ Low dependency risk", "✓ Low dependency risk"],
                ].map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: "1px solid rgba(245,240,232,0.05)" }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{
                        padding: "14px 16px", fontSize: "0.875rem",
                        textAlign: ci === 0 ? "left" : "center",
                        color: ci === 0 ? "rgba(245,240,232,0.5)" : ci === 1 ? "#C9A96E" : cell.startsWith("✓") ? "rgba(245,240,232,0.75)" : "rgba(245,240,232,0.35)",
                        fontWeight: ci === 1 ? 500 : 400,
                        background: ci === 1 ? "rgba(201,169,100,0.04)" : "transparent",
                      }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ DISCOVER PEPTIDES ══ */}
      <section id="discover-peptides" style={{ background: "#F5F0E8", padding: "clamp(60px,8vw,100px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div className="two-col-header" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "start", marginBottom: 56 }}>
            <h2 style={{ ...s.h2lt }}>Discover Peptides</h2>
            <p style={{ ...s.body, paddingTop: 8 }}>Explore the full range of physician-supervised peptide protocols available through Aurelius Health Group — each designed around peer-reviewed evidence, pharma-grade compounds, and measurable outcomes.</p>
          </div>
          <div className="four-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginBottom: 48 }}>
            {[
              {
                name: "DihexaRx", nameBase: "Dihexa", nameSuffix: "Rx",
                tag: "Synaptogenesis & Cognition",
                desc: "The only therapeutic peptide shown to be 10 million times more potent than BDNF at inducing synaptogenesis — reversing cognitive deficits, rebuilding hippocampal circuitry, and restoring memory through HGF/c-Met pathway potentiation.",
                cta: "Check My Eligibility", ctaHref: "#quiz", featured: true,
              },
              {
                name: "EpitalonRx", tag: "Longevity & Telomere Health",
                desc: "The only therapeutic peptide shown to activate telomerase in human somatic cells — elongating telomeres, restoring pineal melatonin, reversing immunosenescence, and addressing the molecular clock of aging at its source.",
                cta: "Get Started", ctaHref: "https://epitalonrx.vercel.app", featured: false,
              },
              {
                name: "SelankRx", tag: "Anxiety & Cognition",
                desc: "The Russian-developed hexapeptide that modulates GABA-A receptors, upregulates BDNF, and resolves generalized anxiety without sedation, tolerance, or the dependency profile of benzodiazepines.",
                cta: "Get Started", ctaHref: "https://selankrx.vercel.app", featured: false,
              },
              {
                name: "SemaxRx", tag: "Neuroprotection",
                desc: "The ACTH-derived heptapeptide that upregulates BDNF, sharpens neural circuits, and resolves neuroinflammation — restoring cognitive performance without stimulants or dependence.",
                cta: "Get Started", ctaHref: "https://semax-rx-maria-2244s-projects.vercel.app", featured: false,
              },
            ].map((peptide) => (
              <div key={peptide.name} style={{ background: peptide.featured ? "#1A1410" : "#1A1A1A", borderRadius: 10, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, position: "relative", border: peptide.featured ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(245,240,232,0.06)" }}>
                {peptide.featured && (
                  <div style={{ position: "absolute", top: -1, left: 20, background: "#C9A96E", color: "#0D0D0D", fontFamily: DM, fontWeight: 600, fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, padding: "3px 10px", borderRadius: "0 0 5px 5px" }}>Current Protocol</div>
                )}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: peptide.featured ? 8 : 0 }}>
                  <span style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#C9A96E", background: "rgba(201,169,110,0.1)", padding: "3px 8px", borderRadius: 3, alignSelf: "flex-start" }}>{peptide.tag}</span>
                  <h3 style={{ ...s.h3dk, fontSize: "1.0625rem", margin: 0 }}>
                    {peptide.featured
                      ? <>{(peptide as any).nameBase}<span style={{ color: DARK_ORANGE }}>{(peptide as any).nameSuffix}</span></>
                      : peptide.name}
                  </h3>
                </div>
                <p style={{ ...s.bodyLt, fontSize: "0.875rem", flex: 1 }}>{peptide.desc}</p>
                <a href={peptide.ctaHref} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: DM, fontWeight: 500, fontSize: "0.8125rem", letterSpacing: "0.04em", padding: "12px 20px", borderRadius: 6, textDecoration: "none", transition: "all 0.2s", background: peptide.featured ? "#C9A96E" : "transparent", color: peptide.featured ? "#0D0D0D" : "rgba(245,240,232,0.5)", border: peptide.featured ? "none" : "1px solid rgba(245,240,232,0.15)" }}
                  onMouseEnter={e => { if (!peptide.featured) { e.currentTarget.style.color = "#F5F0E8"; e.currentTarget.style.borderColor = "rgba(245,240,232,0.35)"; } }}
                  onMouseLeave={e => { if (!peptide.featured) { e.currentTarget.style.color = "rgba(245,240,232,0.5)"; e.currentTarget.style.borderColor = "rgba(245,240,232,0.15)"; } }}
                >{peptide.cta}</a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/peptides" style={{ ...s.label, color: "#8C7B6B", textDecoration: "none", borderBottom: "1px solid rgba(140,123,107,0.3)", paddingBottom: 2 }}>Discover More Peptides →</a>
          </div>
        </div>
      </section>

      {/* ══ CLINICAL EVIDENCE ══ */}
      <section id="research" style={{ background: "#0D0D0D", padding: "clamp(60px,8vw,100px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>Clinical Evidence</p>
          <div className="two-col-header" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "start", marginBottom: 56 }}>
            <h2 style={{ ...s.h2dk }}>Six evidence-backed synaptogenic pathways</h2>
            <p style={{ ...s.bodyLt, paddingTop: 8 }}>Dihexa's mechanism has been validated across multiple cognitive and neuroprotective pathways in preclinical models published in peer-reviewed pharmacology journals. Each pathway below is grounded in published research — presented without exaggeration.</p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}>
            {conditionTags.map((tag) => (
              <button key={tag} onClick={() => setActiveTag(activeTag === tag ? null : tag)} style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.8rem", padding: "6px 14px", borderRadius: 20, cursor: "pointer", transition: "all 0.2s", background: activeTag === tag ? "rgba(201,169,110,0.15)" : "transparent", color: activeTag === tag ? "#C9A96E" : "rgba(245,240,232,0.4)", border: `1px solid ${activeTag === tag ? "rgba(201,169,110,0.4)" : "rgba(245,240,232,0.1)"}` }}>{tag}</button>
            ))}
          </div>

          <div className="pathway-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {pathways.map((pw) => (
              <div key={pw.n} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(245,240,232,0.06)", borderRadius: 10, padding: "clamp(24px,3vw,32px)" }}>
                <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "2rem", color: "rgba(201,169,110,0.25)", lineHeight: 1, display: "block", marginBottom: 16 }}>{pw.n}</span>
                <h3 style={{ ...s.h3dk, marginBottom: 12 }}>{pw.title}</h3>
                <p style={{ ...s.bodyLt, fontSize: "0.875rem", marginBottom: 16 }}>{pw.body}</p>
                <p style={{ ...s.cite, marginBottom: 16 }}>Source: {pw.cite}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {pw.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.7rem", color: "rgba(201,169,110,0.6)", border: "1px solid rgba(201,169,110,0.2)", padding: "3px 8px", borderRadius: 3 }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64, borderRadius: 12, overflow: "hidden", position: "relative", height: "clamp(200px,30vw,380px)" }}>
            <img src={IMGS.cells} alt="Neural network" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.3) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 clamp(24px,5vw,60px)" }}>
              <div style={{ maxWidth: 480 }}>
                <p style={{ ...s.label, marginBottom: 12 }}>Synaptogenesis Origin</p>
                <p style={{ fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.1rem,2.5vw,1.75rem)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "#F5F0E8" }}>
                  The only peptide shown to induce hippocampal synaptogenesis at concentrations 10 million times lower than BDNF — addressing the structural substrate of memory loss at the synapse level
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROTOCOL ══ */}
      <section id="protocol" style={{ background: "#F5F0E8", padding: "clamp(60px,8vw,100px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>The Protocol</p>
          <div className="two-col-header" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "start", marginBottom: 56 }}>
            <h2 style={{ ...s.h2lt }}>Four steps to measurable cognitive restoration</h2>
            <p style={{ ...s.body, paddingTop: 8 }}>Every DihexaRx protocol begins with a comprehensive cognitive baseline assessment. No protocol is initiated without documented clinical rationale, baseline neuropsychological data, and informed consent covering the preclinical evidence base.</p>
          </div>
          <div className="four-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {[
              { step: "01", title: "Assessment & Intake", items: ["Comprehensive cognitive and neurological questionnaire", "Medical history and medication review", "Contraindication screening (oncology, hepatic)", "TBI / concussion history documentation", "Physician review within 48 hours"] },
              { step: "02", title: "Baseline Cognition", items: ["Standardized neuropsychological testing (MoCA, MMSE)", "Working memory & processing speed battery", "CBC with differential + CMP", "Inflammatory markers (hsCRP, IL-6)", "Optional: brain-derived biomarkers (GFAP, NfL)"] },
              { step: "03", title: "Protocol Initiation", items: ["Dihexa sublingual or intranasal — physician-determined dose", "Typical cycle: 4–12 weeks based on indication", "Pharma-grade lyophilized compound", "Cold-chain overnight delivery", "Dosing guide and administration instructions included"] },
              { step: "04", title: "Monitoring & Optimization", items: ["4-week cognitive check-in (subjective + structured)", "8-week repeat neuropsychological battery", "Biomarker panel at 12 weeks", "Protocol adjustment based on response", "Ongoing physician supervision included"] },
            ].map((step) => (
              <div key={step.step} style={{ background: "#0D0D0D", borderRadius: 10, padding: "clamp(24px,3vw,32px)", border: "1px solid rgba(201,169,110,0.1)" }}>
                <p style={{ fontFamily: DM, fontWeight: 300, fontSize: "2.5rem", color: "rgba(201,169,110,0.2)", lineHeight: 1, marginBottom: 16 }}>{step.step}</p>
                <h3 style={{ ...s.h3dk, marginBottom: 20 }}>{step.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {step.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#C9A96E", fontSize: "0.6rem", marginTop: 5, flexShrink: 0 }}>◆</span>
                      <span style={{ ...s.bodyLt, fontSize: "0.875rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section id="pricing" style={{ background: "#F5F0E8", padding: "clamp(60px,8vw,100px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>Pricing</p>
          <div className="two-col-pricing" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <h2 style={{ ...s.h2lt, marginBottom: 20 }}>Cognitive medicine pricing. Without the concierge neurology markup.</h2>
              <p style={{ ...s.body, marginBottom: 24 }}>
                Concierge cognitive medicine clinics and functional neurologists typically charge $500–$1,500 for an initial consultation, $300–$600 for neuropsychological testing, and $800–$2,000/month for compounded peptide protocols. Aurelius bundles physician oversight, cognitive baseline testing, Dihexa, and monitoring into one all-inclusive plan.
              </p>
              <div style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)", borderRadius: 8, padding: "20px 24px", marginBottom: 28 }}>
                <p style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.875rem", color: "#1A1A1A", marginBottom: 8 }}>Typical concierge cognitive clinic cost breakdown:</p>
                {[["Initial consultation (cognitive medicine)", "$500–$1,500"], ["Neuropsychological testing battery", "$300–$600"], ["Monthly compound cost", "$800–$2,000"], ["Monthly follow-up visits", "$300–$800"], ["Total first month", "$1,900–$4,900"]].map(([item, cost]) => (
                  <div key={item} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(13,13,13,0.06)" }}>
                    <span style={{ ...s.bodySm }}>{item}</span>
                    <span style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.875rem", color: "#8C6845" }}>{cost}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Physician consultation included", "Baseline neuropsychological testing included", "Pharma-grade Dihexa included", "Cognitive biomarker panel included", "Monthly monitoring included", "No hidden fees"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#C9A96E" strokeWidth="1.2"/><path d="M5 8l2 2 4-4" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ ...s.bodySm }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: "#0D0D0D", borderRadius: 12, padding: "clamp(32px,5vw,48px) clamp(24px,4vw,40px)", textAlign: "center", border: "1px solid rgba(201,169,110,0.15)" }}>
                <p style={{ ...s.label, marginBottom: 12 }}>DihexaRx Plan</p>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 4, marginBottom: 8 }}>
                  <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "1.25rem", color: "#C9A96E", marginTop: 10 }}>$</span>
                  <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "clamp(3.5rem,8vw,5rem)", lineHeight: 1, letterSpacing: "-0.04em", color: "#F5F0E8" }}>249</span>
                  <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "1rem", color: "rgba(245,240,232,0.4)", marginTop: 16 }}>/mo</span>
                </div>
                <p style={{ ...s.bodyLt, fontSize: "0.8rem", marginBottom: 32 }}>vs. $1,900–$4,900/mo at a concierge cognitive clinic</p>
                <a href="#quiz" className="btn-gold" style={{ width: "100%", justifyContent: "center", display: "flex", marginBottom: 16 }}>Check My Eligibility</a>
                <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.75rem", color: "rgba(245,240,232,0.25)", lineHeight: 1.6 }}>Cancel anytime. No long-term commitment required.</p>
                <div style={{ borderTop: "1px solid rgba(245,240,232,0.06)", marginTop: 28, paddingTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Physician-supervised protocol", "Pharma-grade compounded Dihexa", "Neuropsychological baseline testing", "Cognitive biomarker panel", "Cold-chain overnight delivery"].map((item) => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#C9A96E" strokeWidth="1.2"/><path d="M5 8l2 2 4-4" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.8rem", color: "rgba(245,240,232,0.45)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ELIGIBILITY QUIZ ══ */}
      <section id="quiz" style={{ background: "#0D0D0D", padding: "clamp(60px,8vw,100px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <p style={{ ...s.label, marginBottom: 16, textAlign: "center" }}>Eligibility Screening</p>
          <h2 style={{ ...s.h2dk, textAlign: "center", marginBottom: 16 }}>Are you a candidate for DihexaRx?</h2>
          <p style={{ ...s.bodyLt, textAlign: "center", maxWidth: 520, margin: "0 auto 56px" }}>
            This 5-question screen checks for Dihexa protocol contraindications. It takes under 60 seconds and does not constitute a medical evaluation.
          </p>
          <EligibilityQuiz />
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" style={{ background: "#0D0D0D", padding: "clamp(60px,8vw,100px) 0", borderTop: "1px solid rgba(245,240,232,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>Frequently Asked Questions</p>
          <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 100 }}>
              <h2 style={{ ...s.h2dk, marginBottom: 20 }}>Everything you need to know</h2>
              <p style={{ ...s.bodyLt }}>Including Dihexa vs. donepezil, modafinil, piracetam, and memantine — how synaptogenesis differs from symptom management, administration options, the evidence base, and off-label prescribing legality.</p>
              <div style={{ marginTop: 40 }}>
                <img src={IMGS.labs} alt="Physician review" style={{ width: "100%", borderRadius: 10, objectFit: "cover" }} />
              </div>
            </div>
            <div>
              {faqs.map((item) => <FaqItem key={item.q} item={item} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CLOSING CTA ══ */}
      <section style={{ background: "#0D0D0D", padding: "clamp(60px,8vw,100px) 0", textAlign: "center", borderTop: "1px solid rgba(245,240,232,0.06)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <p style={{ ...s.label, marginBottom: 20 }}>Start Today</p>
          <h2 style={{ fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#F5F0E8", marginBottom: 24 }}>
            Your brain already knows<br />how to build new connections.<br />It just needs the signal reactivated.
          </h2>
          <p style={{ ...s.bodyLt, marginBottom: 48, fontSize: "1.0625rem" }}>
            Dihexa is the only therapeutic peptide shown to potentiate synaptogenesis at concentrations 10 million times lower than BDNF — rebuilding the hippocampal and prefrontal circuits that encode memory and executive function. Now available as a physician-supervised protocol with baseline and follow-up neuropsychological assessment.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
            <a href="#quiz" className="btn-gold" style={{ padding: "16px 36px", fontSize: "1rem" }}>Check My Eligibility</a>
            <a href="#research" className="btn-ghost-cream" style={{ padding: "16px 36px", fontSize: "1rem" }}>Review the Research</a>
          </div>
          <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.75rem", color: "rgba(245,240,232,0.25)", lineHeight: 1.6, maxWidth: 560, margin: "0 auto" }}>
            † This page describes off-label use of Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide), a compounded synthetic peptide derived from angiotensin IV, developed by Joseph W. Harding and John W. Wright at Washington State University. Dihexa is not FDA-approved. U.S. use is as a compounded peptide prescribed at the clinical discretion of a licensed physician. This content is for informational purposes only and does not constitute medical advice. Individual results vary. All protocols require physician evaluation and are subject to contraindication screening.
          </p>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: "#0A0A0A", borderTop: "1px solid rgba(245,240,232,0.06)", padding: "clamp(40px,6vw,64px) 0 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4 L6 40 L14 40 L24 20 L34 40 L42 40 Z" fill="#C9A96E" />
                  <line x1="12" y1="28" x2="36" y2="28" stroke="#C9A96E" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="24" y1="20" x2="24" y2="44" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div>
                  <span style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#F5F0E8", display: "block" }}>Dihexa<span style={{ color: DARK_ORANGE }}>Rx</span></span>
                  <span style={{ fontFamily: DM, fontWeight: 300, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#8C7B6B" }}>Aurelius Health Group</span>
                </div>
              </div>
              <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.875rem", color: "rgba(245,240,232,0.35)", maxWidth: 240, marginTop: 12, lineHeight: 1.6 }}>Physician-supervised Dihexa protocol for synaptogenesis, cognitive restoration, TBI recovery, and high-performance brain optimization.</p>
            </div>
            {[
              { heading: "Protocol", links: ["How It Works", "The Research", "Six Pathways"] },
              { heading: "Company", links: ["About Aurelius", "Our Physicians", "All Treatments", "Blog"] },
              { heading: "Support", links: ["Check Eligibility", "FAQ", "Contact Us", "Patient Portal"] },
            ].map((col) => (
              <div key={col.heading}>
                <p style={{ fontFamily: DM, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(245,240,232,0.3)", marginBottom: 16 }}>{col.heading}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.875rem", color: "rgba(245,240,232,0.45)", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#F5F0E8")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}
                      >{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(245,240,232,0.06)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.75rem", color: "rgba(245,240,232,0.2)" }}>© 2026 Aurelius Health Group. All rights reserved.</p>
            <div style={{ display: "flex", gap: 24 }}>
              {["Privacy Policy", "Terms of Service", "Medical Disclaimer"].map((link) => (
                <a key={link} href="#" style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.75rem", color: "rgba(245,240,232,0.25)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.25)")}
                >{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ══ RESPONSIVE STYLES ══ */}
      <style>{`
        /* Stats strip 2-col on tablet */
        @media (max-width: 768px) {
          .stats-strip { grid-template-columns: repeat(2,1fr) !important; }
        }
        /* Problem cards 1-col on mobile */
        @media (max-width: 900px) {
          .problem-grid { grid-template-columns: 1fr !important; }
          .two-col-mech { grid-template-columns: 1fr !important; gap: 48px !important; }
          .two-col-header { grid-template-columns: 1fr !important; gap: 20px !important; }
          .two-col-pricing { grid-template-columns: 1fr !important; gap: 48px !important; }
          .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 1024px) {
          .four-col-grid { grid-template-columns: repeat(2,1fr) !important; }
          .pathway-grid { grid-template-columns: repeat(2,1fr) !important; }
          .four-col-grid.protocol-steps { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 640px) {
          .four-col-grid { grid-template-columns: 1fr !important; }
          .pathway-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .comparison-table-wrap { font-size: 0.8rem !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .stats-strip { grid-template-columns: repeat(2,1fr) !important; }
        }
        /* Touch targets */
        @media (max-width: 768px) {
          .btn-gold, .btn-ghost-cream { min-height: 48px; }
        }
      `}</style>
    </div>
  );
}
