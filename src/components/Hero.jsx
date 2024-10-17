import SearchBar from "./SearchBar";

const Hero = () => (
  <section className="relative bg-hero bg-cover h-96 flex items-center justify-center">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 text-center">
      <h1 className="text-4xl text-white mb-4">
        Explore Your Next Favorite Book
      </h1>
      <SearchBar />
    </div>
  </section>
);

export default Hero;
