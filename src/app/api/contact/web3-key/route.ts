import { NextResponse } from "next/server";

/**
 * Web3Forms access keys are safe to expose (same as a public form field).
 * This lets the client load the key at runtime if NEXT_PUBLIC_* wasn’t
 * embedded at build time (common after adding env vars without a clean rebuild).
 */
export async function GET() {
  const key =
    process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
    null;
  return NextResponse.json({ key });
}
