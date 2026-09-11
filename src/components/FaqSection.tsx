"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What does Plan Be Design Studio do?",
    a: "Plan Be Design Studio is an architecture and design practice offering services in architecture, interior design, planning, and related design consultancy. We work across residential, commercial, and other projects, with a focus on creating spaces that are functional, contextual, aesthetically refined, and thoughtfully detailed."
  },
  {
    q: "Where is Plan Be Design Studio located?",
    a: "Our design studio is based in Kaloor, Kochi Kerala, India. We primarily work with clients in Kerala and undertake projects at locations based on the requirements of each project. You can find us on Google Maps by clicking [here](https://goo.gl/maps/piH3V18uJTk). We welcome you to visit us by appointment.\nCoordinates: 10°00'01.5\"N 76°17'26.2\"E"
  },
  {
    q: "What type of projects do you undertake?",
    a: "We undertake a range of projects including residential houses, villas, apartments, commercial buildings, interiors, renovations, and other architectural projects. The scale and scope of our involvement depend on the requirements of each project."
  },
  {
    q: "What is your design approach?",
    a: "Our approach is centred around function, context, simplicity, and the experience of space. We consider the site's characteristics, climate, orientation, requirements, budget, materials, and the way people will use the space before developing the design.\nWe believe good design should not only look beautiful but should also be practical, comfortable, sustainable, and relevant to its surroundings."
  },
  {
    q: "Do you follow a particular architectural style?",
    a: "We do not limit ourselves to a single architectural style. Every project is developed according to its site, context, client requirements, climate, budget, and design objectives.\nOur work generally explores a contemporary architectural language while maintaining a strong emphasis on functionality, proportion, materiality, natural light, ventilation, and spatial experience."
  },
  {
    q: "How do we start a project with Plan Be Design Studio?",
    a: "The process usually begins with an initial consultation where we understand your requirements, site, expectations, budget, and overall vision.\nFollowing this discussion, we can explain the appropriate scope of services, design process, professional fees, and the next steps required to proceed with the project."
  },
  {
    q: "Do you visit the site before starting the design?",
    a: "Yes. A site visit is an important part of understanding a project. Depending on the project stage, we study the site dimensions, access, orientation, surrounding buildings, views, existing vegetation, levels, road conditions, and other relevant site characteristics.\nThe site visit is generally scheduled after the initial discussion and confirmation of the project scope."
  },
  {
    q: "What documents should we bring for the first meeting?",
    a: "For the initial discussion, it is helpful to bring:\n• Site/village sketch or survey plan\n• Available site measurements and documents\n• Detailed project requirements\n• Photographs or videos of the site\n• Reference images, if you have any\n• Approximate project budget, if decided\n• Any existing drawings or approvals related to the project\nThese details help us understand your requirements and provide more meaningful guidance during the initial discussion."
  },
  {
    q: "How much does architectural design cost?",
    a: "Architectural fees depend on several factors, including project type, size, complexity, location, scope of services, and level of design involvement.\nRather than using a single fee for every project, we discuss the requirements with the client and provide a fee proposal based on the specific scope of work."
  },
  {
    q: "What services are included in your architectural package?",
    a: "The scope can be tailored according to the project. Depending on the requirement, our services may include:\n• Site analysis and planning\n• Concept design\n• Architectural planning\n• 3D visualisation\n• Detailed architectural drawings\n• Working and construction drawings\n• Interior design\n• Material and finish selection\n• Coordination with consultants\n• Approval-related drawings\n• Site/project coordination\nThe exact scope of services will be clearly discussed and mentioned in the proposal before commencing the project."
  },
  {
    q: "How long does it take to design a house?",
    a: "The design timeline depends on the size and complexity of the project, site conditions, scope of services, and the number of design revisions required.\nFor a typical residential project, the process may take several weeks to a few months from the initial concept through detailed drawings. A more accurate timeline will be discussed and established at the beginning of the project."
  },
  {
    q: "Do you provide 3D views and walkthroughs?",
    a: "Yes. 3D visualisations, rendered views, and walkthroughs can be provided depending on the requirements and scope of the project.\nThese visualisations help clients understand the proposed spaces, materials, colours, proportions, lighting, and overall design before construction."
  },
  {
    q: "Do you handle building permit drawings and approvals?",
    a: "Yes. Where included within the agreed scope, we can prepare the necessary architectural drawings and documentation for building permit applications and coordinate the approval process as required.\nApproval requirements may vary depending on the location, project type, and applicable local regulations."
  },
  {
    q: "Do you provide interior design as part of the project?",
    a: "Yes. Interior design can be provided as part of the architectural project or as a separate service, depending on the client's requirements.\nOur interior design approach focuses on creating spaces that are cohesive with the architecture, while carefully considering functionality, materials, lighting, furniture, storage, colours, and overall user experience."
  },
  {
    q: "Do you provide site supervision during construction?",
    a: "The level of site involvement depends on the scope of services agreed upon for each project.\nWhere site/project coordination or supervision is included, we can make scheduled site visits to review the work against the drawings and design intent and coordinate with the client, contractor, and relevant consultants.\nSite visits do not replace the contractor's responsibility for construction methods, workmanship, safety, or day-to-day site management unless specifically agreed otherwise."
  },
  {
    q: "Can we make changes to the design after the project has started?",
    a: "Yes. We encourage clients to communicate their requirements and concerns during the design process. Design development naturally involves discussions and refinements.\nHowever, significant changes after a stage has been approved or after detailed drawings have been completed may affect the project timeline, coordination, and professional fees. Such changes will be discussed with the client before proceeding."
  },
  {
    q: "Do you work outside Kochi?",
    a: "Yes. Although our studio is based in Kaloor, Kochi, we can undertake projects at other locations depending on the project's requirements, scope, and feasibility.\nFor projects outside our regular working area, additional travel or site-visit expenses may apply."
  },
  {
    q: "How can we schedule a consultation?",
    a: "You can contact Plan Be Design Studio by phone, email, or through our official communication channels to discuss your project.\nWe recommend scheduling an appointment in advance so that sufficient time can be allocated to understand your requirements and discuss the project properly."
  },
  {
    q: "Can we visit your studio?",
    a: "Yes. We welcome prospective clients to visit our studio by appointment. An initial studio meeting allows us to understand your requirements, discuss your expectations, explain our design process, and determine whether our approach is suitable for your project."
  },
  {
    q: "What happens after the first meeting?",
    a: "After understanding the project requirements, we typically evaluate the site, scope, expected services, project complexity, and client requirements.\nWe then prepare a suitable scope of services and professional fee proposal. Once the scope and terms are mutually agreed upon, we can proceed with the design process."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-32 pt-16 border-t border-[#E0E0E0] w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <h2 className="font-serif text-5xl md:text-6xl leading-none text-[#111111] tracking-tight">
          Frequently Asked <span className="text-[#5A3728] italic font-light">Questions</span>
        </h2>
        <button
          onClick={() => setIsSectionOpen(!isSectionOpen)}
          className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-[#E0E0E0] hover:border-[#5A3728] transition-colors focus:outline-none mb-2 md:mb-0"
          aria-label={isSectionOpen ? "Close FAQ list" : "Open FAQ list"}
        >
          <motion.div
            animate={{ rotate: isSectionOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-[#5A3728]" />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isSectionOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col border-t border-[#E0E0E0]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-[#E0E0E0]">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <div className="flex gap-4 sm:gap-8 items-start">
                        <span className="text-sm font-mono text-[#A0A0A0] mt-1 group-hover:text-[#5A3728] transition-colors">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl text-[#111111] group-hover:text-[#5A3728] transition-colors">
                          {faq.q}
                        </h3>
                      </div>
                      <div className="ml-4 flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
                        <div className="absolute w-4 h-[1px] bg-[#5A3728]" />
                        <motion.div 
                          animate={{ rotate: isOpen ? 90 : 0 }} 
                          transition={{ duration: 0.3 }}
                          className="absolute w-[1px] h-4 bg-[#5A3728]" 
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-[3rem] sm:pl-[4.5rem] pr-4 max-w-4xl text-[#6A6A6A] leading-relaxed font-light whitespace-pre-wrap">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
