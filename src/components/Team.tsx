import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin,Github } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/78065227?v=4",
    name: "Optitudes",
    position: "Desarrollador backend",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/juan-sebastian-rojas-garcia-aa4096223/" },
      { name: "Github", url: "https://github.com/optitudes" },
    ],
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/161382820?v=4",
    name: "Shrdaos",
    position: "Desarrollador frontend",
    socialNetworks: [
      { name: "Github", url: "https://github.com/shrdaos" },
    ],
  },
  {
    imageUrl: "data:image/jpeg;base64,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",
    name: "Maylerx",
    position: "Ingeniero director de proyectos",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/maycol-cardenas-acevedo-a44942158/" },
    ],
  }
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;

      case "Github":
        return <Github size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Nuestro equipo{" "}
        </span>
        dedicado
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
