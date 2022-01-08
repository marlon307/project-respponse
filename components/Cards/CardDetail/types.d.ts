export type TDetail = {
  branch: string;
  details: {
    model: string;
    mango: string;
    printPattern: string;
    numbPocked: number;
    composition: string;
    kindfabric: string;
    wash: string;
    material: string;
    available: boolean;
    specialFeatures: string;
    modelMeasures: string;
    length: string;
  };
  gender: string;
}

export type TSpecification = {
  specification: {
    sku: string;
    model: string;
    occasion: string;
    typeshipping: string;
  }
}
