interface Services {
  title: string;
  id: string;
  categories: {
    title?: string;
    description?: string;
    service: {
      name: string;
      price: string;
      description?: string;
      options?: string[];
    }[];
  }[];
}

export const services: Services[] = [
  {
    title: "All about the hair",
    id: "hair",
    categories: [
      {
        title: "Cutting",
        service: [
          {
            name: "Cut and Blow Dry",
            price: "£37",
          },
          {
            name: "Re-Style and Blow Dry",
            price: "£42",
          },
          {
            name: "Ladies Wet/Dry Cut",
            price: "£22",
          },
          {
            name: "Mens Cut",
            price: "£15 - £22",
          },
          {
            name: "Child's Wet/Dry Cut under 10",
            price: "£17",
          },
        ],
      },
      {
        title: "Blow Drys and Styling",
        service: [
          {
            name: "Wash and Blow Dry",
            price: "£22",
          },
          {
            name: "Wash and Blow with Waves/Curls",
            price: "£29",
          },
          {
            name: "Straightening",
            price: "£12",
          },
          {
            name: "GHD Curls/Waves",
            price: "£20",
          },
          {
            name: "Hair Ups",
            price: "From £30",
          },
        ],
      },
      {
        title: "Colouring",
        service: [
          {
            name: "Root Application",
            price: "£39",
          },
          {
            name: "Full Head Tint",
            price: "£49",
          },
          {
            name: "T-Section",
            price: "£45",
          },
          {
            name: "Half Head Foils",
            price: "£49",
          },
          {
            name: "Full Head Foils",
            price: "£65",
          },
          {
            name: "Balayage/Ombre",
            price: "Consultation",
          },
          {
            name: "Toner",
            price: "From £15",
          },
        ],
      },
    ],
  },
  {
    title: "Nailed it",
    id: "nails",
    categories: [
      {
        title: "Gel Nails",
        service: [
          {
            name: "Gel Fingers",
            price: "£23",
          },
          {
            name: "Gel Toes",
            price: "£20",
          },
          {
            name: "Gel Fingers and Toes",
            price: "£43",
          },
          {
            name: "Hard Gel Overlay",
            price: "£25",
          },
          {
            name: "Hard Gel Fingers and Toes",
            price: "£45",
          },
          {
            name: "Gel Soak Off, File and Buff",
            price: "£12",
          },
        ],
      },
      {
        title: "Pedicures",
        service: [
          {
            name: "Basic Pedicure - 30 min",
            price: "£25",
            description:
              "foot soak, exfoliation, dry skin, cream massage, cuticles & file.",
          },
          {
            name: "Deluxe Pedicure - 60 min",
            price: "£35",
            description:
              "foot soak, exfoliation, dry skin, cream massage, foot mask and heated boots, cuticles & file.",
          },
        ],
      },
      {
        title: "Acrylics - Full Sets",
        service: [
          {
            name: "Full Set of Acrylic and Gel Polish",
            price: "£38",
          },
          {
            name: "Full Set of Acrylic with Design",
            price: "£38+",
          },
          {
            name: "Full Set of Acrylic Overlay and Gel Polish",
            price: "£33",
          },
          {
            name: "Full Set of French/Pink and white Ombre",
            price: "£40",
          },
          {
            name: "Soak Off File and Buff",
            price: "£15",
          },
        ],
      },
      {
        title: "Acrylics - Infills",
        service: [
          {
            name: "Acrylic Infill and Gel Polish 3 weeks",
            price: "£30",
          },
          {
            name: "Acrylic backfill and Gel Polish 4+ weeks",
            price: "£33",
          },
          {
            name: "Acrylic Ombre/Fresh infill",
            price: "£32",
          },
        ],
      },
    ],
  },
  {
    title: "Everything Beauty",
    id: "beauty",
    categories: [
      {
        title: "Waxing and Tinting",
        service: [
          {
            name: "Eyebrow Wax",
            price: "£10",
          },
          {
            name: "Eyebrow Tint",
            price: "£10",
          },
          {
            name: "Eyebrow Wax and Tint",
            price: "£15",
          },
          {
            name: "Eyelash Tint",
            price: "£12",
          },
          {
            name: "Lip or Chin Wax",
            price: "£6 or both £10",
          },
          {
            name: "Underarm Wax",
            price: "£10",
          },
          {
            name: "Forearm Wax",
            price: "£15",
          },
          {
            name: "Full Leg Wax",
            price: "£30",
          },
          {
            name: "1/2 Leg Wax",
            price: "£22",
          },
        ],
      },
      {
        title: "Lashes and Brows",
        service: [
          {
            name: "Eyebrow Lamination, Tint & Wax",
            price: "£35",
          },
          {
            name: "Lash Lift & Tint",
            price: "£35",
          },
        ],
      },
    ],
  },
  {
    title: "Love your Body",
    id: "body",
    categories: [
      {
        title: "Massage",
        service: [
          {
            name: "60 minute full body",
            price: "£45",
          },
          {
            name: "30 minute back, neck, & shoulders",
            price: "£35",
          },
        ],
      },
      {
        title: "Facials",
        service: [
          {
            name: "30 minute Eve Taylor Express",
            price: "£30",
          },
          {
            name: "60 minute Eve Taylor Express",
            price: "£45",
          },
          {
            name: "Dermaplaning",
            price: "£35",
          },
          {
            name: "Microneedling",
            price: "£60",
          },
          {
            name: "Laser Carbon Facial",
            price: "£50",
          },
        ],
      },
      {
        title: "Laser Hair Removal",
        description: "Single Session / Course of 8",
        service: [
          {
            name: "Lip or chin",
            price: "£30 / £210",
          },
          {
            name: "Cheeks",
            price: "£30 / £210",
          },
          {
            name: "Full Face",
            price: "£75 / £525",
          },
          {
            name: "Underarms",
            price: "£45 / £315",
          },
          {
            name: "Half Arm",
            price: "£50 / £350",
          },
          {
            name: "Full Arm",
            price: "£80 / £560",
          },
          {
            name: "Half Leg",
            price: "£55 / £385",
          },
          {
            name: "Full Leg",
            price: "£90 / £630",
          },
          {
            name: "Chest",
            price: "£60 /£420",
          },
          {
            name: "Shoulders",
            price: "£60 / £420",
          },
          {
            name: "Full Back",
            price: "£100 / £700",
          },
          {
            name: "Stomach",
            price: "£40 / £280",
          },
          {
            name: "Bikini",
            price: "£45 / £315",
          },
          {
            name: "Extended Bikini",
            price: "£65 / £520",
          },
          {
            name: "Full Hollywood",
            price: "£75 / £525",
          },
        ],
      },
      {
        title: "Laser Tattoo Removal",
        description: "Single Session / Course of 8",
        service: [
          {
            name: "Xsmall",
            price: "£35 / £175",
          },
          {
            name: "Small",
            price: "£45 / £225",
          },
          {
            name: "Medium",
            price: "£75 / £375",
          },
          {
            name: "Large",
            price: "£90 / £450",
          },
          {
            name: "Xlarge",
            price: "£110 / £550",
          },
        ],
      },
    ],
  },
  // {
  //     title: "Mens Groom Room",
  //     description: "Lorem ipsum dolor sit amet consectetur. Vel volutpat quam platea elementum velit est amet eget arcu.",
  //     categories: [
  //         {
  //             service: [
  //                 {
  //                     name: "Gents Cut",
  //                     price: "£12",
  //                 },
  //                 {
  //                     name: "Back, Neck & Shoulder Massage (30 mins)",
  //                     price: "£25",
  //                 },
  //                 {
  //                     name: "Back Wax",
  //                     price: "£25",
  //                 },
  //                 {
  //                     name: "Chest Wax",
  //                     price: "£20",
  //                 },
  //                 {
  //                     name: "Nasal/Ear Wax",
  //                     price: "£5",
  //                 },
  //                 {
  //                     name: "Eyebrow Wax",
  //                     price: "£6",
  //                 },
  //                 {
  //                     name: "Energising Facial",
  //                     price: "£30",
  //                 },
  //                 {
  //                     name: "Deep Cleanse Facial",
  //                     price: "£35",
  //                 },
  //                 {
  //                     name: "Deluxe Facial",
  //                     price: "£45",
  //                 },
  //             ]
  //         },
  //     ]
  // },
];
