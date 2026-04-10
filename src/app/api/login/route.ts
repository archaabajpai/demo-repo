import { NextRequest, NextResponse } from "next/server";

const VALID_EMAIL = "user@example.com";
const VALID_PASSWORD = "password123";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required" },
      { status: 400 }
    );
  }

  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  }

  return NextResponse.json(
    { message: "Invalid email or password" },
    { status: 401 }
  );
}
