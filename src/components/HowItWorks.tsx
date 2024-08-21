import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accesibilidad",
    description:
      "Desarrollamos soluciones que cumplen con los más altos estándares de accesibilidad, asegurando que nuestros productos y servicios sean utilizables por personas con diversas capacidades. Nuestro enfoque incluye la implementación de prácticas de diseño inclusivo y el cumplimiento de normativas internacionales de accesibilidad, garantizando que cada usuario tenga una experiencia óptima, sin importar sus limitaciones físicas o tecnológicas.",
  },
  {
    icon: <MapIcon />,
    title: "Comunidad",
    description:
      "Fomentamos una comunidad de colaboración y aprendizaje continuo. Creemos en el poder del trabajo en equipo y en el intercambio de conocimientos para impulsar el desarrollo tanto individual como colectivo. Nuestra comunidad está formada por profesionales apasionados que se apoyan mutuamente para superar desafíos y alcanzar metas comunes. Valoramos la diversidad de ideas y perspectivas, creando un entorno en el que todos pueden contribuir y crecer juntos.",
  },
  {
    icon: <PlaneIcon />,
    title: "Escalabilidad",
    description:
      "Nos especializamos en la instalación de servidores físicos y en la configuración de VPS, AWS y Azure, garantizando que tu infraestructura pueda crecer junto con tu negocio. Diseñamos sistemas que se adaptan a las necesidades cambiantes, permitiendo una expansión fluida sin comprometer el rendimiento o la seguridad. Con nuestras soluciones escalables, aseguramos que tu plataforma esté preparada para manejar aumentos de carga y nuevos desafíos, siempre manteniendo la eficiencia y estabilidad.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamificaciónn",
    description:
      "aprovechamos el poder de la gamificación para transformar la forma en que los usuarios interactúan con la tecnología. Implementamos estrategias de gamificación que motivan y comprometen a los usuarios, haciendo que sus experiencias sean más dinámicas y entretenidas. Al incorporar elementos de juego como recompensas, desafíos y niveles, ayudamos a mejorar la retención, aumentar la participación y fomentar el aprendizaje en diversas plataformas y aplicaciones. La gamificación es una herramienta clave que utilizamos para crear experiencias de usuario más atractivas y efectivas.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Nuestra {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
         filosofía{" "}
        </span>
        se basa en
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
