'use server';

export interface CTAFormData {
  name: string;
  email: string;
  'business-type': string;
  'help-with': string;
}

export async function submitCTAForm(formData: FormData) {
  try {
    const data: CTAFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      'business-type': formData.get('business-type') as string,
      'help-with': formData.get('help-with') as string,
    };

    // Validate required fields
    if (!data.name || !data.email) {
      return {
        success: false,
        error: 'Name and email are required',
      };
    }

    // Get webhook URL from environment variable
    const webhookUrl = process.env.CTA_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('CTA_WEBHOOK_URL environment variable is not set');
      return {
        success: false,
        error: 'Configuration error. Please contact support.',
      };
    }

    // Get Basic Auth header value from environment variable
    const webhookAuth = process.env.CTA_WEBHOOK_AUTH;
    if (!webhookAuth) {
      console.error('CTA_WEBHOOK_AUTH environment variable is not set');
      return {
        success: false,
        error: 'Configuration error. Please contact support.',
      };
    }

    // Build headers with Basic Auth
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${webhookAuth}`,
    };

    // POST to webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Webhook request failed: ${response.status} ${response.statusText}`);
    }

    return {
      success: true,
      message: 'Thank you! We\'ll be in touch soon.',
    };
  } catch (error) {
    console.error('Error submitting CTA form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred. Please try again.',
    };
  }
}

