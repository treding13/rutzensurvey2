export type LocationFAQ = {
  question: string
  answer: string
}

export type Location = {
  slug: string
  city: string
  state: string
  county: string
  metaTitle: string
  metaDescription: string
  h1: string
  heroTagline: string
  introParas: string[]
  localContext: string
  nearbyAreas: string[]
  topKeywords: string[]
  faqs: LocationFAQ[]
}

export const locations: Location[] = [
  {
    slug: "wausau-wi",
    city: "Wausau",
    state: "WI",
    county: "Marathon County",
    metaTitle: "Land Surveyor Wausau, WI",
    metaDescription:
      "Professional land surveying in Wausau, WI. Rutzen Survey Services provides boundary surveys, ALTA surveys, topographic surveys & more for Marathon County. Call (715) 891-0735 for a free quote.",
    h1: "Land Surveying Services in Wausau, WI",
    heroTagline: "Professional Land Surveying for Wausau & Marathon County",
    introParas: [
      "Whether you're buying property, subdividing land, or planning a construction project in Wausau, WI, you need a licensed professional land surveyor you can count on. Rutzen Survey Services provides comprehensive land surveying to residential, commercial, and municipal clients throughout Wausau and the surrounding Marathon County area.",
      "Located in the heart of central Wisconsin just a short drive from Wausau, our team brings over 20 years of surveying experience to every project. From standard boundary surveys to complex ALTA/NSPS land title surveys for commercial transactions, we deliver accurate, reliable results that meet Wisconsin's minimum survey standards under A-E 7 of the Wisconsin Administrative Code.",
      "Wausau's mix of established neighborhoods, commercial corridors along Business Highway 51 and Stewart Avenue, and expanding development activity in surrounding communities like Weston and Rib Mountain creates demand for a wide range of surveying services. Our local knowledge of Marathon County survey records, section corners, and subdivision plats helps us complete projects efficiently and accurately.",
    ],
    localContext:
      "Wausau serves as the county seat and commercial hub of Marathon County, with a population of around 40,000 making it one of the larger cities in central Wisconsin. The area encompasses a mix of residential neighborhoods, commercial districts, industrial zones, and recreational land near Rib Mountain State Park and the Wisconsin River. Development activity in the Wausau metropolitan area — including surrounding communities like Weston, Schofield, Rothschild, Rib Mountain, and Kronenwetter — creates consistent demand for professional surveying services across all property types.",
    nearbyAreas: [
      "Weston",
      "Schofield",
      "Rib Mountain",
      "Rothschild",
      "Kronenwetter",
      "Marathon City",
      "Mosinee",
    ],
    topKeywords: [
      "land surveyor wausau wi",
      "land surveying wausau wi",
      "boundary survey wausau wi",
      "property survey wausau wi",
      "topographic survey wausau wi",
      "ALTA survey wausau wi",
    ],
    faqs: [
      {
        question: "How much does a land survey cost in Wausau, WI?",
        answer:
          "The cost of a land survey in Wausau depends on the type of survey needed, the size of the property, and availability of existing section corners and monuments. Contact Rutzen Survey Services for a free quote specific to your Wausau or Marathon County property.",
      },
      {
        question: "How long does a boundary survey take in the Wausau area?",
        answer:
          "Turnaround times vary based on project complexity and current workload. Simple residential boundary surveys may be completed within a few weeks from start to finished map delivery, while more complex projects may take longer. Contact us to discuss your specific timeline.",
      },
      {
        question:
          "Do I need a survey before buying property in Marathon County?",
        answer:
          "While not always legally required, a boundary survey is strongly recommended before purchasing any property in Marathon County. It can reveal encroachments, boundary discrepancies, or easements that may affect the use or value of your land and protect your investment.",
      },
      {
        question: "Does Rutzen Survey Services work in the Wausau area regularly?",
        answer:
          "Yes — we perform survey work throughout the Wausau metro area and Marathon County on a regular basis. Our familiarity with local records, section corners, and subdivision plats allows us to work efficiently on properties throughout the region.",
      },
    ],
  },
  {
    slug: "merrill-wi",
    city: "Merrill",
    state: "WI",
    county: "Lincoln County",
    metaTitle: "Land Surveyor Merrill, WI",
    metaDescription:
      "Licensed land surveying in Merrill, WI and Lincoln County. Boundary surveys, topographic surveys, land divisions & more from Rutzen Survey Services. Call (715) 891-0735 for a free quote.",
    h1: "Land Surveying Services in Merrill, WI",
    heroTagline: "Trusted Land Surveyors Serving Merrill & Lincoln County",
    introParas: [
      "Rutzen Survey Services provides professional land surveying throughout Merrill, WI and Lincoln County. Whether you're dealing with a rural parcel, a lakefront property, or a residential lot in town, our licensed surveyors bring the precision and local knowledge you need to move your project forward with confidence.",
      "Merrill's position as the county seat of Lincoln County makes it an important hub for land records and property transactions in the region. We work regularly with Lincoln County's survey records, section corner ties, and subdivision plats to deliver accurate boundary surveys, land divisions, and topographic surveys for clients throughout the area.",
      "The Lincoln County area offers a diverse mix of wooded rural tracts, agricultural parcels, lakefront and river properties, and residential development. Each property type presents unique surveying challenges — from riparian boundary considerations on waterfront land to monument recovery on large rural parcels — and our team has the experience to handle them all.",
    ],
    localContext:
      "Merrill is the county seat of Lincoln County, situated along the Wisconsin River in north-central Wisconsin. The area is characterized by a blend of agricultural land, timber properties, and recreational land near the many lakes and rivers of Lincoln County. Land transactions in the Merrill region often involve rural acreage, waterfront parcels, and wooded logging-access properties, each with its own unique surveying considerations. The natural beauty of Lincoln County's north woods landscape draws both permanent residents and recreational land buyers.",
    nearbyAreas: [
      "Tomahawk",
      "Wausau",
      "Rhinelander",
      "Antigo",
      "Gleason",
      "Irma",
    ],
    topKeywords: [
      "land surveyor merrill wi",
      "land surveying merrill wi",
      "boundary survey merrill wi",
      "property survey lincoln county wi",
      "land survey merrill wisconsin",
    ],
    faqs: [
      {
        question:
          "Can Rutzen Survey Services survey properties in Lincoln County?",
        answer:
          "Yes, we regularly perform land surveys throughout Lincoln County, including properties in and around Merrill. Our team is familiar with local county records and survey control in the area.",
      },
      {
        question:
          "Do you survey lakefront or waterfront properties near Merrill?",
        answer:
          "Absolutely. Waterfront and lakeshore property surveys require careful attention to shoreline boundaries and riparian rights. We have experience with waterfront parcels throughout Lincoln County and are familiar with the unique boundary considerations these properties present.",
      },
      {
        question:
          "What's the difference between a boundary survey and a topographic survey?",
        answer:
          "A boundary survey establishes and documents property lines, corners, and legal descriptions. A topographic survey maps the natural and man-made features and elevation changes across a property. Many land projects in the Merrill area benefit from one or both types — contact us to discuss what's right for your project.",
      },
      {
        question: "Can you help with a rural land division in Lincoln County?",
        answer:
          "Yes. Minor land divisions in Lincoln County require coordination with local governing authorities and preparation of a Certified Survey Map (CSM). We guide clients through the entire process, from initial planning to final approval.",
      },
    ],
  },
  {
    slug: "weston-wi",
    city: "Weston",
    state: "WI",
    county: "Marathon County",
    metaTitle: "Land Surveyor Weston, WI",
    metaDescription:
      "Professional land surveying in Weston, WI. Rutzen Survey Services offers boundary surveys, ALTA/NSPS surveys, topographic surveys & more for Marathon County. Call (715) 891-0735.",
    h1: "Land Surveying Services in Weston, WI",
    heroTagline: "Professional Surveying for Weston's Residential & Commercial Properties",
    introParas: [
      "As one of the fastest-growing communities in Marathon County, Weston, WI has become a hub for residential development, commercial construction, and active property transactions. Rutzen Survey Services provides land surveying solutions for homeowners, developers, businesses, and municipalities throughout the Weston area.",
      "Weston's well-developed commercial corridor along Rib Mountain Drive, County Road NN, and State Highway 29 creates consistent demand for ALTA/NSPS Land Title Surveys and topographic surveys to support commercial real estate closings and development projects. Our team is experienced with both the commercial and residential survey needs that come with Weston's active real estate market.",
      "Whether you need a boundary survey for a residential property purchase, a Certified Survey Map for a land division, or a full ALTA/NSPS survey for a commercial transaction, Rutzen Survey Services delivers accurate results you can trust. We're familiar with Marathon County's records and Weston's subdivision plats, which means your project moves forward without unnecessary delays.",
    ],
    localContext:
      "Weston is a village in Marathon County directly adjacent to the city of Wausau, functioning as one of the Wausau metro area's primary commercial and residential growth centers. The community has experienced significant commercial development — including major retail, healthcare, and hospitality uses — particularly along its main corridors. As development and property transactions continue at a steady pace, demand for accurate land surveys for subdivision, commercial construction, and real estate due diligence remains high throughout Weston.",
    nearbyAreas: [
      "Wausau",
      "Schofield",
      "Rib Mountain",
      "Rothschild",
      "Kronenwetter",
      "Mosinee",
    ],
    topKeywords: [
      "land surveyor weston wi",
      "land surveying weston wi",
      "boundary survey weston wi",
      "ALTA survey weston wi",
      "property survey marathon county wi",
    ],
    faqs: [
      {
        question: "Do you perform ALTA surveys for commercial closings in Weston?",
        answer:
          "Yes. ALTA/NSPS Land Title Surveys are commonly required for commercial real estate transactions in Weston's active commercial corridors. We work with lenders, title companies, and attorneys to deliver compliant ALTA surveys on schedule.",
      },
      {
        question: "I'm buying a home in Weston — do I need a boundary survey?",
        answer:
          "A boundary survey is strongly recommended before purchasing property in Weston or anywhere in Marathon County. It establishes the legal location of your property lines, identifies any encroachments, and gives you confidence in what you're buying.",
      },
      {
        question:
          "Can you prepare a Certified Survey Map for a land division in Weston?",
        answer:
          "Yes. Minor land divisions in Weston require a Certified Survey Map (CSM) and review by the village and Marathon County. We prepare the CSM and guide clients through the approval process from start to finish.",
      },
    ],
  },
  {
    slug: "mosinee-wi",
    city: "Mosinee",
    state: "WI",
    county: "Marathon County",
    metaTitle: "Land Surveyor Mosinee, WI",
    metaDescription:
      "Licensed land surveying in Mosinee, WI. Boundary surveys, topographic surveys, ALTA surveys & land divisions for Marathon County. Call Rutzen Survey at (715) 891-0735.",
    h1: "Land Surveying Services in Mosinee, WI",
    heroTagline: "Experienced Land Surveyors Serving Mosinee & Surrounding Areas",
    introParas: [
      "Rutzen Survey Services provides professional land surveying for residential, commercial, and industrial properties throughout Mosinee, WI and the surrounding Marathon County area. Whether you're involved in a real estate transaction, a development project, or need to settle a property boundary question, our licensed surveyors are here to help.",
      "Mosinee sits at an important crossroads in central Wisconsin, home to Central Wisconsin Airport and significant industrial and manufacturing facilities along the Wisconsin River corridor. Properties in and around Mosinee range from industrial parcels near the airport and Highway 51 to residential neighborhoods and rural acreage — each presenting its own distinct surveying requirements.",
      "Our team is well-versed in Marathon County's survey records, section corner network, and local plat history. That local knowledge helps us work efficiently and deliver accurate, reliable surveys for every Mosinee-area project.",
    ],
    localContext:
      "Mosinee is a city in Marathon County located along the Wisconsin River, south of Wausau and north of Stevens Point along the Highway 51 corridor. Central Wisconsin Airport serves the broader Wausau metro area from Mosinee, and the city is home to several significant industrial and paper-related facilities. Property types in the Mosinee area range from industrial and commercial parcels along the highway corridor to residential neighborhoods and rural agricultural land in the surrounding townships.",
    nearbyAreas: [
      "Wausau",
      "Weston",
      "Kronenwetter",
      "Junction City",
      "Rothschild",
      "Stevens Point",
    ],
    topKeywords: [
      "land surveyor mosinee wi",
      "land surveying mosinee wi",
      "boundary survey mosinee wi",
      "property survey mosinee wisconsin",
      "land survey marathon county",
    ],
    faqs: [
      {
        question:
          "Do you survey industrial and commercial properties near Mosinee's airport corridor?",
        answer:
          "Yes. We survey all types of commercial and industrial properties in the Mosinee area, including those near Central Wisconsin Airport and along the Highway 51 corridor. Commercial transactions in these areas often require ALTA/NSPS surveys.",
      },
      {
        question: "Can you survey rural agricultural land near Mosinee?",
        answer:
          "Absolutely. Rural and agricultural parcel surveys make up a significant part of our work throughout Marathon County. We're experienced with large rural tracts, including those with limited existing monuments or challenging terrain.",
      },
      {
        question:
          "How do I know if a boundary survey is needed before I build in Mosinee?",
        answer:
          "In most cases, a boundary survey is required or strongly advisable before any construction or site development in Mosinee. It establishes the legal location of your property lines and helps you avoid costly encroachment issues or setback violations.",
      },
    ],
  },
  {
    slug: "junction-city-wi",
    city: "Junction City",
    state: "WI",
    county: "Portage County",
    metaTitle: "Land Surveyor Junction City, WI",
    metaDescription:
      "Rutzen Survey Services is based in Junction City, WI. Licensed land surveying for Portage County and all of central Wisconsin. Call (715) 891-0735 for a free quote.",
    h1: "Land Surveying in Junction City, WI — Our Home Base",
    heroTagline: "Your Local Land Surveyor — Based Right in Junction City, WI",
    introParas: [
      "Rutzen Survey Services is proud to call Junction City, Wisconsin home. Located at 4340 Pine Road in Portage County, we are a locally owned and operated land surveying firm serving clients throughout central Wisconsin — and our neighbors right here in Junction City are always our closest priority.",
      "As a Junction City-based surveyor, we have deep familiarity with Portage County's survey records, rural parcel characteristics, agricultural land patterns, and the unique characteristics of properties along Highway 10 and the surrounding townships. Whether you're a neighbor down the road or a client from across the county, you can count on us for honest, professional, and accurate surveying.",
      "Our central Wisconsin location allows us to efficiently serve communities from Plover and Stevens Point to Wisconsin Rapids and Wausau — while remaining grounded in the community we're proud to call home. When you work with Rutzen Survey Services, you're working with a surveyor who has a genuine personal stake in the quality of work done right here in Portage County.",
    ],
    localContext:
      "Junction City is a small community in Portage County, Wisconsin, located along Highway 10 in the heart of central Wisconsin. The surrounding landscape is characterized by agricultural land, wooded rural parcels, and small residential properties. Portage County's active land market — from farm ground and hunting parcels to residential lots and small acreage tracts — creates steady demand for professional surveying services in the area. As the local surveyor, Rutzen Survey Services is uniquely positioned to serve Junction City and the surrounding townships quickly and efficiently.",
    nearbyAreas: [
      "Stevens Point",
      "Plover",
      "Amherst",
      "Rosholt",
      "Mosinee",
      "Wisconsin Rapids",
    ],
    topKeywords: [
      "land surveyor junction city wi",
      "land surveying junction city wi",
      "land surveyor portage county wi",
      "boundary survey portage county wi",
      "local land surveyor central wisconsin",
    ],
    faqs: [
      {
        question: "Is Rutzen Survey Services located in Junction City?",
        answer:
          "Yes! We are based at 4340 Pine Road in Junction City, WI 54443. As your truly local surveyor, we take pride in serving our own community and the surrounding region of central Wisconsin.",
      },
      {
        question:
          "Do you work on agricultural land and rural parcels in Portage County?",
        answer:
          "Yes — rural and agricultural land makes up a significant portion of our work in the Junction City area and throughout Portage County. We're experienced with rural parcel boundaries, access easements, farm land divisions, and preparation for land sales.",
      },
      {
        question:
          "How quickly can you respond to survey requests near Junction City?",
        answer:
          "Because we're based right here in Junction City, we can often respond to inquiries and begin fieldwork more quickly on nearby properties than surveyors located further away. Contact us to discuss your timeline and we'll work to accommodate your schedule.",
      },
      {
        question:
          "What surveying services do you provide in Portage County?",
        answer:
          "We provide the full range of surveying services throughout Portage County, including boundary surveys, minor land divisions (Certified Survey Maps), topographic surveys, ALTA/NSPS Land Title Surveys, consulting, and custom mapping. Contact us for a free quote.",
      },
    ],
  },
  {
    slug: "marshfield-wi",
    city: "Marshfield",
    state: "WI",
    county: "Wood & Marathon County",
    metaTitle: "Land Surveyor Marshfield, WI",
    metaDescription:
      "Professional land surveying in Marshfield, WI. Boundary surveys, ALTA surveys, topographic surveys & land divisions for Wood & Marathon County. Call (715) 891-0735.",
    h1: "Land Surveying Services in Marshfield, WI",
    heroTagline: "Reliable Land Surveying for Marshfield & Wood County",
    introParas: [
      "Rutzen Survey Services provides comprehensive land surveying for residential, commercial, and institutional property owners throughout Marshfield, WI. As a major medical and commercial hub in central Wisconsin, Marshfield presents a diverse range of surveying needs — from commercial real estate due diligence for the area's active healthcare and business sector to residential boundary surveys and land divisions.",
      "Marshfield's unique position straddling the Wood-Marathon county line adds a layer of complexity to land projects in the area. Our team understands how to navigate properties in both counties, coordinate with both Wood County and Marathon County records, and deliver surveys that meet Wisconsin's minimum standards regardless of which side of the line your property falls on.",
      "Whether you're a homeowner, a developer, an attorney handling a commercial closing near Marshfield Clinic, or an engineer planning a new site, Rutzen Survey Services has the experience and local knowledge to get your Marshfield-area project completed accurately and efficiently.",
    ],
    localContext:
      "Marshfield is a city in central Wisconsin that lies primarily in Wood County but extends into Marathon County, serving as a regional center for healthcare, commerce, and education. The Marshfield Clinic Health System anchors a strong healthcare economy that drives consistent commercial and institutional real estate activity. The city's robust real estate market encompasses commercial properties along the Highway 10 and Highway 13 corridors, established residential neighborhoods, and surrounding rural and agricultural land.",
    nearbyAreas: [
      "Wisconsin Rapids",
      "Wausau",
      "Spencer",
      "Stratford",
      "Auburndale",
      "Milladore",
    ],
    topKeywords: [
      "land surveyor marshfield wi",
      "land surveying marshfield wi",
      "boundary survey marshfield wi",
      "ALTA survey marshfield wi",
      "property survey wood county wi",
    ],
    faqs: [
      {
        question:
          "Can you survey properties that cross the Wood-Marathon county line near Marshfield?",
        answer:
          "Yes. Split-county properties require coordination with records from both counties, and our team is experienced with this. We handle the research and field work needed for an accurate survey regardless of which county or counties your property falls in.",
      },
      {
        question:
          "Do you perform ALTA surveys for commercial properties in Marshfield?",
        answer:
          "Yes, we regularly perform ALTA/NSPS Land Title Surveys for commercial property transactions in Marshfield. These surveys meet the requirements of lenders, title companies, and attorneys involved in commercial real estate closings throughout the area.",
      },
      {
        question:
          "How do I find out where my property lines are in Marshfield?",
        answer:
          "The most reliable way to determine where your property lines are legally located is to have a licensed surveyor perform a boundary survey. We research existing county records and deeds, locate existing monuments in the field, and prepare a certified survey map showing your property's boundaries.",
      },
    ],
  },
  {
    slug: "wisconsin-rapids-wi",
    city: "Wisconsin Rapids",
    state: "WI",
    county: "Wood County",
    metaTitle: "Land Surveyor Wisconsin Rapids, WI",
    metaDescription:
      "Licensed land surveying in Wisconsin Rapids, WI. Boundary surveys, ALTA surveys, topographic surveys & more for Wood County. Call Rutzen Survey at (715) 891-0735.",
    h1: "Land Surveying Services in Wisconsin Rapids, WI",
    heroTagline: "Experienced Surveyors Serving Wisconsin Rapids & Wood County",
    introParas: [
      "Rutzen Survey Services provides professional land surveying for property owners, businesses, and developers throughout Wisconsin Rapids, WI and the broader Wood County area. From residential boundary surveys to commercial ALTA/NSPS surveys for Wisconsin Rapids' active real estate market, our team delivers precise, reliable results you can depend on.",
      "Wisconsin Rapids is Wood County's largest city and serves as the regional hub for commerce, healthcare, and local government in the area. The city's mix of established residential neighborhoods, commercial properties along the Business Highway 54 corridor, and industrial land along the Wisconsin River creates consistent and diverse demand for professional surveying services.",
      "Our surveyors are experienced with Wood County's survey records, section corner network, and subdivision plat history. That local knowledge translates directly into efficient, accurate survey work throughout the Wisconsin Rapids area — keeping your project on time and on budget.",
    ],
    localContext:
      "Wisconsin Rapids is the county seat of Wood County and the largest city in the county. The Wisconsin River runs through the city, and the area's economy includes strong manufacturing, healthcare, retail, and agricultural sectors. The city serves as a commercial and civic anchor for a broad region of Wood County, and a steady real estate market in both commercial and residential properties keeps demand for land surveying services consistent throughout the Wisconsin Rapids area.",
    nearbyAreas: [
      "Marshfield",
      "Stevens Point",
      "Plover",
      "Nekoosa",
      "Port Edwards",
      "Biron",
    ],
    topKeywords: [
      "land surveyor wisconsin rapids wi",
      "land surveying wisconsin rapids wi",
      "boundary survey wisconsin rapids wi",
      "property survey wood county wi",
      "ALTA survey wisconsin rapids wi",
    ],
    faqs: [
      {
        question: "Does Rutzen Survey work in Wood County regularly?",
        answer:
          "Yes — Wood County is part of our core central Wisconsin service area. We regularly survey properties in Wisconsin Rapids and throughout Wood County, and are familiar with local county records and survey monuments.",
      },
      {
        question:
          "I need a boundary survey on a property near the Wisconsin River. Can you help?",
        answer:
          "Absolutely. Waterfront and riparian properties present unique boundary considerations related to the ordinary high water mark and changing river conditions. We have experience surveying properties along the Wisconsin River and other waterways in the region.",
      },
      {
        question:
          "What do I need for a land division in Wood County?",
        answer:
          "Minor land divisions in Wood County typically require a Certified Survey Map (CSM) prepared by a licensed surveyor, followed by review and approval by the county and the local municipality. We handle the survey work and guide you through the review process.",
      },
    ],
  },
  {
    slug: "stevens-point-wi",
    city: "Stevens Point",
    state: "WI",
    county: "Portage County",
    metaTitle: "Land Surveyor Stevens Point, WI",
    metaDescription:
      "Professional land surveying in Stevens Point, WI. Boundary surveys, topographic surveys, ALTA surveys & land divisions for Portage County. Call (715) 891-0735.",
    h1: "Land Surveying Services in Stevens Point, WI",
    heroTagline: "Professional Surveyors for Stevens Point & Portage County",
    introParas: [
      "Rutzen Survey Services provides land surveying for homeowners, businesses, and developers throughout Stevens Point, WI and Portage County. As the county seat of Portage County and home to the University of Wisconsin-Stevens Point, the city supports a diverse and active real estate market that requires professional survey services across all property types.",
      "From residential boundary surveys in established Stevens Point neighborhoods to commercial ALTA surveys for downtown and Highway 10 corridor transactions — and from topographic surveys for new construction to land divisions on the city's growing outskirts — our team is equipped to handle the full range of surveying needs in the Stevens Point area.",
      "As a Portage County-based business headquartered in nearby Junction City, Rutzen Survey Services has particularly strong familiarity with Portage County's survey records, section corner network, and local plat books. That local presence translates to faster response times and a deeper understanding of properties throughout the Stevens Point area.",
    ],
    localContext:
      "Stevens Point is the county seat of Portage County and home to the University of Wisconsin-Stevens Point, one of the UW System's flagship institutions. The city sits along the Wisconsin River and serves as a regional center for education, healthcare, and commerce. Property development and real estate activity are steady throughout the Stevens Point metro area, driven by the university's presence, healthcare sector growth, and the city's role as a regional hub. Surrounding communities of Plover, Whiting, and Amherst add further depth to the area's real estate market.",
    nearbyAreas: [
      "Plover",
      "Whiting",
      "Junction City",
      "Amherst",
      "Rosholt",
      "Wausau",
    ],
    topKeywords: [
      "land surveyor stevens point wi",
      "land surveying stevens point wi",
      "boundary survey stevens point wi",
      "property survey portage county wi",
      "topographic survey stevens point wi",
    ],
    faqs: [
      {
        question: "Are you familiar with Portage County survey records?",
        answer:
          "Yes — as a Portage County-based company headquartered in Junction City, we work with Portage County's register of deeds, survey monuments, and plat history on a regular basis. That local familiarity helps us deliver accurate, efficient surveys throughout the Stevens Point area.",
      },
      {
        question:
          "Do you survey properties near the University of Wisconsin-Stevens Point?",
        answer:
          "We survey all types of residential and commercial properties throughout Stevens Point, including in neighborhoods near the UWSP campus. Our boundary surveys accurately document property lines for any type of property in the area.",
      },
      {
        question: "Can you help with a land division in Portage County?",
        answer:
          "Yes — minor land divisions in Portage County require preparation of a Certified Survey Map (CSM) by a licensed surveyor and coordination with county review requirements. We guide clients through the entire process from initial consultation to final approval.",
      },
      {
        question:
          "I have a commercial property transaction in Stevens Point — do I need an ALTA survey?",
        answer:
          "ALTA/NSPS Land Title Surveys are commonly required by lenders and title companies for commercial real estate transactions. If your lender or attorney has requested one, or if you're purchasing a commercial property, contact us to discuss your ALTA survey needs.",
      },
    ],
  },
  {
    slug: "plover-wi",
    city: "Plover",
    state: "WI",
    county: "Portage County",
    metaTitle: "Land Surveyor Plover, WI",
    metaDescription:
      "Licensed land surveying in Plover, WI. Boundary surveys, ALTA surveys, topographic surveys & more for Portage County. Call Rutzen Survey Services at (715) 891-0735.",
    h1: "Land Surveying Services in Plover, WI",
    heroTagline: "Trusted Land Surveyors for Plover's Growing Community",
    introParas: [
      "Plover, WI is one of central Wisconsin's fastest-growing communities, and with that growth comes significant demand for professional land surveying at every stage of development. Rutzen Survey Services provides boundary surveys, ALTA/NSPS land title surveys, topographic surveys, and more for residential and commercial property owners throughout Plover and Portage County.",
      "The commercial and residential development that has transformed Plover's Highway 51 corridor, Interstate 39, and adjacent neighborhoods requires accurate survey work from site selection through final platting and construction. Our team understands the pace and precision that active development projects demand, and we deliver results that keep your project moving forward.",
      "Whether you're closing on a commercial property along Plover's retail corridor, planning a residential subdivision, or simply need to know exactly where your property lines are located, Rutzen Survey Services brings the experience and local knowledge to get the job done right.",
    ],
    localContext:
      "Plover is a village in Portage County that has experienced rapid growth alongside Stevens Point, largely driven by retail, commercial, and residential development along the Highway 51 and Interstate 39 corridors. The area has become one of the primary commercial destinations for central Wisconsin, and ongoing growth in new residential neighborhoods and commercial projects creates consistent demand for all types of land surveying services.",
    nearbyAreas: [
      "Stevens Point",
      "Whiting",
      "Junction City",
      "Amherst",
      "Rosholt",
      "Almond",
    ],
    topKeywords: [
      "land surveyor plover wi",
      "land surveying plover wi",
      "boundary survey plover wi",
      "property survey plover wisconsin",
      "ALTA survey plover wi",
    ],
    faqs: [
      {
        question:
          "Do you survey commercial properties along the Highway 51 corridor in Plover?",
        answer:
          "Yes — commercial properties along Plover's Highway 51 and I-39 corridors frequently require ALTA/NSPS Land Title Surveys for real estate transactions. We have substantial experience with commercial surveys throughout the Plover area and work directly with lenders and attorneys.",
      },
      {
        question:
          "My neighbor's fence seems to cross onto my property in Plover. Can a survey help?",
        answer:
          "Yes. A boundary survey will establish the legal location of your property lines and document any encroachments. This is typically the first step in resolving a fence line or boundary dispute, and having a certified survey map gives you a reliable basis for any subsequent conversations or legal proceedings.",
      },
      {
        question:
          "Do you work on new residential development projects in Plover?",
        answer:
          "Yes. We work on both the residential and commercial development sides of Plover's active real estate market. From topographic surveys for site planning to boundary surveys for individual lot closings, we provide the survey services that development projects need.",
      },
    ],
  },
  {
    slug: "rosholt-wi",
    city: "Rosholt",
    state: "WI",
    county: "Portage County",
    metaTitle: "Land Surveyor Rosholt, WI",
    metaDescription:
      "Professional land surveying in Rosholt, WI and rural Portage County. Boundary surveys, land divisions & more from Rutzen Survey Services. Call (715) 891-0735.",
    h1: "Land Surveying Services in Rosholt, WI",
    heroTagline: "Local Land Surveying for Rosholt & Rural Portage County",
    introParas: [
      "Rutzen Survey Services provides professional land surveying for rural and residential property owners in Rosholt, WI and the surrounding Portage County townships. Our team understands the unique characteristics of rural central Wisconsin land — from agricultural parcels and wooded tracts to small residential lots — and delivers accurate, reliable survey results every time.",
      "In rural areas like Rosholt, survey work often involves larger tracts with limited existing monumentation, requiring thorough field research and careful monument recovery. Our experience with the Public Land Survey System (PLSS) network in Portage County helps us establish accurate, defensible boundaries even on undeveloped rural parcels with minimal prior survey history.",
      "Whether you're dividing land for family members, resolving a boundary question with a neighbor, or preparing a rural parcel for sale, Rutzen Survey Services is here to help Rosholt-area clients navigate the surveying process with clarity and confidence.",
    ],
    localContext:
      "Rosholt is a small village in Portage County set within an agricultural and wooded rural landscape in central Wisconsin. Properties in and around Rosholt typically consist of agricultural parcels, wooded recreational tracts, and small residential lots. Survey needs in this area often center around boundary documentation for agricultural land, rural land divisions for family transfers or sales, and preparation of parcels for land transactions. The area's rural character means our team's experience with large tract surveys and PLSS corner recovery is particularly valuable for local landowners.",
    nearbyAreas: [
      "Stevens Point",
      "Plover",
      "Junction City",
      "Amherst",
      "Wautoma",
      "Wausau",
    ],
    topKeywords: [
      "land surveyor rosholt wi",
      "land surveying rosholt wi",
      "boundary survey rosholt wi",
      "rural land survey portage county wi",
      "land surveyor portage county",
    ],
    faqs: [
      {
        question: "Can you survey rural agricultural land near Rosholt?",
        answer:
          "Yes — agricultural and rural parcel surveys are a common part of our work in Portage County. We're experienced with large rural tracts and the challenges that come with them, including limited existing monuments, wooded terrain, and the need for careful PLSS corner research and recovery.",
      },
      {
        question:
          "Do you help with rural land divisions in Portage County?",
        answer:
          "Yes. Whether you're dividing a farm parcel for a family transfer, splitting off a building lot, or reconfiguring rural land holdings, we can prepare a Certified Survey Map (CSM) and guide you through the Portage County review and approval process.",
      },
      {
        question:
          "How do surveys work on large wooded or undeveloped parcels near Rosholt?",
        answer:
          "Surveying large wooded or undeveloped rural parcels requires locating existing section corners, recovering or setting monuments, and carefully researching historical deed and survey records. Our team has extensive experience with exactly this type of work throughout Portage County.",
      },
    ],
  },
]

export const locationsBySlug = Object.fromEntries(
  locations.map((loc) => [loc.slug, loc])
) as Record<string, Location>

