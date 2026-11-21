// =========================================================
// VOLT X — 25-SHOE MULTI-BRAND & THREE.JS 3D PLATFORM
// Pure HTML5, CSS3, Vanilla JavaScript & Three.js
// =========================================================

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const IMG = {
  heroVolt: '/src/assets/images/voltx_hero_shoe_1795258532995.jpg',
  voltPro: '/src/assets/images/voltx_pro_1795258533150.jpg',
  voltAir: '/src/assets/images/voltx_air_1795258533592.jpg',
  voltStreet: '/src/assets/images/voltx_street_1795258533284.jpg',
  voltRunner: '/src/assets/images/voltx_runner_1795258532574.jpg',
  cobaltVel: '/src/assets/images/shoe_cobalt_velocity_1795258657382.jpg',
  crimsonCourt: '/src/assets/images/shoe_crimson_court_1795258657255.jpg',
  nitroLime: '/src/assets/images/shoe_nitro_lime_1795258656891.jpg',
  tripleBlack: '/src/assets/images/shoe_triple_black_trainer_1795258656480.jpg',
  emeraldCross: '/src/assets/images/shoe_emerald_cross_1795258655789.jpg',
  highFlight: '/src/assets/images/shoe_high_top_flight_1795258656528.jpg',
  silverCyber: '/src/assets/images/shoe_silver_cyber_run_1795258656272.jpg',
  aeroRunner: '/src/assets/images/shoe_aero_runner_1795258117749.jpg',
  obsidianKnit: '/src/assets/images/shoe_obsidian_knit_1795258119246.jpg',
  courtLeather: '/src/assets/images/shoe_court_leather_1795258119656.jpg',
  sandSuede: '/src/assets/images/shoe_sand_suede_1795258119621.jpg',
  terraTrail: '/src/assets/images/shoe_terra_trail_1795258118199.jpg',
  heroFlagship: '/src/assets/images/hero_flagship_runner_1795258117107.jpg',
  soleCraft: '/src/assets/images/craft_sole_detail_1795258119944.jpg',
  viratMatch: '/src/assets/images/virat_match_spike_1795259837319.jpg',
  viratTrainer: '/src/assets/images/virat_turf_trainer_1795259836592.jpg',
  viratLifestyle: '/src/assets/images/virat_one8_lifestyle_1795259853944.jpg',
  nikeAlpha: '/src/assets/images/nike_alpha_marathon_1795259836986.jpg',
  adidasEvo: '/src/assets/images/adidas_evo_carbon_1795259837306.jpg',
  nikeMetcon: '/src/assets/images/nike_metcon_training_1795259854577.jpg',
  adidasDropset: '/src/assets/images/adidas_dropset_gym_1795259879237.jpg',
};

