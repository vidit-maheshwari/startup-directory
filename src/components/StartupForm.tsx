'use client';

import React, { useActionState, useState, useEffect } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useRouter } from "next/navigation";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { createPitch } from "@/lib/actions";
import { client } from "@/sanity/lib/client";
import { useSession } from "next-auth/react";

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("");
    const { toast } = useToast();
    const router = useRouter();
    const { data: session } = useSession();
    const [author, setAuthor] = useState(null);
  
    useEffect(() => {
      const fetchAuthor = async () => {
        if (!session?.id) return;
  
        try {
          const author = await client.fetch(
            `*[_type == "author" && googleId == $id][0]`,
            { id: session.id }
          );
          setAuthor(author);
        } catch (error) {
          console.error("Error fetching author:", error);
        }
      };
  
      fetchAuthor();
    }, [session]);
  
    const handleFormSubmit = async (prevState: any, formData: FormData) => {
      if (!author) {
        toast({
          title: "Error",
          description: "Author details could not be fetched. Please try again.",
          variant: "destructive",
        });
        return { ...prevState, error: "Author not found", status: "ERROR" };
      }
  
      try {
        const formValues = {
          title: formData.get("title") as string,
          description: formData.get("description") as string,
          category: formData.get("category") as string,
          link: formData.get("link") as string,
          pitch,
          author: {
            _id: author._id,
            name: author.name,
            image: author.image,
            bio: author.bio,
          },
        };
  
        await formSchema.parseAsync(formValues);
  
        const result = await createPitch(prevState, formData, pitch);
  
        if (result.status === "SUCCESS") {
          toast({
            title: "Success",
            description: "Your startup pitch has been created successfully",
          });
  
          router.push(`/startup/${result._id}`);
        }
  
        return result;
      } catch (error) {
        if (error instanceof z.ZodError) {
          const fieldErrors = error.flatten().fieldErrors;
          setErrors(fieldErrors as unknown as Record<string, string>);
  
          toast({
            title: "Error",
            description: "Please check your inputs and try again",
            variant: "destructive",
          });
  
          return { ...prevState, error: "Validation failed", status: "ERROR" };
        }
  
        toast({
          title: "Error",
          description: "An unexpected error has occurred",
          variant: "destructive",
        });
  
        return {
          ...prevState,
          error: "An unexpected error has occurred",
          status: "ERROR",
        };
      }
    };
  
    const [state, formAction, isPending] = useActionState(handleFormSubmit, {
      error: "",
      status: "INITIAL",
    });
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-200">
      <form
        action={formAction}
        className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-8 space-y-6"
      >
        <h1 className="text-3xl font-semibold text-center text-indigo-600">
          Create Your Startup Pitch
        </h1>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <Input
            id="title"
            name="title"
            className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="Startup Title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="Startup Description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <Input
            id="category"
            name="category"
            className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="Startup Category (Tech, Health, Education...)"
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category}</p>
          )}
        </div>

        <div>
          <label htmlFor="link" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <Input
            id="link"
            name="link"
            className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="Startup Image URL"
          />
          {errors.link && <p className="text-red-500 text-sm mt-1">{errors.link}</p>}
        </div>

        <div>
          <label htmlFor="pitch" className="block text-sm font-medium text-gray-700">
            Pitch
          </label>
          <div data-color-mode="light" className="mt-2">
            <MDEditor
              value={pitch}
              onChange={(value) => setPitch(value as string)}
              id="pitch"
              preview="edit"
              height={300}
              className="rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              textareaProps={{
                placeholder: "Briefly describe your idea and what problem it solves",
              }}
              previewOptions={{
                disallowedElements: ["style"],
              }}
            />
          </div>
          {errors.pitch && <p className="text-red-500 text-sm mt-1">{errors.pitch}</p>}
        </div>

        <Button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-5 rounded-lg text-lg flex items-center justify-center gap-2"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit Your Pitch"}
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default StartupForm;
