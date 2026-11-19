import { NextResponse } from 'next/server';
import * as z from 'zod';

const admissionSchema = z.object({
  fatherName: z.string().min(2, 'Father name is required'),
  motherName: z.string().min(2, 'Mother name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  address: z.string().min(5, 'Address is required'),
  childName: z.string().min(2, 'Child name is required'),
  childDob: z.string().min(1, 'Date of birth is required'),
  childGender: z.enum(['male', 'female', 'other']),
  programme: z.string().min(1, 'Programme selection is required'),
  startDate: z.string().min(1, 'Preferred start date is required'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to the application terms' }),
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = admissionSchema.parse(body);

    // Development logging stub
    console.log('[Formal Admission Application Received]:', {
      timestamp: new Date().toISOString(),
      ...validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully. Our admissions office will get in touch.',
        applicationId: `GDG-${Date.now().toString().slice(-6)}`,
      },
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
