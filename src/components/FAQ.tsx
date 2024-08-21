import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Qué servicios ofrece Badgerteam?",
    answer: "Badgerteam ofrece una variedad de servicios, incluyendo instalación de servidores físicos, configuración de soluciones en la nube (AWS, Azure, VPS), y desarrollo backend con frameworks como Laravel, Spring Boot y Phoenix.",
    value: "item-1",
  },
  {
    question: "¿Cómo garantiza Badgerteam la escalabilidad de las soluciones?",
    answer:
      "Badgerteam asegura la escalabilidad mediante la implementación de infraestructura flexible y adaptable. Utilizamos tecnologías avanzadas y prácticas recomendadas para garantizar que tu sistema pueda crecer con tus necesidades.",
    value: "item-2",
  },
  {
    question:
      "¿Qué tipo de soporte ofrece Badgerteam para la configuración de servidores?",
    answer:
      "Ofrecemos soporte completo para la instalación y configuración de servidores físicos y servicios en la nube. Nuestro equipo te asistirá en todas las etapas del proceso para asegurar una implementación exitosa.",
    value: "item-3",
  },
  {
    question: "¿Qué hace a Badgerteam diferente de otras empresas de tecnología?",
    answer: "Badgerteam se destaca por su enfoque en soluciones personalizadas y su experiencia en la integración de diversas tecnologías para crear sistemas robustos y eficientes.",
    value: "item-4",
  },
  {
    question:
      "¿Badgerteam ofrece servicios de desarrollo backend?",
    answer:
      "Sí, Badgerteam se especializa en desarrollo backend utilizando frameworks como Laravel, Spring Boot y próximamente Phoenix, asegurando soluciones de alta calidad para tus aplicaciones.",
    value: "item-5",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Preguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
         frecuentes 
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Sigues con alguna duda?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contactanos
        </a>
      </h3>
    </section>
  );
};
