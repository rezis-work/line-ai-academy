import db from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name, age, subscriptionId } = await req.json();

  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (user.length === 0) {
    const result = await db.insert(usersTable).values({
      name,
      email,
      age,
      subscriptionId,
    });
    console.log(result);
    return NextResponse.json({ result });
  }
  console.log(user[0]);
  return NextResponse.json(user[0]);
}
