import React from 'react';

const festivalFounders = [
  {
    id: 'f1',
    name: 'Bill Tai',
    company: 'WEST TECH FEST',
    role: 'Silicon Valley Venture Capitalist',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fbill-tai-1.webp%3F2026-08-05T23%253A53%253A30.570Z&w=1920&q=100',
    socials: ['in', 'x']
  },
  {
    id: 'f2',
    name: 'Larry Lopez',
    company: 'ATHERTON VENTURES MANAGEMENT',
    role: 'Partner + Chair of Organising Committee',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Flarry-lopez.jpg%3F2026-08-05T23%253A53%253A30.197Z&w=1920&q=100',
    socials: ['in', 'x']
  },
  {
    id: 'f3',
    name: 'Paula Taylor',
    company: '32 DEGREES SOUTH',
    role: 'Founder + Co-Chair of Organising Committee',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fpaula-taylor.png%3F2026-08-05T23%253A53%253A29.827Z&w=1920&q=100',
    socials: ['in', 'x']
  },
  {
    id: 'f4',
    name: 'Rohan McDougall',
    company: 'CURTIN UNIVERSITY',
    role: 'Executive Director of Commercialisation',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Frohan-mcdougall.png%3F2026-08-05T23%253A53%253A29.460Z&w=1920&q=100',
    socials: ['in', 'x']
  }
];

const organisingCommittee = [
  {
    id: 'o1',
    name: 'Alan Bradley',
    company: 'POLLINATORS INC',
    role: 'General Manager/Strategic Lead',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Falan-bradley.jpeg%3F2026-08-05T23%253A53%253A29.118Z&w=1920&q=100',
    socials: ['in']
  },
  {
    id: 'o2',
    name: 'Charlie Gunningham',
    company: 'MESHPOINTS & STARTUP WA',
    role: 'Head of Ecosystem Engagement & Chair',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fcharlie-gunningham-1.webp%3F2026-08-05T23%253A53%253A28.763Z&w=1920&q=100',
    socials: ['in', 'x']
  },
  {
    id: 'o3',
    name: 'Jeremy Chetty',
    company: 'STUDENT EDGE',
    role: 'Chief Evangelist',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fjeremy-chetty-1.webp%3F2026-08-05T23%253A53%253A28.409Z&w=1920&q=100',
    socials: ['in', 'x']
  },
  {
    id: 'o4',
    name: 'Kylie Gerrard',
    company: 'PURPOSE VENTURES',
    role: 'Co-Founder & General Partner',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fkylie-gerrard-1.webp%3F2026-08-05T23%253A53%253A28.037Z&w=1920&q=100',
    socials: ['in']
  },
  {
    id: 'o5',
    name: 'Leslie Delaforce',
    company: 'MINDEROO FOUNDATION & STARTUPWA',
    role: 'Head of Indigenous Entrepreneurship & Board Member',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fleslie-delaforce.jpeg%3F2026-08-05T23%253A53%253A27.673Z&w=1920&q=100',
    socials: ['in', 'x']
  },
  {
    id: 'o6',
    name: 'Natasha Teakle',
    company: 'AGRISTART',
    role: 'Managing Director & Commercialisation Facilitator, Entrepreneurs\' Programme',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fnatasha-teakle-1.webp%3F2026-08-05T23%253A53%253A27.338Z&w=1920&q=100',
    socials: ['in']
  },
  {
    id: 'o7',
    name: 'Ophelie Cutier',
    company: 'SPACECUBED',
    role: 'Chief Operating Officer',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fophelie-cutier.png%3F2026-08-05T23%253A53%253A27.008Z&w=1920&q=100',
    socials: ['in']
  },
  {
    id: 'o8',
    name: 'Rob Nathan',
    company: 'AUSTRALIAN TENDERS & FREO STARTUP FEST',
    role: 'Founder & Co-Founder',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Frob-nathan.jpeg%3F2026-08-05T23%253A53%253A26.639Z&w=1920&q=100',
    socials: ['in']
  },
  {
    id: 'o9',
    name: 'Tim Brewer',
    company: 'FUNCTIONLY',
    role: 'CEO & Co-Founder',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Ftim-brewer.jpeg%3F2026-08-05T23%253A53%253A26.312Z&w=1920&q=100',
    socials: ['in', 'x']
  },
  {
    id: 'o10',
    name: 'Toby Swingler',
    company: 'CERI',
    role: 'Interim CEO',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Ftoby-swingler.png%3F2026-08-05T23%253A53%253A25.904Z&w=1920&q=100',
    socials: ['in']
  },
  {
    id: 'o11',
    name: 'Raquel Todd',
    company: 'BLAK LINE',
    role: 'Managing Director',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fraquel-todd.jpg%3F2026-08-05T23%253A53%253A25.521Z&w=1920&q=100',
    socials: ['in']
  },
  {
    id: 'o12',
    name: 'James Edwards',
    company: 'RAC WA',
    role: 'General Manager - Strategic Innovation / Chief Executive Officer at BetterLabs',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fjames-edwards.jpg%3F2026-08-05T23%253A53%253A25.183Z&w=1920&q=100',
    socials: ['in']
  }
];

