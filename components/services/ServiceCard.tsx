import Link from "next/link";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
  url: string;
  image: any;
  title: string;
  description: string;
}

const ServiceCard = ({ url, image, title, description }: ServiceCardProps) => {
  return (
    <Link href={url} className={"group h-full w-full"}>
      <Card className="relative mx-auto w-full h-full pt-0 overflow-hidden transition-shadow duration-200 group-hover:shadow-md">
        {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
        <img
          src={image}
          alt="Service image"
          className="relative z-20 aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <CardHeader className={"flex-1"}>
          {/*<CardAction>*/}
          {/*  /!* <Badge variant="secondary">Featured</Badge> *!/*/}
          {/*</CardAction>*/}
          <CardTitle className={"text-lg text-primary mt-4 mb-3"}>
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className={"mt-auto"}>
          <button
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-200 group-hover:bg-primary/90"
            type="button"
          >
            Mehr lesen
          </button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ServiceCard;
