db.tarifas.save([
  {
    origem: '011',
    destino: '016',
    precoPorMinuto: 1.90
  },
  {
    origem: '016',
    destino: '011',
    precoPorMinuto: 2.90
  },
  {
    origem: '011',
    destino: '017',
    precoPorMinuto: 1.70
  },
  {
    origem: '017',
    destino: '011',
    precoPorMinuto: 2.70
  },
  {
    origem: '011',
    destino: '018',
    precoPorMinuto: 0.90
  },
  {
    origem: '018',
    destino: '011',
    precoPorMinuto: 1.90
  }
])

db.planos.save([
  {
    nome: 'Fale Mais 30',
    consumoTotalPermitidoEmMinutos: '30'
  },
  {
    nome: 'Fale Mais 60',
    consumoTotalPermitidoEmMinutos: '60'
  },
  {
    nome: 'Fale Mais 120',
    consumoTotalPermitidoEmMinutos: '120'
  }
])