export enum SheetSides {
  Top = "top",
  Right = "right",
  Bottom = "bottom",
  Left = "left",
}

export enum KeyCodes {
  Up = "ArrowUp",
  Down = "ArrowDown",
  Left = "ArrowLeft",
  Right = "ArrowRight",
}

export type StratagemType = {
  category: string;
  stratagems: StratagemItem[];
};

export type StratagemItem = {
  name: string;
  code: KeyCodes[];
};

export const stratagems: StratagemType[] = [
  {
    category: "Weapons",
    stratagems: [
      {
        name: "Machine Gun",
        code: [
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Right,
        ],
      },
      {
        name: "Anti-Material Rifle",
        code: [
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Right,
          KeyCodes.Up,
          KeyCodes.Down,
        ],
      },
      {
        name: "Stalwart",
        code: [
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Up,
          KeyCodes.Left,
        ],
      },
      {
        name: "Expendable Anti-Tank",
        code: [
          KeyCodes.Down,
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Up,
          KeyCodes.Right,
        ],
      },
      {
        name: "Recoilless Rifle",
        code: [
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Right,
          KeyCodes.Right,
          KeyCodes.Left,
        ],
      },
      {
        name: "Flamethrower",
        code: [
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Up,
          KeyCodes.Down,
          KeyCodes.Up,
        ],
      },
      {
        name: "Autocannon",
        code: [
          KeyCodes.Down,
          KeyCodes.Right,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Up,
          KeyCodes.Right,
        ],
      },
      {
        name: "Railgun",
        code: [
          KeyCodes.Down,
          KeyCodes.Right,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Right,
        ],
      },
      {
        name: "Spear",
        code: [
          KeyCodes.Down,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Down,
          KeyCodes.Down,
        ],
      },
    ],
  },
  {
    category: "Orbital",
    stratagems: [
      {
        name: "Gatling Barrage",
        code: [
          KeyCodes.Right,
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Up,
          KeyCodes.Up,
        ],
      },
      {
        name: "Airburst Strike",
        code: [KeyCodes.Right, KeyCodes.Right, KeyCodes.Right],
      },
      {
        name: "120MM HE Barrage",
        code: [
          KeyCodes.Right,
          KeyCodes.Down,
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Right,
          KeyCodes.Down,
          KeyCodes.Down,
        ],
      },
      {
        name: "380MM HE Barrage",
        code: [
          KeyCodes.Right,
          KeyCodes.Down,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Down,
          KeyCodes.Down,
        ],
      },
      {
        name: "Walking Barrage",
        code: [
          KeyCodes.Right,
          KeyCodes.Down,
          KeyCodes.Right,
          KeyCodes.Down,
          KeyCodes.Right,
          KeyCodes.Down,
        ],
      },
      {
        name: "Laser Strike",
        code: [
          KeyCodes.Right,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Up,
          KeyCodes.Right,
          KeyCodes.Left,
        ],
      },
      {
        name: "Railcannon Strike",
        code: [
          KeyCodes.Right,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Down,
          KeyCodes.Left,
        ],
      },
    ],
  },
  {
    category: "Hangar",
    stratagems: [
      {
        name: "Eagle Strafing Run",
        code: [KeyCodes.Up, KeyCodes.Right, KeyCodes.Right],
      },
      {
        name: "Eagle Airstrike",
        code: [KeyCodes.Up, KeyCodes.Right, KeyCodes.Down, KeyCodes.Right],
      },
      {
        name: "Eagle Cluster Bomb",
        code: [
          KeyCodes.Up,
          KeyCodes.Right,
          KeyCodes.Down,
          KeyCodes.Down,
          KeyCodes.Right,
          KeyCodes.Down,
        ],
      },
      {
        name: "Eagle Napalm Airstrike",
        code: [KeyCodes.Up, KeyCodes.Right, KeyCodes.Down, KeyCodes.Up],
      },
      {
        name: "Jump Pack",
        code: [
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Up,
          KeyCodes.Down,
          KeyCodes.Up,
        ],
      },
      {
        name: "Eagle Smoke Strike",
        code: [KeyCodes.Up, KeyCodes.Right, KeyCodes.Up, KeyCodes.Down],
      },
      {
        name: "Eagle 110MM Rocket Pods",
        code: [KeyCodes.Up, KeyCodes.Down, KeyCodes.Up, KeyCodes.Left],
      },
      {
        name: "Eagle 500KG Bomb",
        code: [
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Down,
          KeyCodes.Down,
        ],
      },
    ],
  },
  {
    category: "Bridge",
    stratagems: [
      {
        name: "Orbital Precision Strikes",
        code: [KeyCodes.Right, KeyCodes.Right, KeyCodes.Up],
      },
      {
        name: "Orbital Gas Strike",
        code: [KeyCodes.Right, KeyCodes.Right, KeyCodes.Down, KeyCodes.Right],
      },
      {
        name: "Orbital EMS Strike",
        code: [KeyCodes.Right, KeyCodes.Right, KeyCodes.Left, KeyCodes.Down],
      },
      {
        name: "Orbital Smoke Strike",
        code: [KeyCodes.Right, KeyCodes.Right, KeyCodes.Down, KeyCodes.Up],
      },
      {
        name: "HMG Emplacement",
        code: [
          KeyCodes.Up,
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Right,
          KeyCodes.Right,
          KeyCodes.Left,
        ],
      },
      {
        name: "Shield Generator Relay",
        code: [
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Right,
          KeyCodes.Left,
          KeyCodes.Down,
        ],
      },
      {
        name: "Tesla Tower",
        code: [
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Right,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Right,
        ],
      },
    ],
  },
  {
    category: "Engineering Bay",
    stratagems: [
      {
        name: "Anti-Personnel Minefield",
        code: [
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Right,
        ],
      },
      {
        name: "Supply Pack",
        code: [
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Up,
          KeyCodes.Down,
        ],
      },
      {
        name: "Grenade Launcher",
        code: [
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Down,
        ],
      },
      {
        name: "Laser Cannon",
        code: [
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Left,
        ],
      },
      {
        name: "Incendiary Mines",
        code: [KeyCodes.Down, KeyCodes.Left, KeyCodes.Left, KeyCodes.Down],
      },
      {
        name: "Guard Dog Rover",
        code: [
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Down,
        ],
      },
      {
        name: "Ballistic Shield Backpack",
        code: [
          KeyCodes.Down,
          KeyCodes.Left,
          KeyCodes.Up,
          KeyCodes.Up,
          KeyCodes.Right,
        ],
      },
      {
        name: "Arc Thrower",
        code: [
          KeyCodes.Down,
          KeyCodes.Right,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Down,
        ],
      },
      {
        name: "Shield Generator Pack",
        code: [
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Right,
          KeyCodes.Right,
        ],
      },
    ],
  },
  {
    category: "Robotics",
    stratagems: [
      {
        name: "Machine Gun Sentry",
        code: [
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Right,
          KeyCodes.Right,
          KeyCodes.Up,
        ],
      },
      {
        name: "Gatling Sentry",
        code: [
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Right,
          KeyCodes.Left,
          KeyCodes.Down,
        ],
      },
      {
        name: "Mortar Sentry",
        code: [
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Right,
          KeyCodes.Right,
          KeyCodes.Down,
        ],
      },
      {
        name: "Guard Dog",
        code: [
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Up,
          KeyCodes.Right,
          KeyCodes.Down,
        ],
      },
      {
        name: "Autocannon Sentry",
        code: [
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Right,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Up,
        ],
      },
      {
        name: "Rocket Sentry",
        code: [
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Right,
          KeyCodes.Right,
          KeyCodes.Left,
        ],
      },
      {
        name: "EMS Mortar Sentry",
        code: [
          KeyCodes.Down,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Up,
          KeyCodes.Left,
        ],
      },
    ],
  },
  {
    category: "Mission",
    stratagems: [
      {
        name: "Reinforce",
        code: [
          KeyCodes.Up,
          KeyCodes.Down,
          KeyCodes.Right,
          KeyCodes.Left,
          KeyCodes.Up,
        ],
      },
      {
        name: "SOS Beacon",
        code: [KeyCodes.Up, KeyCodes.Down, KeyCodes.Right, KeyCodes.Up],
      },
      {
        name: "Super Earth Flag",
        code: [KeyCodes.Down, KeyCodes.Up, KeyCodes.Down, KeyCodes.Up],
      },
      {
        name: "Upload Data",
        code: [
          KeyCodes.Left,
          KeyCodes.Right,
          KeyCodes.Up,
          KeyCodes.Up,
          KeyCodes.Up,
        ],
      },
      {
        name: "Hellbomb",
        code: [
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Left,
          KeyCodes.Down,
          KeyCodes.Up,
          KeyCodes.Right,
          KeyCodes.Down,
          KeyCodes.Up,
        ],
      },
    ],
  },
];
