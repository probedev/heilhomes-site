"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        root: cn("w-fit rounded-xl border border-slate-200/80 bg-white p-1 shadow-sm"),
        months: "relative flex flex-col gap-4 sm:flex-row",
        month: "flex w-full flex-col gap-4",
        month_caption: "flex h-9 w-full items-center justify-center px-9",
        caption_label: "font-serif text-sm font-medium text-slate-900",
        nav: "absolute inset-x-0 top-0 flex w-full items-center justify-between px-1",
        button_previous: cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-md border border-transparent text-slate-600 transition-colors",
          "hover:bg-slate-100 hover:text-slate-900",
          "disabled:pointer-events-none disabled:opacity-40",
        ),
        button_next: cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-md border border-transparent text-slate-600 transition-colors",
          "hover:bg-slate-100 hover:text-slate-900",
          "disabled:pointer-events-none disabled:opacity-40",
        ),
        weekdays: "flex",
        weekday:
          "w-9 text-[0.7rem] font-medium uppercase tracking-wide text-slate-500 sm:text-xs",
        weeks: "w-full space-y-1",
        week: "mt-1 flex w-full",
        day: cn(
          "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20",
        ),
        day_button: cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-md p-0 font-normal text-slate-800 transition-colors",
          "hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400",
        ),
        outside: "text-slate-400 opacity-60",
        disabled: "text-slate-300 opacity-50",
        hidden: "invisible",
        today: "font-semibold text-slate-900",
        ...classNames,
      }}
      components={{
        Chevron: ({ className: chClass, orientation, ...rest }) =>
          orientation === "left" ? (
            <ChevronLeft className={cn("h-4 w-4", chClass)} {...rest} />
          ) : (
            <ChevronRight className={cn("h-4 w-4", chClass)} {...rest} />
          ),
      }}
      {...props}
    />
  );
}

export { Calendar };
