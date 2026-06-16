import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { nextCookies } from "better-auth/next-js";
// import { initializeUserBoard } from "../init-user-boards";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/placeholder_for_build",{
  autoSelectFamily:false,
});
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  plugins: [nextCookies()],
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  // databaseHooks: {
  //   user: {
  //     create: {
  //       after: async (user) => {
  //         if (user.id) {
  //           await initializeUserBoard(user.id);
  //         }
  //       },
  //     },
  //   },
  // },
});

export async function getSession() {
  const result = await auth.api.getSession({
    headers: await headers(),
  });

  return result;
}

export async function signOut() {
  const result = await auth.api.signOut({
    headers: await headers(),
  });

  if (result.success) {
    redirect("/sign-in");
  }
}