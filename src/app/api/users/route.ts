import { NextResponse } from "next/server";
import Pocketbase from "pocketbase";

const pb = new Pocketbase('http://127.0.0.1:8090');

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const username = searchParams.get("username");


	const res = await pb.collection('users').getFirstListItem(`username="${username}"`, {
		expand: 'whoops'
	})
	
	const data = await res;

	return NextResponse.json(data);
}