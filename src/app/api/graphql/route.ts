import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/graphql";

  try {
    const response = await fetch(strapiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error("Strapi response error:", response.status, response.statusText);
      const error = await response.text();
      console.error("Strapi error details:", error);
      return NextResponse.json(
        { errors: [{ message: `Strapi error: ${response.statusText}` }] },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GraphQL Proxy Error:", error);
    return NextResponse.json(
      { errors: [{ message: `Failed to fetch from Strapi: ${error}` }] },
      { status: 500 }
    );
  }
}
