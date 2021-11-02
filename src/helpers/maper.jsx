export const mapper = (films) => {
	return films.map(({ backdrop_path: img, title, overview: text, id }) => ({
		img,
		title,
		text,
		id,
	}));
};
