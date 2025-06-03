
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SMSNotificationRequest {
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
    const { name, email, message }: SMSNotificationRequest = await req.json();

    console.log("Sending SMS notification for contact:", { name, email });

    // Using a free SMS service (you can replace this with any SMS API)
    // For now, we'll use a simple webhook that can send SMS
    const smsText = `Portfolio Contact: ${name} (${email}) sent: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}`;
    
    // Try to send SMS via a free service (you can integrate with any SMS provider)
    // For demonstration, I'll use a simple HTTP request approach
    try {
      // This is a placeholder - you would need to sign up for an SMS service
      // Popular free options: Twilio (free tier), TextBelt, etc.
      const smsApiKey = Deno.env.get("SMS_API_KEY");
      
      if (smsApiKey) {
        const smsResponse = await fetch("https://textbelt.com/text", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: "+917043733724",
            message: smsText,
            key: smsApiKey,
          }),
        });
        
        const smsResult = await smsResponse.json();
        console.log("SMS sent:", smsResult);
      } else {
        console.log("SMS API key not configured, skipping SMS");
      }
    } catch (smsError) {
      console.error("SMS sending failed:", smsError);
      // Don't throw error, as the main contact form should still work
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Notification sent successfully" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in SMS notification function:", error);
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
