"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createJournalEntry } from "@/app/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Tiptap from "@/components/garden/tip-tap";
import type { Editor } from "@tiptap/react";

const formSchema = z.object({
  description: z
    .string()
    .min(1, { message: "The entry must not be empty" })
    .max(99999, { message: "The entry is too long" })
    .trim(),
});

export default function EntryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  const editorRef = useRef<Editor | null>(null);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("content", values.description);

    try {
      await createJournalEntry("movies", formData);
      form.reset();
      editorRef.current?.commands.setContent("");
    } catch (error) {
      console.error("Failed to submit entry:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Entry</FormLabel>
              <FormControl>
                <Tiptap
                  description={field.value}
                  onChange={field.onChange}
                  editorRef={editorRef}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[green] text-[white] rounded-md px-4 py-2"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </Form>
  );
}
