var data = {
    Player: [
        { Name: "Nick" },
        { Name: "DOD" },
        { Name: "Pud" },
        { Name: "Logan", Points:-28},
        { Name: "Vyanka" },
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
            Team: "Aston Martin"
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
            Team: "Haas"
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
            Team: "Mercedes"
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
             Date: "2023-03-09",
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
 
             }
    ]
}