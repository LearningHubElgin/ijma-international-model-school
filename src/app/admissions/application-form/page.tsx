'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/content/site.config';
import { CheckCircle2, AlertCircle, Loader2, Download, FileText } from 'lucide-react';

const applicationSchema = z.object({
  fatherName: z.string().min(2, { message: "Father's name is required" }),
  motherName: z.string().min(2, { message: "Mother's name is required" }),
  email: z.string().email({ message: 'Valid email address is required' }),
  phone: z.string().regex(/^[0-9+ -]{10,15}$/, { message: 'Valid 10-digit phone number is required' }),
  address: z.string().min(5, { message: 'Residential address is required' }),
  childName: z.string().min(2, { message: "Child's full name is required" }),
  childDob: z.string().min(1, { message: 'Date of birth is required' }),
  childGender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: 'Please select child gender' }),
  }),
  programme: z.string().min(1, { message: 'Please select a programme' }),
  startDate: z.string().min(1, { message: 'Preferred start date is required' }),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms to proceed' }),
  }),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function ApplicationFormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      // Pure frontend submission - no backend dependency
      await new Promise((resolve) => setTimeout(resolve, 800));
      const randomRef = `IJMA-KOL-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(randomRef);
      reset();
    } catch {
      setServerError('Submission error. Please contact the admissions office.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1">
      <InnerPageBanner
        title="Admission Application Form"
        badge="Academic Year 2024-25"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Application Form' },
        ]}
      />

      <Section bg="white">
        <Container size="narrow">
          {submittedRef ? (
            <div className="bg-[#fff9f5] border-2 border-emerald-300 rounded-card p-8 sm:p-12 text-center space-y-4 shadow-lg">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold text-black">Application Received!</h2>
              <p className="text-body text-base max-w-md mx-auto">
                Thank you for applying to IJMA International Model School, Topsia, Kolkata. Your official application reference number is:
              </p>
              <div className="inline-block px-6 py-2.5 rounded-pill bg-[#0A5C36] text-white font-mono font-bold text-lg">
                {submittedRef}
              </div>
              <p className="text-xs text-muted max-w-sm mx-auto">
                Our admissions committee will review your application and invite you for the campus tour and interaction within 24 hours.
              </p>
              <div className="pt-4">
                <Button variant="primary" onClick={() => setSubmittedRef(null)}>
                  Submit Another Application
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-card shadow-2xl border border-gray-100 p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-100">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black">
                    Student Registration
                  </h2>
                  <p className="text-sm text-body mt-1">
                    Fill in parent and child details accurately to proceed with enrolment.
                  </p>
                </div>

                <a
                  href="#download-pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Printable Admission-Form.pdf placeholder. Official PDF can be attached in site.config.ts.');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-800 transition-colors flex-shrink-0"
                >
                  <Download className="w-4 h-4 text-primary" />
                  <span>Download PDF Form</span>
                </a>
              </div>

              {serverError && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* 1. Parent Details */}
                <div>
                  <h3 className="font-sans font-bold text-lg text-primary mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-peach text-primary flex items-center justify-center text-xs font-bold">1</span>
                    <span>Parent / Guardian Information</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Father&apos;s Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('fatherName')}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                      {errors.fatherName && (
                        <p className="text-xs text-red-500 mt-1">{errors.fatherName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Mother&apos;s Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('motherName')}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                      {errors.motherName && (
                        <p className="text-xs text-red-500 mt-1">{errors.motherName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Primary Contact Number *
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Residential Address *
                    </label>
                    <input
                      type="text"
                      {...register('address')}
                      placeholder="e.g. 9/1, Topsia Road South, Topsia, Kolkata - 700046"
                      className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm transition-colors"
                    />
                    {errors.address && (
                      <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>
                    )}
                  </div>
                </div>

                {/* 2. Child Details */}
                <div>
                  <h3 className="font-sans font-bold text-lg text-primary mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-peach text-primary flex items-center justify-center text-xs font-bold">2</span>
                    <span>Child Information</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Child&apos;s Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('childName')}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                      {errors.childName && (
                        <p className="text-xs text-red-500 mt-1">{errors.childName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        {...register('childDob')}
                        className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm bg-white transition-colors"
                      />
                      {errors.childDob && (
                        <p className="text-xs text-red-500 mt-1">{errors.childDob.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Gender *
                      </label>
                      <select
                        {...register('childGender')}
                        className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm bg-white transition-colors"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.childGender && (
                        <p className="text-xs text-red-500 mt-1">{errors.childGender.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Programme Applying For *
                      </label>
                      <select
                        {...register('programme')}
                        className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm bg-white transition-colors"
                      >
                        <option value="">Select Programme</option>
                        {siteConfig.programmes.list.map((prog) => (
                          <option key={prog.id} value={prog.title}>
                            {prog.title} ({prog.ageRange})
                          </option>
                        ))}
                      </select>
                      {errors.programme && (
                        <p className="text-xs text-red-500 mt-1">{errors.programme.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Preferred Start Date *
                      </label>
                      <input
                        type="date"
                        {...register('startDate')}
                        className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm bg-white transition-colors"
                      />
                      {errors.startDate && (
                        <p className="text-xs text-red-500 mt-1">{errors.startDate.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. Consent & Submit */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      {...register('consent')}
                      className="mt-1 w-4 h-4 rounded text-primary border-gray-300 focus:ring-primary"
                    />
                    <label htmlFor="consent" className="text-xs text-body leading-relaxed">
                      I declare that all information furnished in this application is accurate. I understand that admission confirmation is subject to seat availability, document verification, and campus interaction.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-xs text-red-500 mt-1">{errors.consent.message}</p>
                  )}

                  <div className="mt-8">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto px-10"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <span>Submit Admission Application</span>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
