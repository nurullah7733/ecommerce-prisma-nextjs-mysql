import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient();
BigInt.prototype.toJSON = function () {
  return this.toString();
};

// Create
export async function POST(req, res) {
  const body = await req.json();

  try {
    const createBrand = await prisma.brands.create({
      data: body,
    });

    return NextResponse.json({ status: "success", data: createBrand });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}

// get All
export async function GET(req, res) {
  try {
    const allBrands = await prisma.brands.findMany({});

    return NextResponse.json({ status: "success", data: allBrands });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}
