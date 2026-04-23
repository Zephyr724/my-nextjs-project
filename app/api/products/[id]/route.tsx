import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/lib/prisma";
import { number } from "zod";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const idNumber = parseInt(id);
  const body = await request.json();
  const validation = schema.safeParse(body);

  const product = await prisma.product.update({
    where: { id: idNumber },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  if (!product)
    return NextResponse.json({ error: "Product not found." }, { status: 400 });

  return NextResponse.json(product, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const idNumber = parseInt(id);

  const updateProducted = await prisma.product.findUnique({
    where: { id: idNumber },
  });

  if (!updateProducted)
    return NextResponse.json({ error: "Product not found." }, { status: 404 });

  await prisma.product.delete({
    where: { id: idNumber },
  });

  return NextResponse.json(updateProducted);
}
