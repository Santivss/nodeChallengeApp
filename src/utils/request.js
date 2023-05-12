const cheerio = require("cheerio");
const request = require("request-promise");

async function obtenerTablaPosiciones() {
  try {
    const $ = await request({
      uri: "https://www.futbolargentino.com/primera-division/tabla-de-posiciones",
      transform: (body) => cheerio.load(body),
    });

    const tabla = $("tbody tr")
      .map((i, elemento) => {
        const equipo = $(elemento).find("td:nth-child(2)").text().trim();
        const pj = $(elemento).find("td:nth-child(3)").text().trim();
        const pg = $(elemento).find("td:nth-child(4)").text().trim();
        const pe = $(elemento).find("td:nth-child(5)").text().trim();
        const pp = $(elemento).find("td:nth-child(6)").text().trim();
        const gf = $(elemento).find("td:nth-child(7)").text().trim();
        const gc = $(elemento).find("td:nth-child(8)").text().trim();
        const dg = $(elemento).find("td:nth-child(9)").text().trim();
        const pts = $(elemento).find("td:nth-child(10)").text().trim();
        const imagen = $(elemento).find("td:nth-child(2) img").attr("data-src");

        return {
          equipo,
          pj,
          pg,
          pe,
          pp,
          gf,
          gc,
          dg,
          pts,
          imagen,
        };
      })
      .get();

    const info = {
      description: $('meta[name="description"]').attr("content"),
      title: $("title").text().trim(),
      image: $('meta[property="og:image"]').attr("content"),
    };

    return { tabla, info };
  } catch (error) {
    console.error("Ha ocurrido un error al obtener la tabla de posiciones");
    return null;
  }
}

module.exports = { obtenerTablaPosiciones };
