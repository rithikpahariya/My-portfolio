import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  if (!formLink) {
    return new NextResponse("Please configure the env variables", {
      status: 500,
    });
  }

  // configure this according to your google form
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  try {
    const body = await req.json();
    const { name, message, social, email } = body;
    console.log(
      `${formLink}/formResponse?${fieldIdName}=${name}&${fieldIdEmail}=${email}&${fieldIdMessage}=${message}&${fieldIdSocial}=${social}`
    );

    const res = fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSfkVfv_JzJPuJkUeNQs74ToXDZT1Y5dbOOfUKeTuhX4MdmfTA/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "entry.2005620554": "John Doe", // Name
          "entry.1045781291": "john@example.com", // Email
          "entry.839337160": "Hello there!", // Message
          "entry.1729504360": "https://linkedin.com/in/johndoe", // Social
        }),
      }
    );

    return NextResponse.json("Success!");
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
