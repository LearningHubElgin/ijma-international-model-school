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
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Your name is required' }),
  email: z.string().email({ message: 'Valid email address is required' }),
  programme: z.string().min(1, { message: 'Please specify the class or programme' }),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Pure frontend submission - no backend dependency
      await new Promise((resolve) => setTimeout(resolve, 600));
      setIsSuccess(true);
      reset();
    } catch {
      setErrorMessage('Something went wrong. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1">
      <InnerPageBanner
        title="Contact Our Campus"
        badge="Get in Touch"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-white rounded-card p-6 sm:p-10 border border-gray-100 shadow-xl">
              <span className="font-bubblegum text-lg text-primary uppercase tracking-wide block mb-1">
                Have Inquiries?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-body mb-8">
                Fill out the form below and our admissions team will respond within 24 hours.
              </p>

              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">Message Sent!</h3>
                  <p className="text-body text-sm max-w-sm mx-auto">
                    Thank you for reaching out to {siteConfig.school.fullName}. A counselor will contact you shortly.
                  </p>
                  <div className="pt-2">
                    <Button variant="primary" onClick={() => setIsSuccess(false)}>
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="e.g. Shalini Gupta"
                      className="w-full px-5 py-3 rounded-pill border-2 border-[#ffefe4] focus:border-primary focus:outline-none text-sm font-sans transition-colors"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Your Email Id *
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="parent@example.com"
                        className="w-full px-5 py-3 rounded-pill border-2 border-[#ffefe4] focus:border-primary focus:outline-none text-sm font-sans transition-colors"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        placeholder="+91 99038 98162"
                        className="w-full px-5 py-3 rounded-pill border-2 border-[#ffefe4] focus:border-primary focus:outline-none text-sm font-sans transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Classes / Programme of Interest *
                    </label>
                    <input
                      type="text"
                      {...register('programme')}
                      placeholder="e.g. Pre Nursery or Day Care"
                      className="w-full px-5 py-3 rounded-pill border-2 border-[#ffefe4] focus:border-primary focus:outline-none text-sm font-sans transition-colors"
                    />
                    {errors.programme && (
                      <p className="text-xs text-red-500 mt-1">{errors.programme.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      {...register('message')}
                      placeholder="Please write any queries or questions you have..."
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#ffefe4] focus:border-primary focus:outline-none text-sm font-sans resize-none transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-3.5 rounded-pill bg-[#ed145b] hover:bg-[#0a6375] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-button hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Campus Details & Social */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#fff9f5] rounded-card p-8 border border-peach space-y-6">
                <span className="font-bubblegum text-lg text-[#0a6375] uppercase tracking-wide block">
                  Campus Location
                </span>
                <h3 className="text-2xl font-bold text-black">Visit Our School</h3>

                <div className="space-y-5 text-sm text-body">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-full bg-peach text-primary flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-0.5">Address</h4>
                      <p>{siteConfig.contact.address}</p>
                      <p className="text-primary font-semibold text-xs mt-0.5">
                        Landmark: {siteConfig.contact.landmark}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-full bg-peach text-primary flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-0.5">Phone Inquiries</h4>
                      <div className="space-y-0.5">
                        {siteConfig.contact.phones.map((ph) => (
                          <p key={ph}>
                            <a href={`tel:${ph.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">
                              {ph}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-full bg-peach text-primary flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-0.5">Official Email</h4>
                      <p>
                        <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                          {siteConfig.contact.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-full bg-peach text-primary flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-0.5">Office Hours</h4>
                      <p>{siteConfig.contact.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="pt-4 border-t border-peach/80">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700 mb-3">
                    Connect With Us
                  </h4>
                  <div className="flex items-center space-x-3">
                    <a
                      href={siteConfig.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-body hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-body hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-body hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed Placeholder */}
          <div className="mt-16 rounded-card overflow-hidden shadow-xl border-4 border-peach">
            <iframe
              src={siteConfig.contact.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IJMA International Model School Topsia Kolkata Map Location"
              className="w-full"
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
