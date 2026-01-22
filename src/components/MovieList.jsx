import Movie from "./Movie";

export default function MovieList({ movies, onAddToList }) {
  return (
    <div className="container my-3">
      <div className="card">
        <div className="card-header">
          <h2 className="title h5 mb-0">Movie List</h2>
        </div>
        <div className="card-body">
          {movies.length == 0 ? (
            <div className="text-center text-muted py-4">
              <i className="bi bi-film fs-1 d-block mb-2"></i>
              Film bulunamadı
            </div>
          ) : (
            <div
              id="movie-list"
              className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
            >
              {movies.map((m, index) => (
                <Movie key={index} movieObj={m} onAddToList={onAddToList} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
