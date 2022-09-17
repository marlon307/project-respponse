type ObjectType = {
  idc: string;
  color: string;
  sizes: {};
};

type TypeObject = {
  [key: string]: any;
};

function checkSizeAvailable(options: Array<ObjectType>, value: string) {
  if (!options) return;
  const index = options.findIndex(({ color }) => color === value)!;

  if (index !== -1) {
    const typingObject: TypeObject = options[index].sizes;

    // Ira habilitar os inputs se conter no array
    const getSizeAvailable = Object.keys(options[index].sizes)
      .filter((element) => typingObject[element] > 0);

    getSizeAvailable.forEach((sizeAvailable) => {
      const disableOptionSize = document.getElementById(sizeAvailable)!;
      if (!disableOptionSize) return;
      disableOptionSize.removeAttribute('disabled')!;
    });

    // Ira desbilitar os inputs se não conter no array
    const getNotSizeAvailable = Object.keys(options[index].sizes)
      .filter((element) => typingObject[element] < 1);

    getNotSizeAvailable.forEach((sizeAvailable) => {
      const disableOptionSize = document.getElementById(sizeAvailable)!;
      if (!disableOptionSize) return;
      disableOptionSize.setAttribute('disabled', '')!;
    });
  }
}

function checkColorAvailable(options: Array<ObjectType>, value: string) {
  const getColorInput = options.filter(({ sizes }: TypeObject) => sizes[value] > 0);
  const getColorAvaliable = getColorInput.map(({ idc }) => idc);

  getColorAvaliable.forEach((colorid) => {
    const disableOptionColor = document.getElementById(colorid)!;
    if (!disableOptionColor) return;
    disableOptionColor.removeAttribute!('disabled');
  });

  const getSizes = options.filter(({ sizes }: TypeObject) => sizes[value] < 1);
  const getSizesColorAvaliable = getSizes.map(({ idc }) => idc);

  getSizesColorAvaliable.forEach((colorid) => {
    const disableOptionColor = document.getElementById(colorid)!;
    if (!disableOptionColor) return;
    disableOptionColor.setAttribute('disabled', '')!;
  });
}

export {
  checkColorAvailable,
  checkSizeAvailable,
};
