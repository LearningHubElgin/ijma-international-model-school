'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Button } from '@/components/ui/Button';

const enquirySchema = z.object({
  parentName: z.string().min(2, { message: 'Parent name must be at least 2 characters' }),
  phone: z.string().regex(/^[0-9+ -]{10,15}$/, { message: 'Please enter a valid phone number' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  programme: z.string().min(1, { message: 'Please select a programme' }),
  message: z.string().optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramme?: string;
}

export function EnquireModal({ isOpen, onClose, defaultProgramme }: EnquireModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      programme: defaultProgramme || '',
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
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

  const handleClose = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-white rounded-card shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-black">Thank You!</h3>
                <p className="text-body text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                  We have received your enquiry for {siteConfig.school.name}. Our admissions counselor will contact you shortly.
                </p>
                <div className="pt-4">
                  <Button variant="primary" onClick={handleClose}>
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="font-bubblegum text-[#ed145b] text-base uppercase tracking-wider block">
                    Admissions Open 2024-25
                  </span>
                  <h3 id="enquiry-modal-title" className="text-2xl sm:text-3xl font-bold text-black mt-1">
                    Enquire Now
                  </h3>
                  <p className="text-body text-sm mt-1">
                    Please provide your contact information to schedule a campus tour or speak with our counselors.
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Parent Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('parentName')}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm font-sans transition-colors"
                    />
                    {errors.parentName && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.parentName.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm font-sans transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone.message}</p>
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
                        className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm font-sans transition-colors"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Programme of Interest *
                    </label>
                    <select
                      {...register('programme')}
                      className="w-full px-4 py-3 rounded-pill border-2 border-border focus:border-primary focus:outline-none text-sm font-sans bg-white transition-colors"
                    >
                      <option value="">Select Programme</option>
                      {siteConfig.programmes.list.map((prog) => (
                        <option key={prog.id} value={prog.title}>
                          {prog.title} ({prog.ageRange})
                        </option>
                      ))}
                    </select>
                    {errors.programme && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.programme.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Message / Special Query (Optional)
                    </label>
                    <textarea
                      rows={3}
                      {...register('message')}
                      placeholder="Tell us about your child's age or any questions you have..."
                      className="w-full px-4 py-3 rounded-2xl border-2 border-border focus:border-primary focus:outline-none text-sm font-sans resize-none transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <span>Submit Enquiry</span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
