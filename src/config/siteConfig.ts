export interface Servico {
  slug: string;
  label: string;
  descricao: string;
  icone: string;
}

export const siteConfig = {
  nome: 'Lavagem & Higiene CG',
  tagline: 'Lavagem e higienização profissional de estofados, colchões, tapetes e automotivos em Campo Grande - MS',
  descricao:
    'Higienização profissional de sofás, colchões, poltronas, tapetes e estofados automotivos em Campo Grande - MS. Produtos antialérgicos, secagem rápida, orçamento sem compromisso.',
  whatsapp: '67999999999',
  whatsappDisplay: '(67) 99999-9999',
  telefone: '(67) 99999-9999',
  email: 'contato@sofalimpocampogrande.com.br',
  endereco: {
    rua: 'Rua Exemplo, 456',
    bairro: 'Jardim dos Estados',
    cidade: 'Campo Grande',
    estado: 'MS',
    cep: '79000-000',
    completo:
      'Rua Exemplo, 456 - Jardim dos Estados, Campo Grande - MS, CEP 79000-000',
  },
  geo: {
    latitude: -20.4697,
    longitude: -54.6201,
  },
  cores: {
    primaria: '#2a7fba',
    primariaEscura: '#1f5f8c',
    bgSuave: '#f4f8fb',
  },
  horario: 'Seg a Sáb: 08h às 18h',
  horarioSchema: ['Mo-Sa 08:00-18:00'],
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14836.63!2d-54.6201!3d-20.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e7b!2sCampo%20Grande%2C%20MS!5e0!3m2!1spt-BR!2sbr!4v1700000000000',
  siteUrl: 'https://sofalimpocampogrande.com.br',
  formspreeId: 'XXXXXXXX',
  responsavel: '[Seu Nome]',
  anoFundacao: 2019,
} as const;

export function montarLinkWhatsApp(): string {
  const texto = encodeURIComponent(
    `Olá! Vim pelo site ${siteConfig.nome} em ${siteConfig.endereco.cidade}-${siteConfig.endereco.estado}. Gostaria de solicitar um orçamento.`
  );
  return `https://wa.me/55${siteConfig.whatsapp}?text=${texto}`;
}

export const servicos: Servico[] = [
  {
    slug: 'limpeza-de-sofa',
    label: 'Limpeza de Sofá',
    descricao: 'Higienização profunda de sofás com extração de sujeira e ácaros.',
    icone: 'sofa',
  },
  {
    slug: 'higienizacao-de-estofados',
    label: 'Higienização de Estofados',
    descricao: 'Remoção de ácaros, bactérias e odores com produtos antialérgicos.',
    icone: 'spray',
  },
  {
    slug: 'limpeza-de-colchao',
    label: 'Limpeza de Colchão',
    descricao: 'Elimine ácaros, fungos e manchas sem precisar sair da cama.',
    icone: 'cama',
  },
  {
    slug: 'limpeza-de-poltronas-e-cadeiras',
    label: 'Limpeza de Poltronas e Cadeiras',
    descricao: 'Poltronas, cadeiras de escritório e de jantar como novas.',
    icone: 'cadeira',
  },
  {
    slug: 'limpeza-de-tapetes-e-carpetes',
    label: 'Limpeza de Tapetes e Carpetes',
    descricao: 'Lavagem e secagem rápida de tapetes e carpetes residenciais.',
    icone: 'tapete',
  },
  {
    slug: 'limpeza-de-cortinas',
    label: 'Limpeza de Cortinas',
    descricao: 'Higienização de cortinas sem precisar desinstalar.',
    icone: 'cortina',
  },
  {
    slug: 'limpeza-de-estofados-automotivos',
    label: 'Limpeza de Estofados Automotivos',
    descricao: 'Bancos, forrações e carpetes do seu carro impecáveis.',
    icone: 'carro',
  },
  {
    slug: 'impermeabilizacao-de-sofa',
    label: 'Impermeabilização de Sofá',
    descricao: 'Proteção contra líquidos e manchas, durabilidade até 3 anos.',
    icone: 'escudo',
  },
  {
    slug: 'remocao-de-manchas-e-odores',
    label: 'Remoção de Manchas e Odores',
    descricao: 'Técnicas específicas para pet, vinho, café e muito mais.',
    icone: 'gota',
  },
  {
    slug: 'higienizacao-de-cabeceiras-e-puffs',
    label: 'Higienização de Cabeceiras e Puffs',
    descricao: 'Cabeceiras estofadas e puffs limpos e livres de ácaros.',
    icone: 'puff',
  },
];
