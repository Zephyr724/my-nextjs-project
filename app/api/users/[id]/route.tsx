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
