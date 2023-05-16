import { NextResponse } from "next/server";
import Pocketbase from "pocketbase";
import { pb } from "../../../utils/pocketbase.mjs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  const record = await pb
    .collection("users")
    .getFirstListItem(`username="${username}"`);

  const data = await record;

  return NextResponse.json(data);
}
