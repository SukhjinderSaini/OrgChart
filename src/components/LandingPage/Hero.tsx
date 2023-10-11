interface Props {
  onSearch: (searchString: string) => void;
}
function Hero({ onSearch }: Props) {
  return (
    <section>
      <h1>Hero</h1>
      <div>
        <div className="searchfield d-flex">
          <div className="input-group flex-nowrap m-auto w-50">
            <input
              type="text"
              className="form-control w-50"
              placeholder="Search Hierarchy"
              onChange={(e) => {
                onSearch(e.target.value);
              }}
              aria-label="Search Hierarchy"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
