'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquire: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenEnquire }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9998] lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-5 flex items-center justify-between border-b border-gray-100">
              <span className="font-bubblegum text-xl text-primary font-bold">
                {siteConfig.school.name}
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav List */}
            <div className="flex-1 py-4 px-5 space-y-1">
              {siteConfig.navigation.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = expandedItem === item.label;

                return (
                  <div key={item.label} className="border-b border-gray-50 last:border-none">
                    {hasChildren ? (
                      <div>
                        <button
                          onClick={() => toggleExpand(item.label)}
                          className="w-full py-3 flex items-center justify-between text-base font-bold text-gray-900 hover:text-primary transition-colors text-left"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-primary' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 pb-2 space-y-1.5"
                            >
                              {item.children?.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block py-2 text-sm text-body hover:text-primary transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-3 text-base font-bold text-gray-900 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="p-5 border-t border-gray-100 bg-gray-50/50 space-y-4">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  onClose();
                  onOpenEnquire();
                }}
              >
                Enquire Now
              </Button>

              <div className="space-y-2 text-xs text-body pt-2">
                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>{siteConfig.contact.phones[0]}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
