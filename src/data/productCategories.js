export const productCategories = [
    
  {
    title: "Pharmaceutical & Hygiene Machines",
    products: [
      "Syrup Making Machine",
      "Tablet Making Machine",
      "Sanitary Pad Machine",
      "Mask Making Machine",
      "Diaper Making Machine",
    ],
  },
  {
    title: "Paper & Packaging Machines",
    products: [
      "Tissue Paper Making Machine",
      "Paper Plate Machine",
      "Paper Cup Machine",
      "Carry Bag Machine",
    ],
  },
  {
    title: "Plastic Manufacturing Machines",
    products: [
      "PVC Pipe Machine",
      "Bucket Manufacturing Machine",
      "Bottle Making Machine",
    ],
  },
  {
    title: "Electrical & Footwear Machines",
    products: [
      "LED Bulb Machine",
      "Mobile Charger Making Machine",
      "Slipper Machine",
      "Shoe Making Machine",
    ],
  },
];

export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
