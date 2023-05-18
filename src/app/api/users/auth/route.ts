import { pb } from "../../../../utils/pocketbase.mjs";
import { NextResponse } from "next/server";

const HOST_URL = process.env.HOST_URL;

export async function POST(response: Response) {
	console.log("POST request to /api/users/auth");

	return NextResponse.json({ message: "Success", });
}