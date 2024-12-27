"use client"

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAnalysis, useService } from "@/lib/store";
import { useAnalyze } from "@/data/api/hooks";
import { useEffect } from "react";

const FormSchema = z.object({
  urls: z.string().url().min(1, {
    message: "URL cannot be empty."
  }),
});

export default function Lookup() {
  const { analysisResponse, setAnalysisResponse } = useAnalysis();

  const { notAvailable } = useService();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      urls: ""
    }
  });

  const analyze = useAnalyze();
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const urls = [values.urls];
    analyze.mutate(urls);

    form.reset();
  }

  useEffect(() => {
    if (analyze.isSuccess) {
      setAnalysisResponse(analyze.data)
    }
  }, [analyze.isSuccess])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="urls"
          render={({ field }) => (
            <FormItem className="flex flex-col lg:items-center lg:justify-center">
              <FormControl>
                <div className="lookup-container grid grid-cols-4 gap-y-3 gap-x-5 lg:w-3/4">
                  <Input
                    className="col-span-4 sm:col-span-3 border-gray-300"
                    placeholder="Paste URL here"
                    {...field}
                  />
                  <Button
                    className="col-span-4 sm:col-span-1 bg-teal-700 hover:bg-teal-500/75 text-slate-200 dark:bg-teal-500/75 dark:hover:bg-teal-700 dark:text-slate-200"
                    disabled={notAvailable}
                  >
                    <h2 className="text-lg">
                      Lookup
                    </h2>
                  </Button>
                </div>
              </FormControl>
              <div className="w-full container lg:w-3/4 p-0">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
