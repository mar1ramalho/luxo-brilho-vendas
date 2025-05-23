
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Nossa História</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça a trajetória da Brilho Eterno e nossa paixão por criar semi jóias que 
              encantam e valorizam a beleza de cada mulher.
            </p>
          </div>
          
          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1612387605794-7e7948e28d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                alt="Nossa história"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Como Tudo Começou</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A Brilho Eterno nasceu em 2015, fruto da paixão de Maria Oliveira por design de jóias. 
                  Após anos trabalhando no setor de joalheria tradicional, Maria identificou uma oportunidade 
                  de criar peças acessíveis com a mesma qualidade e design das jóias convencionais.
                </p>
                <p>
                  No início, a produção era pequena e feita artesanalmente em um pequeno estúdio. 
                  As peças eram vendidas apenas para amigos e familiares, mas logo o boca a boca fez com que 
                  a demanda aumentasse significativamente.
                </p>
                <p>
                  Em 2018, a Brilho Eterno inaugurou sua primeira loja física, e hoje contamos com uma equipe 
                  dedicada de designers e artesãos que compartilham da mesma paixão pela criação de semi jóias 
                  exclusivas e de qualidade.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Mission */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Nossa Missão</h2>
              <p className="text-xl text-gray-600">
                "Criar semi jóias que inspiram confiança e destacam a beleza individual de cada pessoa, 
                combinando qualidade, design e acessibilidade em cada peça que produzimos."
              </p>
            </div>
          </div>
          
          {/* Quality Commitment */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-semibold mb-4">Compromisso com a Qualidade</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Na Brilho Eterno, cada peça é criada com atenção meticulosa aos detalhes. 
                  Utilizamos banhos de ouro e prata de alta qualidade, garantindo durabilidade e 
                  brilho duradouro às nossas semi jóias.
                </p>
                <p>
                  Nossas peças passam por rigorosos testes de qualidade antes de chegarem às mãos dos nossos clientes. 
                  Isso assegura que cada item atenda aos mais altos padrões de excelência que estabelecemos para nossa marca.
                </p>
                <p>
                  Além disso, buscamos constantemente inovar e nos manter atualizados com as últimas tendências e 
                  técnicas de produção, sempre com o compromisso de oferecer o melhor para nossos clientes.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1638867422536-eb2500ef1843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                alt="Compromisso com a qualidade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-gold-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Qualidade</h3>
                <p className="text-gray-600">
                  Comprometimento com a excelência em cada peça que criamos, desde a seleção dos materiais até o acabamento final.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-gold-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Paixão</h3>
                <p className="text-gray-600">
                  Amor genuíno pelo que fazemos, transmitindo emoção e dedicação em cada criação.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-gold-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Originalidade</h3>
                <p className="text-gray-600">
                  Criação de designs únicos que expressam personalidade e estilo, fugindo do convencional.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-gold-light p-10 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Conheça Nossas Criações</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Explore nossa coleção e descubra peças que combinam com seu estilo e personalidade. 
              Cada semi jóia é criada com paixão e cuidado para destacar sua beleza natural.
            </p>
            <a
              href="/produtos"
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-black font-medium py-3 px-6 rounded-md transition-colors"
            >
              Ver coleção
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
