import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Supporter {
  name: string;
  logo: ImageWidget;
}

export interface Props {
  title?: string;
  subtitle?: string;
  supporters?: Supporter[];
}

const DEFAULT_SUPPORTERS: Supporter[] = [
  {
    name: "Apoio Financeiro 1",
    logo: "https://decoims.com/derivative/ca0ac2b7-0930-469a-b07f-4004373f5240/Frame-2147224243.svg"
  },
  {
    name: "Apoio Financeiro 2", 
    logo: "https://decoims.com/derivative/d3291a1c-c38f-4d88-9309-5e36ee38a9ab/b3svg.svg"
  },
  {
    name: "Genesis",
    logo: "https://decoims.com/derivative/53218e46-3bcc-4806-b2f0-ab8604f14898/genesis.svg"
  },
  {
    name: "Artemisia",
    logo: "https://decoims.com/derivative/2914b3aa-c94b-4df3-a02c-04473eef04ad/artemisia.svg"
  },
  {
    name: "Route",
    logo: "https://decoims.com/derivative/c4585bde-9546-410b-adba-c4deb2fdee6c/route.svg"
  },
  {
    name: "Deco",
    logo: "https://decoims.com/derivative/77823763-8cbe-482b-94f4-abf4b9328b38/deco.svg"
  }
];

export default function Supporters({
  title = "Apoiadores",
  subtitle = "Parceiros que acreditam no nosso propósito",
  supporters = DEFAULT_SUPPORTERS,
}: Props) {
  return (
    <div style="background-color: #1d1b1d; padding: 60px 0;">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-12">
          {/* Título Sutil */}
          <h3 class="text-sm font-mono font-normal uppercase tracking-widest mb-2" style="color: rgba(255, 255, 255, 0.6);">
            {title}
          </h3>
        </div>

        {/* Logos Organizados Horizontalmente */}
        <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-12 xl:gap-16">
          {supporters.map((supporter) => (
            <div 
              key={supporter.name}
              class="group relative"
            >
              <div class="relative p-4 lg:p-6 rounded-lg transition-all duration-300 group-hover:bg-white/5 group-hover:scale-105">
                <Image
                  src={supporter.logo}
                  alt={supporter.name}
                  width={100}
                  height={50}
                  class="object-contain filter brightness-0 invert opacity-60 group-hover:opacity-90 transition-all duration-300"
                  style="height: 50px; width: auto; min-width: 80px;"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
