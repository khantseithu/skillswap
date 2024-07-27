import { Button } from "@repo/ui/src/button";
import { sql } from "drizzle-orm";
import { getThemeToggler } from "./lib/get-theme-button";
import { auth, signIn, signOut } from "./server/auth";
import { db } from "./server/db";
import { users } from "./server/db/schema";

export const runtime = "edge";

export default async function Page() {
  const usr = await auth();

  const userCount = await db
    .select({
      count: sql<number>`count(*)`.mapWith(Number),
    })
    .from(users);

  const SetThemeButton = getThemeToggler();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex max-w-2xl justify-between w-full">
        <SetThemeButton />
      </div>

      <div className="max-w-2xl text-start w-full mt-16">
        {usr?.user?.email ? (
          <>
            <div className="mt-4 flex flex-col gap-2">
              <span>Hello {usr.user.name} 👋</span>
              <span>{usr.user.email}</span>
            </div>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button className="mt-4">Sign out</Button>
            </form>
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("google", {
                redirectTo: "/dashboard",
              });
            }}
          >
            <Button className="mt-4">Login with Google</Button>
          </form>
        )}
      </div>
    </main>
  );
}
