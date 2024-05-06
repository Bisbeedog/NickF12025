var data = {
    Player: [
        { Name: "Nick", Points: 7 },
        { Name: "DOD" },
        { Name: "Pud" },
        { Name: "Logan", Points:-21},
        { Name: "Vyanka"},
        { Name: "Emma" },
        { Name: "Bridget"}
    ],
    Driver: [
        {
            Number: 1,
            Name: "Max Verstappen",
            Team: "Red Bull"
        },
        {
            Number: 2,
            Name: "Logan Sargeant",
            Team: "Williams"
        },
        {
            Number: 3,
            Name: "Daniel Ricciardo",
            Team: "RB"
        },
        {
            Number: 4,
            Name: "Lando Norris",
            Team: "McLaren"
        },
        {
            Number: 10,
            Name: "Pierre Gasly",
            Team: "Alpine"
        },
        {
            Number: 11,
            Name: "Sergio Perez",
            Team: "Red Bull"
        },
        {
            Number: 14,
            Name: "Fernando Alonso",
            Team: "Aston Martin",
            Points: 2
        },
        {
            Number: 16,
            Name: "Charles LeClerc",
            Team: "Ferrari"
        },
        {
            Number: 18,
            Name: "Lance Stroll",
            Team: "Aston Martin"
        },
        {
            Number: 20,
            Name: "Kevin Magnussen",
            Team: "Haas",
            Points: 2
        },
        {
            Number: 22,
            Name: "Yuki Tsunoda",
            Team: "RB"
        },
        {
            Number: 23,
            Name: "Alex Albon",
            Team: "Williams"
        },
        {
            Number: 24,
            Name: "Zhou Guanyu",
            Team: "Sauber"
        },
        {
            Number: 27,
            Name: "Nico Hulkenburg",
            Team: "Haas",
            Points: 2
        },
        {
            Number: 31,
            Name: "Esteban Ocon",
            Team: "Alpine",
            Points: 2
        },
        {
            Number: 38,
            Name: "Oliver Bearman",
            Team: "Ferrari"
        },
        {
            Number: 44,
            Name: "Lewis Hamilton",
            Team: "Mercedes",
            Points: 7
        },
        {
            Number: 55,
            Name: "Carlos Sainz",
            Team: "Ferrari"
        },
        {
            Number: 63,
            Name: "George Russel",
            Team: "Mercedes"
        },
        {
            Number: 77,
            Name: "Valterri Bottas",
            Team: "Sauber"
        },
        {
            Number: 81,
            Name: "Oscar Piastri",
            Team: "Mclaren"
        }
    ],
    Race: [
        {
            Name: "Bahrain Grand Prix",
            Date: "2023-03-02",
            Finish: [1, 11, 55, 16, 63, 4, 44, 81, 14, 18, 24, 20, 3, 22, 23, 27, 31, 10, 77, 2],
            Picks: [
                { Player: "Nick", Drivers: [4, 44, 22] },
                { Player: "Bridget", Drivers: [63, 4, 81] },
                { Player: "DOD", Drivers: [1, 63, 22] },
                { Player: "Logan", Drivers: [44, 18, 10] },
                { Player: "Vyanka", Drivers: [55, 63, 81] },
                { Player: "Emma", Drivers: [1, 81, 2] },
                { Player: "Pud", Drivers: [55, 16, 10] }
            ],
            BonusPoints: "None"
           },
           {
            Name: "Saudi Arabian Grand Prix",
            Date: "2023-03-09",
            Finish: [1, 11, 16, 81, 14, 63, 38, 4, 44, 27, 23, 20, 31, 22, 2, 3, 77, 24, 18, 10],
            Picks: [
                { Player: "Nick", Drivers: [4, 44, 22] },
                { Player: "Bridget", Drivers: [81, 63, 4] },
                { Player: "DOD", Drivers: [1, 63, 22] },
                { Player: "Logan", Drivers: [38, 44, 23] },
                { Player: "Vyanka", Drivers: [81, 63, 38] },
                { Player: "Emma", Drivers: [1, 81, 2] },
                { Player: "Pud", Drivers: [16, 38, 10] }
            ],
            BonusPoints: "\n Ocon: +2 for most places gained \n Logan: -28 for last race's driver swap"

            },
            {
             Name: "Australian GP",
             Date: "2023-03-23",
             Finish: [55, 16, 4, 81, 11, 18, 22, 14, 27, 20, 23, 3, 10, 77, 24, 31, 63, 44, 1, 2],
             Picks: [
                 { Player: "Nick", Drivers: [4, 22, 44] },
                 { Player: "Bridget", Drivers: [4, 81, 63] },
                 { Player: "DOD", Drivers: [22, 63, 1] },
                 { Player: "Logan", Drivers: [55, 23, 44] },
                 { Player: "Vyanka", Drivers: [55, 81, 63] },
                 { Player: "Emma", Drivers: [81, 23, 1] },
                 { Player: "Pud", Drivers: [55, 16, 10] }
             ],
             BonusPoints: "\n Hulkenburg: +2 points for most places gained"
 
             },
             {
              Name: "Japanese GP",
              Date: "2023-04-06",
              Finish: [1, 11, 55, 16, 4, 14, 63, 81, 44, 22, 27, 18, 20, 77, 31, 10, 2, 24, 3, 23],
              Picks: [
                  { Player: "Nick", Drivers: [4, 44, 22] },
                  { Player: "Bridget", Drivers: [4, 63, 81] },
                  { Player: "DOD", Drivers: [1, 63, 22] },
                  { Player: "Logan", Drivers: [55, 44, 23] },
                  { Player: "Vyanka", Drivers: [55, 63, 81] },
                  { Player: "Emma", Drivers: [1, 81, 2] },
                  { Player: "Pud", Drivers: [55, 16, 10] }
              ],
              BonusPoints: "\n Magnussen: +2 Points for most places gained"
  
              },
              {
                Name: "Chinese GP Sprint",
                Date: "2023-04-20",
                Finish: [1, 44, 11, 16, 55, 4, 81, 63, 24, 20, 3, 77, 31, 18, 10, 22, 23, 2, 27, 14],
                Picks: [
                    { Player: "Nick", Drivers: [44, 4, 22] },
                    { Player: "Bridget", Drivers: [4, 81, 63] },
                    { Player: "DOD", Drivers: [1, 63, 22] },
                    { Player: "Logan", Drivers: [44, 55, 23] },
                    { Player: "Vyanka", Drivers: [55, 81, 63] },
                    { Player: "Emma", Drivers: [1, 81, 2] },
                    { Player: "Pud", Drivers: [16, 55, 10] }
                ],
                BonusPoints: "\n As a reminder, this was a sprint so half points"
                },
              {
               Name: "Chinese GP",
               Date: "2023-04-21",
               Finish: [1, 4, 11, 16, 55, 63, 14, 81, 44, 27, 31, 23, 10, 24, 18, 20, 2, 3, 22, 77],
               Picks: [
                   { Player: "Nick", Drivers: [4, 44, 22] },
                   { Player: "Bridget", Drivers: [4, 63, 81] },
                   { Player: "DOD", Drivers: [1, 63, 22] },
                   { Player: "Logan", Drivers: [55, 44, 23] },
                   { Player: "Vyanka", Drivers: [55, 63, 81] },
                   { Player: "Emma", Drivers: [1, 81, 2] },
                   { Player: "Pud", Drivers: [16, 55, 10] }
               ],
               BonusPoints: "\n Hamilton: +2 points for most places gained \n Hamilton: +5 points for spring/race differential"
   
               },
               {
                 Name: "Miami GP Sprint",
                 Date: "2023-05-04",
                 Finish: [1, 16, 11, 3, 55, 81, 27, 22, 10, 2, 24, 63, 23, 77, 31, 44, 14, 20, 18, 4],
                 Picks: [
                     { Player: "Nick", Drivers: [22, 44, 4] },
                     { Player: "Bridget", Drivers: [81, 63, 4] },
                     { Player: "DOD", Drivers: [1, 22, 63] },
                     { Player: "Logan", Drivers: [55, 23, 44] },
                     { Player: "Vyanka", Drivers: [55, 81, 63] },
                     { Player: "Emma", Drivers: [1, 81, 2] },
                     { Player: "Pud", Drivers: [16, 55, 10] }
                 ],
                 BonusPoints: "\n As a reminder, this was a sprint so half points"
                 },
                 {
                  Name: "Miami GP",
                  Date: "2023-05-05",
                  Finish: [4, 1, 16, 11, 55, 44, 22, 63, 14, 31, 27, 10, 81, 24, 3, 77, 18, 23, 20, 2],
                  Picks: [
                      { Player: "Nick", Drivers: [4, 44, 22] },
                      { Player: "Bridget", Drivers: [4, 63, 81] },
                      { Player: "DOD", Drivers: [1, 22, 63] },
                      { Player: "Logan", Drivers: [55, 44, 23] },
                      { Player: "Vyanka", Drivers: [55, 63, 81] },
                      { Player: "Emma", Drivers: [1, 81, 2] },
                      { Player: "Pud", Drivers: [16, 55, 10] }
                  ],
                  BonusPoints: "\n Alonso: +2 points for most places gained"
      
                  }
    ]
}