import { NextResponse } from "next/server";

export async function GET() {
  const accessToken = process.env.INSTAGRAM_KEY;

  if (!accessToken) {
    return NextResponse.json(
      { error: "Instagram Access Token not configured" },
      { status: 500 }
    );
  }

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${accessToken}&limit=6`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Instagram API Error:", errorData);
      throw new Error("Failed to fetch from Instagram");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

