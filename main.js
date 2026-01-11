import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Play, Check, MessageCircle, Instagram, Youtube, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const portfolioVideos = [
    { id: 1, title: "Comercial de Moda", category: "Publicidade", thumbnail: "https://images.unsplash.com/photo-1492691523567-30730029d034?auto=format&fit=crop&q=80&w=800", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Evento Corporativo", category: "Institucional", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, title: "Documentário Curto", category: "Narrativo", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 4, title: "Reels / TikTok", category: "Social Media", thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  ];

  const pricingPlans = [
    { name: "Avulso", videos: "1 Vídeo", price: "49,90", period: "por vídeo", features: ["Edição profissional", "Corte e Cor", "Até 1 minuto", "1 Revisão"], highlight: false },
    { name: "Combo Duplo", videos: "2 Vídeos", price: "94,90", period: "total", features: ["Melhor Custo-Benefício", "Legendas inclusas", "Cortes Dinâmicos", "2 Revisões"], highlight: true },
    { name: "Plano Mensal", videos: "4 Vídeos", price: "189,90", period: "por mês", features: ["Assessoria de conteúdo", "Prioridade na fila", "Formatos variados", "Revisões Ilimitadas"], highlight: false }
  ];

  const handleContact = (planName) => {
    const meuNumero = "5500000000000"; 
    const message = encodeURIComponent(`Olá! Vi seu portfólio e tenho interesse no plano: ${planName}`);
    window.open(`https://wa.me/${meuNumero}?text=${message}`, '_blank'); 
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <header className="relative py-24 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#595ce933_0%,_transparent_70%)] -z-10"></div>
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 border border-[#595ce9]/30 rounded-full bg-[#595ce9]/10 text-[#595ce9] text-sm">Disponível para projetos</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">Edição Profissional</h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-10 text-center">Transformo ideias em conteúdo visual impactante.</p>
          <div className="flex justify-center gap-4">
            <a href="#portfolio" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition-all">Portfólio</a>
            <a href="#precos" className="bg-neutral-900 border border-neutral-800 px-8 py-3 rounded-full font-bold hover:bg-neutral-800 transition-all">Preços</a>
          </div>
        </div>
      </header>

      <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioVideos.map((video) => (
            <div key={video.id} className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-[#595ce9]/50 transition-all" onClick={() => setActiveVideo(video.embedUrl)}>
              <div className="aspect-[9/16] relative overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={40} fill="white" className="text-white" />
                </div>
              </div>
              <div className="p-4"><h3 className="font-bold">{video.title}</h3></div>
            </div>
          ))}
        </div>
      </section>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden border border-neutral-800">
            <iframe src={activeVideo} className="w-full h-full" allowFullScreen></iframe>
          </div>
        </div>
      )}

      <section id="precos" className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`p-8 rounded-3xl border ${plan.highlight ? 'bg-[#595ce9] border-[#595ce9] scale-105' : 'bg-neutral-900 border-neutral-800'}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-extrabold mb-6">R${plan.price}</div>
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm"><Check size={14} />{f}</li>
                  ))}
                </ul>
                <button onClick={() => handleContact(plan.name)} className={`w-full py-3 rounded-xl font-bold ${plan.highlight ? 'bg-white text-[#595ce9]' : 'bg-neutral-800 text-white'}`}>Contratar</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
