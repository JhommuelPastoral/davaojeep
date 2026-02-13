import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  try {
    return NextResponse.json({ message: "Hello World" });
  } catch (error) {
    console.error("Error in GET /api/auth/signin:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

}

export async function POST(request: Request) {
  try {
    const data = {
      email: "pastoraljhommuel@gmail.com",
      name: "Jhommuel"
    }
    const user = await prisma.user.create({
      data
    }); 
    return NextResponse.json(user);
  } catch (error) {
    
  }
}