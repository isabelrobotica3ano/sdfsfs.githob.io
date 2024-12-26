import React from 'react';
import { TeamMemberCard } from './TeamMemberCard';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
}

export function Team() {
  const team: TeamMember[] = [
    {
      name: "Ana Silva",
      role: "Engenheira de Robótica",
      bio: "Especialista em robótica industrial com 8 anos de experiência em automação.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      instagram: "ana.robotech",
    },
    {
      name: "Carlos Santos",
      role: "Desenvolvedor de IA",
      bio: "Pesquisador em inteligência artificial aplicada à robótica autônoma.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      instagram: "carlos.ai.robotech",
    },
    {
      name: "Júlia Costa",
      role: "Especialista em Drones",
      bio: "Pioneira no desenvolvimento de sistemas autônomos para drones.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      instagram: "julia.drones",
       },
    {
      name: "Júlia Costa",
      role: "Especialista em Drones",
      bio: "Pioneira no desenvolvimento de sistemas autônomos para drones.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      instagram: "julia.drones",
       },
    {
      name: "Júlia Costa",
      role: "Especialista em Drones",
      bio: "Pioneira no desenvolvimento de sistemas autônomos para drones.",
      image: "https://getty-unisporkal-usw2-prod-visual-search.s3.us-west-2.amazonaws.com/production/24d86ecc706032ce9130e7533210fa3d12aa5403b13f2c2c41404deef161747045?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAWHMXPNCUKSJCFKFP%2F20241226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241226T072230Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHc33BUs1blmyP7B%2BcZIcgIPYkoS6GbqcQYPLi0pfg%2BPAiAO8YGdQNc3Tf4x19w1Q9kRGjW2Flm3QospAEnAUp2QjSqRBAgoEAMaDDQyODIwMzc5NjY0OCIMrYV4znDwWxHlZNrzKu4DAUM0654bQaIFjz1JFtAzMGt0mnDQ9dJLrdlr8CnE5cVgT8w1UDYiDBXpO2an8uRKZxk%2FFq4oL1f1N9sPtn6keK0GOJutZrZhFv9%2FivdSkHDqpQWetiRZsTK%2FGUwHTFEwi6Zhc8MpKp8NhYbhnCgBmDMBvBfnennP5trSbC%2BLi0quREYM5XFdMY4nC0tdnfOQVyVIP%2BcR06vqyNGBwgqYGBneRij7Po5ZctdTlDedsCpkVXRyatqF%2Bkdq6G2atlne%2FnT1mAivmeZUSyozzT25Ju%2BOV9yhyOC2%2BzYAjQdNivTPS0HQ80%2BaHGzhEC2f59t%2BMGMA3AFM2W9xMUXueUR7aIQwLzcgCmOgrwFrfQjpkAJ1RUtqVhHz%2Bc2qurw1MhMNP0H9bg7G6%2BKi80GCIi2n7v0qPduFyFKjqHN9mxXq29eRJ4gXRIIigJvEqzEEvvxyx9nwj%2B4Zv0bNltWfAjLrjQQ1Jd3VSL4030rmfLbzCS%2F7RDUMYh41HMp6MtPXQIhcy4bcVwwjkHvSw7%2Bedx354%2BcGKsvMs3LtXGpXEjj7CCdMhOAZT7cz02SPGwVVaY921iDOhnshUf4%2BWoLUO4fjW%2B92llBGnbPm%2BhGgWYUAhK190X7hAQxaT623Jm4iF4GbQeITRD1dMt5p5AVJi%2BkwyoW0uwY6pwFGZbHRJIJ293LOB6x%2F6c4sP7c8V5rqzz9puXF%2BK3yxJR9pmArB8vaRK3jdMrrkHupT9aOSCRreoo1boc4Quw9jzykSXYMCh8DPZKEuqzXzFMfWkXwQ3N9jlq1IkDhIhLSQ3QHE716y49X1SLD1G0de7%2Bt%2BnBNP4HIIaIHw5L623Ny9T0e4wUlYUFEwa%2Fs4gaZwXysfLNZtWMOVPuEoicOM8iWoQOPUSQ%3D%3D&X-Amz-Signature=a482c1c6c0cb581c152b158f90febdb23533ab58b87d393198c85b69065a6bb7&X-Amz-SignedHeaders=host&x-id=GetObject",
      instagram: "julia.drones",
       },
    {
      name: "Júlia Costa",
      role: "Especialista em Drones",
      bio: "Pioneira no desenvolvimento de sistemas autônomos para drones.",
      image: "https://getty-unisporkal-usw2-prod-visual-search.s3.us-west-2.amazonaws.com/production/71005665752ccbd854e481b5c27b1035295718dbe525e72db7450905a6fe4e05ad?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAWHMXPNCUMRJKBQ4W%2F20241226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241226T071930Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIEXSwRXVKzyqlw48qg9We%2BZxIgdFPMEUcuMXjw4RrULFAiAEYV7DFjGdpPi6b6eQ7klNiNOZmSrLAE0iWVLsq6T%2FJCqRBAgoEAMaDDQyODIwMzc5NjY0OCIMkpQn6x2rUO0Y8PBvKu4D%2FhX%2BXjIkULHv%2Fx9wPMW3wpw9YN9QAPKPDhp3yHS03%2B5gSgszxSaN%2BBjJwlROot%2BET1ESEHQE1AhRYj9Be04mI%2F0DGpTJNhUiIsEVctZWD66kEKEu1YYI1MXCcYg2XGaqMv9E5Lugq8zhrA0zLwaJ3p8gcAMaw9Xzb6UEfF55eJ2oKNw57LeO%2BdNl%2B0%2BznllXnXtF3B8vn7Fdx9cibOEmTiR5gYKn2GxNgM89Rm6LSCkrgApzI1KLxs2Nl8FaaFa6GcK3gnicQOc9o10J4mQUznYLSeTzMZB%2BZXjnh0xoXiJUKahhZkaAENkJwYx%2FovhSG36%2Bdr7UkTKnSuaw8R5u41g9vctMhbnDPYpHclZUV%2BW0LykHHfXDrXIdmXbZ2v9dGuXyoKfBT1W04R3V73OrNkD2%2FX5cTAVkr8BcyoUc7QGBGtqPiDnTPkbunK02i68tidSN5kWKrwCVAGg8EEWeUvPY8zNZs%2FjXz86KOvykOfHg90bFmNTvaxoJmCITUCJQIqVGwwae5bwjyYMd0vACOuQWitGozvMsT%2Fjs%2B63IZRq%2BuNiTWo8lA%2FJ%2FH0GEPxQYTqcmUt5g6a71KvccJfpOlrFLulsswEZbZlXpXbYPJDThgtCBkRqxfGqIi5OxG2PBlJeYmfsL7VpnAzVyWzIwjoK0uwY6pwHcJ8kzXefYIlc%2Bn3%2FiA%2BA6HqpO2oz2%2FNFRXV96OtDTLSgNaHb5FUNHCXrIh2JEIvrefwcSwKiZ0TAgeLo48zs1s4N7Exgfjar2az9IVCA2%2BXNGV%2BiVvqqZfrQhPWt0fdAjrU1C6mqSGhndhnco9Ew%2FH4zIxySBpBlvagoc4MFyZY542ecosssGeL3UbxdExh26QMttBDzw98zZyPcvRJGujONS5HXPlw%3D%3D&X-Amz-Signature=05fdaec1b66dbd27c9c692381a7e1300a621545216ccdd9ae4d02859271cdc22&X-Amz-SignedHeaders=host&x-id=GetObject",
      instagram: "julia.drones",
    }
  ];

  return (
    <section id="equipe" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard
              key={index}
              {...member}
              onBioChange={(newBio) => console.log(`Bio updated for ${member.name}:`, newBio)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}