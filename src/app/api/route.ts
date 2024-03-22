import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextRequest): Promise<NextResponse> {
  // Do whatever you want
  return NextResponse.json(
    { message: "APES are always online. Exept when they are in the jungle :)" },
    { status: 200 }
  );
}

// To handle a POST request to /api
export async function POST(request: NextRequest): Promise<NextResponse> {
  const res = await request.json(); // res now contains body
  console.log(res);

  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
