'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Music, 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Share2, 
  X,
  Flame,
  Download,
  Copy,
  Check
} from 'lucide-react';

interface DanceClass {
  id: string;
  title: string;
  instructor: string;
  category: 'Contemporary' | 'Hip-Hop' | 'Classical Ballet' | 'Latin Fusion';
  level: 'Open Level' | 'Intermediate / Advanced' | 'Masterclass';
  time: string;
  day: string;
  spotsLeft: number;
  totalSpots: number;
  price: string;
}

const DANCE_CLASSES: DanceClass[] = [
  {
    id: 'class-1',
    title: 'Urban Choreography & Dynamic Grooves',
    instructor: 'Mateo Morales',
    category: 'Hip-Hop',
    level: 'Intermediate / Advanced',
    time: '18:30 – 20:00',
    day: 'Tuesday, Aug 25',
    spotsLeft: 3,
    totalSpots: 20,
    price: 'Q120 / $16',
  },
  {
    id: 'class-2',
    title: 'Contemporary Floorwork & Expressive Release',
    instructor: 'Sofia Alarcón',
    category: 'Contemporary',
    level: 'Masterclass',
    time: '19:00 – 20:30',
    day: 'Wednesday, Aug 26',
    spotsLeft: 6,
    totalSpots: 18,
    price: 'Q140 / $18',
  },
  {
    id: 'class-3',
    title: 'Latin Rhythm & Salsa On2 Styling',
    instructor: 'Carlos Estrada',
    category: 'Latin Fusion',
    level: 'Open Level',
    time: '20:00 – 21:15',
    day: 'Thursday, Aug 27',
    spotsLeft: 8,
    totalSpots: 25,
    price: 'Q100 / $13',
  },
  {
    id: 'class-4',
    title: 'Classical Ballet Technique & Pointe Preparation',
    instructor: 'Elena Velez',
    category: 'Classical Ballet',
    level: 'Open Level',
    time: '10:00 – 11:30',
    day: 'Saturday, Aug 29',
    spotsLeft: 2,
    totalSpots: 15,
    price: 'Q150 / $20',
  },
];

