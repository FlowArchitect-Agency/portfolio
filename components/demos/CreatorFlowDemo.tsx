'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Video, 
  Share2, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Flame, 
  Copy, 
  Check, 
  Play, 
  Layers,
  ArrowRight
} from 'lucide-react';

interface Clip {
  id: string;
  title: string;
  duration: string;
  status: 'Draft' | 'Transcribing' | 'AI Enhanced' | 'Scheduled';
  viewsForecast: string;
  hookScore: number;
  bestHook: string;
  caption: string;
  platforms: string[];
}

const INITIAL_CLIPS: Clip[] = [
  {
    id: 'clip-1',
    title: 'Why 99% of creators fail their first 3 seconds (Hook Blueprint)',
    duration: '0:48',
    status: 'AI Enhanced',
    viewsForecast: '145K – 220K',
    hookScore: 94,
    bestHook: 'Stop starting your videos with "Hey guys". Here is what 20M views taught me:',
    caption: 'The single pattern separating 10k views from 1M+ views in 2026. Bookmark this formula before editing your next short 📌 #CreatorTips #GrowthHacks #ViralHooks',
    platforms: ['TikTok', 'IG Reels', 'YouTube Shorts'],
  },
  {
    id: 'clip-2',
    title: 'My $3,500/mo Automated Editing Workflow (CapCut + AI)',
    duration: '0:56',
    status: 'Scheduled',
    viewsForecast: '85K – 130K',
    hookScore: 91,
    bestHook: 'I automated 80% of my video editing with this 4-step pipeline.',
    caption: 'How I publish 3 high-retention shorts every single day without burning out. Full breakdown inside ⚡ #WorkflowAutomation #CapCutPro #ContentCreator',
    platforms: ['TikTok', 'IG Reels'],
  },
  {
    id: 'clip-3',
    title: '3 Micro-Transitions that hold viewer attention to 100%',
    duration: '0:34',
    status: 'Draft',
    viewsForecast: '60K – 95K',
    hookScore: 88,
    bestHook: 'Your watch time drops at second 7 because you missed this visual cue.',
    caption: 'Add these 3 dynamic cut patterns to double your average percentage viewed 🎬 #VideoEditing #PremierePro #RetentionTricks',
    platforms: ['YouTube Shorts', 'IG Reels'],
  },
];

const VIRAL_HOOK_TEMPLATES = [
  { hook: 'The biggest lie you were told about {topic} in 2026:', score: 96, category: 'Contrarian' },
  { hook: 'If I had to restart {topic} from $0, here is my exact 7-day blueprint:', score: 93, category: 'Blueprint' },
  { hook: 'Stop doing {topic} the old way. Use this 30-second workflow instead:', score: 91, category: 'Efficiency' },
  { hook: '3 subtle mistakes that are silently killing your {topic}:', score: 89, category: 'Mistakes' },
];

