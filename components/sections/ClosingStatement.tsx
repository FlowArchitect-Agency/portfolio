'use client';

import { motion } from 'framer-motion';
import StatusBadge from '../ui/StatusBadge';

export default function ClosingStatement() {
  return (
    <section className="py-24 md:py-36 bg-canvas border-t border-borderMuted relative overflow-hidden bg-tech-dots">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <StatusBadge idCode="STATEMENT-CLOSING-02" status="ENGINEERING PURPOSE" />
        </motion.div>

        {/* Large Editorial Statement with Fragmented Typography Signature */}
        <motion.blockquote
          className="font-display font-black text-3xl sm:text-4xl md:text-6xl tracking-tight leading-[1.15] text-darkText uppercase"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          &ldquo;WE DO NOT BUILD AI CHATBOTS THAT GUESS. WE ARCHITECT DETERMINISTIC{' '}
          <span className="relative inline-block text-accent">
            SYSTEMS THAT EXECUTE
            <span className="absolute top-[0.04em] left-[0.04em] text-darkText/15 z-0 pointer-events-none select-none">
              SYSTEMS THAT EXECUTE
            </span>
          </span>{' '}
          WITH REPRODUCIBLE EVIDENCE.&rdquo;
        </motion.blockquote>

        <motion.p
          className="font-mono text-xs sm:text-sm text-mutedText tracking-wider uppercase max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          MEHDI MECHKAK // APPLIED AI ENGINEER // PARIS, FRANCE
        </motion.p>
      </div>
    </section>
  );
}
