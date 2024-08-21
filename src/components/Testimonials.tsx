import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Carlos Ramírez",
    userName: "@carlos_ramirez",
    comment: "¡El equipo de Badgerteam es excepcional! Su trabajo en la instalación de servidores y configuración de la nube superó nuestras expectativas.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "María Gómez",
    userName: "@maria_gomez",
    comment:
      "Badgerteam nos ofreció una solución backend robusta con Laravel y Spring Boot. Su atención al detalle y profesionalismo fueron sobresalientes.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Andrés Pérez",
    userName: "@andres_perez",
    comment:
      "La implementación de servidores físicos y servicios en la nube por parte de Badgerteam ha mejorado significativamente el rendimiento de nuestra infraestructura.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sofía Martínez",
    userName: "@sofia_martinez",
    comment:
      "Trabajar con Badgerteam ha sido una experiencia excelente. Su capacidad para ofrecer soluciones escalables y eficientes en la nube es impresionante.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Javier Morales",
    userName: "@javier_morales",
    comment:
      "La experiencia con Badgerteam en el desarrollo backend y la configuración de servidores ha sido increíble. Recomiendo su trabajo sin dudarlo.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Fernández",
    userName: "@isabella_fernandez",
    comment:
      "Badgerteam nos brindó un servicio de instalación de servidores y soluciones en la nube que ha transformado nuestra infraestructura tecnológica. ¡Excelente trabajo!",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Descubre  el por qué la 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          gente{" "}
        </span>
        confía en badgerteam
        
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
