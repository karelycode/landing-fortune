"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  IoVolumeHigh,
  IoRocket,
  IoShieldCheckmark,
  IoPerson,
  IoLogoTiktok,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoCallOutline,
  IoLogoWhatsapp,
  IoMail,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { useRouter } from "next/navigation";

const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: "smooth" });
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#323E48]">
      <Header />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ShowroomSection />
      <PromocionesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#B09B6B]/20 bg-white backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={(e) => scrollToSection(e, "#hero")}
        >
          <Image
            src="/fortunelogo.png"
            alt="Logo de Fortune Acoustics"
            width={120}
            height={120}
            className="rounded-md"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-[#B09B6B] transition-colors"
            onClick={(e) => scrollToSection(e, "#about")}
          >
            Nosotros
          </Link>
          <Link
            href="#values"
            className="text-sm font-medium hover:text-[#B09B6B] transition-colors"
            onClick={(e) => scrollToSection(e, "#values")}
          >
            Valores
          </Link>
          <Link
            href="#showroom"
            className="text-sm font-medium hover:text-[#B09B6B] transition-colors"
            onClick={(e) => scrollToSection(e, "#showroom")}
          >
            Showroom
          </Link>
          <Link
            href="#promociones"
            className="text-sm font-medium hover:text-[#B09B6B] transition-colors"
            onClick={(e) => scrollToSection(e, "#promociones")}
          >
            Promociones
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-[#B09B6B] transition-colors"
            onClick={(e) => scrollToSection(e, "#contact")}
          >
            Contacto
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#323E48] hover:bg-[#B09B6B]/10"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Alternar menú</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white p-6 animate-in fade-in slide-in-from-top-5">
          <nav className="flex flex-col gap-6">
            <Link
              href="#about"
              className="text-lg font-medium hover:text-[#B09B6B] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="#values"
              className="text-lg font-medium hover:text-[#B09B6B] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Valores
            </Link>
            <Link
              href="#showroom"
              className="text-lg font-medium hover:text-[#B09B6B] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Showroom
            </Link>
            <Link
              href="#promociones"
              className="text-lg font-medium hover:text-[#B09B6B] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Promociones
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:text-[#B09B6B] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative h-[80vh] overflow-hidden">
      <Image
        src="/McIntosh 3.jpg"
        alt="Equipos de audio de alta gama"
        fill
        className="object-cover object-center brightness-90"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-[#323E48]/50">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
          Experimenta la{" "}
          <span className="text-[#B09B6B]">Perfección Sonora</span>
        </h1>
        <p className="mt-6 max-w-2xl text-2xl text-white/90">
          Descubre los mejores equipos de audio HiFi para los audiófilos más
          exigentes.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="#about"
            className="w-full "
            onClick={(e) => scrollToSection(e, "#about")}
          >
            <Button className="bg-[#7F6A4C] hover:bg-[#897A54] text-white ">
              Ver más
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Sobre <span className="text-[#7F6A4C]">Nosotros</span>
            </h2>
            <p className="text-[#495057] text-xl mb-4">
              Fortune Acoustics se fundó con una profunda pasión por ofrecer una
              calidad de sonido excepcional, por llevar la cultura del audio a
              otro nivel en cada hogar y transformar cada espacio en una
              experiencia auditiva única. Desde el principio se ha trabajado por
              mejorar la calidad y experiencia que necesitas para tu proyecto o
              sistema HiFi.
            </p>

            <p className="text-[#495057] text-xl mb-4">
              La creatividad es el corazón de su trabajo, y cada instalación se
              convierte en una obra maestra diseñada para brindar una
              experiencia sonora excepcional desde la selección de productos
              hasta la instalación final, cada detalle es cuidadosamente
              considerado para asegurar una satisfacción completa.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/IMG-20250312-WA0011.jpg"
              alt="Sala de exposición de Fortune Acoustics"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      title: "Soporte y Asesoría",
      description:
        "El equipo está preparado para dar soporte y ayudarte con dudas que vayan surgiendo durante el desarollo y funcionamiento de tu sistema de audio.",
    },
    {
      title: "Garantías",
      description:
        "Cubrimos las garantías de fabrica como el funcionamiento del equipo o daños en la entrega, además de garantía de instalación de equipo.",
    },
    {
      title: "Satisfacción del Cliente",
      description:
        "No estamos satisfechos hasta que experimentes la perfección de audio en tu hogar.",
    },
    {
      title: "Capacitación Continua",
      description:
        "Implementamos programas de formación continua que impulsan la excelencia operativa, asegurando servicios de calidad superior mediante actualización permanente de competencias técnicas y protocolos certificados.",
    },
  ];

  return (
    <section id="values" className="py-24 bg-[#F8F9FA]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-16">
          Nuestros <span className="text-[#7F6A4C]">Valores</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-[#B09B6B]/20 hover:border-[#B09B6B]/50 transition-colors shadow-md"
            >
              <h3 className="text-xl font-bold mb-3 text-[#7F6A4C]">
                {value.title}
              </h3>
              <p className="text-[#495057]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowroomSection() {
  const galleryImages = [
    {
      src: "/IMG-20250312-WA0010.jpg",
      alt: "Amplificadores de alta fidelidad",
    },
    {
      src: "/IMG-20250312-WA0012.jpg",
      alt: "Sala de audición principal",
    },
    {
      src: "/IMG-20250312-WA0014.jpg",
      alt: "Colección de altavoces premium",
    },
    {
      src: "/Sonus Faber 1.jpg",
      alt: "Tocadiscos de edición limitada",
    },
    {
      src: "/Pro Ject 2.jpg",
      alt: "Auriculares audiófilo",
    },
    {
      src: "/Naim 2.jpg",
      alt: "Equipos de audio vintage",
    },
  ];

  return (
    <section id="showroom" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-16">
          Nuestro <span className="text-[#7F6A4C]">Showroom</span>
        </h2>

        <div className="mb-16">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://youtu.be/EppSszFda-c" // Reemplaza TU_VIDEO_ID con el ID de tu video
              title="Fortune Acoustics Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden group shadow-md"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromocionesSection() {
  const benefits = [
    {
      icon: <IoVolumeHigh className="w-15 h-15" />,
      title: "Hasta 15% OFF en productos de las marcas Focal y Naim",
    },
    {
      icon: <IoRocket className="w-15 h-15" />,
      title: "Envío gratuito",
    },
    {
      icon: <IoShieldCheckmark className="w-15 h-15" />,
      title: "Garantía respaldada directamente de la fábrica",
    },
    {
      icon: <IoPerson className="w-15 h-15" />,
      title: "Asesoría y atención personalizada",
    },
  ];

  return (
    <section id="promociones" className="py-24 bg-[#F8F9FA]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-16">
          Promociones <span className="text-[#7F6A4C]">Exclusivas</span>
        </h2>
        <p className="text-[#495057] text-2xl text-center mb-6">
          Aprovecha nuestras ofertas especiales en productos seleccionados y
          disfruta de descuentos exclusivos en equipos de audio de alta gama.
          ¡No te lo pierdas!
        </p>

        <div className="relative lg:col-span-2 h-[300px] rounded-xl overflow-hidden group shadow-md mb-6">
          <Image
            src="/promociones/COVER de interna de Marca Celular.png"
            alt="Promociones especiales"
            fill
            className="object-cover transition-transform "
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 ">
            Beneficios de comprar durante el Hot Sale
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-[#F8F9FA] transition-colors"
              >
                <span className="text-[#7F6A4C] mb-3">{benefit.icon}</span>
                <p className="text-[#495057] text-xl">{benefit.title}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center text-center mt-10">
            <Link
              href="https://fortuneacoustics.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#7F6A4C] hover:bg-[#897A54] px-10 py-7 text-white text-xl">
                Comprar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#F8F9FA]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Mantente <span className="text-[#7F6A4C]">Conectado</span>
            </h2>
            <p className="text-[#495057]  text-xl mb-6">
              Suscríbete para recibir promociones exclusivas, invitaciones a
              eventos especiales y ser el primero en conocer nuestros nuevos
              equipos de audio.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Juan Pérez"
                    className="border-[#B09B6B]/30 focus:border-[#7F6A4C]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Número de Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+34 (555) 000-000"
                    className="border-[#B09B6B]/30 focus:border-[#7F6A4C]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan@ejemplo.com"
                    className="border-[#B09B6B]/30 focus:border-[#7F6A4C]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Mensaje (Opcional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos qué te interesa..."
                    className="border-[#B09B6B]/30 focus:border-[#7F6A4C]"
                  />
                </div>
                <Button className="w-full bg-[#7F6A4C] hover:bg-[#897A54] text-white">
                  Suscribirse a Promociones
                </Button>
              </form>
            </div>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/Sonos 2.jpg"
              alt="Configuración de audio de alta gama"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#495057] text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B09B6B]">
              Fortune Acoustics
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Descubre productos de alta fidelidad, cine en casa, audio
              ambiental y más. También ofrecemos asesoramiento personalizado
              para tus proyectos de audio.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/fortuneacoustics/"
                className="text-white/80 hover:text-[#B09B6B]"
              >
                <IoLogoFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/fortuneacoustics/"
                className="text-white/80 hover:text-[#B09B6B]"
              >
                <IoLogoInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@fortuneacoustics"
                className="text-white/80 hover:text-[#B09B6B]"
              >
                <IoLogoTiktok className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="https://www.youtube.com/@fortuneacoustics"
                className="text-white/80 hover:text-[#B09B6B]"
              >
                <IoLogoYoutube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B09B6B]">
              Productos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://fortuneacoustics.com/"
                  className="text-white/80 hover:text-[#B09B6B]"
                >
                  Tienda Online
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B09B6B]">
              Empresa
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-white/80 hover:text-[#B09B6B]"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#values"
                  className="text-white/80 hover:text-[#B09B6B]"
                >
                  Nuestros Valores
                </Link>
              </li>
              <li>
                <Link
                  href="#showroom"
                  className="text-white/80 hover:text-[#B09B6B]"
                >
                  Showroom
                </Link>
              </li>
              <li>
                <Link
                  href="#promociones"
                  className="text-white/80 hover:text-[#B09B6B]"
                >
                  Promociones
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/80 hover:text-[#B09B6B]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B09B6B]">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="tel:+523321666834"
                  className="text-white/80 hover:text-[#B09B6B] flex items-center gap-2"
                >
                  <IoCallOutline className="h-5 w-5" />
                  <span>+52 33 2166 6834</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+523321666834"
                  className="text-white/80 hover:text-[#B09B6B] flex items-center gap-2"
                >
                  <IoLogoWhatsapp className="h-5 w-5" />
                  <span>+52 33 2166 6834</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hola@fortuneacoustics.com"
                  className="text-white/80 hover:text-[#B09B6B] flex items-center gap-2"
                >
                  <IoMailOutline className="h-5 w-5" />
                  <span>hola@fortuneacoustics.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://maps.app.goo.gl/6w7PLM7AobkcKiz79"
                  className="text-white/80 hover:text-[#B09B6B] flex items-center gap-2"
                >
                  <div className="text-white/80 hover:text-[#B09B6B]">
                    <div className="flex items-center gap-2 mb-2">
                      <IoLocationOutline className="h-5 w-5" />
                      <span className="font-medium">Showroom:</span>
                    </div>
                    <div className="ml-7">
                      <span className="block">C. La Luna 2664-Interior 2</span>
                      <span className="block">Jardines del Bosque</span>
                      <span className="block">CP 44520</span>
                      <span className="block">Guadalajara, Jal, México</span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/80">
          <p>
            © {new Date().getFullYear()} Fortune Acoustics. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
