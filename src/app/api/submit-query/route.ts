import { NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb';

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("customer_support");
    const { query, status = 'new' } = await request.json();

    const result = await db.collection("queries").insertOne({
      query,
      status,
      timestamp: new Date(),
    });

    return NextResponse.json({ message: "Query submitted successfully", id: result.insertedId });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error submitting query" }, { status: 500 });
  }
}
