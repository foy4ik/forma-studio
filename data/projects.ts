import { localImage } from "@/lib/images";

export type ProjectCategory = "apartments" | "houses" | "offices";

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  apartments: "Apartments",
  houses: "Houses",
  offices: "Offices",
};

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  area: string;
  type: string;
  summary: string;
  description: string[];
  cover: string;
  gallery: string[];
  materials: string[];
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "linden-loft",
    title: "Linden Loft",
    category: "apartments",
    location: "Berlin, Germany",
    year: 2024,
    area: "132 m²",
    type: "Apartment renovation",
    summary: "A raw industrial loft reworked into a quiet, light-filled home.",
    description: [
      "Linden Loft began as an unconverted top-floor unit above a former textile works — tall windows, exposed beams, and almost no interior walls. Rather than dividing the space into conventional rooms, we let the existing structure set the rhythm and inserted a single freestanding volume to hold the bedroom and bathroom.",
      "Everything else stays open: a long kitchen counter in blackened steel, a sunken lounge facing the western light, and a study tucked behind a fluted-glass screen. The material palette is deliberately restrained — white oak, lime plaster, and brushed brass — so the architecture of the building remains the loudest voice in the room.",
    ],
    cover: localImage("1600585154340-be6161a56a0c"),
    gallery: [
      localImage("1600210492486-724fe5c67fb0"),
      localImage("1600607687939-ce8a6c25118c"),
      localImage("1600566753190-17f0baa2a6c3"),
      localImage("1600121848594-d8644e57abab"),
      localImage("1560448204-e02f11c3d0e2"),
    ],
    materials: [
      "White oak flooring",
      "Lime-washed plaster walls",
      "Blackened steel joinery",
      "Brushed brass fixtures",
      "Fluted glass partitions",
    ],
    featured: true,
  },
  {
    slug: "meridian-apartment",
    title: "Meridian Apartment",
    category: "apartments",
    location: "Lisbon, Portugal",
    year: 2023,
    area: "96 m²",
    type: "Full apartment renovation",
    summary: "A compact hillside apartment opened up to catch the river light.",
    description: [
      "This fourth-floor apartment in Alfama had good bones and a remarkable view it never used — small, shuttered windows kept the river hidden and the rooms dark. We removed a run of non-structural walls, widened two window openings within the limits of the historic façade, and let the plan breathe around a single terrazzo-topped island.",
      "Warm plaster, waxed clay tile, and cane-webbed cabinetry nod to the building's age without imitating it. The result reads as unmistakably new, but it never feels like it's arguing with the apartment it came from.",
    ],
    cover: localImage("1616486338812-3dadae4b4ace"),
    gallery: [
      localImage("1618221195710-dd6b41faaea6"),
      localImage("1600489000022-c2086d79f9d4"),
      localImage("1615873968403-89e068629265"),
      localImage("1519710164239-da123dc03ef4"),
      localImage("1524758631624-e2822e304c36"),
    ],
    materials: [
      "Terrazzo countertops",
      "Waxed clay floor tile",
      "Cane-webbed cabinetry",
      "Tadelakt plaster",
      "Reclaimed pine beams",
    ],
    featured: true,
  },
  {
    slug: "attic-study",
    title: "The Attic Study",
    category: "apartments",
    location: "Copenhagen, Denmark",
    year: 2022,
    area: "74 m²",
    type: "Apartment interior",
    summary: "A pitched-roof attic turned into a study-led one-bedroom home.",
    description: [
      "A small footprint under a steep pitched roof meant every centimetre had to earn its place. We built the storage into the roofline itself — a run of shallow oak cabinetry that follows the slope from floor to ridge — freeing the centre of each room for living.",
      "Because the client works from home, the desk isn't an afterthought in a corner; it's the anchor of the plan, set beneath the largest dormer with views over the rooftops. The rest of the apartment is quiet in comparison: a neutral palette that lets the daylight and the joinery do the talking.",
    ],
    cover: localImage("1502672260266-1c1ef2d93688"),
    gallery: [
      localImage("1497366216548-37526070297c"),
      localImage("1449247709967-d4461a6a6103"),
      localImage("1554995207-c18c203602cb"),
      localImage("1521783988139-89397d761dce"),
      localImage("1615529182904-14819c35db37"),
    ],
    materials: [
      "Solid oak built-ins",
      "Limewash walls",
      "Wool-blend upholstery",
      "Blackened steel hardware",
      "Linen roller shades",
    ],
  },
  {
    slug: "willow-house",
    title: "Willow House",
    category: "houses",
    location: "Provence, France",
    year: 2024,
    area: "310 m²",
    type: "New-build private house",
    summary: "A new single-storey house planned around a row of existing willows.",
    description: [
      "The brief was simple and unusual: don't touch the willows. The house is arranged as a shallow L around the trees, with the living wing oriented to the morning sun and the bedroom wing turned away from the lane. Deep eaves keep the summer glare off the glazing while letting the low winter sun reach in.",
      "Inside, rendered walls and a travertine floor run continuously from the entrance to the garden, blurring the line between inside and out. Furniture is kept low and set back from the windows, so the trees stay the focal point of every room.",
    ],
    cover: localImage("1600210492493-0946911123ea"),
    gallery: [
      localImage("1584622650111-993a426fbf0a"),
      localImage("1600566753086-00f18fb6b3ea"),
      localImage("1497366811353-6870744d04b2"),
      localImage("1497215728101-856f4ea42174"),
      localImage("1560185127-6ed189bf02f4"),
    ],
    materials: [
      "Honed travertine flooring",
      "Lime render, exterior and interior",
      "Douglas fir ceilings",
      "Bouclé upholstery",
      "Blackened steel window frames",
    ],
    featured: true,
  },
  {
    slug: "stone-ridge-residence",
    title: "Stone Ridge Residence",
    category: "houses",
    location: "Lake Como, Italy",
    year: 2023,
    area: "420 m²",
    type: "Private house renovation",
    summary: "A stone farmhouse restored and extended along the original terraces.",
    description: [
      "Stone Ridge was a partially collapsed farmhouse on three levels of terraced land above the lake. The renovation kept the original stone shell almost untouched from the outside, while the interior was rebuilt entirely — new floor plates, a restrained material palette, and a full-height window at the stair that frames the water.",
      "A low stone extension holds the kitchen and opens directly onto the lowest terrace, so the house reads as something that grew out of the hillside rather than something placed onto it.",
    ],
    cover: localImage("1519974719765-e6559eac2575"),
    gallery: [
      localImage("1512918728675-ed5a9ecdebfd"),
      localImage("1484154218962-a197022b5858"),
      localImage("1600210491369-e753d80a41f3"),
      localImage("1600607688969-a5bfcd646154"),
      localImage("1600585152220-90363fe7e115"),
    ],
    materials: [
      "Local stone masonry, restored",
      "Wide-plank walnut flooring",
      "Plaster and microcement walls",
      "Wrought-iron balustrades",
      "Linen and raw silk textiles",
    ],
  },
  {
    slug: "casa-alba",
    title: "Casa Alba",
    category: "houses",
    location: "Mallorca, Spain",
    year: 2022,
    area: "260 m²",
    type: "Private house interior",
    summary: "A whitewashed courtyard house reinterpreted for year-round living.",
    description: [
      "Casa Alba is a traditional finca reworked as a full-time home rather than a summer retreat. The courtyard, previously an afterthought, became the organising space of the house — every room now opens onto it, and a single olive tree at its centre is visible from the kitchen, the hall, and the main bedroom.",
      "We kept the thick original walls and small deep-set windows, which do most of the cooling work in summer, and added underfloor heating and generous curtains for the cooler months. The furniture is a mix of new pieces and restored local antiques.",
    ],
    cover: localImage("1600607688066-890987f18a86"),
    gallery: [
      localImage("1600047509807-ba8f99d2cdde"),
      localImage("1600566752355-35792bedcfea"),
      localImage("1567767292278-a4f21aa2d36e"),
      localImage("1616137466211-f939a420be84"),
      localImage("1560184611-ff3e53f00e8f"),
    ],
    materials: [
      "Lime-washed masonry walls",
      "Reclaimed terracotta flooring",
      "Rattan and rush seating",
      "Raw linen upholstery",
      "Hand-forged iron fixtures",
    ],
  },
  {
    slug: "aster-co-studio",
    title: "Aster & Co. Studio",
    category: "offices",
    location: "Amsterdam, Netherlands",
    year: 2024,
    area: "540 m²",
    type: "Office interior",
    summary: "A canal-house office fit-out for a twenty-person design studio.",
    description: [
      "Spread across three linked canal houses, Aster & Co.'s studio needed to unify a fragmented floor plan without erasing the character of the original buildings. We used a single continuous flooring material and a consistent joinery language to tie the houses together, while leaving the ceiling heights, window proportions, and stairwells of each building untouched.",
      "Desks sit in the quieter, north-facing rooms; the client-facing spaces take the canal-side rooms with the best light. A material library and mock-up wall in the basement doubles as a meeting space, which turned out to be the room the whole studio uses the most.",
    ],
    cover: localImage("1560448075-bb485b067938"),
    gallery: [
      localImage("1600585154526-990dced4db0d"),
      localImage("1583847268964-b28dc8f51f92"),
      localImage("1600585154340-be6161a56a0c"),
      localImage("1600210492486-724fe5c67fb0"),
      localImage("1600607687939-ce8a6c25118c"),
    ],
    materials: [
      "Poured microcement flooring",
      "Powder-coated steel shelving",
      "Reclaimed brick, exposed",
      "Wool felt acoustic panelling",
      "Ash veneer joinery",
    ],
    featured: true,
  },
  {
    slug: "northbank-office",
    title: "Northbank Office",
    category: "offices",
    location: "London, United Kingdom",
    year: 2023,
    area: "680 m²",
    type: "Workplace design",
    summary: "A full floor fit-out balancing focus work with informal gathering.",
    description: [
      "Northbank occupies a full floor of a 1980s office building with a deep, awkward floor plate and limited access to the perimeter windows. We pulled all enclosed rooms — calls, focus booths, storage — into a central spine, leaving an unbroken ring of daylight-lit desks and informal seating around the outside.",
      "The material palette is warmer than the building's original shell: cork flooring underfoot, timber slat ceilings overhead, and a consistent set of textiles across every seating area so the many different room types still read as one place.",
    ],
    cover: localImage("1600566753190-17f0baa2a6c3"),
    gallery: [
      localImage("1600121848594-d8644e57abab"),
      localImage("1560448204-e02f11c3d0e2"),
      localImage("1616486338812-3dadae4b4ace"),
      localImage("1618221195710-dd6b41faaea6"),
      localImage("1600489000022-c2086d79f9d4"),
    ],
    materials: [
      "Cork flooring",
      "Timber slat ceiling",
      "Powder-coated steel furniture frames",
      "Recycled wool textiles",
      "Frosted glass partitioning",
    ],
  },
  {
    slug: "harbor-view-practice",
    title: "Harbor View Practice",
    category: "offices",
    location: "Rotterdam, Netherlands",
    year: 2021,
    area: "410 m²",
    type: "Office renovation",
    summary: "A former harbour warehouse converted into a legal practice's office.",
    description: [
      "This former harbour warehouse retained its full-height windows and steel roof trusses, which became the starting point for the renovation rather than something to disguise. Partner offices sit in a low, freestanding row of rooms in the centre of the floor, leaving the perimeter open for shared desks and a long meeting table facing the water.",
      "New elements — the reception desk, the internal glazing, the light fittings — are all finished in a single dark bronze so they read as one considered layer against the original steel and brick.",
    ],
    cover: localImage("1615873968403-89e068629265"),
    gallery: [
      localImage("1519710164239-da123dc03ef4"),
      localImage("1524758631624-e2822e304c36"),
      localImage("1502672260266-1c1ef2d93688"),
      localImage("1497366216548-37526070297c"),
      localImage("1449247709967-d4461a6a6103"),
    ],
    materials: [
      "Original steel roof trusses, restored",
      "Bronze-finished metalwork",
      "Polished concrete flooring",
      "Reclaimed brick walls",
      "Internal glazing with steel frames",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 4): Project[] {
  const featured = PROJECTS.filter((project) => project.featured);
  return (featured.length ? featured : PROJECTS).slice(0, limit);
}

export function getRelatedProjects(project: Project, limit = 3): Project[] {
  const sameCategory = PROJECTS.filter(
    (candidate) => candidate.category === project.category && candidate.slug !== project.slug
  );
  const others = PROJECTS.filter(
    (candidate) => candidate.category !== project.category && candidate.slug !== project.slug
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getAdjacentProjects(project: Project): {
  previous: Project;
  next: Project;
} {
  const index = PROJECTS.findIndex((candidate) => candidate.slug === project.slug);
  const previous = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  return { previous, next };
}
