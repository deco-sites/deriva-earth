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
    logo: "https://assets.decocache.com/derivative/24d0358a-2704-48df-8eed-ba90dfb9d704/Frame-2147224243.svg"
  },
  {
    name: "Apoio Financeiro 2", 
    logo: "https://assets.decocache.com/derivative/9d61a3e1-1f85-4424-b36b-f7d2d79cbaa0/b3svg.svg"
  },
  {
    name: "Genesis",
    logo: "https://assets.decocache.com/derivative/8d180754-e548-4bc9-b808-9eaaa57c2fa9/genesis.svg"
  },
  {
    name: "Artemisia",
    logo: "https://assets.decocache.com/derivative/646a5d40-efdb-4db5-853b-6bcfa94cb432/artemisia.svg"
  },
  {
    name: "Route",
    logo: "https://assets.decocache.com/derivative/7f44d50f-42a4-4ef7-b2ba-28f644a3e031/route.svg"
  },
  {
    name: "Deco",
    logo: "https://assets.decocache.com/derivative/4cf402dd-a4d0-4fc4-9dc8-317e3178cccb/deco.svg"
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
