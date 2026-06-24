import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const { firstName, lastName, email, phone } = data
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    // Forward the lead to your CRM (e.g. GoHighLevel) here.
    // Set CRM_WEBHOOK_URL in your project environment variables to enable.
    const webhook = process.env.CRM_WEBHOOK_URL
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
    } else {
      console.log("[v0] New lead received (no CRM_WEBHOOK_URL set):", data)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.log("[v0] Lead submission error:", error)
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
  }
}
