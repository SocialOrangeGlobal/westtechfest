import React from 'react';
import './Partners.css';

const Partners = () => {
  return (
    <section className="partners">
      <div className="divider-line"></div>
      <div className="container partners-content">
        
        <div className="partners-header">
          <div className="p-meta">
            <span className="p-tag">04 / Partners</span>
            <span className="p-meta-desc">22 organisations behind the festival</span>
          </div>
          <h2 className="p-title">Backed by the ecosystem.</h2>
        </div>

        <div className="p-grid-top">
          <div className="partner-item">
            <div className="partner-label">
              <span className="dot bg-accent-solid" style={{width: 6, height: 6}}></span>
              <span className="partner-label-text">Principal Partner</span>
            </div>
            <a href="https://www.curtin.edu.au/" className="partner-box large" target="_blank" rel="noopener noreferrer" >
              <div className="partner-box-topline"></div>
              <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-curtin.svg?2026-08-05T23%3A53%3A20.152Z" alt="Curtin University" className="partner-img" />
            </a>
          </div>
          <div className="partner-item">
            <div className="partner-label">
              <span className="dot bg-accent-solid" style={{width: 6, height: 6}}></span>
              <span className="partner-label-text">Premier Partner</span>
            </div>
            <a href="https://www.wa.gov.au/organisation/department-of-energy-and-economic-diversification" className="partner-box large" target="_blank" rel="noopener noreferrer" >
              <div className="partner-box-topline"></div>
              <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/DEED-NIIF_2026_Lockup.svg?2026-08-13T09%3A53%3A33.331Z" alt="Dept. of Energy and Economic Diversification" className="partner-img" />
            </a>
          </div>
        </div>

        <div className="p-grid-bottom">
                      <div className="partner-item" key="This is Fremantle">
              <a href="https://www.fremantle.wa.gov.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/This%20Is%20Fremantle.png?2026-08-13T07%3A00%3A00.640Z" alt="This is Fremantle" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="City of Perth">
              <a href="https://perth.wa.gov.au/en" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-city-of-perth.png?2026-08-05T23%3A53%3A19.412Z" alt="City of Perth" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Malka Foundation">
              <a href="https://www.malka.org.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-malka.png?2026-08-05T23%3A53%3A18.338Z" alt="Malka Foundation" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Meshpoints">
              <a href="https://www.meshpoints.com/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-meshpoints.png?2026-08-05T23%3A53%3A14.636Z" alt="Meshpoints" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="City of Cockburn">
              <a href="https://www.cockburn.wa.gov.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-city-of-cockburn-1.webp?2026-08-05T23%3A53%3A06.181Z" alt="City of Cockburn" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Davies Collison Cave">
              <a href="https://www.dcc.com" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-davies-collison-cave-1.webp?2026-08-05T23%3A53%3A06.882Z" alt="Davies Collison Cave" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="GreenTech Hub WA">
              <a href="https://www.greentechwa.com" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-greentech-hub-wa.png?2026-08-05T23%3A53%3A16.495Z" alt="GreenTech Hub WA" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Minderoo Foundation">
              <a href="https://www.minderoo.org/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-minderoo-1.webp?2026-08-05T23%3A53%3A06.533Z" alt="Minderoo Foundation" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Radium Capital">
              <a href="https://radiumcapital.com.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-radium-capital.png?2026-08-05T23%3A53%3A17.592Z" alt="Radium Capital" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Visagio">
              <a href="https://www.visagio.com.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/Visagio%20Green%20Logo%20(1).png?2026-08-27T02%3A15%3A01.510Z" alt="Visagio" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Xenon">
              <a href="https://xenon.com.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/XENON%20Logo%202026_Dark.png?2026-08-13T07%3A02%3A53.212Z" alt="Xenon" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Atherton Ventures">
              <a href="https://www.athertonventures.com/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-atherton-ventures-1.webp?2026-08-05T23%3A53%3A05.780Z" alt="Atherton Ventures" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Fremantle Ports">
              <a href="https://www.fremantleports.com.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/fremantle-ports-logo.svg?2026-08-13T09%3A51%3A44.478Z" alt="Fremantle Ports" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Knightcorp">
              <a href="https://www.knightcorp.insure/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/Knightcorp_Logotype_Stacked_DarkBlue%20(1).png?2026-08-13T07%3A04%3A39.501Z" alt="Knightcorp" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="RSM">
              <a href="https://www.rsm.global/australia" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/RSM%20Standard%20Logo%20RGB.png?2026-08-13T07%3A05%3A20.673Z" alt="RSM" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Spacecubed">
              <a href="https://spacecubed.com/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/SC_Primary-Horizontal_Colour_Light.png?2026-08-18T23%3A46%3A28.652Z" alt="Spacecubed" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Terrace Loft">
              <a href="https://www.terraceloft.com.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-terrace-loft-1.webp?2026-08-05T23%3A53%3A05.399Z" alt="Terrace Loft" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Fogarty Foundation">
              <a href="https://www.fogartyfoundation.org.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/FogartyFoundationLogo.png?2026-08-13T07%3A11%3A19.944Z" alt="Fogarty Foundation" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Fremantle Chamber">
              <a href="https://www.fremantlechamber.com.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-fremantle-chamber-of-commerce-1.webp?2026-08-05T23%3A53%3A03.161Z" alt="Fremantle Chamber" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="IIF">
              <a href="https://iifconference.com.au/be-part-of-iif-2026/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/381031c2-2823-42ab-acb2-70330b6737a9.png?2026-08-26T02%3A10%3A42.588Z" alt="IIF" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="Scitech">
              <a href="https://www.scitech.org.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-scitech-1.svg?2026-08-05T23%3A53%3A03.871Z" alt="Scitech" className="partner-img" />
              </a>
            </div>
            <div className="partner-item" key="WiTWA">
              <a href="https://witwa.org.au/" className="partner-box" target="_blank" rel="noopener noreferrer" >
                <img src="https://cijhivxxnxe7zfen.public.blob.vercel-storage.com/partner-witwa-1.webp?2026-08-05T23%3A53%3A05.030Z" alt="WiTWA" className="partner-img" />
              </a>
            </div>        </div>

        <div className="partners-footer">
          <a href="#" className="all-partners-link">ALL PARTNERS &amp; TIERS <span style={{marginLeft: '8px'}}>→</span></a>
          <a href="#" className="btn-outline">BECOME A PARTNER <span style={{marginLeft: '8px'}}>→</span></a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
