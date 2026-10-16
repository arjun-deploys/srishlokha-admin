import { useState } from "react"
import { Outlet } from "react-router"
import { Brand } from "@/components/common"
import { AuthVisual } from "../components/AuthVisual"

type Orientation = "left" | "right"

export function AuthLayout() {
  const [orientation, setOrientation] = useState<Orientation>("left")
  const toggle = (value: Orientation, label: string) => (
    <button
      onClick={() => setOrientation(value)}
      aria-pressed={orientation === value}
      className={`px-2 py-1.5 text-[10px] ${orientation === value ? "bg-[var(--forest)] text-white" : "text-[var(--charcoal)]"}`}
    >
      {label}
    </button>
  )

  return (
    <div className="min-h-[100dvh] bg-[var(--ivory)]">
      <div className="flex min-h-[100dvh] flex-col md:flex-row">
        <section
          className={`flex min-h-[60vh] w-full flex-col justify-center px-6 py-9 md:min-h-[100dvh] md:w-[47%] md:px-[7vw] ${orientation === "right" ? "md:order-2" : ""}`}
        >
          <div className="mb-10 md:hidden">
            <Brand />
          </div>
          <div className="mx-auto w-full max-w-[390px]">
            <div className="mb-8 hidden md:block">
              <Brand />
            </div>
            <Outlet />
          </div>
        </section>
        <section
          className={`hidden w-full p-3 md:block md:min-h-[100dvh] md:w-[53%] ${orientation === "right" ? "md:order-1" : ""}`}
        >
          <AuthVisual />
        </section>
      </div>
      <div
        className="fixed right-3 bottom-3 z-50 flex hidden items-center gap-1 border border-[var(--border)] bg-[var(--ivory)] p-1 shadow-sm"
        role="group"
        aria-label="Choose login composition"
      >
        <span className="px-2 text-[9px] tracking-wider text-[var(--muted-foreground)] uppercase">
          Composition
        </span>
        {toggle("left", "Form left")}
        {toggle("right", "Visual left")}
      </div>
    </div>
  )
}
