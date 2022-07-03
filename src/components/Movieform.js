import React from "react";

function Movieform({ onType, state }) {
  const { movieName, rating, duration, error } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    onType({ type: "SUBMIT" });
  };
  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Movie Name</label>
            <input
              type="text"
              id="name"
              value={movieName}
              onChange={(e) =>
                onType({
                  type: "CHANGE",
                  name: "movieName",
                  payload: e.target.value,
                })
              }
              placeholder="Enter Movie Name"
              data-testid="nameInput"
            />
          </div>
          <div>
            <label htmlFor="ratings">Ratings</label>
            <input
              type="number"
              id="ratings"
              value={rating}
              onChange={(e) =>
                onType({
                  type: "CHANGE",
                  name: "rating",
                  payload: e.target.value,
                })
              }
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
            />
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              id="duration"
              value={duration}
              onChange={(e) =>
                onType({
                  type: "CHANGE",
                  name: "duration",
                  payload: e.target.value,
                })
              }
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
            />
          </div>
          {/* Use this div when time format is invalid */}
          {error && (
            <div data-testid="alert">
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}

          <div>
            <button type="submit" data-testid="addButton">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
