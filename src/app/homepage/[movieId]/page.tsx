import { notFound } from "next/navigation";
import MovieDetailSection from "@/components/homepage/MovieDetailSection";
import ShowtimesForMovie from "@/components/showtimes/ShowTimesForMovie";
import { getMovieShowtimes } from "@/lib/api";

type MovieDetailPageProps = {
  params: Promise<{
    movieId: string;
  }>;
};

export default async function MovieDetailPage(props: MovieDetailPageProps) {
  const { movieId } = await props.params;
  const id = Number(movieId);
  if (isNaN(id)) return notFound();

  const movie = await getMovieShowtimes(id);
  if (!movie) return notFound();

  const showtimes =
    movie.dangChieu || movie.sapChieu ? await getMovieShowtimes(id) : null;

    const shouldShowShowtimes =
      movie.dangChieu === true ||
      (movie.sapChieu === true && movie.dangChieu === true);
  return (
    <div className="bg-black p-10 space-y-10">
      <MovieDetailSection movie={movie} />
      {shouldShowShowtimes && showtimes?.heThongRapChieu?.length > 0 && (
        <ShowtimesForMovie showtimes={showtimes} />
      )}
    </div>
  );
}
