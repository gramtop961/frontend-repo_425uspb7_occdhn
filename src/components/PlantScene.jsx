import Spline from "@splinetool/react-spline";

export default function PlantScene() {
  return (
    <section className="relative w-full h-[420px] sm:h-[520px] lg:h-[640px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-900/40 via-emerald-800/20 to-emerald-700/20">
      <Spline
        scene="https://prod.spline.design/Sa4WgY-8v2v7eKx9/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-transparent to-emerald-900/40" />
      <div className="pointer-events-none absolute -inset-10 opacity-60" aria-hidden>
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-teal-300/20 blur-3xl" />
      </div>
    </section>
  );
}
