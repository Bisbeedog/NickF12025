var data = {
    Player: [
        { Name: "Nick", Points: 14 },
        { Name: "Yuki and Friends", Points: 6 },
        { Name: "Pud", Points: 4},
        { Name: "Strollin' Outta Q1", Points: 6},
        { Name: "Dynamic Racing Sloths", Points: 4},
        { Name: "Baskin Mommins", Points: 6 }
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
            Points: 2
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
            Points: 2
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
            Points: 4
        },
        {
            Number: 23,
            Name: "Alex Albon",
            Team: "Williams",
            Points: 0
        },
        {
            Number: 27,
            Name: "Nico Hulkenberg",
            Team: "Kick Sauber",
            Points: 6
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
            Number: 43,
            Name: "Franco Colapinto",
            Team: "Alpine",
            Points: 2
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
            Points: 2
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
           {
            Name: "Saudi Arabian GP",
            Date: "2024-04-20",
            Finish: [81, 1, 16, 4, 63, 12, 44, 55, 23, 6, 14, 30, 87, 31, 27, 18, 7, 5, 22, 10],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 7, 22] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 7, 22] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [12, 44, 18, 22] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [16, 4, 55, 87] }
            ],
            BonusPoints: "+2 points for LANDOOOOOOOOOOOOO for most places gained"
           },
           {
            Name: "Miami GP Sprint",
            Date: "2024-05-03",
            Finish: [4, 81, 44, 63, 18, 22, 12, 10, 27, 6, 23, 31, 30, 87, 5, 7, 1, 14, 55, 16],
            Picks: [
                { Player: "Nick", Drivers: [4, 22, 12, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 7] },
                { Player: "Yuki and Friends", Drivers: [44, 22, 1, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 18, 22, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 87, 55, 16] }
            ],
            BonusPoints: "None for sprint"
           },
           {
            Name: "Miami GP",
            Date: "2024-05-04",
            Finish: [81, 4, 63, 1, 23, 12, 16, 44, 55, 22, 6, 31, 10, 27, 14, 18, 30, 5, 87, 7],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 7] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 44, 22, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 points for Gasly for most places gained"
           },
           {
            Name: "Emilia Romagna GP",
            Date: "2024-05-18",
            Finish: [1, 4, 81, 44, 23, 16, 63, 55, 6, 22, 14, 27, 10, 30, 18, 43, 87, 5, 12, 31],
            Picks: [
                { Player: "Nick", Drivers: [4, 22, 43, 12] },
                { Player: "Baskin Mommins", Drivers: [81, 23, 63, 22] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 22, 18, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 55, 12] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 points for YUKIIIIIIIIIIIIIIIII for most places gained"
           },
           {
            Name: "Monaco GP",
            Date: "2024-05-25",
            Finish: [4, 16, 81, 1, 44, 6, 31, 30, 23, 55, 63, 87, 43, 5, 18, 27, 22, 12, 14, 10],
            Picks: [
                { Player: "Nick", Drivers: [4, 43, 22, 12] },
                { Player: "Baskin Mommins", Drivers: [81, 23, 63, 22] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 18, 22, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 55, 63, 12] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 points for Ollie Bearman for most places gained"
           },
           {
            Name: "Spanish GP",
            Date: "2024-06-01",
            Finish: [81, 4, 16, 63, 27, 44, 6, 10, 14, 1, 30, 5, 22, 55, 43, 31, 87, 12, 23, 18],
            Picks: [
                { Player: "Nick", Drivers: [4, 43, 22, 12] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [44, 1, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 22, 12, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 55, 12] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 points for Nico Hulkenberg for most places gained"
           },
           {
            Name: "Canadian GP",
            Date: "2024-06-15",
            Finish: [63, 1, 12, 81, 16, 44, 14, 27, 31, 55, 87, 22, 43, 5, 10, 6, 18, 4, 30, 23],
            Picks: [
                { Player: "Nick", Drivers: [12, 22, 43, 4] },
                { Player: "Baskin Mommins", Drivers: [63, 81, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 44, 22, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [63, 81, 55, 12] },
                { Player: "Pud", Drivers: [16, 55, 87, 4] }
            ],
            BonusPoints: "+2 points for smooth operatoooor and Tsunoda for most places gained"
           },
           {
            Name: "Austrian GP",
            Date: "2024-06-29",
            Finish: [4, 81, 16, 44, 63, 30, 14, 5, 27, 31, 87, 6, 10, 18, 43, 22, 23, 1, 12, 55],
            Picks: [
                { Player: "Nick", Drivers: [4, 22, 43, 12] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [44, 22, 1, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 18, 22, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "+2 points for Hulkenberg for most places gained"
           },
           {
            Name: "British GP",
            Date: "2024-07-",
            Finish: [4, 81, 27, 44, 1, 10, 18, 23, 14, 63, 87, 55, 31, 16, 22, 12, 6, 5, 30, 43],
            Picks: [
                { Player: "Nick", Drivers: [4, 43, 22, 12] },
                { Player: "Baskin Mommins", Drivers: [81, 23, 63, 22] },
                { Player: "Yuki and Friends", Drivers: [44, 1, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 18, 22, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 55, 12] },
                { Player: "Pud", Drivers: [4, 87, 55, 16] }
            ],
            BonusPoints: "+2 points for Hulkenberg for most places gained(again)"
           }
           
    ]
}