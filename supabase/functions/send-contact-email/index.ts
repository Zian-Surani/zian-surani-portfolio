
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactMessageRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactMessageRequest = await req.json();

    console.log("Received contact message:", { name, email, message });

    // Send email using Gmail API
    const gmailApiKey = Deno.env.get("GMAIL_API_KEY");
    
    if (!gmailApiKey) {
      throw new Error("Gmail API key not configured");
    }

    // Prepare email content
    const emailContent = {
      raw: btoa(
        `From: Portfolio Contact <noreply@gmail.com>\r\n` +
        `To: zian.surani@gmail.com\r\n` +
        `Subject: New Contact Message from ${name}\r\n` +
        `Content-Type: text/html; charset=utf-8\r\n\r\n` +
        `<h2>New Contact Message from Your Portfolio</h2>\r\n` +
        `<p><strong>Name:</strong> ${name}</p>\r\n` +
        `<p><strong>Email:</strong> ${email}</p>\r\n` +
        `<p><strong>Message:</strong></p>\r\n` +
        `<p>${message.replace(/\n/g, '<br>')}</p>\r\n` +
        `<hr>\r\n` +
        `<p><small>This message was sent from your portfolio website contact form.</small></p>`
      ).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
    };

    // Send email via Gmail API
    const gmailResponse = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/send?key=${gmailApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${gmailApiKey}`,
      },
      body: JSON.stringify(emailContent),
    });

    if (!gmailResponse.ok) {
      const errorText = await gmailResponse.text();
      console.error("Gmail API error:", errorText);
      throw new Error(`Gmail API error: ${gmailResponse.status}`);
    }

    const gmailResult = await gmailResponse.json();
    console.log("Email sent successfully via Gmail API:", gmailResult);

    return new Response(JSON.stringify({ success: true, gmailResult }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
