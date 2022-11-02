export class TestResponses {
  public static readonly LOGIN_RESPONSE_ADMIN = {
    statusCode: 200,
    body: {
      user: {
        id: "1",
        name: "admin",
        roles: [
          "ADMIN",
          "WRITER"
        ]
      },
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwicm9sZXMiOlsiQURNSU4iLCJXUklURVIiXSwiaWF0IjoxNjY3NDA0MzExLCJleHAiOjE2Njc0MDc5MTEsImF1ZCI6ImdhbWUubmVyZC5iZSIsImlzcyI6ImdhbWUubmVyZC5iZSIsInN1YiI6ImF1dGgifQ.SiXL5xWCQrd08uW8jYFTPDPrIrim05ICMoUyIsV0tWs"
    }
  }

  public static readonly LOGIN_RESPONSE_WRITER = {
    statusCode: 200,
    body: {
      user: {
        id: "2",
        name: "writer",
        roles: [
          "WRITER"
        ]
      },
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwicm9sZXMiOlsiQURNSU4iLCJXUklURVIiXSwiaWF0IjoxNjY3NDA0MzExLCJleHAiOjE2Njc0MDc5MTEsImF1ZCI6ImdhbWUubmVyZC5iZSIsImlzcyI6ImdhbWUubmVyZC5iZSIsInN1YiI6ImF1dGgifQ.SiXL5xWCQrd08uW8jYFTPDPrIrim05ICMoUyIsV0tWs"
    }
  }

  public static readonly LOGIN_RESPONSE_USER = {
    statusCode: 200,
    body: {
      user: {
        id: "3",
        name: "user",
        roles: [
        ]
      },
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwicm9sZXMiOlsiQURNSU4iLCJXUklURVIiXSwiaWF0IjoxNjY3NDA0MzExLCJleHAiOjE2Njc0MDc5MTEsImF1ZCI6ImdhbWUubmVyZC5iZSIsImlzcyI6ImdhbWUubmVyZC5iZSIsInN1YiI6ImF1dGgifQ.SiXL5xWCQrd08uW8jYFTPDPrIrim05ICMoUyIsV0tWs"
    }
  }

  public static readonly GAMES_RESPONSE = {
    statusCode: 200,
    body: [
      {
        "id": "1",
        "name": "Devil May Cry 3: Dante's Awakening",
        "boxart": "https://www.mobygames.com/images/covers/l/48031-devil-may-cry-3-dante-s-awakening-playstation-2-front-cover.jpg"
      },
      {
        "id": "2",
        "name": "Bayonetta 2",
        "boxart": "https://www.mobygames.com/images/covers/l/467682-bayonetta-bayonetta-2-special-edition-wii-u-front-cover.jpg"
      },
      {
        "id": "3",
        "name": "Devil May Cry 5",
        "boxart": "https://www.mobygames.com/images/covers/l/546432-devil-may-cry-5-playstation-4-front-cover.jpg"
      },
      {
        "id": "4",
        "name": "Metal Gear Rising: Revengeance",
        "boxart": "https://www.mobygames.com/images/covers/l/280542-metal-gear-rising-revengeance-windows-front-cover.jpg"
      },
      {
        "id": "916423bf-9343-4838-bd92-15c01afe5fdb",
        "name": "Devil May Cry 4",
        "boxart": "https://www.mobygames.com/images/covers/l/106399-devil-may-cry-4-playstation-3-front-cover.jpg"
      }
    ]
  }
}