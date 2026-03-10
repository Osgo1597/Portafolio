"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

interface ProjectPreviewModalProps {
  project: Project;
  demoUrl?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectPreviewModal({ project, demoUrl, isOpen, onClose }: ProjectPreviewModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setIsVisible(true);
    setIframeLoaded(false);
    setShowFallback(project.embedMode === "external" || !demoUrl);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimeout = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const blockTimeout = window.setTimeout(() => {
      if (!iframeLoaded && project.embedMode === "iframe") {
        setShowFallback(true);
      }
    }, 7000);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimeout);
      window.clearTimeout(blockTimeout);
    };
  }, [demoUrl, iframeLoaded, isOpen, onClose, project.embedMode]);

  useEffect(() => {
    if (isOpen) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }
    setIsVisible(false);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center bg-black/65 px-3 py-3 transition-opacity duration-200 sm:px-6 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`preview-title-${project.slug}`}
        className={`flex h-[95vh] w-full max-w-[96vw] flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl transition-all duration-200 sm:h-[85vh] sm:max-w-[90vw] ${
          isVisible ? "translate-y-0 scale-100" : "translate-y-2 scale-[0.98]"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-start justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <h2 id={`preview-title-${project.slug}`} className="truncate text-base font-semibold text-zinc-100 sm:text-lg">
              {project.title}
            </h2>
            <p className="mt-1 truncate text-xs text-zinc-400 sm:text-sm">{project.oneLiner}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Cerrar vista previa"
            onClick={onClose}
            className="rounded-lg border border-white/20 px-3 py-1.5 text-sm text-zinc-100 hover:bg-white/10"
          >
            Cerrar
          </button>
        </header>

        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
          <p className="hidden text-xs text-zinc-400 sm:block">Vista interna del proyecto</p>
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex rounded-lg border border-white/20 px-3 py-2 text-xs text-zinc-100 hover:bg-white/10 sm:text-sm"
          >
            Abrir en pestaña nueva
          </a>
        </div>

        <div className="relative flex-1 bg-zinc-900">
          {showFallback ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
              <p className="max-w-xl text-sm text-zinc-200 sm:text-base">
                Este proyecto no permite vista embebida. Ábrelo en una pestaña nueva.
              </p>
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
              >
                Abrir en pestaña nueva
              </a>
            </div>
          ) : demoUrl ? (
            <iframe
              src={demoUrl}
              title={`Vista embebida de ${project.title}`}
              loading="lazy"
              className="h-full w-full"
              onLoad={() => setIframeLoaded(true)}
              onError={() => setShowFallback(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center">
              <p className="text-sm text-zinc-300">Demo próximamente disponible.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
