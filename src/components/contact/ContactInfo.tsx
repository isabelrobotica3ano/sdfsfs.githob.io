import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '../common/Card';

export function ContactInfo() {
  return (
    <Card hover={false} className="space-y-8 backdrop-blur-xl">
      <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
        Informações de Contato
      </h3>
      <div className="space-y-6">
        <div className="flex items-center space-x-4 group">
          <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
            <Mail className="h-6 w-6 text-blue-400" />
          </div>
          <span className="text-blue-100">isabelrobotica3ano@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4 group">
          <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
            <Phone className="h-6 w-6 text-blue-400" />
          </div>
          <span className="text-blue-100">(11) 9999-9999</span>
        </div>
        <div className="flex items-center space-x-4 group">
          <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
            <MapPin className="h-6 w-6 text-blue-400" />
          </div>
          <span className="text-blue-100">Bacabal, MA - Brasil</span>
        </div>
      </div>
    </Card>
  );
}