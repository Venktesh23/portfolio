/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";
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
    <div className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <article
          key={work.company}
          className={cn("w-full grid gap-3 rounded-2xl border border-border/70 bg-background/40 p-4 md:p-5")}
        >
          <div className="flex items-start gap-x-3 justify-between w-full text-left">
            <div className="flex items-start gap-x-3 flex-1 min-w-0">
              <LogoImage
                src={work.logoUrl}
                alt={work.company}
                fallbackSrc={work.company === "VSP Vision" ? "/images/vspvision.svg" : undefined}
              />
              <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                <div className="font-semibold leading-none flex items-center gap-2">
                  {work.company}
                </div>
                <div className="font-sans text-sm text-muted-foreground">
                  {work.title}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none pt-0.5">
              <span>{work.end != null ? `${work.start} - ${work.end}` : work.start}</span>
            </div>
          </div>

          <div className="ml-11 text-xs sm:text-sm text-muted-foreground">
            {"highlights" in work && work.highlights ? (
              <div className="space-y-2">
                <ul className="space-y-2 leading-[1.7]">
                  {work.highlights.map((highlight: string) => (
                    <li key={highlight} className="relative pl-4">
                      <span className="absolute left-0 top-[0.7em] size-1.5 rounded-full bg-muted-foreground/70" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>
                {"skills" in work && work.skills && work.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {work.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full border border-border/70 bg-background px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <p className="leading-[1.7]">{work.description}</p>
            )}
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
          </div>
        </article>
      ))}
    </div>
  );
}

