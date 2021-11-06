import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://w06-robots-menchu.herokuapp.com/robots",
    async (req, res, ctx) => {
      const resp = res(
        ctx.json([
          {
            características: {
              velocidad: 0,
              resistencia: 10,
              creación: "2021-11-05T16:21:22.000Z",
            },
            _id: "61855440a99aeba4d99148ef",
            nombre: "Doraemon",
            imagen: "https://cdn.kapwing.com/video_image-uBSRyuvqm.jpeg",
          },
          {
            características: {
              velocidad: 3,
              resistencia: 2,
              creación: "2021-11-05T16:21:22.000Z",
            },
            _id: "61855b26a99aeba4d99148f1",
            nombre: "Paul McCartney",
            imagen:
              "https://i.pinimg.com/originals/f6/f5/90/f6f590133a8e35c6e2be7e5c57b0c75c.jpg",
          },
        ])
      );
      return resp;
    }
  ),
];
