export default function Feature({ title, desc }) {
  return (
    <div className="bg-neutral-800 rounded-2xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-copper mb-2">{title}</h3>
      <p className="text-neutral-300">{desc}</p>
    </div>
  );
}