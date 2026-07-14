import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Variáveis de ambiente GOOGLE_API_KEY ou GOOGLE_PLACE_ID não configuradas." },
      { status: 400 }
    );
  }

  try {
    // URL da API do Google Places para detalhes do local (filtrando por avaliações em português se possível)
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=pt-BR&key=${apiKey}`;

    const res = await fetch(url, { next: { revalidate: 3600 } }); // Cache de 1 hora para evitar requisições excessivas
    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: `Erro na API do Google: ${data.status_message || data.status}` },
        { status: 500 }
      );
    }

    // Formatando os reviews para o padrão do componente
    const googleReviews = (data.result.reviews || []).map((review) => {
      // Converte timestamp em string legível aproximada
      const date = new Date(review.time * 1000);
      const relativeDate = date.toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      return {
        name: review.author_name,
        role: "Avaliação do Google",
        text: review.text,
        stars: review.rating,
        date: relativeDate,
      };
    });

    return NextResponse.json({ reviews: googleReviews });
  } catch (error) {
    console.error("Erro ao buscar avaliações no Google Places:", error);
    return NextResponse.json(
      { error: "Falha interna ao buscar dados no Google." },
      { status: 500 }
    );
  }
}
