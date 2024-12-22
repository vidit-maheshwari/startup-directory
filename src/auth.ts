import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { AUTHOR_BY_GOOGLE_ID } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user: { name, email, image }, profile }) {
      try {
        const googleId = profile?.sub || profile?.id;
        if (!googleId) {
          console.error("Google profile ID is undefined");
          return false;
        }

        // console.log("Google Profile ID:", googleId);
        // console.log("SANITY_WRITE_TOKEN:", process.env.SANITY_WRITE_TOKEN);

        const existingUser = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GOOGLE_ID, { id: googleId });

        if (!existingUser) {
          await writeClient.create({
            _type: "author",
            googleId,
            name,
            email,
            image,
            bio: profile?.bio || "",
          });
        }

        return true;
      } catch (error) {
        console.error("Error during signIn callback:", error);
        return false;
      }
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        try {
          const googleId = profile?.sub || profile?.id;
          const user = await client
            .withConfig({ useCdn: false })
            .fetch(AUTHOR_BY_GOOGLE_ID, { id: googleId });

          token.id = user?._id;
        } catch (error) {
          console.error("Error in JWT callback:", error);
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.id = token.id;
      return session;
    },
  },
});
