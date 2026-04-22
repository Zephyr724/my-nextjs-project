import { NextRequest, NextResponse } from "next/server";

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
  const { id } = await params;
  const idNumber = parseInt(id);

  if (!body.name)
    return NextResponse.json({ error: "Name is required." }, { status: 400 });

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