export default function StudioPulseDemo() {
  const [classes, setClasses] = useState<DanceClass[]>(DANCE_CLASSES);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedClass, setSelectedClass] = useState<DanceClass | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [copiedPromo, setCopiedPromo] = useState(false);

  const filteredClasses = activeCategory === 'All'
    ? classes
    : classes.filter(c => c.category === activeCategory);

  const handleBookSpot = () => {
    if (!selectedClass) return;
    setClasses(prev =>
      prev.map(c => {
        if (c.id === selectedClass.id && c.spotsLeft > 0) {
          return { ...c, spotsLeft: c.spotsLeft - 1 };
        }
        return c;
      })
    );
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedClass(null);
    }, 1800);
  };

  const handleCopyPromo = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromo(true);
    setTimeout(() => setCopiedPromo(false), 2000);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner: Client Fit */}
      <div className="bg-surface border border-borderColor rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            <Music className="w-3.5 h-3.5" />
            <span>TAILORED FOR &ldquo;THE DANCENTER GUATEMALA&rdquo; // STUDIO BOOKING &amp; SOCIAL HUB</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-textPrimary">
            StudioPulse Dynamic Schedule &amp; Social Engine
          </h3>
          <p className="text-textSecondary text-sm sm:text-base mt-1 max-w-2xl leading-relaxed">
            Real-time dance class reservations with fluid Apple bottom sheets and automated branded social promotional assets for Instagram &amp; TikTok.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
          <div className="bg-surfaceElevated border border-borderColor px-4 py-3 rounded-xl text-center">
            <span className="block text-accent font-bold text-base font-tnum">0 Manual DMs</span>
            <span className="text-textMuted uppercase text-[10px]">Instant Booking</span>
          </div>
          <div className="bg-surfaceElevated border border-borderColor px-4 py-3 rounded-xl text-center">
            <span className="block text-emerald-500 font-bold text-base font-tnum">1-Click</span>
            <span className="text-textMuted uppercase text-[10px]">Story Promo Asset</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
        {['All', 'Hip-Hop', 'Contemporary', 'Latin Fusion', 'Classical Ballet'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border transition-all font-semibold ${
              activeCategory === cat
                ? 'bg-accent text-white border-accent shadow-sm'
                : 'bg-surface border-borderColor text-textSecondary hover:border-borderColorHover'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Schedule & Promo Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Schedule Cards (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-textMuted pb-2 border-b border-borderColor">
            <span className="uppercase font-semibold tracking-wider">Upcoming Masterclasses</span>
            <span className="text-accent font-tnum">{filteredClasses.length} Sessions Available</span>
          </div>

          <div className="space-y-3">
            {filteredClasses.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-5 rounded-2xl bg-surface border border-borderColor hover:border-borderColorHover shadow-sm space-y-4 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-surfaceElevated border border-borderColor text-accent">
                        {item.category}
                      </span>
                      <span className="font-mono text-[10px] text-textMuted uppercase">
                        {item.level}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-textPrimary">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-textSecondary mt-0.5">
                      Instructor: <span className="font-semibold text-textPrimary">{item.instructor}</span>
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-mono font-bold text-sm text-textPrimary font-tnum block">
                      {item.price}
                    </span>
                    <span className={`font-mono text-[11px] font-semibold mt-1 inline-flex items-center gap-1 ${
                      item.spotsLeft <= 3 ? 'text-amber-500 font-bold' : 'text-emerald-500'
                    }`}>
                      {item.spotsLeft <= 3 && <Flame className="w-3 h-3" />}
                      <span>{item.spotsLeft} spots left</span>
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-borderColor/60 flex items-center justify-between font-mono text-xs text-textMuted">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span>{item.day}</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-tnum">
                      <Clock className="w-3.5 h-3.5 text-textMuted" />
                      <span>{item.time}</span>
                    </span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setSelectedClass(item)}
                    className="inline-flex items-center gap-1.5 bg-textPrimary text-background font-semibold text-xs px-3.5 py-1.5 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <span>Reserve Spot</span>
                    <ArrowRight className="w-3 h-3 text-accent" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Automated Social Promo Graphic Preview (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-textMuted pb-2 border-b border-borderColor">
            <span className="uppercase font-semibold tracking-wider">Auto-Generated IG Story Card</span>
            <span className="text-accent font-semibold">1080 × 1920 HD</span>
          </div>

          {/* Branded Social Story Card Preview */}
          <div className="relative aspect-[9/14] rounded-2xl bg-gradient-to-br from-[#121215] via-[#1A1A24] to-[#0A0A0B] border border-borderColor p-6 flex flex-col justify-between overflow-hidden shadow-md text-white font-sans">
            {/* Top Brand & Location */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center font-bold text-xs">
                  D
                </span>
                <span className="font-display font-bold text-xs tracking-wider uppercase">
                  THE DANCENTER GUATEMALA
                </span>
              </div>
              <span className="font-mono text-[10px] text-accent bg-accent/20 px-2 py-0.5 rounded-full uppercase font-bold">
                NEW SCHEDULE
              </span>
            </div>

            {/* Middle Feature Content */}
            <div className="relative z-10 space-y-3 my-auto">
              <span className="font-mono text-xs uppercase text-accent tracking-widest block">
                THIS WEEK&apos;S MASTERCLASS
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl leading-tight">
                {selectedClass ? selectedClass.title : 'Urban Choreography & Dynamic Grooves'}
              </h3>
              <p className="font-sans text-xs text-gray-300">
                with Master Instructor <span className="text-white font-bold">{selectedClass ? selectedClass.instructor : 'Mateo Morales'}</span>
              </p>
              <div className="inline-flex items-center gap-2 font-mono text-xs bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-semibold">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                <span>{selectedClass ? selectedClass.day : 'Tuesday, Aug 25'} • {selectedClass ? selectedClass.time : '18:30'}</span>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between font-mono text-xs">
              <span className="text-gray-400">Limited Spots Available</span>
              <span className="text-accent font-bold">Link in Bio to Reserve ↗</span>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-accent/25 blur-3xl pointer-events-none" />
          </div>

          <div className="flex gap-2 font-mono text-xs">
            <button
              onClick={() => handleCopyPromo(`💃 NEXT MASTERCLASS AT THE DANCENTER:\n${selectedClass ? selectedClass.title : 'Urban Choreography'}\n📅 ${selectedClass ? selectedClass.day : 'Tuesday, Aug 25'} at ${selectedClass ? selectedClass.time : '18:30'}\n🎟️ Reserve your spot: dancentergt.com/booking`)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-surface border border-borderColor hover:border-borderColorHover text-textSecondary hover:text-textPrimary flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              {copiedPromo ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-accent" />}
              <span>{copiedPromo ? 'Promo Copied!' : 'Copy Social Caption'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Apple-Style Fluid Bottom Reservation Sheet */}
      <AnimatePresence>
        {selectedClass && (
          <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedClass(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative z-10 w-full max-w-lg bg-surface border border-borderColor rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden"
            >
              {/* Sheet Handle */}
              <div className="w-10 h-1 rounded-full bg-borderColor mx-auto -mt-2 mb-2" />

              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
                    Confirm Class Registration
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-textPrimary mt-1">
                    {selectedClass.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedClass(null)}
                  className="p-1.5 rounded-full bg-surfaceElevated border border-borderColor text-textMuted hover:text-textPrimary"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 rounded-xl bg-surfaceElevated border border-borderColor space-y-2 font-mono text-xs">
                <div className="flex justify-between text-textMuted">
                  <span>Schedule:</span>
                  <span className="text-textPrimary font-semibold">{selectedClass.day} ({selectedClass.time})</span>
                </div>
                <div className="flex justify-between text-textMuted">
                  <span>Instructor:</span>
                  <span className="text-textPrimary font-semibold">{selectedClass.instructor}</span>
                </div>
                <div className="flex justify-between text-textMuted">
                  <span>Pass Fee:</span>
                  <span className="text-accent font-bold font-tnum">{selectedClass.price}</span>
                </div>
              </div>

              {bookingSuccess ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs text-center font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Spot Reserved! SMS &amp; Calendar Confirmation Dispatched.</span>
                </div>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={handleBookSpot}
                  className="w-full py-4 rounded-xl bg-textPrimary text-background font-sans font-bold text-sm hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Confirm Reservation ({selectedClass.price})</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </motion.button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
