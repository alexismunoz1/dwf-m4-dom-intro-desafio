const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const lista = document.querySelector(".lista");
  const itemsLista = document.querySelectorAll(".lista li");

  // itemsLista.forEach((e) => {
  //   e.remove();
  // });

  for (let e of itemsLista) {
    e.remove();
  }

  for (let item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = item.tema;
    const claseQueLeVaAAsignarAlLi = item.class || "item";

    newLiEl.classList.add(claseQueLeVaAAsignarAlLi);
    console.log(newLiEl);

    lista.appendChild(newLiEl);
  }
}

main();
