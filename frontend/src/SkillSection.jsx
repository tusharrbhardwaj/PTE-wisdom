import { Mic, BookOpen, Headphones } from "lucide-react";

export const SkillSection = () => (
  <section id="skill-section" className="py-32 px-12 bg-black">
    <h2 className="text-white text-4xl font-bold mb-16">PTE Preparation</h2>
    <div className="grid grid-cols-3 gap-10">
      {[ {t: 'Speaking', i: Mic}, {t: 'Reading', i: BookOpen}, {t: 'Listening', i: Headphones} ].map(s => (
        <div key={s.t} className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
          <s.i className="text-white mb-6" size={40} />
          <h3 className="text-white text-2xl font-bold">{s.t}</h3>
        </div>
      ))}
    </div>
  </section>
);