const SHOE_CATALOG = [
  // -------------------- NIKE (8 MODELS) --------------------
  {
    id: 'nike-air-zoom-volt',
    brand: 'Nike',
    name: 'Nike Air Zoom Volt Carbon',
    category: 'Running',
    price: 5499,
    popularity: 99,
    rating: '4.9',
    isNewArrival: true,
    isBestSeller: true,
    weightGrams: 198,
    dropMm: 8,
    cushioning: 'Dual Air Zoom + Carbon Plate',
    image: IMG.heroVolt,
    gallery: [IMG.heroVolt, IMG.soleCraft, IMG.voltPro],
    description: 'Limited-edition flagship speed shoe combining dual forefoot Air Zoom pods with carbon propulsion.',
    colors: [
      { label: 'Obsidian / Volt Orange', swatch: 'linear-gradient(135deg, #16161a 55%, #ff5500 55%)', tint: 'none' },
      { label: 'Pure White / Carbon', swatch: 'linear-gradient(135deg, #f4f4f6 55%, #27272a 55%)', tint: 'brightness(1.1) contrast(1.06)' },
      { label: 'Solar Orange / Jet', swatch: 'linear-gradient(135deg, #ff5500 55%, #09090b 55%)', tint: 'saturate(1.25)' },
    ],
  },
  {
    id: 'nike-vaporfly-pro',
    brand: 'Nike',
    name: 'Nike Vaporfly Carbon Pro',
    category: 'Running',
    price: 4999,
    popularity: 96,
    rating: '4.9',
    isNewArrival: true,
    isBestSeller: false,
    weightGrams: 204,
    dropMm: 8,
    cushioning: 'ZoomX Supercritical Foam',
    image: IMG.voltPro,
    gallery: [IMG.voltPro, IMG.soleCraft, IMG.heroVolt],
    description: 'Featherweight race-day marathon runner engineered for rapid turnover and high-cadence stability.',
    colors: [
      { label: 'Stealth Black / Orange', swatch: 'linear-gradient(135deg, #18181b 55%, #ff5500 55%)', tint: 'none' },
      { label: 'Graphite / Silver', swatch: 'linear-gradient(135deg, #3f3f46 55%, #e4e4e7 55%)', tint: 'saturate(0.35)' },
      { label: 'Crimson / Obsidian', swatch: 'linear-gradient(135deg, #dc2626 55%, #09090b 55%)', tint: 'hue-rotate(-14deg) saturate(1.15)' },
    ],
  },
  {
    id: 'nike-air-max-pulse',
    brand: 'Nike',
    name: 'Nike Air Max Pulse',
    category: 'Lifestyle',
    price: 4499,
    popularity: 92,
    rating: '4.8',
    isNewArrival: false,
    isBestSeller: true,
    weightGrams: 276,
    dropMm: 10,
    cushioning: '270° Pressurized Heel Air',
    image: IMG.voltAir,
    gallery: [IMG.voltAir, IMG.soleCraft, IMG.voltRunner],
    description: 'Sculpted translucent air heel unit delivering crisp all-day city bounce and breathability.',
    colors: [
      { label: 'Glacier White / Flare', swatch: 'linear-gradient(135deg, #ffffff 55%, #ff5500 55%)', tint: 'none' },
      { label: 'Slate / Ice', swatch: 'linear-gradient(135deg, #52525b 55%, #e4e4e7 55%)', tint: 'saturate(0.25)' },
      { label: 'Charcoal / Ember', swatch: 'linear-gradient(135deg, #18181b 55%, #ff5500 55%)', tint: 'brightness(0.88) contrast(1.1)' },
    ],
  },
  {
    id: 'nike-pegasus-flyknit',
    brand: 'Nike',
    name: 'Nike Pegasus Flyknit',
    category: 'Running',
    price: 4299,
    popularity: 89,
    rating: '4.7',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 238,
    dropMm: 10,
    cushioning: 'ReactX Energy Foam',
    image: IMG.cobaltVel,
    gallery: [IMG.cobaltVel, IMG.soleCraft, IMG.aeroRunner],
    description: 'Adaptive Flyknit upper paired with responsive daily training foam across road miles.',
    colors: [
      { label: 'Cobalt Blue / White', swatch: 'linear-gradient(135deg, #1d4ed8 55%, #f4f4f5 55%)', tint: 'none' },
      { label: 'Midnight / Orange', swatch: 'linear-gradient(135deg, #09090b 55%, #ff5500 55%)', tint: 'hue-rotate(150deg) saturate(1.1)' },
      { label: 'Platinum / Slate', swatch: 'linear-gradient(135deg, #d4d4d8 55%, #3f3f46 55%)', tint: 'saturate(0.2) brightness(1.05)' },
    ],
  },
  {
    id: 'nike-dunk-court-low',
    brand: 'Nike',
    name: 'Nike Dunk Court Low',
    category: 'Casual',
    price: 3999,
    popularity: 94,
    rating: '4.8',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 328,
    dropMm: 4,
    cushioning: 'Stitched Rubber Cupsole',
    image: IMG.crimsonCourt,
    gallery: [IMG.crimsonCourt, IMG.courtLeather, IMG.soleCraft],
    description: 'Full-grain perforated leather low-top built for heritage court durability and crisp street style.',
    colors: [
      { label: 'Crimson / White / Black', swatch: 'linear-gradient(135deg, #dc2626 55%, #ffffff 55%)', tint: 'none' },
      { label: 'Volt Orange / Jet', swatch: 'linear-gradient(135deg, #ff5500 55%, #111115 55%)', tint: 'hue-rotate(18deg) saturate(1.2)' },
      { label: 'Monochrome Chalk', swatch: 'linear-gradient(135deg, #f4f4f5 55%, #27272a 55%)', tint: 'saturate(0.1)' },
    ],
  },
  {
    id: 'nike-flight-mid-pro',
    brand: 'Nike',
    name: 'Nike Flight Mid Pro',
    category: 'Basketball',
    price: 4799,
    popularity: 91,
    rating: '4.8',
    isNewArrival: true,
    isBestSeller: false,
    weightGrams: 344,
    dropMm: 6,
    cushioning: 'High-Impact Heel Air + Strap',
    image: IMG.highFlight,
    gallery: [IMG.highFlight, IMG.crimsonCourt, IMG.soleCraft],
    description: 'Locked-down mid-top basketball performance shoe with ankle strap and herringbone hardwood grip.',
    colors: [
      { label: 'Black / Electric Orange', swatch: 'linear-gradient(135deg, #111114 55%, #ff5500 55%)', tint: 'none' },
      { label: 'White / Carbon', swatch: 'linear-gradient(135deg, #fafafa 55%, #27272a 55%)', tint: 'saturate(0.15) brightness(1.08)' },
      { label: 'Graphite / Ember', swatch: 'linear-gradient(135deg, #3f3f46 55%, #ff5500 55%)', tint: 'contrast(1.08)' },
    ],
  },

  // -------------------- ADIDAS (6 MODELS) --------------------
  {
    id: 'adidas-adizero-pro',
    brand: 'Adidas',
    name: 'Adidas Adizero Pro',
    category: 'Running',
    price: 4899,
    popularity: 95,
    rating: '4.9',
    isNewArrival: false,
    isBestSeller: true,
    weightGrams: 208,
    dropMm: 6,
    cushioning: 'Lightstrike Pro + Carbon Rods',
    image: IMG.aeroRunner,
    gallery: [IMG.aeroRunner, IMG.soleCraft, IMG.voltRunner],
    description: 'Torsion-rod racing chassis engineered for half-marathon and 10K personal best splits.',
    colors: [
      { label: 'Bone / Core Black', swatch: 'linear-gradient(135deg, #e7e5e4 55%, #18181b 55%)', tint: 'none' },
      { label: 'Chalk / Solar Orange', swatch: 'linear-gradient(135deg, #f4f4f5 55%, #ff5500 55%)', tint: 'sepia(0.12) saturate(1.2)' },
      { label: 'Stealth Charcoal', swatch: 'linear-gradient(135deg, #27272a 55%, #52525b 55%)', tint: 'brightness(0.84) contrast(1.1)' },
    ],
  },
  {
    id: 'adidas-ultraboost-light',
    brand: 'Adidas',
    name: 'Adidas Ultraboost Light',
    category: 'Lifestyle',
    price: 4599,
    popularity: 90,
    rating: '4.7',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 234,
    dropMm: 8,
    cushioning: 'Boost Light Foam',
    image: IMG.obsidianKnit,
    gallery: [IMG.obsidianKnit, IMG.soleCraft, IMG.tripleBlack],
    description: 'Seamless 3D Primeknit sock-fit upper resting on ultra-light high-rebound midsole foam.',
    colors: [
      { label: 'Obsidian / Cloud White', swatch: 'linear-gradient(135deg, #18181b 55%, #ffffff 55%)', tint: 'none' },
      { label: 'Carbon / Volt', swatch: 'linear-gradient(135deg, #27272a 55%, #ff5500 55%)', tint: 'contrast(1.08)' },
      { label: 'Ash / Silver', swatch: 'linear-gradient(135deg, #71717a 55%, #e4e4e7 55%)', tint: 'brightness(1.12)' },
    ],
  },
  {
    id: 'adidas-court-gum',
    brand: 'Adidas',
    name: 'Adidas Court Classic Gum',
    category: 'Casual',
    price: 3499,
    popularity: 88,
    rating: '4.7',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 315,
    dropMm: 4,
    cushioning: 'Vulcanized Gum Cupsole',
    image: IMG.courtLeather,
    gallery: [IMG.courtLeather, IMG.sandSuede, IMG.soleCraft],
    description: 'Clean architectural full-grain leather court sneaker finished with a natural gum rubber outsole.',
    colors: [
      { label: 'Chalk White / Gum', swatch: 'linear-gradient(135deg, #f5f5f4 55%, #b4834b 55%)', tint: 'none' },
      { label: 'Pure White / Slate', swatch: 'linear-gradient(135deg, #ffffff 55%, #52525b 55%)', tint: 'saturate(0.3) brightness(1.05)' },
      { label: 'Warm Sand / Espresso', swatch: 'linear-gradient(135deg, #e7e5e4 55%, #78350f 55%)', tint: 'sepia(0.18)' },
    ],
  },
  {
    id: 'adidas-harden-stealth',
    brand: 'Adidas',
    name: 'Adidas Court Stealth X',
    category: 'Basketball',
    price: 4199,
    popularity: 86,
    rating: '4.6',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 332,
    dropMm: 6,
    cushioning: 'JetBoost Lateral Containment',
    image: IMG.tripleBlack,
    gallery: [IMG.tripleBlack, IMG.highFlight, IMG.soleCraft],
    description: 'Carbon-weave heel stabilizer and multi-directional lateral grip built for explosive court cuts.',
    colors: [
      { label: 'Triple Black', swatch: 'linear-gradient(135deg, #09090b 55%, #27272a 55%)', tint: 'none' },
      { label: 'Graphite / White', swatch: 'linear-gradient(135deg, #3f3f46 55%, #f4f4f5 55%)', tint: 'brightness(1.15)' },
      { label: 'Black / Ember', swatch: 'linear-gradient(135deg, #111114 55%, #ff5500 55%)', tint: 'contrast(1.08)' },
    ],
  },
  {
    id: 'adidas-response-2000',
    brand: 'Adidas',
    name: 'Adidas Response 2000',
    category: 'Lifestyle',
    price: 3899,
    popularity: 87,
    rating: '4.7',
    isNewArrival: true,
    isBestSeller: false,
    weightGrams: 288,
    dropMm: 9,
    cushioning: 'Adiprene+ Heel Pod',
    image: IMG.silverCyber,
    gallery: [IMG.silverCyber, IMG.voltRunner, IMG.soleCraft],
    description: 'Metallic Y2K open-mesh runner silhouette with sculpted heel shock absorption.',
    colors: [
      { label: 'Silver / Flare Orange', swatch: 'linear-gradient(135deg, #d4d4d8 55%, #ff5500 55%)', tint: 'none' },
      { label: 'Ice Silver / Slate', swatch: 'linear-gradient(135deg, #e4e4e7 55%, #52525b 55%)', tint: 'saturate(0.2)' },
      { label: 'Titanium / Crimson', swatch: 'linear-gradient(135deg, #71717a 55%, #ef4444 55%)', tint: 'hue-rotate(-15deg) brightness(0.94)' },
    ],
  },
  {
    id: 'adidas-terrex-trail-x',
    brand: 'Adidas',
    name: 'Adidas Terrex Trail X',
    category: 'Running',
    price: 4699,
    popularity: 90,
    rating: '4.8',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 278,
    dropMm: 6,
    cushioning: 'Lightstrike + Vibram Megagrip',
    image: IMG.terraTrail,
    gallery: [IMG.terraTrail, IMG.soleCraft, IMG.heroFlagship],
    description: 'All-terrain lugged trail runner featuring stone-shield forefoot protection and ripstop mesh.',
    colors: [
      { label: 'Olive Slate / Burnt Orange', swatch: 'linear-gradient(135deg, #4b5550 55%, #ea580c 55%)', tint: 'none' },
      { label: 'Basalt / Charcoal', swatch: 'linear-gradient(135deg, #27272a 55%, #71717a 55%)', tint: 'saturate(0.25) brightness(0.92)' },
      { label: 'Forest / Ochre', swatch: 'linear-gradient(135deg, #365314 55%, #d97706 55%)', tint: 'hue-rotate(15deg)' },
    ],
  },

  // -------------------- PUMA (6 MODELS) --------------------
  {
    id: 'puma-deviate-nitro-3',
    brand: 'Puma',
    name: 'Puma Deviate Nitro 3',
    category: 'Running',
    price: 4999,
    popularity: 97,
    rating: '4.9',
    isNewArrival: false,
    isBestSeller: true,
    weightGrams: 212,
    dropMm: 8,
    cushioning: 'NITROFOAM + PWRPLATE Carbon',
    image: IMG.nitroLime,
    gallery: [IMG.nitroLime, IMG.soleCraft, IMG.voltPro],
    description: 'Nitrogen-injected cushioning with forked carbon plate for explosive marathon cadence.',
    colors: [
      { label: 'Jet Black / Electric Lime', swatch: 'linear-gradient(135deg, #111114 55%, #84cc16 55%)', tint: 'none' },
      { label: 'Black / Volt Orange', swatch: 'linear-gradient(135deg, #111114 55%, #ff5500 55%)', tint: 'hue-rotate(-55deg) saturate(1.25)' },
      { label: 'Carbon / Ice', swatch: 'linear-gradient(135deg, #27272a 55%, #e4e4e7 55%)', tint: 'saturate(0.15)' },
    ],
  },
  {
    id: 'puma-rsx-future',
    brand: 'Puma',
    name: 'Puma RS-X Future',
    category: 'Lifestyle',
    price: 3799,
    popularity: 85,
    rating: '4.6',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 318,
    dropMm: 10,
    cushioning: 'Running System EVA Midsole',
    image: IMG.voltStreet,
    gallery: [IMG.voltStreet, IMG.obsidianKnit, IMG.soleCraft],
    description: 'Bold futuristic street silhouette with angular midsole geometry and high-grip lugs.',
    colors: [
      { label: 'Obsidian / White / Orange', swatch: 'linear-gradient(135deg, #18181b 55%, #ff5500 55%)', tint: 'none' },
      { label: 'Triple Dark', swatch: 'linear-gradient(135deg, #09090b 55%, #3f3f46 55%)', tint: 'saturate(0.1) brightness(0.9)' },
      { label: 'Chalk / Flame', swatch: 'linear-gradient(135deg, #f4f4f5 55%, #ff5500 55%)', tint: 'brightness(1.08)' },
    ],
  },
  {
    id: 'puma-velocity-nitro',
    brand: 'Puma',
    name: 'Puma Velocity Nitro',
    category: 'Running',
    price: 4399,
    popularity: 88,
    rating: '4.7',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 229,
    dropMm: 8,
    cushioning: 'NITRO + PUMAGRIP Wet Tread',
    image: IMG.voltRunner,
    gallery: [IMG.voltRunner, IMG.aeroRunner, IMG.soleCraft],
    description: 'High-airflow daily road runner with PUMAGRIP wet-surface rubber outsole.',
    colors: [
      { label: 'Aero White / Pulse Orange', swatch: 'linear-gradient(135deg, #fafafa 55%, #ff5500 55%)', tint: 'none' },
      { label: 'Graphite / Ember', swatch: 'linear-gradient(135deg, #3f3f46 55%, #ff5500 55%)', tint: 'brightness(0.88)' },
      { label: 'Mist / Monochrome', swatch: 'linear-gradient(135deg, #d4d4d8 55%, #18181b 55%)', tint: 'saturate(0.15)' },
    ],
  },
  {
    id: 'puma-allpro-nitro',
    brand: 'Puma',
    name: 'Puma All-Pro Nitro Court',
    category: 'Basketball',
    price: 3699,
    popularity: 84,
    rating: '4.6',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 312,
    dropMm: 6,
    cushioning: 'NITRO SQD Dual-Density Core',
    image: IMG.emeraldCross,
    gallery: [IMG.emeraldCross, IMG.highFlight, IMG.soleCraft],
    description: 'Responsive court shoe built for rapid lateral cuts, explosive vertical leaps, and grip.',
    colors: [
      { label: 'Emerald Teal / White', swatch: 'linear-gradient(135deg, #0f766e 55%, #ffffff 55%)', tint: 'none' },
      { label: 'Cobalt / White', swatch: 'linear-gradient(135deg, #1d4ed8 55%, #f4f4f5 55%)', tint: 'hue-rotate(38deg)' },
      { label: 'Slate / Chalk', swatch: 'linear-gradient(135deg, #3f3f46 55%, #e4e4e7 55%)', tint: 'saturate(0.15)' },
    ],
  },
  {
    id: 'puma-suede-heritage',
    brand: 'Puma',
    name: 'Puma Suede Heritage',
    category: 'Casual',
    price: 3499,
    popularity: 91,
    rating: '4.8',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 292,
    dropMm: 8,
    cushioning: 'Dual-Density EVA + Suede',
    image: IMG.sandSuede,
    gallery: [IMG.sandSuede, IMG.courtLeather, IMG.soleCraft],
    description: 'Brushed premium pigskin suede overlays paired with breathable honeycomb casual mesh.',
    colors: [
      { label: 'Sandstone / Cream', swatch: 'linear-gradient(135deg, #c29b61 55%, #f5f5f4 55%)', tint: 'none' },
      { label: 'Espresso / Gum', swatch: 'linear-gradient(135deg, #78350f 55%, #d6d3d1 55%)', tint: 'brightness(0.86) contrast(1.06)' },
      { label: 'Warm Grey / Chalk', swatch: 'linear-gradient(135deg, #a8a29e 55%, #fafaf9 55%)', tint: 'saturate(0.25)' },
    ],
  },
  {
    id: 'puma-fastr-elite',
    brand: 'Puma',
    name: 'Puma Fast-R Nitro Elite',
    category: 'Running',
    price: 5299,
    popularity: 93,
    rating: '4.9',
    isNewArrival: true,
    isBestSeller: false,
    weightGrams: 199,
    dropMm: 8,
    cushioning: 'Decoupled NITRO Elite',
    image: IMG.heroFlagship,
    gallery: [IMG.heroFlagship, IMG.soleCraft, IMG.aeroRunner],
    description: 'Two-piece decoupled nitro marathon racer engineered for peak propulsion and stability.',
    colors: [
      { label: 'Bone / Vermilion', swatch: 'linear-gradient(135deg, #e7e5e4 55%, #ea580c 55%)', tint: 'none' },
      { label: 'Stone / Graphite', swatch: 'linear-gradient(135deg, #a1a1aa 55%, #27272a 55%)', tint: 'saturate(0.2)' },
      { label: 'Chalk / Crimson', swatch: 'linear-gradient(135deg, #f4f4f5 55%, #dc2626 55%)', tint: 'hue-rotate(-10deg) saturate(1.15)' },
    ],
  },

  // -------------------- EXPANDED COLLECTIONS & VIRAT KOHLI PRO ROTATION --------------------
  {
    id: 'puma-virat-match-spike',
    brand: 'Puma',
    name: 'Puma one8 Virat Match Spike',
    category: 'Training',
    viratKohli: true,
    athleteUse: 'Virat Kohli · Match Pitch & Boundary Sprints',
    price: 5999,
    popularity: 100,
    rating: '5.0',
    isNewArrival: true,
    isBestSeller: true,
    weightGrams: 264,
    dropMm: 8,
    cushioning: 'PROFOAM + 11-Stud Pitch Plate',
    image: IMG.viratMatch,
    gallery: [IMG.viratMatch, IMG.soleCraft, IMG.viratLifestyle],
    description: 'Signature cricket turf & match spike worn by Virat Kohli for explosive crease acceleration and sharp boundary cuts.',
    colors: [
      { label: 'Match White / Volt Orange', swatch: 'linear-gradient(135deg, #f4f4f5 55%, #ff5500 55%)', tint: 'none' },
      { label: 'Obsidian / Gold', swatch: 'linear-gradient(135deg, #18181b 55%, #eab308 55%)', tint: 'brightness(0.88) contrast(1.08)' },
      { label: 'Crimson / Carbon', swatch: 'linear-gradient(135deg, #dc2626 55%, #111115 55%)', tint: 'hue-rotate(-14deg) saturate(1.15)' },
    ],
  },
  {
    id: 'puma-virat-nitro-trainer',
    brand: 'Puma',
    name: 'Puma one8 Virat Nitro Trainer',
    category: 'Training',
    viratKohli: true,
    athleteUse: 'Virat Kohli · Gym Conditioning & Agility',
    price: 5299,
    popularity: 98,
    rating: '4.9',
    isNewArrival: true,
    isBestSeller: true,
    weightGrams: 274,
    dropMm: 6,
    cushioning: 'NITRO Core + Gold Heel Cage',
    image: IMG.viratTrainer,
    gallery: [IMG.viratTrainer, IMG.soleCraft, IMG.viratMatch],
    description: 'Built for Virat Kohli’s high-intensity gym strength blocks, sled pushes, and multi-directional agility drills.',
    colors: [
      { label: 'Stealth Black / Gold / Orange', swatch: 'linear-gradient(135deg, #18181b 55%, #eab308 55%)', tint: 'none' },
      { label: 'Carbon / Volt', swatch: 'linear-gradient(135deg, #27272a 55%, #ff5500 55%)', tint: 'hue-rotate(-12deg) saturate(1.15)' },
      { label: 'Graphite / Ice', swatch: 'linear-gradient(135deg, #52525b 55%, #e4e4e7 55%)', tint: 'saturate(0.25) brightness(1.08)' },
    ],
  },
  {
    id: 'puma-virat-gold-cleat',
    brand: 'Puma',
    name: 'Puma one8 Virat Gold Cleat',
    category: 'Training',
    viratKohli: true,
    athleteUse: 'Virat Kohli · Tour Turf & Fielding Drills',
    price: 5599,
    popularity: 97,
    rating: '4.9',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 268,
    dropMm: 7,
    cushioning: 'Dual-Density Turf & Carbon Shank',
    image: IMG.viratLifestyle,
    gallery: [IMG.viratLifestyle, IMG.soleCraft, IMG.viratTrainer],
    description: 'Obsidian and metallic gold signature turf shoe engineered for diving catches, lateral stops, and tour conditioning.',
    colors: [
      { label: 'Obsidian / Pearl / Gold', swatch: 'linear-gradient(135deg, #111114 55%, #eab308 55%)', tint: 'none' },
      { label: 'Pearl White / Carbon', swatch: 'linear-gradient(135deg, #f4f4f5 55%, #18181b 55%)', tint: 'brightness(1.08) saturate(0.4)' },
      { label: 'Ember / Matte Black', swatch: 'linear-gradient(135deg, #ff5500 55%, #18181b 55%)', tint: 'hue-rotate(-15deg) saturate(1.2)' },
    ],
  },
  {
    id: 'nike-alphafly-carbon-3',
    brand: 'Nike',
    name: 'Nike Alphafly Carbon 3',
    category: 'Running',
    price: 5899,
    popularity: 96,
    rating: '4.9',
    isNewArrival: true,
    isBestSeller: false,
    weightGrams: 194,
    dropMm: 8,
    cushioning: 'ZoomX + Twin Forefoot Air Pods',
    image: IMG.nikeAlpha,
    gallery: [IMG.nikeAlpha, IMG.soleCraft, IMG.heroVolt],
    description: 'Next-generation marathon super-shoe with continuous Flyplate carbon propulsion and ultra-light Atomknit upper.',
    colors: [
      { label: 'Prototype Orange / Pearl', swatch: 'linear-gradient(135deg, #ff5500 55%, #f4f4f5 55%)', tint: 'none' },
      { label: 'Obsidian / Ember', swatch: 'linear-gradient(135deg, #18181b 55%, #ff5500 55%)', tint: 'brightness(0.84) contrast(1.12)' },
      { label: 'Platinum / Volt', swatch: 'linear-gradient(135deg, #e4e4e7 55%, #84cc16 55%)', tint: 'hue-rotate(65deg) saturate(0.95)' },
    ],
  },
  {
    id: 'nike-metcon-9-pro',
    brand: 'Nike',
    name: 'Nike Metcon 9 Pro',
    category: 'Training',
    price: 4699,
    popularity: 92,
    rating: '4.8',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 306,
    dropMm: 4,
    cushioning: 'Hyperlift Heel Plate + Rope Wrap',
    image: IMG.nikeMetcon,
    gallery: [IMG.nikeMetcon, IMG.soleCraft, IMG.tripleBlack],
    description: 'Heavy-duty cross-training shoe featuring an enlarged Hyperlift heel plate and textured rope-wrap sidewall.',
    colors: [
      { label: 'Slate / Neon Orange', swatch: 'linear-gradient(135deg, #3f3f46 55%, #ff5500 55%)', tint: 'none' },
      { label: 'Triple Black', swatch: 'linear-gradient(135deg, #09090b 55%, #27272a 55%)', tint: 'saturate(0.1) brightness(0.85)' },
      { label: 'Crimson / Obsidian', swatch: 'linear-gradient(135deg, #dc2626 55%, #111115 55%)', tint: 'hue-rotate(-14deg)' },
    ],
  },
  {
    id: 'adidas-adizero-evo-carbon',
    brand: 'Adidas',
    name: 'Adidas Adizero Evo Carbon',
    category: 'Running',
    price: 5399,
    popularity: 94,
    rating: '4.8',
    isNewArrival: true,
    isBestSeller: false,
    weightGrams: 189,
    dropMm: 6,
    cushioning: 'Lightstrike Pro Evo Channels',
    image: IMG.adidasEvo,
    gallery: [IMG.adidasEvo, IMG.soleCraft, IMG.aeroRunner],
    description: 'Ultra-lightweight carbon-infused tempo racer sculpted with wind-tunnel midsole energy channels.',
    colors: [
      { label: 'Ice White / Solar Crimson', swatch: 'linear-gradient(135deg, #e4e4e7 55%, #dc2626 55%)', tint: 'none' },
      { label: 'Graphite / Volt', swatch: 'linear-gradient(135deg, #27272a 55%, #ff5500 55%)', tint: 'hue-rotate(15deg) brightness(0.92)' },
      { label: 'Silver / Slate', swatch: 'linear-gradient(135deg, #d4d4d8 55%, #52525b 55%)', tint: 'saturate(0.15)' },
    ],
  },
  {
    id: 'adidas-dropset-3-gym',
    brand: 'Adidas',
    name: 'Adidas Dropset 3 Gym',
    category: 'Training',
    price: 4299,
    popularity: 89,
    rating: '4.7',
    isNewArrival: false,
    isBestSeller: false,
    weightGrams: 318,
    dropMm: 6,
    cushioning: 'Dual-Density EVA + Traxion Base',
    image: IMG.adidasDropset,
    gallery: [IMG.adidasDropset, IMG.soleCraft, IMG.tripleBlack],
    description: 'Grounded strength-training silhouette with a wide flat dual-density base for deadlifts and kettlebell complexes.',
    colors: [
      { label: 'Graphite / Electric Teal', swatch: 'linear-gradient(135deg, #27272a 55%, #0d9488 55%)', tint: 'none' },
      { label: 'Obsidian / Orange', swatch: 'linear-gradient(135deg, #111114 55%, #ff5500 55%)', tint: 'hue-rotate(175deg)' },
      { label: 'Ash / Slate', swatch: 'linear-gradient(135deg, #71717a 55%, #d4d4d8 55%)', tint: 'saturate(0.15) brightness(1.06)' },
    ],
  },
];

