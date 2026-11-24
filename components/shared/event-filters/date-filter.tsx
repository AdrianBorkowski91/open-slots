"use client";

import { startTransition, useEffect, useState } from "react";
import { addDays, format } from "date-fns";
import { pl } from "react-day-picker/locale/pl";
import { DateRange } from "react-day-picker";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePickerWithRange() {
  const [date, setDate] = useState<DateRange | undefined>();

  useEffect(() => {
    const year = new Date().getFullYear();
    const from = new Date(year, 0, 20);

    startTransition(() => {
      setDate({
        from,
        to: addDays(from, 20),
      });
    });
  }, []);

  return (
    <Field className="w-full">
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className="justify-start px-2.5 font-normal h-10"
            >
              <CalendarIcon data-icon="inline-start" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "dd.MM.y", { locale: pl })} -{" "}
                    {format(date.to, "dd.MM.y", { locale: pl })}
                  </>
                ) : (
                  format(date.from, "dd.MM.y", { locale: pl })
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          }
        />
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            locale={pl}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
