import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Ingenium has completely transformed how our executive team operates. Their design work is world-class and their responsiveness is unmatched.",
      author: "Alex Rivera",
      avatar: "https://i.pravatar.cc/150?u=alex"
    },
    {
      quote: "The level of detail they bring to project management and digital marketing is incredible. It feels like having an in-house expert at half the cost.",
      author: "Jordan Smith",
      avatar: "https://i.pravatar.cc/150?u=jordan"
    },
    {
      quote: "Professional, creative, and highly efficient. They handled our rebranding and video production with absolute brilliance.",
      author: "Taylor Wong",
      avatar: "https://i.pravatar.cc/150?u=taylor"
    },
    {
      quote: "The efficiency and creativity they bring to our social media campaigns is outstanding. Our engagement has tripled since we started working with them.",
      author: "Morgan Lee",
      avatar: "https://i.pravatar.cc/150?u=morgan"
    },
    {
      quote: "I was skeptical about remote assistance at first, but Ingenium proved me wrong. They are more reliable than many on-site teams I've worked with.",
      author: "Casey Jordan",
      avatar: "https://i.pravatar.cc/150?u=casey"
    },
    {
      quote: "The video editing quality is absolutely top-tier. They captured our brand voice perfectly and delivered way ahead of schedule.",
      author: "Riley Chen",
      avatar: "https://i.pravatar.cc/150?u=riley"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-brand/10 rounded-full mb-6">
            <span className="text-brand font-black text-sm uppercase tracking-widest">Client Success</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-slate mb-6">Voices of Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-shadow duration-500 group">
              <div className="text-brand mb-8 text-lg">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              
              <p className="text-slate-600 text-lg italic mb-8 leading-relaxed flex-grow font-medium">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  loading="lazy"
                  decoding="async"
                  width="64"
                  height="64"
                  className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
                <div>
                  <h4 className="font-black text-brand-slate text-lg">{t.author}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;