import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";
import type { AdapterAccount } from "next-auth/adapters";

// User Profile Feature Development
// 1. Data Model Design
// User Profile Schema:
// User ID: Unique identifier for each user.
// Email: User's email address (unique).
// Name: User's full name.
// Bio: A short biography or introduction.
// Profile Picture: URL to the user's profile picture.
// Introductory Video: URL to the user's introductory video.
// Skills to Teach: Array of skills the user can teach.
// Skills to Learn: Array of skills the user wants to learn.
// LinkedIn Profile: (Optional) LinkedIn profile URL for importing skills.
// Ratings: Average rating and individual reviews received from other users.
// Achievements: Points, badges, and milestones achieved.
export const users = sqliteTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
  bio: text("bio"),
  introVideo: text("introVideo"),
  skillsToTeach: text("skillsToTeach"),
  skillsToLearn: text("skillsToLearn"),
  linkedin: text("linkedin"),
  ratings: text("ratings"),
  achievements: text("achievements"),
});

export type User = Omit<typeof users.$inferSelect, "id">;

export const accounts = sqliteTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = sqliteTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const verificationTokens = sqliteTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);
