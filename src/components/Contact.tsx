import React from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

export function Contact() {
  return (
    <section id="contato" className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}