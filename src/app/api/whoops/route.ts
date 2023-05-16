import { NextResponse } from "next/server";
import { pb } from "../../../utils/pocketbase.mjs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const author = searchParams.get("author");
  
  const record = await pb
    .collection("whoops")
    .getList(1, 50, {
      sort: "-timestamp",
      filter: `author = "${author}"`})
  
  const data = await record;
  console.log(data);

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const res = await request.json();
  let date = new Date().toISOString().slice(0, 19).replace('T', ' ') + "Z";
  console.log(date);
  // date = date.slice(0, 10) + " " + date.slice(11,17) + ".000Z";

  try {
    const data = {
      "author": res.author,
      "content": res.content,
      "timestamp": date
    }
    console.log("data " + JSON.stringify(data));
    const record = await pb.collection("whoops").create(data);
    console.log("record " + record);

    return NextResponse.json(record);
  } catch(error) {
    console.log("error " + error);
    return NextResponse.json("error: " + error);
  }

  
  // const record = await pb.collection("whoops").create(res);
  
}