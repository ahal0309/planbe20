export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  heroImage: string;
  secondaryImage: string;
  galleryImages?: string[];
  overviewHeading: string;
  overviewDescription: string;
  challenge: string;
  approach: string;
  solution: string;
  relatedSlugs: string[];
}

export const projectsData: Record<string, ProjectData> = {
  "villa-sereno": {
    slug: "villa-sereno",
    title: "Villa Sereno",
    subtitle: "RESIDENTIAL · KOTTAYAM, KERALA, INDIA · 2024",
    category: "RESIDENTIAL",
    location: "Kottayam, Kerala, India",
    year: "2024",
    heroImage: "/villa-sereno.jpg",
    secondaryImage: "/long_view.png",
    galleryImages: ["/long_view.png", "/villa-sereno.jpg", "/akhil.png", "/rajasthan.png"],
    overviewHeading: "OVERVIEW",
    overviewDescription:
      "A refined contemporary residence in Kottayam, designed around natural light, spatial flow, and contextually grounded architecture.",
    challenge:
      "Creating a spacious modern family home in Kottayam that balances privacy, climate-responsive tropical design, and elegant spatial continuity.",
    approach:
      "Distilling vernacular Kerala sloped geometry into crisp modern forms with large shaded overhangs, open-living zones, and seamless indoor-outdoor transitions.",
    solution:
      "A light-filled residence featuring expansive glass openings, natural material accents, and framed garden views tailored to tropical living.",
    relatedSlugs: ["glass-house", "modern-living"],
  },
  "glass-house": {
    slug: "glass-house",
    title: "The Glass House",
    subtitle: "COMMERCIAL · KOCHI, KERALA, INDIA · 2023",
    category: "COMMERCIAL",
    location: "Kochi, Kerala, India",
    year: "2023",
    heroImage: "/glass-house.jpg",
    secondaryImage: "/entrance-01.jpg",
    galleryImages: ["/entrance-01.jpg", "/glass-house.jpg", "/3-trees-banner.jpg", "/long_view.png"],
    overviewHeading: "OVERVIEW",
    overviewDescription:
      "An innovative corporate studio space that dissolves the boundary between workspace and exterior greenery.",
    challenge:
      "Designing a transparent, high-efficiency structure that avoids excessive thermal heat gain in coastal Kerala's tropical climate.",
    approach:
      "Employing deep shading louvers, high-performance low-E double glazing, and passive cross-ventilation courtyards.",
    solution:
      "A luminous workplace defined by natural illumination, open work floors, and minimal structural intrusion.",
    relatedSlugs: ["villa-sereno", "natures-edge"],
  },
  "modern-living": {
    slug: "modern-living",
    title: "Modern Living",
    subtitle: "INTERIOR · TRIVANDRUM, KERALA · 2024",
    category: "INTERIOR",
    location: "Trivandrum, Kerala, India",
    year: "2024",
    heroImage: "/3-trees-banner.jpg",
    secondaryImage: "/rajasthan.png",
    galleryImages: ["/rajasthan.png", "/3-trees-banner.jpg", "/villa-sereno.jpg"],
    overviewHeading: "OVERVIEW",
    overviewDescription:
      "A warm minimalist interior environment curated with honest wood craftsmanship, bespoke detailing, and soothing textures.",
    challenge:
      "Reorganizing an existing compartmentalized layout into a cohesive, fluid open-concept sanctuary.",
    approach:
      "Prioritizing tactile warmth through teak wood millwork, neutral clay plaster walls, and subtle architectural lighting.",
    solution:
      "An inspiring, peaceful dwelling where every corner responds intuitively to modern family routines.",
    relatedSlugs: ["villa-sereno", "entrance-courtyard"],
  },
  "entrance-courtyard": {
    slug: "entrance-courtyard",
    title: "Entrance Courtyard",
    subtitle: "RESIDENTIAL · THRISSUR, KERALA · 2023",
    category: "RESIDENTIAL",
    location: "Thrissur, Kerala, India",
    year: "2023",
    heroImage: "/entrance-01.jpg",
    secondaryImage: "/akhil.png",
    galleryImages: ["/akhil.png", "/entrance-01.jpg", "/glass-house.jpg"],
    overviewHeading: "OVERVIEW",
    overviewDescription:
      "A dramatic arrival experience designed around water, tropical foliage, and monolithic stone thresholds.",
    challenge:
      "Establishing a tranquil sense of arrival while mitigating street noise and harsh afternoon sunlight.",
    approach:
      "Crafting a buffer zone through a covered peristyle colonnade, landscaped courtyard, and reflective water features.",
    solution:
      "A serene architectural portal that welcomes residents and guests into a restorative natural retreat.",
    relatedSlugs: ["villa-sereno", "glass-house"],
  },
  "natures-edge": {
    slug: "natures-edge",
    title: "Nature's Edge",
    subtitle: "HOSPITALITY · WAYANAD, KERALA · 2024",
    category: "HOSPITALITY",
    location: "Wayanad, Kerala, India",
    year: "2024",
    heroImage: "/ochre-5.jpg",
    secondaryImage: "/long_view.png",
    galleryImages: ["/long_view.png", "/ochre-5.jpg", "/akhil.png"],
    overviewHeading: "OVERVIEW",
    overviewDescription:
      "An eco-sensitive hillside resort pavilion embedded gently into the undulating slopes of Wayanad.",
    challenge:
      "Building sustainably on steep terrain with zero disruption to native trees and natural site drainage.",
    approach:
      "Elevated light steel frameworks anchored onto minimal concrete pedestals, clad in local stone and treated timber.",
    solution:
      "An immersive ecological destination offering panoramic valley views and passive climatic comfort.",
    relatedSlugs: ["villa-sereno", "glass-house"],
  },
};
