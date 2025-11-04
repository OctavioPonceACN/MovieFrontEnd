export interface Movie {
  movieId: number;
  title: string;
  description: string;
  pictureUrl: string;
  releaseDate: Date;
  averageRating: number;
  genres: string[];
}
