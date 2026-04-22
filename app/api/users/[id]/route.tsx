import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const idNumber = parseInt(id);

  if (idNumber > 10)
    return NextResponse.json({ error: "User not Found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "zephyr" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  const { id } = await params;
  const idNumber = parseInt(id);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  if (idNumber > 10)
    return NextResponse.json({ error: "Name is not found." }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const body = await request.json();
  const { id } = await params;
  const idNumber = parseInt(id);

  if (idNumber > 10)
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name });
}
