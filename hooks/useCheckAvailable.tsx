type ObjectType = {
  color: string;
  size: {};
}

type TypeObject = {
  [key: string]: string | number;
}

function useCheckAvailable(options: Array<ObjectType>, value: string) {
  if (!options) return;
  const index = options.findIndex(({ color }) => color === value)!;

  if (index !== -1) {
    const typingObject: TypeObject = options[index].size;

    // Ira habilitar os inputs se conter no array
    const getSizeAvailable = Object.keys(options[index].size)
      .filter((element) => typingObject[element] > 0);

    getSizeAvailable.forEach((sizeAvailable) => {
      const disableOptionSize = document.getElementById(sizeAvailable)!;
      disableOptionSize.removeAttribute('disabled');
    });

    // Ira desbilitar os inputs se não conter no array
    const getNotSizeAvailable = Object.keys(options[index].size)
      .filter((element) => typingObject[element] < 1);

    getNotSizeAvailable.forEach((sizeAvailable) => {
      const disableOptionSize = document.getElementById(sizeAvailable)!;
      disableOptionSize.setAttribute('disabled', '');
    });
  }
}

export default useCheckAvailable;
