import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient();
BigInt.prototype.toJSON = function () {
  return this.toString();
};

// get one
export async function GET(req, { params }) {
  let id = params.id;

  try {
    const data = await prisma.categories.findUnique({
      where: { id: id },
    });

    return NextResponse.json({ status: "success", data: data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}

// udpate
export async function PUT(req, { params }) {
  let body = await req.json();
  let id = params.id;

  try {
    const data = await prisma.categories.update({
      where: {
        id: id,
      },
      data: body,
    });

    return NextResponse.json({ status: "success", data: data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}

// delete
export async function DELETE(req, { params }) {
  let id = params.id;

  try {
    const data = await prisma.categories.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ status: "success", data: data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}
