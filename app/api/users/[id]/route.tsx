import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user)
    return NextResponse.json({ error: "User not Found" }, { status: 404 });

  return NextResponse.json(user);
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

  const user = await prisma.user.findUnique({
    where: { id: idNumber },
  });

  if (!user)
    return NextResponse.json({ error: "Name is not found." }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const body = await request.json();
  const { id } = await params;
  const idNumber = parseInt(id);

  const user = await prisma.user.findUnique({
    where: {
      id: idNumber,
    },
  });

  if (!user)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  await prisma.user.delete({ where: { id: idNumber } });

  return NextResponse.json(user);
}
