'use server'
import { signOut } from "./server/auth";

export async function signOutAction() {
  return await signOut();
}
