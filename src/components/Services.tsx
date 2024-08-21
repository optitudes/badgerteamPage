import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Colaboración en Código",
    description:
      "Facilitamos la colaboración en proyectos de desarrollo de software, optimizando el trabajo en equipo y la gestión de código.",
    icon: <ChartIcon />,
  },
  {
    title: "Gestión de Proyectos",
    description:
      "Ofrecemos soluciones para una gestión eficiente de proyectos, asegurando la organización y el cumplimiento de objetivos.",
    icon: <WalletIcon />,
  },
  {
    title: "Automatización de Tareas",
    description:
      "Implementamos herramientas y procesos para automatizar tareas repetitivas, mejorando la eficiencia y reduciendo errores.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Servicios {" "}
            </span>
            centrados en el cliente
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
