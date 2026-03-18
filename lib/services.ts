export type ServiceDetailSection = {
  title: string
  body: string
}

export type Service = {
  slug:
    | "boundary-survey"
    | "minor-land-division"
    | "alta-nsps-land-title"
    | "topographic"
    | "consulting"
    | "mapping"
  title: string
  shortDescription: string
  image: string
  imageAlt: string
  intro: string[]
  detailSections: ServiceDetailSection[]
  highlights: string[]
}

export const services: Service[] = [
  {
    slug: "boundary-survey",
    title: "Boundary Survey",
    shortDescription:
      "Boundary surveys depict property lines, lot corners, acreage, improvements, and encroachments using Wisconsin minimum survey standards.",
    image: "/images/rutzen-banner-1.jpg",
    imageAlt: "Boundary survey field work",
    intro: [
      "Rutzen Survey Services completes boundary surveys, typically known as Plat of Survey's, throughout Wisconsin.",
      "To perform a proper boundary survey, work begins by following the minimum standards in A-E 7 of the Wisconsin Administrative Code for property surveys.",
      "Field evidence such as existing monuments, subdivision corners, section corners, fence lines, and occupation evidence is located and measured, then analyzed against recorded deeds.",
    ],
    detailSections: [
      {
        title: "Survey Process",
        body: "After analysis and boundary computation by a licensed surveyor, iron rods are set at missing property corners and a final survey map is prepared showing boundary location, monuments, encroachments, legal description, and certification.",
      },
      {
        title: "Typical Uses",
        body: "Boundary surveys are recommended or required for land transactions, basic design, home additions, property line marking, boundary disputes, area calculation, and flood zone determination.",
      },
    ],
    highlights: [
      "Property line location",
      "Corner monument recovery",
      "Iron rod setting where missing",
      "Encroachment identification",
      "Certified plat of survey",
      "Legal description support",
    ],
  },
  {
    slug: "minor-land-division",
    title: "Minor Land Division",
    shortDescription:
      "Division of land into up to four parcels with guidance through county and municipal review requirements.",
    image: "/images/rutzen-banner-2.jpg",
    imageAlt: "Land division survey plan",
    intro: [
      "Minor land division is the division of land into at least one, but not more than four, parcels.",
      "Requirements vary among counties and local municipalities in Wisconsin and may include lot size, setbacks, access control, and floodplain restrictions.",
      "County review is typically required, and some projects may include meetings with town or municipal boards.",
    ],
    detailSections: [
      {
        title: "Review and Approval",
        body: "Minor land divisions can be complex, and Rutzen Survey supports clients through local governing authority review to help keep the process clear and manageable.",
      },
      {
        title: "Certified Survey Map",
        body: "Minor land divisions are commonly documented through a Certified Survey Map (CSM) to support lot creation, sale, exchange, reconfiguration, and legal description clarification.",
      },
    ],
    highlights: [
      "1-4 parcel land divisions",
      "Certified Survey Map (CSM)",
      "County and municipal coordination",
      "Setback and access review context",
      "Floodplain requirement awareness",
      "Project review support",
    ],
  },
  {
    slug: "alta-nsps-land-title",
    title: "ALTA/NSPS Land Title",
    shortDescription:
      "Due-diligence surveys for commercial and development real estate transactions with ALTA/NSPS minimum standard compliance.",
    image: "/images/rutzen-banner-3.jpg",
    imageAlt: "ALTA NSPS land title survey documentation",
    intro: [
      "ALTA/NSPS Land Title Surveys are typically performed for due diligence in real estate and development transactions.",
      "To complete an ALTA/NSPS survey, a licensed surveyor must follow revised minimum standard detail requirements.",
      "Rutzen Survey Services has years of experience working with clients, lenders, and attorneys in preparation of ALTA surveys.",
    ],
    detailSections: [
      {
        title: "Accuracy and Detail",
        body: "ALTA/NSPS surveys require a higher level of accuracy and detail than standard boundary surveys, and requirements are handled in coordination with project stakeholders.",
      },
      {
        title: "Transaction Support",
        body: "These surveys support title and development due diligence by documenting conditions and required survey details for transaction teams.",
      },
    ],
    highlights: [
      "Commercial transaction support",
      "Development due diligence",
      "Lender and attorney coordination",
      "Enhanced accuracy requirements",
      "NSPS standard compliance",
      "Detailed survey deliverables",
    ],
  },
  {
    slug: "topographic",
    title: "Topographic",
    shortDescription:
      "Topographic surveys depict natural and manmade features and elevation changes for planning, architecture, engineering, and design.",
    image: "/images/rutzen-banner-4.jpg",
    imageAlt: "Topographic survey of land features",
    intro: [
      "Unlike a standard boundary survey, a topographic survey focuses on natural and manmade features on the land itself.",
      "Features can include hills, ditches, streams, trees, fences, buildings, and other parcel improvements.",
      "Topographic land surveying emphasizes elevation information as well as feature location and is mapped for design use.",
    ],
    detailSections: [
      {
        title: "Design-Ready Mapping",
        body: "Topographic mapping is commonly used by design professionals as a basis for site planning, architecture, engineering, landscaping, and other design workflows.",
      },
      {
        title: "Detail Levels",
        body: "Rutzen Survey Services can provide the level of detail and accuracy needed for project-specific design requirements.",
      },
    ],
    highlights: [
      "Natural feature mapping",
      "Manmade improvement mapping",
      "Elevation and contour depiction",
      "Planning and design support",
      "Architecture and engineering basis",
      "Project-specific detail levels",
    ],
  },
  {
    slug: "consulting",
    title: "Consulting",
    shortDescription:
      "Surveying and drafting consulting support for short-term and long-term project needs.",
    image: "/images/rutzen-survey-img1.jpg",
    imageAlt: "Survey consulting field operations",
    intro: [
      "In addition to land surveying and mapping services, Rutzen Survey Services offers consulting services.",
      "Consulting is available for firms that need short-term or long-term surveying or drafting support.",
      "After 20+ years in land surveying and engineering, Tim Rutzen brings broad field and office experience in surveying, planning, and design.",
    ],
    detailSections: [
      {
        title: "Production Support",
        body: "Consulting services are designed to help strengthen existing teams with high-quality production support across surveying and civil-related work.",
      },
      {
        title: "Tools and Deliverables",
        body: "Workflows include Trimble technology, Autodesk products, AutoCAD C3D, and MicroStation for data collection, construction staking, survey drafting, civil plan development, and right of way platting.",
      },
      {
        title: "Project Experience",
        body: "Experience includes local municipal road/site work and WisDOT plan development, with flexibility to support teams where needed.",
      },
    ],
    highlights: [
      "Short or long-term staffing support",
      "Survey field and office experience",
      "Construction staking support",
      "Survey drafting services",
      "Civil plan development",
      "WisDOT and municipal project support",
    ],
  },
  {
    slug: "mapping",
    title: "Mapping",
    shortDescription:
      "Custom mapping services with flexible detail levels, GIS/CAD workflows, and multiple output formats.",
    image: "/images/rutzen-mapping.jpg",
    imageAlt: "Custom property mapping service",
    intro: [
      "Rutzen Survey Services provides mapping services for projects large and small.",
      "With experience in CAD programs and ESRI ArcGIS, maps can be tailored to specific project goals and visual requirements.",
      "Mapping can support residential properties, recreational properties, and development planning with clear feature depiction.",
    ],
    detailSections: [
      {
        title: "Custom Detail",
        body: "Maps can be custom tailored to your required detail, from landscaping plans to rural property maps with stands, food plots, trails, and cabins.",
      },
      {
        title: "Available Map Features",
        body: "Possible features include current aerial backgrounds, historical imagery, approximate or survey-grade boundary lines, planned construction, lakes/rivers/creeks, utility lines, contour elevation lines, fence lines, roads/trails, buildings, and more.",
      },
      {
        title: "Typical Map Sizes",
        body: "Typical sizes include 11x17, 22x34, and 24x36, with larger formats available upon request.",
      },
    ],
    highlights: [
      "Aerial and historical imagery",
      "Boundary and contour overlays",
      "Utility and water feature layers",
      "Road and trail mapping",
      "Residential and rural property mapping",
      "Large-format map outputs",
    ],
  },
]

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<Service["slug"], Service>
