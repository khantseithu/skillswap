import { Button } from "@repo/ui/src/button";
import React from "react";
import { signOut } from "../../server/auth";
export const runtime = "edge";

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className=" p-6 rounded-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Sign Out</h1>
        <p className="mb-4">Are you sure you want to sign out?</p>
        <form
          action={async () => {
            "use server";
            await signOut({
              redirectTo: "/",
            });
          }}
        >
          <Button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Sign out
          </Button>
        </form>
      </div>
    </main>
  );
}
