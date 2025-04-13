var data = {
    Player: [
        { Name: "Nick", Points: 6 },
        { Name: "Yuki and Friends", Points: 0 },
        { Name: "Pud", Points: 0},
        { Name: "Strollin' Outta Q1", Points:4},
        { Name: "Dynamic Racing Sloths", Points: 2},
        { Name: "Baskin Mommins", Points: 4 }
    ],
    Driver: [
        {
            Number: 1,
            Name: "Max Verstappen",
            Team: "Red Bull",
            Points: 0
        },
        {
            Number: 4,
            Name: "Lando Norris",
            Team: "McLaren",
            Points: 0
        },
        {
            Number: 5,
            Name: "Gabriel Bortoleto",
            Team: "Kick Sauber",
            Points: 0
        },
        {
            Number: 6,
            Name: "Isaac Hadjar",
            Team: "RB",
            Points: 0
        },
        {
            Number: 7,
            Name: "Jack Doohan",
            Team: "Alpine",
            Points: 2
        },
        {
            Number: 10,
            Name: "Pierre Gasly",
            Team: "Alpine",
            Points: 0
        },
        {
            Number: 12,
            Name: "Andrea Kimi Antonelli",
            Team: "Mercedes",
            Points: 2
        },
        {
            Number: 14,
            Name: "Fernando Alonso",
            Team: "Aston Martin",
            Points: 0
        },
        {
            Number: 16,
            Name: "Charles LeClerc",
            Team: "Ferrari",
            Points: 0
        },
        {
            Number: 18,
            Name: "Lance Stroll",
            Team: "Aston Martin",
            Points: 0
        },
        {
            Number: 22,
            Name: "Yuki Tsunoda",
            Team: "RB",
            Points: 0
        },
        {
            Number: 23,
            Name: "Alex Albon",
            Team: "Williams",
            Points: 0
        },
        {
            Number: 27,
            Name: "Nico Hulkenburg",
            Team: "Kick Sauber",
            Points: 0
        },
        {
            Number: 30,
            Name: "Liam Lawson",
            Team: "Red Bull",
            Points: 2
        },
        {
            Number: 31,
            Name: "Esteban Ocon",
            Team: "Haas",
            Points: 0
        },
        {
            Number: 44,
            Name: "Lewis Hamilton",
            Team: "Ferrari",
            Points: 0
        },
        {
            Number: 55,
            Name: "Carlos Sainz",
            Team: "Williams",
            Points: 0
        },
        {
            Number: 63,
            Name: "George Russel",
            Team: "Mercedes",
            Points: 0
        },
        {
            Number: 81,
            Name: "Oscar Piastri",
            Team: "Mclaren",
            Points: 0
        },
        {
            Number: 87,
            Name: "Oliver Bearman",
            Team: "Haas",
            Points: 2
        }
    ],
    Race: [
        {
            Name: "Australian GP",
            Date: "2024-03-15",
            Finish: [4, 1, 63, 12, 23, 18, 27, 16, 81, 44, 10, 22, 31, 87, 30, 5, 14, 55, 7, 6],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 30, 7] },
                { Player: "Baskin Mommins", Drivers: [63, 81, 30, 7] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [12, 18, 44, 30] },
                { Player: "Dynamic Racing Sloths", Drivers: [63, 12, 81, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "+2 points for Kimi Antonelli for most places gained"
           },
           {
            Name: "Chinese GP Sprint",
            Date: "2024-03-22",
            Finish: [44, 81, 1, 63, 16, 22, 12, 4, 18, 14, 23, 10, 6, 30, 87, 31, 55, 5, 27, 7],
            Picks: [
                { Player: "Nick", Drivers: [12, 4, 30, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 30, 7] },
                { Player: "Yuki and Friends", Drivers: [44, 1, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 12, 18, 30] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [16, 4, 87, 55] }
            ],
            BonusPoints: "None for sprint"
           },
           {
            Name: "Chinese GP",
            Date: "2024-03-23",
            Finish: [81, 4, 63, 1, 31, 12, 23, 87, 18, 55, 6, 30, 7, 5, 27, 22, 14, 16, 44, 10],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 30, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 30, 7] },
                { Player: "Yuki and Friends", Drivers: [1, 55, 22, 44] },
                { Player: "Strollin' Outta Q1", Drivers: [12, 18, 30, 44] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 55, 87, 16] }
            ],
            BonusPoints: "+2 points for Liam Lawson for most places gained"
           },
           {
            Name: "Japanese GP",
            Date: "2024-04-05",
            Finish: [1, 4, 81, 16, 63, 12, 44, 6, 23, 87, 14, 22, 10, 55, 7, 27, 30, 31, 5, 18],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 7] },
                { Player: "Yuki and Friends", Drivers: [1, 55, 22, 44] },
                { Player: "Strollin' Outta Q1", Drivers: [12, 44, 18, 22] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 points for Jack Doohan for most places gained"
           },
           {
            Name: "Bahrain GP",
            Date: "2024-04-13",
            Finish: [81, 63, 4, 16, 44, 1, 10, 31, 22, 87, 12, 23, 6, 7, 14, 30, 18, 5, 55, 27],
            Picks: [
                { Player: "Nick", Drivers: [4, 22, 12, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 7] },
                { Player: "Yuki and Friends", Drivers: [44, 1, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 22, 12, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "+2 points for Oliver Bearman for most places gained"
           },
           
    ]
}