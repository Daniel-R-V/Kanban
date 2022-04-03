const Response = [
  {
    id: 1,
    desc: "texto1",
    date: "13/03/2022",
    status: "TO DO",
    title: "titulo1",
  },

  {
    id: 2,
    desc: "texto2",
    date: "13/03/2022",
    status: "DONE",
    title: "titulo2",
  },
  {
    id: 3,
    desc: "texto3",
    date: "13/03/2022",
    status: "TO DO",
    title: "titulo3",
  },
];

export function getTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Response);
    }, 1500);
  });
}
