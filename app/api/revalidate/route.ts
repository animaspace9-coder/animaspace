import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    revalidatePath("/", "page");
    revalidatePath("/about", "page");
    revalidatePath("/services", "page");
    revalidatePath("/blogs", "page");
    return NextResponse.json({
      revalidated: true,
      message: "Cache revalidated successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { revalidated: false, error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    revalidatePath("/", "page");
    revalidatePath("/about", "page");
    revalidatePath("/services", "page");
    revalidatePath("/blogs", "page");
    return NextResponse.json({
      revalidated: true,
      message: "Cache revalidated successfully via GET",
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { revalidated: false, error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
