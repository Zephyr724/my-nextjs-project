import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const idNumber = parseInt(id);
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  return NextResponse.json({
    id: idNumber,
    name: body.name,
    price: body.price,
  });
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
  return NextResponse.json({
    id: idNumber,
    name: body.name,
    price: body.price,
  });
}