export default function CreatorFlowDemo() {
  const [clips, setClips] = useState<Clip[]>(INITIAL_CLIPS);
  const [selectedClip, setSelectedClip] = useState<Clip>(INITIAL_CLIPS[0]);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [topicInput, setTopicInput] = useState('Short-Form Video Production');
  const [generating, setGenerating] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleGenerateHooks = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      const newHook = `Stop doing ${topicInput} the old way. Here is the automated workflow that saves 20 hrs/wk:`;
      setSelectedClip(prev => ({
        ...prev,
        bestHook: newHook,
        hookScore: 97,
      }));
    }, 600);
  };

  const cycleStatus = (clipId: string) => {
    const statusOrder: Clip['status'][] = ['Draft', 'Transcribing', 'AI Enhanced', 'Scheduled'];
    setClips(prev =>
      prev.map(c => {
        if (c.id === clipId) {
          const nextIndex = (statusOrder.indexOf(c.status) + 1) % statusOrder.length;
          const updated = { ...c, status: statusOrder[nextIndex] };
          if (selectedClip.id === clipId) setSelectedClip(updated);
          return updated;
        }
        return c;
      })
    );
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner: Client Fit & Value Proposition */}
      <div className="bg-surface border border-borderColor rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TAILORED FOR &ldquo;NOTHING NICE&rdquo; // CONTENT PRODUCER WORKFLOW</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-textPrimary">
            CreatorFlow AI Studio
          </h3>
          <p className="text-textSecondary text-sm sm:text-base mt-1 max-w-2xl leading-relaxed">
            Automated raw footage ingestion, viral hook prediction scoring, and cross-platform publishing pipeline saving 20+ editing hours every week.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
          <div className="bg-surfaceElevated border border-borderColor px-4 py-3 rounded-xl text-center">
            <span className="block text-accent font-bold text-base font-tnum">3.2x</span>
            <span className="text-textMuted uppercase text-[10px]">Publishing Velocity</span>
          </div>
          <div className="bg-surfaceElevated border border-borderColor px-4 py-3 rounded-xl text-center">
            <span className="block text-emerald-500 font-bold text-base font-tnum">&gt;90%</span>
            <span className="text-textMuted uppercase text-[10px]">Hook Retention</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Clips Production Queue (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-textMuted pb-2 border-b border-borderColor">
            <span className="uppercase font-semibold tracking-wider">Production Batch Queue</span>
            <span className="text-accent font-tnum">{clips.length} Active Shorts</span>
          </div>

          <div className="space-y-3">
            {clips.map((clip) => {
              const isSelected = selectedClip.id === clip.id;
              return (
                <motion.div
                  key={clip.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  onClick={() => setSelectedClip(clip)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-surfaceElevated border-accent shadow-sm ring-1 ring-accent/30'
                      : 'bg-surface border-borderColor hover:border-borderColorHover'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-surfaceElevated border border-borderColor flex items-center justify-center text-accent">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-textPrimary line-clamp-1">
                          {clip.title}
                        </h4>
                        <span className="font-mono text-xs text-textMuted flex items-center gap-2 mt-0.5 font-tnum">
                          <Clock className="w-3 h-3 text-textMuted" />
                          <span>{clip.duration}</span>
                          <span>•</span>
                          <span className="text-textSecondary">{clip.viewsForecast} est. views</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-borderColor/60 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        cycleStatus(clip.id);
                      }}
                      className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full border transition-all ${
                        clip.status === 'Scheduled'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                          : clip.status === 'AI Enhanced'
                          ? 'bg-accent/10 border-accent/30 text-accent'
                          : clip.status === 'Transcribing'
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400'
                          : 'bg-surfaceElevated border-borderColor text-textMuted'
                      }`}
                    >
                      ● {clip.status} (Click to step)
                    </button>

                    <div className="flex items-center gap-1 font-mono text-xs font-bold text-accent font-tnum">
                      <Flame className="w-3.5 h-3.5 text-amber-500" />
                      <span>{clip.hookScore}/100</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: AI Optimization & Publish Inspector (7 Cols) */}
        <div className="lg:col-span-7 bg-surface border border-borderColor rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-borderColor">
            <div className="flex items-center gap-2 font-mono text-xs text-textMuted">
              <Layers className="w-4 h-4 text-accent" />
              <span className="uppercase font-semibold tracking-wider">AI Script &amp; Hook Inspector</span>
            </div>
            <span className="font-mono text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-semibold">
              Live Preview
            </span>
          </div>

          {/* AI Hook Tester */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="font-mono text-xs font-bold text-textPrimary uppercase tracking-wider">
                Predicted High-Retention Hook
              </label>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold font-tnum">
                {selectedClip.hookScore}% Retention Probability
              </span>
            </div>

            <div className="relative bg-surfaceElevated border border-borderColor rounded-xl p-4 font-sans text-sm text-textPrimary font-medium leading-relaxed group">
              <p>&ldquo;{selectedClip.bestHook}&rdquo;</p>
              <button
                onClick={() => handleCopy(selectedClip.bestHook, 'hook')}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-surface border border-borderColor text-textSecondary hover:text-textPrimary transition-all active:scale-90"
                title="Copy Hook"
              >
                {copiedText === 'hook' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Dynamic AI Hook Generator Tool */}
          <div className="p-4 rounded-xl bg-surfaceElevated border border-borderColor space-y-3">
            <label className="block font-mono text-xs text-textSecondary font-semibold uppercase tracking-wider">
              Regenerate Hook for Custom Topic
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                className="flex-1 bg-surface border border-borderColor rounded-lg px-3.5 py-2 text-sm text-textPrimary focus:outline-none focus:border-accent font-sans"
                placeholder="e.g. Video Editing, TikTok Growth, Storytelling..."
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleGenerateHooks}
                disabled={generating}
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-xs px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-mono shrink-0"
              >
                <Sparkles className={`w-3.5 h-3.5 ${generating ? 'animate-spin' : ''}`} />
                <span>{generating ? 'Optimizing...' : 'Generate Hook'}</span>
              </motion.button>
            </div>
          </div>

          {/* Social Caption & Hashtag Output */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-mono text-xs font-bold text-textPrimary uppercase tracking-wider">
                Multi-Platform Optimized Caption
              </label>
              <button
                onClick={() => handleCopy(selectedClip.caption, 'caption')}
                className="font-mono text-xs text-accent hover:underline flex items-center gap-1 active:scale-95 transition-transform"
              >
                {copiedText === 'caption' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copiedText === 'caption' ? 'Copied' : 'Copy Caption'}</span>
              </button>
            </div>
            <div className="bg-surfaceElevated border border-borderColor rounded-xl p-4 font-sans text-xs sm:text-sm text-textSecondary leading-relaxed">
              {selectedClip.caption}
            </div>
          </div>

          {/* Target Platforms */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-textMuted">
              <span>Platforms:</span>
              {selectedClip.platforms.map((p) => (
                <span key={p} className="bg-surfaceElevated border border-borderColor px-2 py-0.5 rounded text-textSecondary font-semibold">
                  {p}
                </span>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => cycleStatus(selectedClip.id)}
              className="inline-flex items-center gap-2 bg-textPrimary text-background px-4 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>Publish Next Stage</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
