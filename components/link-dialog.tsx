"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

interface LinkDialogProps {
  mode: "create" | "edit";
}

export default function LinkDialog({ mode }: LinkDialogProps) {
  const [linkName, setLinkName] = useState<string>("");
  const [linkUrl, setLinkUrl] = useState<string>("");
  const supabase = createClient();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "create") {
      try {
        const { error } = await supabase.from("links").insert({
          name: linkName,
          url: linkUrl,
        });
      } catch (e: unknown) {
        console.error("Error creating link:", e);
        return;
      }

      console.log("Link created:", { linkName, linkUrl });
      setLinkName("");
      setLinkUrl("");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Create Link</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new link</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input
                value={linkName}
                onChange={(e) => {
                  setLinkName(e.target.value);
                }}
                id="name-1"
                name="name"
                defaultValue="Pedro Duarte"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Link</Label>
              <Input
                value={linkUrl}
                onChange={(e) => {
                  setLinkUrl(e.target.value);
                }}
                id="username-1"
                name="username"
                defaultValue="@peduarte"
              />
            </div>
          </div>

          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