const festivalTeam = [
  {
    id: 't1',
    name: 'Danelle Cross',
    company: 'CURTIN UNIVERSITY',
    role: 'Festival Director',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fdanelle-cross.png%3F2026-08-05T23%253A53%253A32.781Z&w=1920&q=100',
    socials: ['in']
  },
  {
    id: 't2',
    name: 'Sarah Kahle',
    company: 'CURTIN UNIVERSITY',
    role: 'Festival Manager',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fsarah-kahle.jpg%3F2026-08-05T23%253A53%253A32.407Z&w=1920&q=100',
    socials: ['in']
  },
  {
    id: 't3',
    name: 'Kali Norman',
    company: 'WEST TECH FEST',
    role: 'Head of Programming',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fkali-norman.png%3F2026-08-05T23%253A53%253A32.031Z&w=1920&q=100',
    socials: ['in', 'x']
  },
  {
    id: 't4',
    name: 'Tamara Cook',
    company: 'KNOWN ASSOCIATES AUSTRALIA',
    role: 'CEO + Events Director',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Ftamara-cook-1.webp%3F2026-08-05T23%253A53%253A31.657Z&w=1920&q=100',
    socials: ['in', 'ig']
  },
  {
    id: 't5',
    name: 'Charlotte Hickman',
    company: 'KNOWN ASSOCIATES AUSTRALIA',
    role: 'Event Producer',
    image: 'https://www.westtechfest.com.au/_next/image?url=https%3A%2F%2Fcijhivxxnxe7zfen.public.blob.vercel-storage.com%2Fcharlotte-hickman.png%3F2026-08-05T23%253A53%253A30.922Z&w=1920&q=100',
    socials: ['in']
  }
];

const RenderTeamGrid = ({ title, members }) => (
  <div className="team-category">
    <div className="category-label">
      <span className="accent-square red"></span> {title}
    </div>
    
    <div className="team-grid">
      {members.map((member) => (
        <div key={member.id} className="team-card">
          <div className="member-image">
            <img src={member.image} alt={member.name} />
          </div>
          <div className="member-info">
            <h3 className="member-name">{member.name}</h3>
            <p className="member-company">{member.company}</p>
            <p className="member-role">{member.role}</p>
          </div>
          <div className="member-socials">
            {member.socials.includes('in') && <span className="social-icon">in</span>}
            {member.socials.includes('x') && <span className="social-icon">X</span>}
            {member.socials.includes('ig') && <span className="social-icon">ig</span>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AboutTeam = () => {
  return (
    <section className="about-team">
      <div className="container">
        <div className="section-label">
          <span className="section-number">04</span> / THE TEAM
        </div>
        <h2 className="section-title">The people behind it.</h2>
        <p className="team-subtitle">The people who make West Tech Fest happen.</p>
        
        <RenderTeamGrid title="FESTIVAL TEAM" members={festivalTeam} />
        <RenderTeamGrid title="FESTIVAL FOUNDERS" members={festivalFounders} />
        <RenderTeamGrid title="ORGANISING COMMITTEE" members={organisingCommittee} />
      </div>
    </section>
  );
};

export default AboutTeam;
