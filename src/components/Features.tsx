import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Diseño responsive",
    description:
      "En Badgerteam, garantizamos que tu sitio web se adapte a cualquier dispositivo, ofreciendo una experiencia fluida y consistente para todos tus usuarios.",
    image: image4,
  },
  {
    title: "Instalación, configuración y soporte en servidores gnu/linux",
    description:
      "En Badgerteam, manejamos la instalación de servidores físicos y la configuración de soluciones en la nube, incluyendo AWS, Azure y VPS como OVH Cloud, para ofrecer una infraestructura adaptable y confiable que se ajusta a tus necesidades.",
    image: image3,
  },
  {
    title: "Backend transaccional robusto",
    description:
      "Desarrollamos soluciones backend robustas utilizando Laravel, Spring Boot, y próximamente, el framework Phoenix. Nos especializamos en crear sistemas escalables y eficientes que impulsan el rendimiento de tu aplicación.",
    image: image,
  },
];
const featureList: string[] = [
  "Tema oscuro/claro",
  "Características",
  "Precios",
  "Formulario de contacto",
  "Nuestro equipo",
  "Diseño responsivo",
  "Minimalista",
  "Instalación de servidores",
  "Soluciones en la nube",
  "Desarrollo backend con Laravel, Spring Boot y Phoenix",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Muchas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          funciones
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
