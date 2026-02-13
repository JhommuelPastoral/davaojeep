import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Github],
  session:{
    strategy: "jwt",
    maxAge:  60 * 60 * 24 * 30,//30 days
  }, 
  callbacks:{
    async signIn({account, profile, user, credentials}){
      try {
        // if(!account || !profile || !user || !credentials) return false;
        console.log("Account:", account);
        console.log("Profile:", profile);
        console.log("User:", user);
        console.log("Credentials:", credentials);
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
      }
      return false;

    }


  }
});