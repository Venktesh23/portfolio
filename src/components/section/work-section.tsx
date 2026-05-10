/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt, fallbackSrc }: { src: string; alt: string; fallbackSrc?: string }) {
  const [state, setState] = useState<"primary" | "fallback" | "failed">("primary");

  if (!src && !fallbackSrc) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-lg shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  const handleError = () => {
    if (state === "primary" && fallbackSrc) {
      setState("fallback");
    } else {
      setState("failed");
    }
  };

  if (state === "failed") {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-lg shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  const imgSrc = state === "fallback" && fallbackSrc ? fallbackSrc : src;
  return (
    <img
      key={imgSrc}
      src={imgSrc}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-lg shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={handleError}
      referrerPolicy="no-referrer"
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage
                  src={work.logoUrl}
                  alt={work.company}
                  fallbackSrc={work.company === "VSP Vision" ? "/images/vspvision.svg" : undefined}
                />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {work.end != null ? `${work.start} - ${work.end}` : work.start}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
            <p className="leading-[1.7]">{work.description}</p>
            {"links" in work && work.links && work.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {work.links.map((link: { icon: React.ComponentType<{ className?: string }>; href: string; label: string }) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center size-8 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      aria-label={link.label}
                    >
                      <Icon className="size-4 shrink-0" />
                    </a>
                  );
                })}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

