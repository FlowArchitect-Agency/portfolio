'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scale, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  FileText, 
  Database, 
  AlertCircle, 
  Calendar,
  Send
} from 'lucide-react';

interface ClaimState {
  incidentType: string;
  incidentYear: string;
  injurySeverity: 'Minor' | 'Moderate' | 'Severe' | 'Catastrophic';
  hasMedicalTreatment: boolean;
  estimatedLostWages: number;
}

export default function LexIntakeDemo() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [claim, setClaim] = useState<ClaimState>({
    incidentType: 'Motor Vehicle Collision',
    incidentYear: '2026',
    injurySeverity: 'Moderate',
    hasMedicalTreatment: true,
    estimatedLostWages: 8500,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Case Value Estimator
  const calculateCaseValue = () => {
    let base = 15000;
    if (claim.incidentType === 'Motor Vehicle Collision') base = 35000;
    if (claim.incidentType === 'Workplace / Construction') base = 55000;
    if (claim.incidentType === 'Premises Liability') base = 25000;

    let multiplier = 1.0;
    if (claim.injurySeverity === 'Moderate') multiplier = 2.2;
    if (claim.injurySeverity === 'Severe') multiplier = 4.5;
    if (claim.injurySeverity === 'Catastrophic') multiplier = 8.0;

    const total = Math.round(base * multiplier + claim.estimatedLostWages * 1.5);
    return {
      min: Math.round(total * 0.8),
      max: Math.round(total * 1.3),
    };
  };

  const caseRange = calculateCaseValue();

  const handleSimulateSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner: Client Fit */}
      <div className="bg-surface border border-borderColor rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            <Scale className="w-3.5 h-3.5" />
            <span>TAILORED FOR &ldquo;LAW OFFICES OF MATTHEW COHAN&rdquo; // LEGAL INTAKE AUTOMATION</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-textPrimary">
            LexIntake 24/7 AI Lead &amp; Ad Triage
          </h3>
          <p className="text-textSecondary text-sm sm:text-base mt-1 max-w-2xl leading-relaxed">
            Captures, qualifies, and schedules high-intent legal claims from Meta Ads and web visitors instantly. Prevents lead loss while attorneys are in court.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
          <div className="bg-surfaceElevated border border-borderColor px-4 py-3 rounded-xl text-center">
            <span className="block text-accent font-bold text-base font-tnum">&lt; 90s</span>
            <span className="text-textMuted uppercase text-[10px]">Intake Speed</span>
          </div>
          <div className="bg-surfaceElevated border border-borderColor px-4 py-3 rounded-xl text-center">
            <span className="block text-emerald-500 font-bold text-base font-tnum">100%</span>
            <span className="text-textMuted uppercase text-[10px]">CRM Auto-Sync</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Demo Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Intake Wizard (6 Cols) */}
        <div className="lg:col-span-6 bg-surface border border-borderColor rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-borderColor">
            <div className="flex items-center gap-2 font-mono text-xs text-textMuted">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="uppercase font-semibold tracking-wider">Step {step} of 3 // Qualification Funnel</span>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-6 h-1.5 rounded-full transition-colors ${
                    step >= s ? 'bg-accent' : 'bg-borderColor'
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div>
                  <label className="block font-mono text-xs font-bold text-textPrimary uppercase tracking-wider mb-2">
                    1. Select Incident Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Motor Vehicle Collision',
                      'Workplace / Construction',
                      'Premises Liability',
                      'Medical Malpractice',
                    ].map((type) => (
                      <button
                        key={type}
                        onClick={() => setClaim(prev => ({ ...prev, incidentType: type }))}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold font-mono transition-all ${
                          claim.incidentType === type
                            ? 'bg-surfaceElevated border-accent text-accent ring-1 ring-accent/30'
                            : 'bg-surface border-borderColor text-textSecondary hover:border-borderColorHover'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-textPrimary uppercase tracking-wider mb-2">
                    2. Year of Occurrence
                  </label>
                  <select
                    value={claim.incidentYear}
                    onChange={(e) => setClaim(prev => ({ ...prev, incidentYear: e.target.value }))}
                    className="w-full bg-surfaceElevated border border-borderColor rounded-xl px-4 py-2.5 text-sm text-textPrimary font-sans focus:outline-none focus:border-accent"
                  >
                    <option value="2026">2026 (Within Statute of Limitations)</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                  </select>
                </div>

                <div className="pt-2 flex justify-end">
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 bg-textPrimary text-background font-mono text-xs font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <span>Next: Medical Assessment</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div>
                  <label className="block font-mono text-xs font-bold text-textPrimary uppercase tracking-wider mb-2">
                    3. Injury Severity Level
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {(['Minor', 'Moderate', 'Severe', 'Catastrophic'] as const).map((sev) => (
                      <button
                        key={sev}
                        onClick={() => setClaim(prev => ({ ...prev, injurySeverity: sev }))}
                        className={`p-3 rounded-xl border text-center text-xs font-semibold font-mono transition-all ${
                          claim.injurySeverity === sev
                            ? 'bg-surfaceElevated border-accent text-accent ring-1 ring-accent/30'
                            : 'bg-surface border-borderColor text-textSecondary hover:border-borderColorHover'
                        }`}
                      >
                        {sev}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-textPrimary uppercase tracking-wider mb-2">
                    4. Medical Documentation Status
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setClaim(prev => ({ ...prev, hasMedicalTreatment: true }))}
                      className={`flex-1 p-3 rounded-xl border font-mono text-xs font-semibold transition-all ${
                        claim.hasMedicalTreatment
                          ? 'bg-surfaceElevated border-emerald-500/50 text-emerald-600 dark:text-emerald-400'
                          : 'bg-surface border-borderColor text-textMuted'
                      }`}
                    >
                      ✓ Treated at ER / Hospital
                    </button>
                    <button
                      onClick={() => setClaim(prev => ({ ...prev, hasMedicalTreatment: false }))}
                      className={`flex-1 p-3 rounded-xl border font-mono text-xs font-semibold transition-all ${
                        !claim.hasMedicalTreatment
                          ? 'bg-surfaceElevated border-amber-500/50 text-amber-600 dark:text-amber-400'
                          : 'bg-surface border-borderColor text-textMuted'
                      }`}
                    >
                      ✕ Pending Evaluation
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="font-mono text-xs text-textMuted hover:text-textPrimary transition-colors"
                  >
                    ← Back
                  </button>
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 bg-textPrimary text-background font-mono text-xs font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <span>Next: Review &amp; Sync</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div className="p-4 rounded-xl bg-surfaceElevated border border-borderColor space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-textMuted">
                    <span>Incident:</span>
                    <span className="text-textPrimary font-semibold">{claim.incidentType} ({claim.incidentYear})</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-textMuted">
                    <span>Severity:</span>
                    <span className="text-accent font-semibold">{claim.injurySeverity}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-textMuted">
                    <span>Medical Care:</span>
                    <span className="text-emerald-500 font-semibold">{claim.hasMedicalTreatment ? 'Verified' : 'Pending'}</span>
                  </div>
                </div>

                {submitted ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Lead Successfully Triaged &amp; Synced to Airtable!</span>
                    </div>
                    <p className="text-textSecondary text-xs">
                      Consultation calendar link dispatched via SMS &amp; Email to client. Attorney notified.
                    </p>
                  </div>
                ) : (
                  <div className="pt-2 flex justify-between items-center">
                    <button
                      onClick={() => setStep(2)}
                      className="font-mono text-xs text-textMuted hover:text-textPrimary transition-colors"
                    >
                      ← Back
                    </button>
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={handleSimulateSubmit}
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-emerald-600 text-white font-mono text-xs font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Syncing to CRM...' : 'Submit & Book Consultation'}</span>
                    </motion.button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Real-Time Valuation & Webhook Inspector (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Real-Time Value Card */}
          <div className="bg-surface border border-borderColor rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-textMuted uppercase font-bold tracking-wider">
                Automated Settlement Range
              </span>
              <span className="font-mono text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full font-semibold">
                AI Actuarial Model
              </span>
            </div>

            <div className="font-display font-bold text-3xl sm:text-4xl text-textPrimary font-tnum">
              ${caseRange.min.toLocaleString()} – ${caseRange.max.toLocaleString()}
            </div>

            <p className="font-sans text-xs text-textSecondary leading-relaxed">
              Based on historical California &amp; Federal statutory settlements for {claim.incidentType.toLowerCase()} with {claim.injurySeverity.toLowerCase()} damages.
            </p>
          </div>

          {/* CRM & Meta Webhook Payload Inspector */}
          <div className="bg-surface border border-borderColor rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="flex items-center justify-between font-mono text-xs text-textMuted pb-2 border-b border-borderColor">
              <div className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-accent" />
                <span className="uppercase font-semibold tracking-wider">Live Webhook JSON Payload</span>
              </div>
              <span className="text-emerald-500 font-semibold font-tnum">HTTP 200 OK</span>
            </div>

            <pre className="bg-surfaceElevated border border-borderColor rounded-xl p-4 font-mono text-[11px] text-textSecondary overflow-x-auto leading-relaxed">
{JSON.stringify({
  event: "meta_lead_ad_intake",
  timestamp: new Date().toISOString(),
  lead_qualification: {
    incident: claim.incidentType,
    severity: claim.injurySeverity,
    status_limitations: "VALID_2026",
    estimated_settlement_range: `$${caseRange.min} - $${caseRange.max}`,
    airtable_record_id: "rec98f2kL90a1qZ",
    assigned_attorney: "Matthew Cohan, Esq."
  }
}, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
