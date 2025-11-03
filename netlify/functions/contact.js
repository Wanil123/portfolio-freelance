// netlify/functions/contact.js

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzhZzT8gy19DvVjRik_7yVMT0WFBWlM1EwH0mYS_stVjrvn2-OvxVQRPKXonJ9HBahH/exec";

export default async (req) => {
  console.log("=== Contact function called ===");
  console.log("Method:", req.method);
  
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ ok: false, error: "Method not allowed" }),
      { 
        status: 405,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  try {
    const formData = await req.json();
    console.log("Form data:", formData);

    console.log("Calling Google Apps Script...");
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
      redirect: "follow"
    });

    console.log("Apps Script status:", response.status);
    
    const text = await response.text();
    console.log("Apps Script response:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse JSON:", e);
      return new Response(
        JSON.stringify({ 
          ok: false, 
          error: "Invalid response from server"
        }),
        { 
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    if (data.ok) {
      return new Response(
        JSON.stringify({ ok: true }),
        { 
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    return new Response(
      JSON.stringify({ ok: false, error: data.error || "Unknown error" }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );

  } catch (error) {
    console.error("Function error:", error);
    return new Response(
      JSON.stringify({ ok: false, error: error.message }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
