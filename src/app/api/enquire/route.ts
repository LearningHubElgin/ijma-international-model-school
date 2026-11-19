import { NextResponse } from 'next/server';
import * as z from 'zod';

const enquirySchema = z.object({
  parentName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  programme: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = enquirySchema.parse(body);

    // In a production environment, this forwards to SMTP / CRM / Google Sheets.
    // Stub logging for development:
    console.log('[Admissions Enquiry Received]:', {
      timestamp: new Date().toISOString(),
      ...validatedData,
    });

    return NextResponse.json(
      { success: true, message: 'Enquiry received successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
