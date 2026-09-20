export type MenuItem = {
  name: string;
  description: string;
  greek: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  note: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "insalate",
    label: "Insalate",
    note: "Salads",
    items: [
      {
        name: "Spring salad",
        description:
          "Mixed red leaves, supermix greens, fresh strawberries, Parmesan flakes and pear vinaigrette",
        greek:
          "Ανοιξιάτικα κόκκινα φύλλα με supermix, φράουλες, flakes παρμεζάνας και vinaigrette αχλαδιού",
        price: "13€",
      },
      {
        name: "Mesclun salad",
        description: "Fresh goat cheese, cucumber, mint, basil and mandarin vinaigrette",
        greek: "Mesclun με φρέσκο κατσικίσιο τυρί, αγγούρι, δυόσμο, βασιλικό και βινεγκρέτ μανταρινιού",
        price: "14€",
      },
      {
        name: "Burrata",
        description: "Cherry tomatoes, Italian dressing and basil-infused olive oil",
        greek: "Burrata με ντοματίνια, ιταλικό dressing και αρωματικό λάδι βασιλικού",
        price: "15€",
      },
      {
        name: "Caesar salad",
        description: "Iceberg lettuce, Parmigiano Reggiano flakes, crostini and smoked pancetta",
        greek: "Σαλάτα Caesar με iceberg, νιφάδες Parmigiano Reggiano, crostini και καπνιστή πανσέτα",
        price: "16€",
      },
    ],
  },
  {
    id: "antipasti",
    label: "Antipasti",
    note: "To start",
    items: [
      {
        name: "Bastoncino",
        description: "With extra virgin olive oil",
        greek: "Βastoncino με έξτρα παρθένο ελαιόλαδο",
        price: "8€",
      },
      {
        name: "Melanzane alla Parmigiana",
        description: "Traditional baked eggplant with tomato sauce and Parmesan cheese",
        greek: "Melanzane alla Parmigiana",
        price: "14€",
      },
      {
        name: "Grilled shrimp",
        description: "Citrus vinaigrette, avocado and fresh herbs",
        greek: "Ψητές γαρίδες με βινεγκρέτ εσπεριδοειδών, αβοκάντο και αρωματικά βότανα",
        price: "16€",
      },
      {
        name: "Vitello Tonnato",
        description: "Sicilian tuna sauce, capers and lemon zest",
        greek: "Vitello Tonnato με σάλτσα τόνου Σικελίας, κάπαρη και ξύσμα λεμονιού",
        price: "17€",
      },
      {
        name: "Beef carpaccio",
        description: "Grana Parmesan, pecans and shallot dressing",
        greek: "Μοσχαρίσιο carpaccio με παρμεζάνα Grana, pecan και dressing εσαλότ",
        price: "18€",
      },
      {
        name: "Fish carpaccio",
        description: "Catch of the day with mandarin dressing, extra virgin olive oil, chives and chili",
        greek: "Καρπάτσιο ψαριού ημέρας με dressing μανταρινιού, παρθένο ελαιόλαδο, chives και chili",
        price: "18€",
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    note: "Made fresh",
    items: [
      {
        name: "Linguine Cacio e Pepe",
        description: "Also available with fresh truffle",
        greek: "Linguine Cacio e Pepe (επιλογή και με φρέσκια τρούφα)",
        price: "14€ / 19€",
      },
      {
        name: "Tagliatelle Bolognese",
        description: "With traditional Bolognese ragù",
        greek: "Tagliatelle Bolognese",
        price: "15€",
      },
      {
        name: "Neapolitan Mafalda",
        description: "Meatballs and traditional San Marzano tomato sauce",
        greek: "Neapolitan Mafalda με κεφτεδάκια και παραδοσιακή σάλτσα San Marzano",
        price: "16€",
      },
      {
        name: "Spaghetti Carbonara",
        description: "With smoked guanciale",
        greek: "Spaghetti Carbonara με καπνιστό guanciale",
        price: "16€",
      },
      {
        name: "Spaghetti alle Vongole",
        description: "White wine sauce and chili",
        greek: "Spaghetti alle Vongole με σάλτσα λευκού κρασιού και τσίλι",
        price: "17€",
      },
      {
        name: "Linguine with fresh shrimp",
        description: "Bisque sauce, fennel and three peppers",
        greek: "Linguine με φρέσκες γαρίδες, bisque, μάραθο και τρία πιπέρια",
        price: "18€",
      },
      {
        name: "Conchiglie",
        description: "Catch-of-the-day fish, capers, almonds and lemon pesto",
        greek: "Conchiglie με ψάρι ημέρας, κάπαρη, αμύγδαλο και pesto λεμονιού",
        price: "19€",
      },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    note: "Wood-fired",
    items: [
      {
        name: "Margherita",
        description: "Fresh burrata and basil",
        greek: "Margherita με φρέσκια burrata και βασιλικό",
        price: "12€",
      },
      {
        name: "Spicy salami",
        description: "Fresh tomato sauce and mozzarella",
        greek: "Πικάντικη με σαλάμι, σάλτσα φρέσκιας ντομάτας και mozzarella",
        price: "16€",
      },
      {
        name: "Prosciutto di San Daniele",
        description: "Burrata mozzarella and fresh tomato",
        greek: "Prosciutto di San Daniele, burrata και φρέσκια ντομάτα",
        price: "16€",
      },
      {
        name: "Wild mushrooms & Parmesan",
        description: "Also available with fresh truffle",
        greek: "Άγρια μανιτάρια και παρμεζάνα (επιλογή και με φρέσκια τρούφα)",
        price: "17€ / 22€",
      },
      {
        name: "Mortadella",
        description: "Zucchini, Aegina pistachios and basil pesto",
        greek: "Μορταδέλα, κολοκυθάκι, φυστίκι Αιγίνης και πέστο βασιλικού",
        price: "17€",
      },
    ],
  },
  {
    id: "pesce-carne",
    label: "Pesce & Carne",
    note: "Fish & meat",
    items: [
      {
        name: "Grilled organic chicken breast",
        description: "Sweet potato purée, roasted vegetables and thyme sauce",
        greek: "Ψητό βιολογικό στήθος κοτόπουλου με πουρέ γλυκοπατάτας, ψητά λαχανικά και σάλτσα θυμαριού",
        price: "19€",
      },
      {
        name: "Iberico pork cotoletta",
        description: "Served with tonnata mayonnaise",
        greek: "Cotoletta από χοιρινό Iberico με μαγιονέζα tonnata",
        price: "24€",
      },
      {
        name: "Catch-of-the-day fish",
        description: "Seasonal vegetables, lemon sabayon and capers",
        greek: "Ψάρι ημέρας με λαχανικά εποχής, sabayon λεμονιού και κάπαρη",
        price: "26€",
      },
      {
        name: "Black Angus flap steak",
        description: "Vegetables and demi-glace sauce",
        greek: "Flap Steak Black Angus με λαχανικά και σάλτσα demi-glace",
        price: "29€",
      },
    ],
  },
  {
    id: "contorni",
    label: "Contorni",
    note: "Sides",
    items: [
      { name: "French fries", description: "", greek: "Πατάτες τηγανητές", price: "6€" },
      { name: "Grilled vegetables", description: "", greek: "Ψητά λαχανικά", price: "6€" },
      {
        name: "Grilled Padrón peppers",
        description: "With fleur de sel",
        greek: "Ψητές πιπεριές Padrón με ανθό αλατιού",
        price: "7€",
      },
      {
        name: "Fire-grilled mushrooms",
        description: "With aromatic herbs",
        greek: "Ψητά μανιτάρια στη φωτιά με μυρωδικά",
        price: "9€",
      },
    ],
  },
  {
    id: "dolci",
    label: "Dolci",
    note: "Desserts",
    items: [
      { name: "Lemon Pie", description: "", greek: "Lemon Pie", price: "9€" },
      { name: "Dessert of the day", description: "", greek: "Γλυκό ημέρας", price: "9€" },
      { name: "Tiramisu", description: "", greek: "Tiramisu", price: "9€" },
      {
        name: "Artisan ice cream",
        description: "Madagascar vanilla / Aegina pistachio / dark chocolate",
        greek: "Επιλογή χειροποίητου παγωτού",
        price: "3€ / scoop",
      },
    ],
  },
];
