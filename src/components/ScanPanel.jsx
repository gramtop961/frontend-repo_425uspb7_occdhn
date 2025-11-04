import { useState } from "react";
import { Camera, Upload, Sparkles } from "lucide-react";

export default function ScanPanel({ onScanStart }) {
  const [fileName, setFileName] = useState("");

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    onScanStart();
  }

  return (
    <div
      id="scan"
      className="rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-emerald-900/10"
    >
      <div className="flex items-start justify-between gap-6 flex-col sm:flex-row">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-emerald-50">Scan your plant</h2>
          <p className="mt-1 text-emerald-100/70">
            Upload a leaf photo or use your camera. We’ll detect species and
            potential issues.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-emerald-50 hover:bg-white/10 active:scale-[.98] transition">
            <Upload className="w-4 h-4" />
            <span className="text-sm font-medium">Upload</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
          </label>
          <button
            onClick={onScanStart}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-emerald-950 font-semibold hover:bg-emerald-400 active:scale-[.98] transition shadow-lg shadow-emerald-500/30"
          >
            <Camera className="w-4 h-4" />
            Scan Now
          </button>
        </div>
      </div>

      {fileName && (
        <div className="mt-4 text-xs text-emerald-100/70 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-300" />
          <span>Selected: {fileName}</span>
        </div>
      )}
    </div>
  );
}
