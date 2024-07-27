import { Button } from "@repo/ui/src/button";
import { sql } from "drizzle-orm";
import { getThemeToggler } from "./lib/get-theme-button";
import { auth, signIn, signOut } from "./server/auth";
import { db } from "./server/db";
import { users } from "./server/db/schema";
import SignIn from "./auth-ui/auth-buttons";
import { signOutAction } from "./actions";

export const runtime = "edge";

export default async function Page() {
  const session = await auth();

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
        {session?.user?.email ? (
          <>
            <div className="mt-4 flex flex-col gap-2">
              <span>Hello {session.user.name} 👋</span>
              <span>{session.user.email}</span>
            </div>
            <form action={signOutAction}>
              <Button className="mt-4">Sign out</Button>
            </form>
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </main>
  );
}
