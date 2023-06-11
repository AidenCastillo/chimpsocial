import { NextResponse } from "next/server";
import { pb } from "../../../utils/pocketbase.mjs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const author = searchParams.get("author");

    const record = await pb.collection("whoops").getList(1, 50, {
      sort: "-timestamp",
      filter: `author = "${author}"`,
    });

    console.log(`[GET] Retrieved data for author "${author}"`, record);

    return NextResponse.json(record);
  } catch (error) {
    console.error("[GET] Error retrieving data", error);
    return NextResponse.json({ error: `Error retrieving data: ${error}` });
  }
}

export async function POST(request: Request) {
  try {
    const res = await request.json();
    let date = new Date().toISOString();
    console.log(date);
    const data = {
      author: res.author,
      content: res.content,
      timestamp: date,
    };
    console.log("[POST] Creating record with data:", data);
    const record = await pb.collection("whoops").create(data);
    console.log("[POST] Created record", record);

    return NextResponse.json(record);
  } catch (error) {
    console.error("[POST] Error retrieving data", error);
    return NextResponse.json({ error: "Error retrieving data" });
  }

  // const record = await pb.collection("whoops").create(res);
}
