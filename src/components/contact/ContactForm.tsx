import React from 'react';
import { Card } from '../common/Card';

export function ContactForm() {
  return (
    <Card hover={false} className="backdrop-blur-xl">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-blue-300">Nome</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none text-white placeholder-white/50 transition-all"
            placeholder="Seu nome completo"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-blue-300">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none text-white placeholder-white/50 transition-all"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-blue-300">Mensagem</label>
          <textarea 
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none text-white placeholder-white/50 transition-all resize-none"
            placeholder="Sua mensagem..."
          ></textarea>
        </div>
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg transition-all transform hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none font-medium">
          Enviar Mensagem
        </button>
      </form>
    </Card>
  );
}