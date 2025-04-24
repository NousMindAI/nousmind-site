import Head from 'next/head';
import Feature from '../components/Feature';
import Logo from '../components/Logo'; // ✅ novo import

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <Head>
        <title>NousMind AI</title>
      </Head>

      <section className="py-20 px-6 text-center">
        <Logo /> {/* ✅ exibe a logo centralizada */}
        <h1 className="text-4xl md:text-6xl font-bold text-cobre mt-6">
          Automatize seu negócio.<br />Humanize seu tempo.
        </h1>
        <p className="mt-6 text-lg text-neutral-300 max-w-xl mx-auto">
          Somos especialistas em automações com IA, engenharia de prompt e agentes inteligentes que trabalham por você.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contato" className="bg-cobre text-white px-6 py-3 rounded-2xl shadow-md hover:opacity-90 transition">Falar com um Especialista</a>
          <a href="#" className="border border-cobre text-cobre px-6 py-3 rounded-2xl hover:bg-cobre hover:text-white transition">Solicitar Demonstração</a>
        </div>
      </section>
      </section>

      <section className="py-20 px-6 text-center" id="contato">
        <h2 className="text-3xl font-bold text-cobre mb-4">Vamos conversar?</h2>
        <p className="text-neutral-300 mb-6">Clique abaixo para falar com o Lucas via WhatsApp.</p>
        <a href="https://wa.me/5511971021702" target="_blank" className="inline-block bg-cobre text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow hover:opacity-90 transition">
          Falar no WhatsApp
        </a>
      </section>

    </div> // ← Fecha a div principal
  );
} // ← Fecha a função Home
