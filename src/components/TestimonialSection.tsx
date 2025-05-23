
export function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      author: "Maria Silva",
      role: "Cliente desde 2021",
      content: "As semi jóias da Brilho Eterno fazem parte das minhas escolhas diárias. A qualidade é excepcional e o acabamento impecável.",
    },
    {
      id: 2,
      author: "Carla Oliveira",
      role: "Cliente desde 2022",
      content: "Adoro como as peças mantêm o brilho mesmo após meses de uso. Sem dúvida, o melhor custo-benefício que encontrei.",
    },
    {
      id: 3,
      author: "Juliana Martins",
      role: "Cliente desde 2020",
      content: "Comprei um conjunto para minha formatura e todos perguntaram onde consegui jóias tão bonitas. Vou ser cliente para sempre!",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-gold uppercase tracking-wider text-sm font-medium">Depoimentos</p>
          <h2 className="text-3xl font-semibold mt-1">O Que Nossas Clientes Dizem</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm"
            >
              <svg
                className="h-8 w-8 text-gold mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="mt-6">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
