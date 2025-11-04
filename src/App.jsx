import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PlantScene from "./components/PlantScene";
import ScanPanel from "./components/ScanPanel";
import ResultsPanel from "./components/ResultsPanel";

function App() {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  function startScan() {
    if (scanning) return;
    setResult(null);
    setScanning(true);
    setProgress(0);
  }

  useEffect(() => {
    if (!scanning) return;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.floor(8 + Math.random() * 15));
        if (next >= 100) {
          clearInterval(id);
          // Simulated result
          const healthy = Math.random() > 0.35;
          setResult({
            plant: "Ficus elastica (Rubber Plant)",
            healthy,
            confidence: 92,
            tips: healthy
              ? [
                  "Maintain bright, indirect light.",
                  "Water when top 2cm of soil is dry.",
                  "Wipe leaves monthly to boost photosynthesis.",
                ]
              : [
                  "Reduce watering; allow soil to partially dry.",
                  "Increase humidity around the plant.",
                  "Check for pests on undersides of leaves.",
                ],
          });
          setScanning(false);
        }
        return next;
      });
    }, 400);

    return () => clearInterval(id);
  }, [scanning]);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.15),transparent_50%)] bg-emerald-950 text-emerald-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <ScanPanel onScanStart={startScan} />
            <ResultsPanel scanning={scanning} progress={progress} result={result} />
          </div>
          <div className="order-1 lg:order-2">
            <PlantScene />
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="text-center text-emerald-100/60 text-sm">
          Built with love for plants. Keep it green.
        </div>
      </footer>
    </div>
  );
}

export default App;
