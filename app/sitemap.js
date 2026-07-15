export default async function sitemap() {
  const baseUrl = "https://dradilsonsilvestre.com.br";

  const routes = [
    "",
    "/sobre",
    "/prevencao-40-anos",
    "/avaliacao-geriatrica",
    "/atendimento-online",
    "/doencas",
    "/doencas/alzheimer",
    "/doencas/parkinson",
    "/doencas/perda-memoria",
    "/doencas/demencia",
    "/doencas/sarcopenia",
    "/doencas/osteoporose",
    "/doencas/prevencao-quedas",
    "/doencas/insonia",
    "/doencas/ansiedade-depressao",
    "/doencas/reposicao-hormonal",
    "/doencas/diabetes",
    "/doencas/hipertensao",
    "/doencas/polifarmacia",
    "/emagrecimento",
    "/exames-e-diagnosticos",
    "/locais-de-atendimento",
    "/locais-de-atendimento/maringa",
    "/locais-de-atendimento/paranavai",
    "/locais-de-atendimento/visita-domiciliar",
    "/locais-de-atendimento/telemedicina",
    "/tecnologias/teste-genetico",
    "/perguntas-frequentes",
    "/blog"
  ];

  const posts = [
    "/blog/sarcopenia-aos-60-musculacao",
    "/blog/esquecimento-normal-ou-alzheimer",
    "/blog/riscos-de-calmantes-tarja-preta-idosos",
    "/blog/check-up-geriatrico-aos-40-anos"
  ];

  return [...routes, ...posts].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : route.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
