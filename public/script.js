function main() {}

async function submitForm(ev) {
  ev.preventDefault();
  const songTitle1 = ev.currentTarget.elements.namedItem("songTitle1").value;
  const artistName1 = ev.currentTarget.elements.namedItem("artistName1").value;

  const songTitle2 = ev.currentTarget.elements.namedItem("songTitle2").value;
  const artistName2 = ev.currentTarget.elements.namedItem("artistName2").value;

  const songTitle3 = ev.currentTarget.elements.namedItem("songTitle3").value;
  const artistName3 = ev.currentTarget.elements.namedItem("artistName3").value;

  const recommendedSongs = await fetch(
    `/recommendations?${new URLSearchParams({
      songTitle1,
      artistName1,
      songTitle2,
      artistName2,
      songTitle3,
      artistName3,
    })}`
  ).then((res) => res.json());

  const songsListElement = document.getElementById("recommended-songs-list");

  songsListElement.innerHTML = recommendedSongs
    .slice(0, 5)
    .map((song) => {
      return (
        `<span class="rounded-md"><a href=${song.external_urls.spotify} type="__blank">${song.name}</a></span>` +
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${song.id}?utm_source=generator" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
      );
    })
    .join("");

  const songsContainer = document.getElementById("songs-container");
  songsContainer.scrollIntoView();
}
