import { Activity, CheckCircle2, AlertTriangle, Leaf } from "lucide-react";

export default function ResultsPanel({ scanning, progress, result }) {
  return (
    <div
      id="results"
      className="rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-xl border border-white/10"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg sm:text-xl font-semibold text-emerald-50">Scan results</h3>
        {scanning && (
          <div className="text-emerald-100/80 text-sm inline-flex items-center gap-2">
            <Activity className="w-4 h-4 animate-pulse" />
            Analyzing... {progress}%
          </div>
        )}
      </div>

      {!scanning && !result && (
        <div className="mt-6 text-emerald-100/70">
          Upload a photo or press Scan to see results here.
        </div>
      )}

      {scanning && (
        <div className="mt-6">
          <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {!scanning && result && (
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl p-4 border border-white/10 bg-white/5">
            <div className="text-emerald-100/70 text-xs">Detected plant</div>
            <div className="mt-1 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-emerald-300" />
              <div className="text-emerald-50 font-medium">{result.plant}</div>
            </div>
          </div>
          <div className="rounded-2xl p-4 border border-white/10 bg-white/5">
            <div className="text-emerald-100/70 text-xs">Health</div>
            <div className="mt-1 flex items-center gap-2">
              {result.healthy ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-amber-300" />
              )}
              <div className="text-emerald-50 font-medium">
                {result.healthy ? "Healthy" : "Needs attention"}
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-4 border border-white/10 bg-white/5">
            <div className="text-emerald-100/70 text-xs">Confidence</div>
            <div className="mt-1 text-emerald-50 font-medium">{result.confidence}%</div>
          </div>
          <div className="sm:col-span-3 rounded-2xl p-4 border border-white/10 bg-white/5">
            <div className="text-emerald-100/70 text-xs">Care tips</div>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-emerald-50/90">
              {result.tips.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
