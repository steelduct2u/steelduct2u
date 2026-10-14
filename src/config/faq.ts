// Soalan lazim — satu sumber untuk paparan (FAQ.tsx) DAN schema FAQPage (schema.ts)
// supaya kandungan nampak dan structured data sentiasa sama (syarat Google).
import type { FAQItem } from '@/types'

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'What is the difference between a standard aircond and a professional HVAC system?',
    answer:
      'A standard residential air conditioner only cools an individual room. A professional HVAC (Heating, Ventilation & Air Conditioning) system is a comprehensive, building-wide engineering solution that regulates temperature, fresh air intake, humidity, and indoor air quality simultaneously. HVAC systems are built for commercial, food & beverage, and industrial facilities requiring certified engineering contractors.',
  },
  {
    id: 2,
    question: 'Is Steel Duct CIDB certified for HVAC and ductwork in Malaysia?',
    answer:
      'Yes. Steel Duct is registered with the Construction Industry Development Board (CIDB) Malaysia under the M01 category (Air Conditioning and Ventilation Systems). All electrical and mechanical installations strictly comply with the Energy Commission of Malaysia (ST) and local fire authority standards.',
  },
  {
    id: 3,
    question: 'Why is NFPA 96 compliance essential for commercial kitchen hood installation?',
    answer:
      'Commercial kitchen exhaust hoods produce high-temperature grease, oil vapors, and heat. Standard ductwork is susceptible to grease leaks and severe fire hazards. As Certified HVAC contractors, we install NFPA 96 compliant heavy-gauge galvanised iron and grade 304/316 stainless steel ductwork with liquid-tight welded joints that meet strict BOMBA fire safety codes, NFPA 96 standards, and local health department requirements.',
  },
  {
    id: 4,
    question: 'How long does a commercial kitchen hood duct installation take?',
    answer:
      'A standard kitchen hood duct installation typically takes 1 to 2 working days. Larger commercial kitchens, multi-storey duct routing, or custom hood configurations may require 3 to 4 days including CFM airflow testing and commissioning. We conduct site measurements beforehand to ensure a fast, precise fit.',
  },
  {
    id: 5,
    question: 'Do you provide maintenance and servicing for exhaust fans and duct systems?',
    answer:
      'Yes. We provide scheduled preventative maintenance contracts covering exhaust fan impeller degreasing, motor and belt tension checks, duct grease inspection, vibration diagnostics, and CFM airflow balancing. Routine servicing prolongs equipment lifespan and prevents grease fire risks.',
  },
  {
    id: 6,
    question: 'Can your air cooling and air fresher systems improve Indoor Air Quality (IAQ)?',
    answer:
      'Yes. IAQ management is a core engineering specialty. We install evaporative air cooling and integrated deodorizing fresh-air filtration units that remove airborne particulates, effectively reduce persistent cooking odours, and supply positive fresh-air pressure in compliance with DOSH and ASHRAE IAQ guidelines.',
  },
]
