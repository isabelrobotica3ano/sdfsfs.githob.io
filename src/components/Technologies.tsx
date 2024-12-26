import React from 'react';
import { Cpu, Brain, Cog, Rocket } from 'lucide-react';
import { Card } from './common/Card';
import { GradientText } from './common/GradientText';

export function Technologies() {
  const technologies = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Automação Industrial",
      description: "Soluções avançadas para otimizar processos industriais"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Inteligência Artificial",
      description: "Sistemas inteligentes e aprendizado de máquina"
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Robótica Avançada",
      description: "Desenvolvimento de robôs de última geração"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Inovação Tecnológica",
      description: "Pesquisa e desenvolvimento de novas tecnologias"
    }
  ];

  return (
    <section id="tecnologias" className="py-24 bg-gradient-to-b from-slate-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientText className="text-4xl font-bold mb-4">
            Nossas Tecnologias
          </GradientText>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Combinamos tecnologias de ponta para criar soluções inovadoras que impulsionam o futuro da automação
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="group">
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{tech.title}</h3>
              <p className="text-blue-100">{tech.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}