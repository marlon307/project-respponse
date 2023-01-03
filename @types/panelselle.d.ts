interface PanelOrder {
  status: string,
  quantity: number
}

interface PanelProducts {
  quantity: number
}

interface PanelSeller {
  props: {
    order: PanelOrder[]
    products: PanelProducts
  }
}
