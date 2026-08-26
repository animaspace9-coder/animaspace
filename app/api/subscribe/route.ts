import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

// Create a server-side Sanity write client
const writeClient = token && projectId && dataset
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      token,
      useCdn: false,
    })
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source = "blog_newsletter" } = body;

    // Validate email
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    if (writeClient) {
      // Check if subscriber already exists
      const existing = await writeClient.fetch(
        `*[_type == "subscriber" && email == $email][0]._id`,
        { email: cleanEmail }
      );

      if (!existing) {
        // Create new subscriber document in Sanity
        await writeClient.create({
          _type: "subscriber",
          email: cleanEmail,
          subscribedAt: new Date().toISOString(),
          source: source,
          status: "active",
        });
      }
    }

    return NextResponse.json(
      { success: true, message: "Thank you for subscribing to Anima Space insights!" },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Subscription error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