const SIZES = ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'];

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------------------
  // 1. Storage Keys & Persistent State
  // ---------------------------------------------------------
  const CART_KEY = 'voltx_multibrand_cart_v1';
  const WISHLIST_KEY = 'voltx_wishlist_v1';
  const RECENT_KEY = 'voltx_recently_viewed_v1';
  const THEME_KEY = 'voltx_theme_v1';

  let cart = loadStorage(CART_KEY, []);
  let wishlist = loadStorage(WISHLIST_KEY, []);
  let recentlyViewed = loadStorage(RECENT_KEY, []);
  let compareList = [];

  let activeBrand = 'all';
  let activeCategory = 'all';
  let searchQuery = '';
  let sortMode = 'popular';

  // DOM References
  const productGrid = document.getElementById('productGrid');
  const viratKohliGrid = document.getElementById('viratKohliGrid');
  const filterViratBtn = document.getElementById('filterViratBtn');
  const newArrivalsGrid = document.getElementById('newArrivalsGrid');
  const bestSellersGrid = document.getElementById('bestSellersGrid');
  const recentlyViewedSection = document.getElementById('recentlyViewedSection');
  const recentlyViewedGrid = document.getElementById('recentlyViewedGrid');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');

  const emptyCatalog = document.getElementById('emptyCatalog');
  const catalogCounter = document.getElementById('catalogCounter');
  const brandButtons = document.querySelectorAll('.filter-btn');
  const categoryButtons = document.querySelectorAll('.cat-btn');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const cartCountEl = document.getElementById('cartCount');
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartDiscountEl = document.getElementById('cartDiscount');
  const discountRowEl = document.getElementById('discountRow');
  const cartTotalEl = document.getElementById('cartTotal');
  const applyVolt20Checkbox = document.getElementById('applyVolt20');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const checkoutStatusEl = document.getElementById('checkoutStatus');

  const wishlistCountEl = document.getElementById('wishlistCount');
  const openWishlistBtn = document.getElementById('openWishlistBtn');
  const closeWishlistBtn = document.getElementById('closeWishlistBtn');
  const wishlistBackdrop = document.getElementById('wishlistBackdrop');
  const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');

  const compareTray = document.getElementById('compareTray');
  const compareTrayCount = document.getElementById('compareTrayCount');
  const compareTrayNames = document.getElementById('compareTrayNames');
  const clearCompareBtn = document.getElementById('clearCompareBtn');
  const openCompareModalBtn = document.getElementById('openCompareModalBtn');
  const compareModal = document.getElementById('compareModal');
  const closeCompareModalBtn = document.getElementById('closeCompareModalBtn');
  const compareTableWrap = document.getElementById('compareTableWrap');

  const promoShopBtn = document.getElementById('promoShopBtn');
  const inspectLimitedBtn = document.getElementById('inspectLimitedBtn');
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterFeedback = document.getElementById('newsletterFeedback');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toastBanner = document.getElementById('toastBanner');

  const hero3dCard = document.getElementById('hero3dCard');
  const heroThreeCanvas = document.getElementById('heroThreeCanvas');
  const heroModelLoading = document.getElementById('heroModelLoading');
  const heroLoadingProgress = document.getElementById('heroLoadingProgress');
  const heroWebglFallback = document.getElementById('heroWebglFallback');
  const heroFallbackReason = document.getElementById('heroFallbackReason');
  const heroAngleBadge = document.getElementById('heroAngleBadge');
  const heroModelBadge = document.getElementById('heroModelBadge');
  const heroPlayPauseBtn = document.getElementById('heroPlayPauseBtn');
  const heroResetViewBtn = document.getElementById('heroResetViewBtn');
  const heroSpeedRange = document.getElementById('heroSpeedRange');
  const heroSpeedValue = document.getElementById('heroSpeedValue');
  const heroGlbInput = document.getElementById('heroGlbInput');
  const heroBrandProductBtns = document.querySelectorAll('[data-hero-shoe]');
  const heroRealShoeThumb = document.getElementById('heroRealShoeThumb');
  const heroActiveColorName = document.getElementById('heroActiveColorName');
  const heroActivePrice = document.getElementById('heroActivePrice');
  const heroColorSwatches = document.getElementById('heroColorSwatches');
  const heroCustomColorInput = document.getElementById('heroCustomColorInput');
  const heroQuickAddBtn = document.getElementById('heroQuickAddBtn');
  const heroCamViewBtns = document.querySelectorAll('[data-cam-view]');
  const openHero3dBtn = document.getElementById('openHero3dBtn');

  const shoe3dModal = document.getElementById('shoe3dModal');
  const close3dModalBtn = document.getElementById('close3dModalBtn');
  const modalMode3dBtn = document.getElementById('modalMode3dBtn');
  const modalModeGalleryBtn = document.getElementById('modalModeGalleryBtn');
  const modal3dViewport = document.getElementById('modal3dViewport');
  const modalThreeCanvas = document.getElementById('modalThreeCanvas');
  const modalModelLoading = document.getElementById('modalModelLoading');
  const modalLoadingProgress = document.getElementById('modalLoadingProgress');
  const modalPhotoFrame = document.getElementById('modalPhotoFrame');
  const modalWebglFallback = document.getElementById('modalWebglFallback');
  const modalFallbackReason = document.getElementById('modalFallbackReason');
  const modalFallbackImg = document.getElementById('modalFallbackImg');
  const modal3dImg = document.getElementById('modal3dImg');
  const modalAngleBadge = document.getElementById('modalAngleBadge');
  const modalModelBadge = document.getElementById('modalModelBadge');
  const modalGalleryThumbs = document.getElementById('modalGalleryThumbs');
  const modal3dControlsBar = document.getElementById('modal3dControlsBar');
  const modalSpinToggleBtn = document.getElementById('modalSpinToggleBtn');
  const modalResetViewBtn = document.getElementById('modalResetViewBtn');
  const modalPresetViewBtns = document.querySelectorAll('[data-modal-view]');
  const modal3dMeta = document.getElementById('modal3dMeta');
  const modal3dTitle = document.getElementById('modal3dTitle');
  const modal3dPrice = document.getElementById('modal3dPrice');
  const modal3dRating = document.getElementById('modal3dRating');
  const modal3dDesc = document.getElementById('modal3dDesc');
  const modalSpecsMini = document.getElementById('modalSpecsMini');
  const modal3dColorLabel = document.getElementById('modal3dColorLabel');
  const modal3dSwatches = document.getElementById('modal3dSwatches');
  const modalSizeGrid = document.getElementById('modalSizeGrid');
  const modal3dAddBtn = document.getElementById('modal3dAddBtn');
  const modalPinHeroBtn = document.getElementById('modalPinHeroBtn');
  const modalWishlistBtn = document.getElementById('modalWishlistBtn');
  const modalCompareBtn = document.getElementById('modalCompareBtn');

  let toastTimer = null;
  let activeModalShoe = null;
  let activeModalColor = '';
  let activeModalSwatch = '';
  let activeModalTint = 'none';
  let activeModalSize = 'UK 9';
  let activeHeroShoe = SHOE_CATALOG[0];
  let activeHeroColor = SHOE_CATALOG[0].colors[0].label;
  let activeHeroSwatch = SHOE_CATALOG[0].colors[0].swatch;
  let activeHeroTint = SHOE_CATALOG[0].colors[0].tint;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------------------------------------------------------
  // 2. Storage Helpers & Theme Toggle
  // ---------------------------------------------------------
  function loadStorage(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage quota errors
    }
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggleBtn?.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeToggleBtn?.setAttribute('aria-label', 'Switch to light theme');
    }
    saveStorage(THEME_KEY, theme);
  }

  const savedTheme = loadStorage(THEME_KEY, 'dark');
  applyTheme(savedTheme);

  themeToggleBtn?.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const nextTheme = isLight ? 'dark' : 'light';
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme} mode`);
  });

  // ---------------------------------------------------------
  // 3. Card Builder & Rendering (Catalog, New Arrivals, Best Sellers)
  // ---------------------------------------------------------
  function createShoeCard(shoe) {
    const isSaved = wishlist.includes(shoe.id);
    const isComparing = compareList.includes(shoe.id);
    const card = document.createElement('article');
    card.className = 'product-card';

    const swatchesMarkup = shoe.colors
      .map(
        (c, idx) => `
          <button
            type="button"
            class="swatch-btn ${idx === 0 ? 'is-selected' : ''}"
            data-color="${c.label}"
            data-tint="${c.tint}"
            style="background: ${c.swatch}"
            aria-label="${c.label}"
          ></button>
        `
      )
      .join('');

    card.innerHTML = `
      <div class="product-media" title="Click to inspect multi-angle 3D view">
        <img
          src="${shoe.image}"
          alt="${shoe.name}"
          class="product-img"
          referrerpolicy="no-referrer"
        />
        <div class="card-specular-sheen" aria-hidden="true"></div>
        <button
          type="button"
          class="card-wish-btn ${isSaved ? 'is-saved' : ''}"
          aria-label="${isSaved ? 'Remove from wishlist' : 'Save to wishlist'}"
        >
          <svg viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div class="product-body">
        <div class="product-meta-row">
          <div>
            <span class="brand-meta">${shoe.brand}</span>
            <span aria-hidden="true">·</span>
            <span>${shoe.category}</span>
          </div>
          <span class="product-rating">★ ${shoe.rating}</span>
        </div>
        <div class="product-title-row">
          <button type="button" class="product-name">${shoe.name}</button>
          <span class="product-price">₹${shoe.price.toLocaleString('en-IN')}</span>
        </div>
        ${shoe.athleteUse ? `<p class="athlete-use-note">${shoe.athleteUse}</p>` : ''}
        <p class="product-desc">${shoe.description}</p>
        <p class="color-selected-line">Colour: <span class="color-label">${shoe.colors[0].label}</span></p>
        <div class="product-controls">
          <div class="swatch-group" role="group" aria-label="Select colour for ${shoe.name}">
            ${swatchesMarkup}
          </div>
          <select class="size-select" aria-label="Select UK size for ${shoe.name}">
            ${SIZES.map((s) => `<option value="${s}" ${s === 'UK 9' ? 'selected' : ''}>${s}</option>`).join('')}
          </select>
          <button type="button" class="btn-add-cart">Add</button>
        </div>
        <div class="card-footer-actions">
          <button type="button" class="text-action-btn quick-view-btn">Quick View 3D</button>
          <button type="button" class="text-action-btn compare-toggle-btn ${isComparing ? 'is-comparing' : ''}">
            ${isComparing ? 'Comparing ✓' : '+ Compare'}
          </button>
        </div>
      </div>
    `;

    const img = card.querySelector('.product-img');
    const media = card.querySelector('.product-media');
    const titleBtn = card.querySelector('.product-name');
    const quickViewBtn = card.querySelector('.quick-view-btn');
    const wishBtn = card.querySelector('.card-wish-btn');
    const compareBtn = card.querySelector('.compare-toggle-btn');
    const swatches = card.querySelectorAll('.swatch-btn');
    const colorLabel = card.querySelector('.color-label');
    const sizeSelect = card.querySelector('.size-select');
    const addBtn = card.querySelector('.btn-add-cart');

    img?.addEventListener('error', () => {
      img.style.background = '#1e1e24';
      img.style.objectFit = 'contain';
    });

    const openDetail = () => {
      const activeSwatch = card.querySelector('.swatch-btn.is-selected');
      open3dInspector(
        shoe,
        activeSwatch?.dataset.color || shoe.colors[0].label,
        activeSwatch?.dataset.tint || 'none'
      );
    };

    media?.addEventListener('click', (e) => {
      if (e.target.closest('.card-wish-btn')) return;
      openDetail();
    });
    titleBtn?.addEventListener('click', openDetail);
    quickViewBtn?.addEventListener('click', openDetail);

    wishBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(shoe.id);
    });

    compareBtn?.addEventListener('click', () => {
      toggleCompare(shoe.id);
    });

    swatches.forEach((swatch) => {
      swatch.addEventListener('click', () => {
        swatches.forEach((s) => s.classList.remove('is-selected'));
        swatch.classList.add('is-selected');
        if (colorLabel) colorLabel.textContent = swatch.dataset.color || '';
        if (img) img.style.filter = swatch.dataset.tint || 'none';
      });
    });

    addBtn?.addEventListener('click', () => {
      const activeSwatch = card.querySelector('.swatch-btn.is-selected');
      const chosenColor = activeSwatch?.dataset.color || shoe.colors[0].label;
      const chosenSize = sizeSelect?.value || 'UK 9';

      addItemToCart({
        id: shoe.id,
        name: shoe.name,
        brand: shoe.brand,
        price: shoe.price,
        color: chosenColor,
        size: chosenSize,
        image: shoe.image,
      });

      addBtn.textContent = 'Added ✓';
      addBtn.classList.add('is-added');
      window.setTimeout(() => {
        addBtn.textContent = 'Add';
        addBtn.classList.remove('is-added');
      }, 1200);
    });

    attachCard3dPhysics(card);
    return card;
  }

  function getFilteredAndSortedShoes() {
    const query = searchQuery.trim().toLowerCase();
    const filtered = SHOE_CATALOG.filter((shoe) => {
      if (activeBrand !== 'all' && shoe.brand !== activeBrand) return false;
      if (activeCategory === 'ViratKohli') {
        if (!shoe.viratKohli) return false;
      } else if (activeCategory !== 'all' && shoe.category !== activeCategory) {
        return false;
      }
      if (query) {
        const text = `${shoe.brand} ${shoe.name} ${shoe.category} ${shoe.athleteUse || ''} ${shoe.description}`.toLowerCase();
        if (!text.includes(query)) return false;
      }
      return true;
    });

    if (sortMode === 'price-asc') {
      return [...filtered].sort((a, b) => a.price - b.price);
    }
    if (sortMode === 'price-desc') {
      return [...filtered].sort((a, b) => b.price - a.price);
    }
    return [...filtered].sort((a, b) => b.popularity - a.popularity);
  }

  function renderCatalog() {
    if (!productGrid) return;
    const filtered = getFilteredAndSortedShoes();

    if (catalogCounter) {
      catalogCounter.textContent = `Showing ${filtered.length} of ${SHOE_CATALOG.length} shoes`;
    }

    productGrid.innerHTML = '';

    if (filtered.length === 0) {
      if (emptyCatalog) emptyCatalog.hidden = false;
      return;
    }

    if (emptyCatalog) emptyCatalog.hidden = true;
    filtered.forEach((shoe) => productGrid.appendChild(createShoeCard(shoe)));
  }

  function renderSpotlights() {
    if (viratKohliGrid) {
      viratKohliGrid.innerHTML = '';
      SHOE_CATALOG.filter((s) => s.viratKohli)
        .slice(0, 3)
        .forEach((shoe) => viratKohliGrid.appendChild(createShoeCard(shoe)));
    }
    if (newArrivalsGrid) {
      newArrivalsGrid.innerHTML = '';
      SHOE_CATALOG.filter((s) => s.isNewArrival)
        .slice(0, 4)
        .forEach((shoe) => newArrivalsGrid.appendChild(createShoeCard(shoe)));
    }
    if (bestSellersGrid) {
      bestSellersGrid.innerHTML = '';
      SHOE_CATALOG.filter((s) => s.isBestSeller)
        .slice(0, 4)
        .forEach((shoe) => bestSellersGrid.appendChild(createShoeCard(shoe)));
    }
  }

  function renderAllProductGrids() {
    renderCatalog();
    renderSpotlights();
  }

  function applyCategoryFilterAndJump(categoryValue) {
    activeBrand = 'all';
    activeCategory = categoryValue;
    brandButtons.forEach((b) => {
      const isAll = b.dataset.brand === 'all';
      b.classList.toggle('is-active', isAll);
      b.setAttribute('aria-selected', String(isAll));
    });
    categoryButtons.forEach((b) => {
      const isMatch = b.dataset.category === categoryValue;
      b.classList.toggle('is-active', isMatch);
      b.setAttribute('aria-selected', String(isMatch));
    });
    renderCatalog();
    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
  }

  // Filter & Sort Event Listeners
  brandButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeBrand = btn.dataset.brand || 'all';
      brandButtons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      renderCatalog();
    });
  });

  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category || 'all';
      categoryButtons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      renderCatalog();
    });
  });

  filterViratBtn?.addEventListener('click', () => {
    applyCategoryFilterAndJump('ViratKohli');
  });

  document.querySelectorAll('[data-jump-category]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-jump-category') || 'all';
      applyCategoryFilterAndJump(cat);
    });
  });

  document.querySelectorAll('[data-footer-brand]').forEach((link) => {
    link.addEventListener('click', () => {
      const targetBrand = link.getAttribute('data-footer-brand') || 'all';
      activeBrand = targetBrand;
      activeCategory = 'all';
      brandButtons.forEach((b) => {
        const isMatch = b.dataset.brand === targetBrand;
        b.classList.toggle('is-active', isMatch);
        b.setAttribute('aria-selected', String(isMatch));
      });
      categoryButtons.forEach((b) => {
        const isAll = b.dataset.category === 'all';
        b.classList.toggle('is-active', isAll);
        b.setAttribute('aria-selected', String(isAll));
      });
      renderCatalog();
    });
  });

  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderCatalog();
  });

  sortSelect?.addEventListener('change', (e) => {
    sortMode = e.target.value;
    renderCatalog();
  });

  resetFiltersBtn?.addEventListener('click', () => {
    activeBrand = 'all';
    activeCategory = 'all';
    searchQuery = '';
    sortMode = 'popular';
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'popular';
    brandButtons.forEach((b) => {
      const isAll = b.dataset.brand === 'all';
      b.classList.toggle('is-active', isAll);
      b.setAttribute('aria-selected', String(isAll));
    });
    categoryButtons.forEach((b) => {
      const isAll = b.dataset.category === 'all';
      b.classList.toggle('is-active', isAll);
      b.setAttribute('aria-selected', String(isAll));
    });
    renderCatalog();
  });

  // ---------------------------------------------------------
  // 4. Wishlist & Recently Viewed Functionality
  // ---------------------------------------------------------
  function toggleWishlist(shoeId) {
    const shoe = SHOE_CATALOG.find((s) => s.id === shoeId);
    if (!shoe) return;

    if (wishlist.includes(shoeId)) {
      wishlist = wishlist.filter((id) => id !== shoeId);
      showToast(`Removed ${shoe.name} from wishlist`);
    } else {
      wishlist.push(shoeId);
      showToast(`Saved ${shoe.name} to wishlist`);
    }

    saveStorage(WISHLIST_KEY, wishlist);
    renderWishlist();
    renderAllProductGrids();
    if (activeModalShoe && activeModalShoe.id === shoeId && modalWishlistBtn) {
      modalWishlistBtn.textContent = wishlist.includes(shoeId) ? 'Saved in Wishlist ♥' : 'Save to Wishlist';
    }
  }

  function renderWishlist() {
    if (wishlistCountEl) wishlistCountEl.textContent = String(wishlist.length);
    if (!wishlistItemsContainer) return;

    if (wishlist.length === 0) {
      wishlistItemsContainer.innerHTML =
        '<p class="cart-empty">Your wishlist is empty. Tap the heart icon on any shoe to save it for later.</p>';
      return;
    }

    wishlistItemsContainer.innerHTML = '';
    wishlist.forEach((shoeId) => {
      const shoe = SHOE_CATALOG.find((s) => s.id === shoeId);
      if (!shoe) return;

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <img src="${shoe.image}" alt="${shoe.name}" class="cart-item-img" referrerpolicy="no-referrer" />
        <div class="cart-item-info">
          <div class="cart-item-title">${shoe.name}</div>
          <div class="cart-item-color">${shoe.brand} · ₹${shoe.price.toLocaleString('en-IN')}</div>
          <div class="cart-item-bottom">
            <button type="button" class="btn-add-cart move-to-cart-btn">Move to Cart</button>
            <button type="button" class="text-action-btn remove-wish-btn">Remove</button>
          </div>
        </div>
      `;

      row.querySelector('.move-to-cart-btn')?.addEventListener('click', () => {
        addItemToCart({
          id: shoe.id,
          name: shoe.name,
          brand: shoe.brand,
          price: shoe.price,
          color: shoe.colors[0].label,
          size: 'UK 9',
          image: shoe.image,
        });
        toggleWishlist(shoe.id);
      });

      row.querySelector('.remove-wish-btn')?.addEventListener('click', () => {
        toggleWishlist(shoe.id);
      });

      wishlistItemsContainer.appendChild(row);
    });
  }

  function recordRecentlyViewed(shoeId) {
    recentlyViewed = [shoeId, ...recentlyViewed.filter((id) => id !== shoeId)].slice(0, 4);
    saveStorage(RECENT_KEY, recentlyViewed);
    renderRecentlyViewed();
  }

  function renderRecentlyViewed() {
    if (!recentlyViewedSection || !recentlyViewedGrid) return;
    const validShoes = recentlyViewed
      .map((id) => SHOE_CATALOG.find((s) => s.id === id))
      .filter(Boolean);

    if (validShoes.length === 0) {
      recentlyViewedSection.hidden = true;
      return;
    }

    recentlyViewedSection.hidden = false;
    recentlyViewedGrid.innerHTML = '';
    validShoes.forEach((shoe) => {
      const card = document.createElement('article');
      card.className = 'recent-card';
      card.innerHTML = `
        <img src="${shoe.image}" alt="${shoe.name}" referrerpolicy="no-referrer" />
        <div class="recent-card-body">
          <p class="recent-card-meta">${shoe.brand} · ${shoe.category}</p>
          <h3 class="recent-card-name">${shoe.name}</h3>
          <p class="recent-card-price">₹${shoe.price.toLocaleString('en-IN')}</p>
        </div>
      `;
      card.addEventListener('click', () => {
        open3dInspector(shoe, shoe.colors[0].label, 'none');
      });
      recentlyViewedGrid.appendChild(card);
    });
  }

  clearHistoryBtn?.addEventListener('click', () => {
    recentlyViewed = [];
    saveStorage(RECENT_KEY, []);
    renderRecentlyViewed();
    showToast('Cleared recently viewed history');
  });

  // ---------------------------------------------------------
  // 5. Product Comparison Feature (Up to 3 Shoes)
  // ---------------------------------------------------------
  function toggleCompare(shoeId) {
    const shoe = SHOE_CATALOG.find((s) => s.id === shoeId);
    if (!shoe) return;

    if (compareList.includes(shoeId)) {
      compareList = compareList.filter((id) => id !== shoeId);
      showToast(`Removed ${shoe.name} from comparison`);
    } else {
      if (compareList.length >= 3) {
        showToast('You can compare up to 3 shoes at a time');
        return;
      }
      compareList.push(shoeId);
      showToast(`Added ${shoe.name} to compare (${compareList.length}/3)`);
    }

    renderCompareTray();
    renderAllProductGrids();
    if (activeModalShoe && activeModalShoe.id === shoeId && modalCompareBtn) {
      modalCompareBtn.textContent = compareList.includes(shoeId) ? 'In Compare ✓' : 'Add to Compare';
    }
  }

  function renderCompareTray() {
    if (!compareTray) return;
    if (compareList.length === 0) {
      compareTray.hidden = true;
      document.body.classList.remove('has-compare-tray');
      return;
    }
    compareTray.hidden = false;
    document.body.classList.add('has-compare-tray');
    if (compareTrayCount) compareTrayCount.textContent = String(compareList.length);
    if (compareTrayNames) {
      compareTrayNames.innerHTML = compareList
        .map((id) => SHOE_CATALOG.find((s) => s.id === id))
        .filter(Boolean)
        .map((s) => `<span>· ${s.name}</span>`)
        .join(' ');
    }
  }

  function openCompareModal() {
    if (!compareModal || !compareTableWrap) return;
    const shoes = compareList.map((id) => SHOE_CATALOG.find((s) => s.id === id)).filter(Boolean);
    if (shoes.length === 0) return;

    compareTableWrap.innerHTML = `
      <table class="compare-table">
        <thead>
          <tr>
            <th>Specification</th>
            ${shoes
              .map(
                (s) => `
              <td>
                <img src="${s.image}" alt="${s.name}" class="compare-shoe-thumb" referrerpolicy="no-referrer" />
                <div class="product-name">${s.name}</div>
              </td>
            `
              )
              .join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Brand</th>
            ${shoes.map((s) => `<td>${s.brand}</td>`).join('')}
          </tr>
          <tr>
            <th>Category</th>
            ${shoes.map((s) => `<td>${s.category}</td>`).join('')}
          </tr>
          <tr>
            <th>Price</th>
            ${shoes.map((s) => `<td class="product-price">₹${s.price.toLocaleString('en-IN')}</td>`).join('')}
          </tr>
          <tr>
            <th>Rating</th>
            ${shoes.map((s) => `<td>★ ${s.rating} (${s.popularity}% score)</td>`).join('')}
          </tr>
          <tr>
            <th>Weight</th>
            ${shoes.map((s) => `<td>${s.weightGrams} g</td>`).join('')}
          </tr>
          <tr>
            <th>Heel Drop</th>
            ${shoes.map((s) => `<td>${s.dropMm} mm</td>`).join('')}
          </tr>
          <tr>
            <th>Cushioning</th>
            ${shoes.map((s) => `<td>${s.cushioning}</td>`).join('')}
          </tr>
          <tr>
            <th>Action</th>
            ${shoes
              .map(
                (s) => `
              <td>
                <button type="button" class="btn-add-cart compare-add-btn" data-id="${s.id}">Add to Cart</button>
              </td>
            `
              )
              .join('')}
          </tr>
        </tbody>
      </table>
    `;

    compareTableWrap.querySelectorAll('.compare-add-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const shoe = SHOE_CATALOG.find((s) => s.id === btn.getAttribute('data-id'));
        if (!shoe) return;
        addItemToCart({
          id: shoe.id,
          name: shoe.name,
          brand: shoe.brand,
          price: shoe.price,
          color: shoe.colors[0].label,
          size: 'UK 9',
          image: shoe.image,
        });
      });
    });

    compareModal.hidden = false;
  }

  clearCompareBtn?.addEventListener('click', () => {
    compareList = [];
    renderCompareTray();
    renderAllProductGrids();
  });

  openCompareModalBtn?.addEventListener('click', openCompareModal);
  closeCompareModalBtn?.addEventListener('click', () => {
    if (compareModal) compareModal.hidden = true;
  });
  compareModal?.addEventListener('click', (e) => {
    if (e.target === compareModal) compareModal.hidden = true;
  });

  // ---------------------------------------------------------
  // 6. Responsive Mobile Navigation & FAQ Accordion
  // ---------------------------------------------------------
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.hidden = isExpanded;
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.hidden = true;
      });
    });
  }

  document.querySelectorAll('.faq-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const panel = trigger.nextElementSibling;
      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (panel) panel.hidden = isExpanded;
    });
  });

  // ---------------------------------------------------------
  // 7. Shopping Cart Drawer & Promo Code
  // ---------------------------------------------------------
  function formatINR(amount) {
    return `₹${amount.toLocaleString('en-IN')}`;
  }

  function addItemToCart(item) {
    const key = `${item.id}__${item.color}__${item.size}`;
    const existing = cart.find((entry) => entry.key === key);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...item, key, qty: 1 });
    }

    saveStorage(CART_KEY, cart);
    renderCart();
    showToast(`Added ${item.name} (${item.size}) to bag`);
  }

  function updateItemQty(key, delta) {
    cart = cart
      .map((item) => (item.key === key ? { ...item, qty: item.qty + delta } : item))
      .filter((item) => item.qty > 0);

    saveStorage(CART_KEY, cart);
    renderCart();
  }

  function renderCart() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCountEl) cartCountEl.textContent = String(totalCount);

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML =
        '<p class="cart-empty">Your VOLT X bag is empty. Select any Nike, Adidas, or Puma pair to begin.</p>';
      if (cartSubtotalEl) cartSubtotalEl.textContent = '₹0';
      if (cartTotalEl) cartTotalEl.textContent = '₹0';
      if (discountRowEl) discountRowEl.hidden = true;
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    }

    if (checkoutBtn) checkoutBtn.disabled = false;

    cartItemsContainer.innerHTML = '';
    cart.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" referrerpolicy="no-referrer" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-color">${item.color} · ${item.size}</div>
          <div class="cart-item-bottom">
            <div class="qty-stepper">
              <button type="button" class="qty-btn qty-dec" aria-label="Decrease quantity">−</button>
              <span class="qty-val">${item.qty}</span>
              <button type="button" class="qty-btn qty-inc" aria-label="Increase quantity">+</button>
            </div>
            <span class="cart-item-price">${formatINR(item.price * item.qty)}</span>
          </div>
        </div>
      `;

      row.querySelector('.qty-dec')?.addEventListener('click', () => updateItemQty(item.key, -1));
      row.querySelector('.qty-inc')?.addEventListener('click', () => updateItemQty(item.key, 1));
      cartItemsContainer.appendChild(row);
    });

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const hasDiscount = Boolean(applyVolt20Checkbox?.checked);
    const discountAmount = hasDiscount ? Math.round(subtotal * 0.2) : 0;
    const finalTotal = subtotal - discountAmount;

    if (cartSubtotalEl) cartSubtotalEl.textContent = formatINR(subtotal);
    if (discountRowEl) discountRowEl.hidden = !hasDiscount;
    if (cartDiscountEl) cartDiscountEl.textContent = `-${formatINR(discountAmount)}`;
    if (cartTotalEl) cartTotalEl.textContent = formatINR(finalTotal);
  }

  openCartBtn?.addEventListener('click', () => {
    if (!cartBackdrop) return;
    cartBackdrop.hidden = false;
    if (checkoutStatusEl) checkoutStatusEl.textContent = '';
  });

  closeCartBtn?.addEventListener('click', () => {
    if (cartBackdrop) cartBackdrop.hidden = true;
  });

  cartBackdrop?.addEventListener('click', (e) => {
    if (e.target === cartBackdrop) cartBackdrop.hidden = true;
  });

  openWishlistBtn?.addEventListener('click', () => {
    if (wishlistBackdrop) wishlistBackdrop.hidden = false;
  });

  closeWishlistBtn?.addEventListener('click', () => {
    if (wishlistBackdrop) wishlistBackdrop.hidden = true;
  });

  wishlistBackdrop?.addEventListener('click', (e) => {
    if (e.target === wishlistBackdrop) wishlistBackdrop.hidden = true;
  });

  applyVolt20Checkbox?.addEventListener('change', renderCart);

  checkoutBtn?.addEventListener('click', () => {
    if (cart.length === 0) return;
    const orderNum = Math.floor(1000 + Math.random() * 9000);
    cart = [];
    saveStorage(CART_KEY, cart);
    renderCart();
    if (checkoutStatusEl) {
      checkoutStatusEl.textContent = `Order #VX-${orderNum} confirmed! Thank you for shopping with VOLT X.`;
    }
    showToast(`Order #VX-${orderNum} confirmed!`);
  });

  promoShopBtn?.addEventListener('click', () => {
    if (applyVolt20Checkbox) {
      applyVolt20Checkbox.checked = true;
      renderCart();
    }
    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
    showToast('20% OFF promo code (VOLT20) activated in your cart!');
  });

  inspectLimitedBtn?.addEventListener('click', () => {
    open3dInspector(SHOE_CATALOG[0], SHOE_CATALOG[0].colors[0].label, 'none');
  });

  // ---------------------------------------------------------
  // 8. Newsletter Validation & Scroll Animations
  // ---------------------------------------------------------
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterFeedback) return;

    const email = newsletterEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    newsletterFeedback.classList.remove('is-error', 'is-success');

    if (!email) {
      newsletterFeedback.textContent = 'Please enter your email address.';
      newsletterFeedback.classList.add('is-error');
      newsletterEmail.focus();
      return;
    }

    if (!emailRegex.test(email)) {
      newsletterFeedback.textContent = 'Please enter a valid email address (e.g. athlete@domain.com).';
      newsletterFeedback.classList.add('is-error');
      newsletterEmail.focus();
      return;
    }

    newsletterFeedback.textContent = `Welcome to VOLT X! Use code VOLT20 for 20% off your first pair.`;
    newsletterFeedback.classList.add('is-success');
    showToast('Subscribed to VOLT X Movement!');
    newsletterForm.reset();
  });

  const revealItems = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!backToTopBtn) return;
      backToTopBtn.hidden = window.scrollY < 420;
    },
    { passive: true }
  );

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------------------------------------------------------
  // 9. Three.js Genuine GLB Sneaker 360° Showcase & Modal
  // ---------------------------------------------------------
  const DEFAULT_SNEAKER_GLB = '/src/assets/models/voltx_sneaker.glb';
  const gltfLoader = new GLTFLoader();
  const sharedGlbCache = new Map();

  function detectWebGLProfile() {
    try {
      const probe = document.createElement('canvas');
      const gl = probe.getContext('webgl2') || probe.getContext('webgl');
      if (!gl) return { supported: false, isSoftwareGl: false };
      const debugExt = gl.getExtension('WEBGL_debug_renderer_info');
      const rendererName = debugExt ? String(gl.getParameter(debugExt.UNMASKED_RENDERER_WEBGL)) : '';
      const isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(rendererName);
      return { supported: true, isSoftwareGl };
    } catch {
      return { supported: false, isSoftwareGl: false };
    }
  }

  const webglProfile = detectWebGLProfile();

  function createContactShadowTexture() {
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
      grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
    }
    return new THREE.CanvasTexture(shadowCanvas);
  }

  function loadGlbAssetCached(url, onProgress) {
    if (sharedGlbCache.has(url)) {
      return sharedGlbCache.get(url);
    }

    const promise = new Promise((resolve, reject) => {
      gltfLoader.load(
        url,
        (gltf) => resolve(gltf),
        (xhr) => {
          if (onProgress && xhr.lengthComputable && xhr.total > 0) {
            onProgress(Math.min(99, Math.round((xhr.loaded / xhr.total) * 100)));
          }
        },
        (error) => {
          sharedGlbCache.delete(url);
          reject(error);
        }
      );
    });

    sharedGlbCache.set(url, promise);
    return promise;
  }

  const recoloredTextureCache = new Map();

  function hexToRgbTuple(hex) {
    const clean = String(hex || '#16161a').replace('#', '').trim();
    if (clean.length !== 6) return [22, 22, 26];
    const num = parseInt(clean, 16);
    if (Number.isNaN(num)) return [22, 22, 26];
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }

  function rgbLuma(rgb) {
    return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
  }

  function smoothstep(edge0, edge1, x) {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  function parseShoePalette(colorLabel, swatchCss) {
    const hexes = (String(swatchCss || '').match(/#[0-9a-fA-F]{6}/g) || []).map((h) => h.toLowerCase());
    const lower = String(colorLabel || '').toLowerCase();

    let upperHex = hexes[0] || '#16161a';
    let accentHex = hexes[1] || '#ff5500';
    let soleHex = '#f3f4f6';

    if (lower.includes('gum')) {
      soleHex = '#c59358';
    } else if (lower.includes('triple black') || lower.includes('triple dark')) {
      upperHex = '#121217';
      accentHex = '#3a3a45';
      soleHex = '#191920';
    } else if (lower.includes('espresso') && !lower.includes('sand')) {
      soleHex = '#d6c3b0';
    }

    // Keep neutral white accents balanced with subtle contrast on dark uppers if needed
    const accentLuma = rgbLuma(hexToRgbTuple(accentHex));
    const upperLuma = rgbLuma(hexToRgbTuple(upperHex));
    let rimHex = accentHex;
    if (accentLuma > 0.8 || accentLuma < 0.14) {
      rimHex = upperLuma > 0.25 && upperLuma < 0.78 ? upperHex : '#ff5500';
    }

    return { upperHex, accentHex, soleHex, rimHex };
  }

  function createRecoloredSneakerTexture(refMap, palette, maxAnisotropy = 4) {
    const img = refMap?.image;
    if (!img || !img.width || !img.height) return refMap;

    const cacheKey = `${palette.upperHex}_${palette.accentHex}_${palette.soleHex}`;
    if (recoloredTextureCache.has(cacheKey)) {
      return recoloredTextureCache.get(cacheKey);
    }

    const targetW = Math.min(1024, img.width);
    const targetH = Math.max(1, Math.round((img.height / img.width) * targetW));

    const canvas = document.createElement('canvas');
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return refMap;

    ctx.drawImage(img, 0, 0, targetW, targetH);
    const frame = ctx.getImageData(0, 0, targetW, targetH);
    const data = frame.data;

    const upperRgb = hexToRgbTuple(palette.upperHex);
    const accentRgb = hexToRgbTuple(palette.accentHex);
    const soleRgb = hexToRgbTuple(palette.soleHex);

    const upperLuma = rgbLuma(upperRgb);
    const accentLuma = rgbLuma(accentRgb);
    const soleLuma = rgbLuma(soleRgb);
    const lightUpperBlend = smoothstep(0.35, 0.74, upperLuma);
    const lightAccentBlend = smoothstep(0.45, 0.8, accentLuma);

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i] / 255;
      const g = data[i + 1] / 255;
      const b = data[i + 2] / 255;

      const maxC = Math.max(r, g, b);
      const minC = Math.min(r, g, b);
      const delta = maxC - minC;
      const sat = maxC > 0.001 ? delta / maxC : 0;
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      // diffuseStreet.jpg UV zones: Midsole/outsole white (#DDDDDD, lum ~0.87),
      // Upper knit (#5F5E5E..#A8A8A8, lum 0.37..0.66), Accent panels (sat >= 0.30).
      const soleWeight = smoothstep(0.76, 0.84, lum) * (1 - smoothstep(0.06, 0.16, sat));
      const accentWeight = smoothstep(0.18, 0.34, sat) * (1 - soleWeight);
      const upperWeight = Math.max(0, 1 - soleWeight - accentWeight);

      const darkUpperShade = 0.22 + lum * 0.96;
      const brightUpperShade = Math.min(1.06, 0.7 + lum * 0.48);
      const upperShade = darkUpperShade + (brightUpperShade - darkUpperShade) * lightUpperBlend;

      const vividAccentShade = Math.min(1.18, 0.5 + lum * 0.98);
      const lightAccentShade = Math.min(1.06, 0.66 + lum * 0.72);
      const accentShade = vividAccentShade + (lightAccentShade - vividAccentShade) * lightAccentBlend;

      const soleShade = soleLuma < 0.35 ? 0.5 + lum * 0.52 : Math.min(1.06, 0.38 + lum * 0.72);

      const outR =
        upperRgb[0] * upperShade * upperWeight +
        accentRgb[0] * accentShade * accentWeight +
        soleRgb[0] * soleShade * soleWeight;
      const outG =
        upperRgb[1] * upperShade * upperWeight +
        accentRgb[1] * accentShade * accentWeight +
        soleRgb[1] * soleShade * soleWeight;
      const outB =
        upperRgb[2] * upperShade * upperWeight +
        accentRgb[2] * accentShade * accentWeight +
        soleRgb[2] * soleShade * soleWeight;

      data[i] = Math.max(0, Math.min(255, Math.round(outR)));
      data[i + 1] = Math.max(0, Math.min(255, Math.round(outG)));
      data[i + 2] = Math.max(0, Math.min(255, Math.round(outB)));
    }

    ctx.putImageData(frame, 0, 0);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.flipY = Boolean(refMap.flipY);
    tex.wrapS = refMap.wrapS;
    tex.wrapT = refMap.wrapT;
    tex.anisotropy = maxAnisotropy;
    tex.needsUpdate = true;

    recoloredTextureCache.set(cacheKey, tex);
    return tex;
  }

  function createThreeShoeViewport({
    canvas,
    loadingEl,
    loadingProgressEl,
    fallbackEl,
    fallbackReasonEl,
    angleBadgeEl,
    modelBadgeEl,
    playPauseBtn,
    resetBtn,
    speedRangeEl,
    speedValueEl,
    viewBtns,
    viewAttr,
  }) {
    if (!canvas || !webglProfile.supported) {
      if (loadingEl) loadingEl.hidden = true;
      if (fallbackEl) fallbackEl.hidden = false;
      if (fallbackReasonEl) {
        fallbackReasonEl.textContent =
          'WebGL 3D rendering is unavailable on this browser. Displaying studio photography instead.';
      }
      return null;
    }

    const { isSoftwareGl } = webglProfile;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: !isSoftwareGl,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      if (loadingEl) loadingEl.hidden = true;
      if (fallbackEl) fallbackEl.hidden = false;
      return null;
    }

    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    const envTarget = pmremGenerator.fromScene(roomEnv, 0.04);
    scene.environment = envTarget.texture;
    scene.environmentIntensity = 1.0;
    roomEnv.dispose();

    const camera = new THREE.PerspectiveCamera(36, 16 / 10, 0.1, 40);
    const defaultCamSpherical = new THREE.Spherical(2.86, 1.28, 0.42);
    camera.position.setFromSpherical(defaultCamSpherical);

    const controls = new OrbitControls(camera, canvas);
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.065;
    controls.minDistance = 1.65;
    controls.maxDistance = 4.9;
    controls.minPolarAngle = 0.08;
    controls.maxPolarAngle = Math.PI - 0.08;
    controls.target.set(0, 0, 0);

    // Clean Product Studio Lighting + Dynamic Colored Rim Lighting
    const hemiLight = new THREE.HemisphereLight(0xf8fafc, 0x181515, 0.62);
    scene.add(hemiLight);

    const keySpot = new THREE.SpotLight(0xfff7ed, 54, 16, Math.PI / 4, 0.68, 1.3);
    keySpot.position.set(2.4, 3.7, 3.1);
    keySpot.castShadow = !isSoftwareGl;
    if (!isSoftwareGl) {
      keySpot.shadow.mapSize.set(1024, 1024);
      keySpot.shadow.bias = -0.0004;
    }
    scene.add(keySpot);

    const rimOrangeSpot = new THREE.SpotLight(0xff5500, 32, 14, Math.PI / 3.4, 0.8, 1.3);
    rimOrangeSpot.position.set(-2.9, 1.9, -2.6);
    scene.add(rimOrangeSpot);

    const fillLight = new THREE.DirectionalLight(0xe2e8f0, 0.85);
    fillLight.position.set(-2.2, 1.1, 2.7);
    scene.add(fillLight);

    const soleFillLight = new THREE.PointLight(0xffffff, 1.5, 6);
    soleFillLight.position.set(0, -2.3, 0.2);
    scene.add(soleFillLight);

    // Subtle ground contact shadow plane (no oversized distracting pedestal)
    const contactShadowTex = createContactShadowTexture();
    const contactShadowMat = new THREE.MeshBasicMaterial({
      map: contactShadowTex,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
    });
    const contactShadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.45), contactShadowMat);
    contactShadowPlane.rotation.x = -Math.PI / 2;
    contactShadowPlane.position.set(0, -0.78, 0);
    scene.add(contactShadowPlane);

    // GLB Shoe Mount Container
    const shoeMount = new THREE.Group();
    scene.add(shoeMount);

    let activeGltf = null;
    let activeShoeScene = null;
    let activeLoadSeq = 0;
    let isCustomExternalGlb = false;
    let streetRefMaterial = null;
    let pendingPalette = null;
    let pendingBadgeLabel = '';

    const maxAniso = renderer.capabilities.getMaxAnisotropy();

    let revealScale = 1.0;
    let pointerHoverX = 0;
    let pointerHoverY = 0;
    let isPointerInside = false;

    function triggerModelReveal() {
      if (!prefersReducedMotion) {
        revealScale = 0.88;
        shoeMount.position.y = 0.12;
      }
    }

    async function applyShoePalette(palette, badgeLabel, pulseReveal = false) {
      pendingPalette = palette;
      pendingBadgeLabel = badgeLabel || '';
      if (badgeLabel && modelBadgeEl) {
        modelBadgeEl.textContent = badgeLabel;
      }
      if (pulseReveal) triggerModelReveal();

      if (!activeShoeScene || !activeGltf || isCustomExternalGlb) return;

      try {
        if (!streetRefMaterial) {
          streetRefMaterial = await activeGltf.parser.getDependency('material', 2);
        }
      } catch {
        streetRefMaterial = null;
      }

      const refMap = streetRefMaterial?.map;
      if (!refMap || !palette) return;

      const styledTex = createRecoloredSneakerTexture(refMap, palette, maxAniso);

      activeShoeScene.traverse((obj) => {
        if (!obj.isMesh) return;
        if (!obj.userData.voltxClonedMat) {
          const base = (streetRefMaterial || obj.material).clone();
          if (base.normalMap) base.normalMap.anisotropy = maxAniso;
          if (base.aoMap) base.aoMap.anisotropy = maxAniso;
          if (base.roughnessMap) base.roughnessMap.anisotropy = maxAniso;
          obj.material = base;
          obj.userData.voltxClonedMat = base;
        }
        obj.userData.voltxClonedMat.map = styledTex;
        obj.userData.voltxClonedMat.needsUpdate = true;
      });

      if (palette.rimHex) {
        rimOrangeSpot.color.set(palette.rimHex);
      }
    }

    function normalizeAndMountGltf(gltf, modelLabel, isCustomExternal = false, initialPalette = null) {
      const clonedScene = gltf.scene.clone(true);
      isCustomExternalGlb = Boolean(isCustomExternal);
      streetRefMaterial = null;

      // Re-normalize to preserve exact original proportions while framing generously
      const box = new THREE.Box3().setFromObject(clonedScene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      const normScale = 2.68 / maxDim;

      clonedScene.scale.setScalar(normScale);
      clonedScene.position.set(-center.x * normScale, -center.y * normScale, -center.z * normScale);

      clonedScene.traverse((obj) => {
        if (!obj.isMesh) return;
        obj.castShadow = !isSoftwareGl;
        obj.receiveShadow = !isSoftwareGl;
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach((mat) => {
          if (!mat) return;
          if (mat.map) mat.map.anisotropy = maxAniso;
          if (mat.normalMap) mat.normalMap.anisotropy = maxAniso;
        });
      });

      while (shoeMount.children.length > 0) {
        shoeMount.remove(shoeMount.children[0]);
      }
      shoeMount.add(clonedScene);
      activeGltf = gltf;
      activeShoeScene = clonedScene;

      const targetPalette = initialPalette || pendingPalette;
      const targetLabel = modelLabel || pendingBadgeLabel || '3D GLB Sneaker';
      if (!isCustomExternalGlb && targetPalette) {
        applyShoePalette(targetPalette, targetLabel, true);
      } else {
        if (modelBadgeEl) modelBadgeEl.textContent = targetLabel;
        triggerModelReveal();
      }

      if (!isSoftwareGl) {
        renderer.compile(scene, camera);
      }

      if (fallbackEl) fallbackEl.hidden = true;
      if (loadingEl) loadingEl.hidden = true;
    }

    async function loadGlbFromUrl(url, modelLabel, isCustomExternal = false, initialPalette = null) {
      const seq = ++activeLoadSeq;
      if (loadingEl) loadingEl.hidden = false;
      if (loadingProgressEl) loadingProgressEl.textContent = 'Downloading GLB mesh...';
      if (fallbackEl) fallbackEl.hidden = true;

      try {
        const gltf = await loadGlbAssetCached(url, (pct) => {
          if (seq === activeLoadSeq && loadingProgressEl) {
            loadingProgressEl.textContent = `Loading 3D Sneaker... ${pct}%`;
          }
        });
        if (seq !== activeLoadSeq) return;
        normalizeAndMountGltf(gltf, modelLabel, isCustomExternal, initialPalette);
      } catch (err) {
        if (seq !== activeLoadSeq) return;
        if (loadingEl) loadingEl.hidden = true;
        if (fallbackReasonEl) {
          fallbackReasonEl.textContent =
            'Unable to load the .GLB sneaker file (' +
            (err?.message || 'network or parse error') +
            '). Use "Load .GLB" to import a valid .glb/.gltf running shoe model.';
        }
        if (fallbackEl) fallbackEl.hidden = false;
        if (modelBadgeEl) modelBadgeEl.textContent = 'GLB Load Failed · Fallback';
      }
    }

    // Camera Animation & Real-Time Sneaker Kinematics Controls
    let isPlaying = !prefersReducedMotion;
    let rotationSpeed = 1.0;
    let isUserInteracting = false;
    let isViewportVisible = true;
    let cameraGoal = null;
    let animElapsed = 0;

    const currentSpherical = new THREE.Spherical();
    const offsetVec = new THREE.Vector3();

    const CAM_PRESETS = {
      front: { radius: 2.86, phi: 1.38, theta: Math.PI / 2 },
      right: { radius: 2.86, phi: 1.28, theta: 0.28 },
      back: { radius: 2.86, phi: 1.38, theta: -Math.PI / 2 },
      left: { radius: 2.86, phi: 1.28, theta: Math.PI },
      top: { radius: 3.0, phi: 0.14, theta: 0.05 },
      bottom: { radius: 3.0, phi: Math.PI - 0.16, theta: 0.05 },
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      isPointerInside = true;
      pointerHoverX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerHoverY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onPointerLeave = () => {
      isPointerInside = false;
      pointerHoverX = 0;
      pointerHoverY = 0;
    };
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);

    function syncPlayPauseButton() {
      if (!playPauseBtn) return;
      playPauseBtn.classList.toggle('is-spinning', isPlaying);
      playPauseBtn.setAttribute('aria-pressed', String(isPlaying));
      playPauseBtn.textContent = isPlaying ? 'Pause Rotation' : 'Play Rotation';
    }
    syncPlayPauseButton();

    playPauseBtn?.addEventListener('click', () => {
      isPlaying = !isPlaying;
      syncPlayPauseButton();
    });

    function goToPreset(viewKey, resumeSpin = false) {
      const preset = CAM_PRESETS[viewKey] || CAM_PRESETS.right;
      cameraGoal = {
        radius: preset.radius,
        phi: preset.phi,
        theta: preset.theta + shoeMount.rotation.y,
      };
      if (!resumeSpin) {
        isPlaying = false;
        syncPlayPauseButton();
      }
      viewBtns?.forEach((b) => {
        b.classList.toggle('is-active', b.getAttribute(viewAttr) === viewKey);
      });
    }

    viewBtns?.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute(viewAttr) || 'right';
        goToPreset(key, false);
      });
    });

    resetBtn?.addEventListener('click', () => {
      shoeMount.rotation.y = 0;
      cameraGoal = {
        radius: defaultCamSpherical.radius,
        phi: defaultCamSpherical.phi,
        theta: defaultCamSpherical.theta,
      };
      isPlaying = !prefersReducedMotion;
      syncPlayPauseButton();
      viewBtns?.forEach((b) => {
        b.classList.toggle('is-active', b.getAttribute(viewAttr) === 'right');
      });
    });

    speedRangeEl?.addEventListener('input', (e) => {
      rotationSpeed = Number(e.target.value) || 1.0;
      if (speedValueEl) speedValueEl.textContent = `${rotationSpeed.toFixed(1)}×`;
    });

    controls.addEventListener('start', () => {
      isUserInteracting = true;
      cameraGoal = null;
    });
    controls.addEventListener('end', () => {
      isUserInteracting = false;
    });

    function syncSize() {
      const host = canvas.parentElement;
      if (!host) return;
      const w = Math.max(1, host.clientWidth);
      const h = Math.max(1, host.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }

    syncSize();
    const resizeObserver = new ResizeObserver(syncSize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    const visObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isViewportVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    visObserver.observe(canvas);

    function getOrbitZoneLabel(deg, polar) {
      if (polar < 0.55) return 'TOP';
      if (polar > Math.PI - 0.55) return 'BOTTOM SOLE';
      if (deg >= 45 && deg < 135) return 'FRONT';
      if (deg >= 135 && deg < 225) return 'LEFT';
      if (deg >= 225 && deg < 315) return 'BACK';
      return 'RIGHT';
    }

    let lastTime = performance.now();
    let rafId = null;

    function afterDraw(cb) {
      const gl = renderer.getContext();
      if (!gl || !gl.fenceSync) {
        rafId = window.setTimeout(cb, 80);
        return;
      }
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync ? gl.getSyncParameter(sync, gl.SYNC_STATUS) : gl.SIGNALED;
        if (state === gl.UNSIGNALED) {
          rafId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          rafId = window.setTimeout(cb, 80);
        }
      };
      rafId = window.setTimeout(poll, 5);
    }

    function scheduleNextFrame() {
      if (isSoftwareGl) {
        afterDraw(() => {
          rafId = window.requestAnimationFrame(tick);
        });
      } else {
        rafId = window.requestAnimationFrame(tick);
      }
    }

    function tick(now) {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      if (!isViewportVisible || document.hidden) {
        scheduleNextFrame();
        return;
      }

      if (isPlaying && !isUserInteracting && !cameraGoal) {
        animElapsed += dt * rotationSpeed;
        shoeMount.rotation.y += dt * 0.65 * rotationSpeed;
      }

      // Smooth spring entrance scale when switching models/loading
      revealScale = THREE.MathUtils.damp(revealScale, 1.0, 9, dt);
      shoeMount.scale.setScalar(revealScale);

      // Levitation hover + sprint-stance dynamic banking + subtle cursor parallax
      const floatActive = isPlaying && !isUserInteracting && !cameraGoal && !prefersReducedMotion;
      const targetFloatY = floatActive ? Math.sin(animElapsed * 1.85) * 0.058 : 0;
      const targetPitchZ =
        (floatActive ? 0.055 + Math.sin(animElapsed * 1.25) * 0.045 : 0) +
        (isPointerInside && !isUserInteracting ? -pointerHoverY * 0.065 : 0);
      const targetRollX =
        (floatActive ? Math.cos(animElapsed * 1.05) * 0.035 : 0) +
        (isPointerInside && !isUserInteracting ? pointerHoverX * 0.055 : 0);

      shoeMount.position.y = THREE.MathUtils.damp(shoeMount.position.y, targetFloatY, 7, dt);
      shoeMount.rotation.z = THREE.MathUtils.damp(shoeMount.rotation.z, targetPitchZ, 7, dt);
      shoeMount.rotation.x = THREE.MathUtils.damp(shoeMount.rotation.x, targetRollX, 7, dt);

      // Dynamic ground contact shadow synchronized to sneaker hover height
      const shadowScale = Math.max(0.84, 1 - shoeMount.position.y * 0.75);
      contactShadowPlane.scale.set(shadowScale, shadowScale, 1);
      contactShadowMat.opacity = Math.max(0.42, Math.min(0.76, 0.68 - shoeMount.position.y * 1.5));

      // Dynamic studio rim spotlight sweep across knit & tread highlights
      rimOrangeSpot.position.x = -2.5 + Math.sin(animElapsed * 0.9) * 0.65;
      rimOrangeSpot.intensity = 34 + Math.sin(animElapsed * 1.7) * 6;

      if (cameraGoal) {
        offsetVec.copy(camera.position).sub(controls.target);
        currentSpherical.setFromVector3(offsetVec);
        currentSpherical.radius = THREE.MathUtils.damp(currentSpherical.radius, cameraGoal.radius, 8, dt);
        currentSpherical.phi = THREE.MathUtils.damp(currentSpherical.phi, cameraGoal.phi, 8, dt);

        let dTheta = cameraGoal.theta - currentSpherical.theta;
        while (dTheta > Math.PI) dTheta -= Math.PI * 2;
        while (dTheta < -Math.PI) dTheta += Math.PI * 2;
        currentSpherical.theta += dTheta * Math.min(1, dt * 8);

        offsetVec.setFromSpherical(currentSpherical);
        camera.position.copy(controls.target).add(offsetVec);

        if (
          Math.abs(currentSpherical.phi - cameraGoal.phi) < 0.015 &&
          Math.abs(dTheta) < 0.015 &&
          Math.abs(currentSpherical.radius - cameraGoal.radius) < 0.02
        ) {
          cameraGoal = null;
        }
      }

      controls.update();

      offsetVec.copy(camera.position).sub(controls.target);
      currentSpherical.setFromVector3(offsetVec);
      contactShadowPlane.visible = currentSpherical.phi < Math.PI * 0.56;

      const combinedRad = currentSpherical.theta - shoeMount.rotation.y;
      const deg = Math.round(((combinedRad * 180) / Math.PI % 360 + 360) % 360);
      const zone = getOrbitZoneLabel(deg, currentSpherical.phi);
      if (angleBadgeEl) {
        angleBadgeEl.textContent = `360° VIEW · ${deg}° · ${zone}`;
      }

      renderer.render(scene, camera);
      scheduleNextFrame();
    }

    rafId = window.requestAnimationFrame(tick);

    return {
      loadGlbFromUrl,
      applyShoePalette,
      resetView: () => resetBtn?.click(),
      setPlaying: (nextPlay) => {
        isPlaying = nextPlay;
        syncPlayPauseButton();
      },
      syncSize,
      dispose: () => {
        if (rafId) {
          window.cancelAnimationFrame(rafId);
          window.clearTimeout(rafId);
        }
        canvas.removeEventListener('pointermove', onPointerMove);
        canvas.removeEventListener('pointerleave', onPointerLeave);
        resizeObserver.disconnect();
        visObserver.disconnect();
        controls.dispose();
        contactShadowTex.dispose();
        contactShadowMat.dispose();
        envTarget.dispose();
        pmremGenerator.dispose();
        renderer.dispose();
      },
    };
  }

  // Initialize Flagship Hero 3D Showroom with genuine GLB athletic sneaker
  const hero3dController = createThreeShoeViewport({
    canvas: heroThreeCanvas,
    loadingEl: heroModelLoading,
    loadingProgressEl: heroLoadingProgress,
    fallbackEl: heroWebglFallback,
    fallbackReasonEl: heroFallbackReason,
    angleBadgeEl: heroAngleBadge,
    modelBadgeEl: heroModelBadge,
    playPauseBtn: heroPlayPauseBtn,
    resetBtn: heroResetViewBtn,
    speedRangeEl: heroSpeedRange,
    speedValueEl: heroSpeedValue,
    viewBtns: heroCamViewBtns,
    viewAttr: 'data-cam-view',
  });

  function setHeroBrandShowcase(shoe, colorObj = null) {
    if (!shoe) return;
    const chosenColorObj = colorObj || shoe.colors[0];
    activeHeroShoe = shoe;
    activeHeroColor = chosenColorObj.label;
    activeHeroSwatch = chosenColorObj.swatch;
    activeHeroTint = chosenColorObj.tint || 'none';

    heroBrandProductBtns.forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-hero-shoe') === shoe.id);
    });

    if (heroRealShoeThumb) {
      heroRealShoeThumb.src = shoe.image;
      heroRealShoeThumb.alt = `${shoe.name} real shoe preview`;
      heroRealShoeThumb.style.filter = activeHeroTint !== 'none' ? activeHeroTint : 'none';
    }
    if (heroActiveColorName) heroActiveColorName.textContent = activeHeroColor;
    if (heroActivePrice) heroActivePrice.textContent = formatINR(shoe.price);

    const palette = parseShoePalette(activeHeroColor, activeHeroSwatch);
    if (heroCustomColorInput) {
      heroCustomColorInput.value = palette.accentHex;
    }

    if (heroColorSwatches) {
      heroColorSwatches.innerHTML = shoe.colors
        .map(
          (c) => `
            <button
              type="button"
              class="swatch-btn ${c.label === activeHeroColor ? 'is-selected' : ''}"
              data-color="${c.label}"
              data-swatch="${c.swatch}"
              data-tint="${c.tint}"
              style="background: ${c.swatch}"
              aria-label="${shoe.name} — ${c.label}"
              title="${c.label}"
            ></button>
          `
        )
        .join('');

      heroColorSwatches.querySelectorAll('.swatch-btn').forEach((sw) => {
        sw.addEventListener('click', () => {
          const picked = shoe.colors.find((c) => c.label === sw.dataset.color) || shoe.colors[0];
          setHeroBrandShowcase(shoe, picked);
        });
      });
    }

    hero3dController?.applyShoePalette(palette, `${shoe.name} · ${activeHeroColor}`, true);
  }

  heroBrandProductBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-hero-shoe');
      const found = SHOE_CATALOG.find((s) => s.id === targetId);
      if (found) setHeroBrandShowcase(found, found.colors[0]);
    });
  });

  heroCustomColorInput?.addEventListener('input', (e) => {
    const customHex = String(e.target.value || '#ff5500').toLowerCase();
    const basePalette = parseShoePalette(activeHeroColor, activeHeroSwatch);
    const customPalette = {
      ...basePalette,
      accentHex: customHex,
      rimHex: customHex,
    };
    activeHeroColor = `Custom (${customHex.toUpperCase()})`;
    if (heroActiveColorName) heroActiveColorName.textContent = activeHeroColor;
    heroColorSwatches?.querySelectorAll('.swatch-btn').forEach((s) => s.classList.remove('is-selected'));
    hero3dController?.applyShoePalette(customPalette, `${activeHeroShoe.name} · ${activeHeroColor}`);
  });

  heroQuickAddBtn?.addEventListener('click', () => {
    if (!activeHeroShoe) return;
    addItemToCart({
      id: activeHeroShoe.id,
      name: activeHeroShoe.name,
      brand: activeHeroShoe.brand,
      price: activeHeroShoe.price,
      color: activeHeroColor,
      size: 'UK 9',
      image: activeHeroShoe.image,
    });
  });

  const glbQueryUrl = new URLSearchParams(window.location.search).get('glb');
  if (hero3dController) {
    setHeroBrandShowcase(SHOE_CATALOG[0], SHOE_CATALOG[0].colors[0]);
    if (glbQueryUrl) {
      hero3dController.loadGlbFromUrl(glbQueryUrl, 'Custom .GLB Model', true);
    } else {
      const initialPalette = parseShoePalette(activeHeroColor, activeHeroSwatch);
      hero3dController.loadGlbFromUrl(
        DEFAULT_SNEAKER_GLB,
        `${activeHeroShoe.name} · ${activeHeroColor}`,
        false,
        initialPalette
      );
    }
  }

  heroGlbInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file || !hero3dController) return;
    const objectUrl = URL.createObjectURL(file);
    hero3dController.loadGlbFromUrl(objectUrl, `GLB · ${file.name.slice(0, 18)}`, true);
  });

  function attachCard3dPhysics(card) {
    if (prefersReducedMotion) return;
    const media = card.querySelector('.product-media');
    const img = card.querySelector('.product-img');

    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      const ry = (nx - 0.5) * 11;
      const rx = (0.5 - ny) * 9;

      card.style.transform = `perspective(950px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-5px)`;
      if (img) {
        img.style.transform = `translate3d(${((0.5 - nx) * 8).toFixed(1)}px, ${((0.5 - ny) * 6).toFixed(1)}px, 24px) scale(1.07)`;
      }
      if (media) {
        media.style.setProperty('--sheen-x', `${(nx * 100).toFixed(1)}%`);
        media.style.setProperty('--sheen-y', `${(ny * 100).toFixed(1)}%`);
      }
    });

    card.addEventListener('pointerleave', () => {
      card.style.transition =
        'transform 340ms cubic-bezier(0.16, 1, 0.3, 1), border-color 220ms ease, box-shadow 220ms ease';
      card.style.transform = '';
      if (img) img.style.transform = '';
      window.setTimeout(() => {
        card.style.transition = 'border-color 220ms ease, box-shadow 220ms ease';
      }, 340);
    });
  }

  // Lazy-initialized Three.js GLB Inspector inside Product Detail Modal
  let modal3dController = null;

  function setModalViewMode(mode) {
    const is3d = mode === '3d';
    modalMode3dBtn?.classList.toggle('is-active', is3d);
    modalMode3dBtn?.setAttribute('aria-selected', String(is3d));
    modalModeGalleryBtn?.classList.toggle('is-active', !is3d);
    modalModeGalleryBtn?.setAttribute('aria-selected', String(!is3d));

    if (modalPhotoFrame) modalPhotoFrame.hidden = is3d;
    if (modalAngleBadge) modalAngleBadge.hidden = !is3d;
    if (modalModelBadge) modalModelBadge.hidden = !is3d;
    if (modal3dControlsBar) modal3dControlsBar.hidden = !is3d;
    if (modal3dController) {
      modal3dController.setPlaying(is3d && !prefersReducedMotion);
      if (is3d) window.requestAnimationFrame(() => modal3dController?.syncSize());
    }
  }

  modalMode3dBtn?.addEventListener('click', () => setModalViewMode('3d'));
  modalModeGalleryBtn?.addEventListener('click', () => setModalViewMode('photo'));

  function open3dInspector(shoe, initialColor, initialTint) {
    if (!shoe3dModal) return;
    activeModalShoe = shoe;
    activeModalColor = initialColor || shoe.colors[0].label;
    const matchedColorObj = shoe.colors.find((c) => c.label === activeModalColor) || shoe.colors[0];
    activeModalSwatch = matchedColorObj.swatch;
    activeModalTint = initialTint || matchedColorObj.tint || 'none';
    activeModalSize = 'UK 9';

    recordRecentlyViewed(shoe.id);

    if (modal3dMeta) modal3dMeta.textContent = `${shoe.brand} · ${shoe.category}`;
    if (modal3dTitle) modal3dTitle.textContent = shoe.name;
    if (modal3dPrice) modal3dPrice.textContent = formatINR(shoe.price);
    if (modal3dRating) modal3dRating.textContent = `★ ${shoe.rating}`;
    if (modal3dDesc) modal3dDesc.textContent = shoe.description;
    if (modal3dColorLabel) modal3dColorLabel.textContent = activeModalColor;

    if (modalSpecsMini) {
      modalSpecsMini.innerHTML = `
        <div><span class="spec-mini-label">Weight</span><span class="spec-mini-val">${shoe.weightGrams} g</span></div>
        <div><span class="spec-mini-label">Drop</span><span class="spec-mini-val">${shoe.dropMm} mm</span></div>
        <div><span class="spec-mini-label">Score</span><span class="spec-mini-val">${shoe.popularity}/100</span></div>
      `;
    }

    if (modal3dImg) {
      modal3dImg.src = shoe.gallery[0];
      modal3dImg.alt = `${shoe.name} studio photograph`;
      modal3dImg.style.filter = activeModalTint !== 'none' ? activeModalTint : 'none';
    }
    if (modalFallbackImg) {
      modalFallbackImg.src = shoe.gallery[0];
      modalFallbackImg.alt = `${shoe.name} studio photograph`;
    }

    if (modalGalleryThumbs) {
      modalGalleryThumbs.innerHTML = shoe.gallery
        .map(
          (src, idx) => `
            <button type="button" class="gallery-thumb-btn ${idx === 0 ? 'is-active' : ''}" data-src="${src}" data-idx="${idx}" aria-label="View studio photo ${idx + 1}">
              <img src="${src}" alt="${shoe.name} studio photo ${idx + 1}" referrerpolicy="no-referrer" />
            </button>
          `
        )
        .join('');

      modalGalleryThumbs.querySelectorAll('.gallery-thumb-btn').forEach((thumb) => {
        thumb.addEventListener('click', () => {
          modalGalleryThumbs.querySelectorAll('.gallery-thumb-btn').forEach((t) => t.classList.remove('is-active'));
          thumb.classList.add('is-active');
          const nextSrc = thumb.dataset.src || shoe.image;
          if (modal3dImg) modal3dImg.src = nextSrc;
          setModalViewMode('photo');
        });
      });
    }

    if (modal3dSwatches) {
      modal3dSwatches.innerHTML = shoe.colors
        .map(
          (c) => `
            <button
              type="button"
              class="swatch-btn ${c.label === activeModalColor ? 'is-selected' : ''}"
              data-color="${c.label}"
              data-swatch="${c.swatch}"
              data-tint="${c.tint}"
              style="background: ${c.swatch}"
              aria-label="${c.label}"
            ></button>
          `
        )
        .join('');

      modal3dSwatches.querySelectorAll('.swatch-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          modal3dSwatches.querySelectorAll('.swatch-btn').forEach((s) => s.classList.remove('is-selected'));
          btn.classList.add('is-selected');
          activeModalColor = btn.dataset.color || shoe.colors[0].label;
          activeModalSwatch = btn.dataset.swatch || shoe.colors[0].swatch;
          activeModalTint = btn.dataset.tint || 'none';
          if (modal3dColorLabel) modal3dColorLabel.textContent = activeModalColor;
          if (modal3dImg) modal3dImg.style.filter = activeModalTint !== 'none' ? activeModalTint : 'none';
          const palette = parseShoePalette(activeModalColor, activeModalSwatch);
          modal3dController?.applyShoePalette(palette, `${shoe.name} · ${activeModalColor}`);
        });
      });
    }

    if (modalSizeGrid) {
      modalSizeGrid.innerHTML = SIZES.map(
        (s) => `
          <button type="button" class="modal-size-pill ${s === activeModalSize ? 'is-active' : ''}" data-size="${s}">
            ${s}
          </button>
        `
      ).join('');

      modalSizeGrid.querySelectorAll('.modal-size-pill').forEach((pill) => {
        pill.addEventListener('click', () => {
          modalSizeGrid.querySelectorAll('.modal-size-pill').forEach((p) => p.classList.remove('is-active'));
          pill.classList.add('is-active');
          activeModalSize = pill.dataset.size || 'UK 9';
        });
      });
    }

    if (modalWishlistBtn) {
      modalWishlistBtn.textContent = wishlist.includes(shoe.id) ? 'Saved in Wishlist ♥' : 'Save to Wishlist';
    }
    if (modalCompareBtn) {
      modalCompareBtn.textContent = compareList.includes(shoe.id) ? 'In Compare ✓' : 'Add to Compare';
    }

    shoe3dModal.hidden = false;

    const initialPalette = parseShoePalette(activeModalColor, activeModalSwatch);
    const initialBadge = `${shoe.name} · ${activeModalColor}`;
    if (!modal3dController && modalThreeCanvas) {
      modal3dController = createThreeShoeViewport({
        canvas: modalThreeCanvas,
        loadingEl: modalModelLoading,
        loadingProgressEl: modalLoadingProgress,
        fallbackEl: modalWebglFallback,
        fallbackReasonEl: modalFallbackReason,
        angleBadgeEl: modalAngleBadge,
        modelBadgeEl: modalModelBadge,
        playPauseBtn: modalSpinToggleBtn,
        resetBtn: modalResetViewBtn,
        speedRangeEl: null,
        speedValueEl: null,
        viewBtns: modalPresetViewBtns,
        viewAttr: 'data-modal-view',
      });
      modal3dController?.loadGlbFromUrl(DEFAULT_SNEAKER_GLB, initialBadge, false, initialPalette);
    } else {
      modal3dController?.applyShoePalette(initialPalette, initialBadge);
    }

    modal3dController?.resetView();
    setModalViewMode('3d');
  }

  function close3dInspector() {
    if (shoe3dModal) shoe3dModal.hidden = true;
    modal3dController?.setPlaying(false);
  }

  openHero3dBtn?.addEventListener('click', () => {
    open3dInspector(activeHeroShoe || SHOE_CATALOG[0], activeHeroColor || SHOE_CATALOG[0].colors[0].label, activeHeroTint);
  });

  modalPinHeroBtn?.addEventListener('click', () => {
    if (!activeModalShoe) return;
    const colorObj = {
      label: activeModalColor,
      swatch: activeModalSwatch || activeModalShoe.colors[0].swatch,
      tint: activeModalTint,
    };
    setHeroBrandShowcase(activeModalShoe, colorObj);
    close3dInspector();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Loaded ${activeModalShoe.name} (${activeModalColor}) in Hero 3D`);
  });

  close3dModalBtn?.addEventListener('click', close3dInspector);

  shoe3dModal?.addEventListener('click', (e) => {
    if (e.target === shoe3dModal) close3dInspector();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (shoe3dModal && !shoe3dModal.hidden) close3dInspector();
      if (cartBackdrop && !cartBackdrop.hidden) cartBackdrop.hidden = true;
      if (wishlistBackdrop && !wishlistBackdrop.hidden) wishlistBackdrop.hidden = true;
      if (compareModal && !compareModal.hidden) compareModal.hidden = true;
    }
  });

  modal3dAddBtn?.addEventListener('click', () => {
    if (!activeModalShoe) return;
    addItemToCart({
      id: activeModalShoe.id,
      name: activeModalShoe.name,
      brand: activeModalShoe.brand,
      price: activeModalShoe.price,
      color: activeModalColor,
      size: activeModalSize,
      image: activeModalShoe.image,
    });
    close3dInspector();
  });

  modalWishlistBtn?.addEventListener('click', () => {
    if (activeModalShoe) toggleWishlist(activeModalShoe.id);
  });

  modalCompareBtn?.addEventListener('click', () => {
    if (activeModalShoe) toggleCompare(activeModalShoe.id);
  });

  // ---------------------------------------------------------
  // 10. Toast Notification & Initial Boot
  // ---------------------------------------------------------
  function showToast(message) {
    if (!toastBanner) return;
    toastBanner.textContent = message;
    toastBanner.hidden = false;

    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toastBanner.hidden = true;
    }, 2600);
  }

  renderAllProductGrids();
  renderCart();
  renderWishlist();
  renderRecentlyViewed();
  renderCompareTray();
});
