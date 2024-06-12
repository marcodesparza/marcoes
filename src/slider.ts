export function slider() {
  let blood = 0;
  const righty = document.querySelector<HTMLButtonElement>("#right")!;
  const lefty = document.querySelector<HTMLButtonElement>("#left")!;

  righty.onclick = () => {
    if (blood > 2) {
      blood = 0;
    } else {
      blood += 1;
    }

    console.log(blood);
  };
  lefty.onclick = () => {
    if (blood < 1) {
      blood = 3;
    } else {
      blood -= 1;
    }
    console.log(blood);
  };
  console.log(blood);
}
