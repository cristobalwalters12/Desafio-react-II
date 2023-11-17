
import Hero from "../components/Hero";
import CardPizza from "../components/CardPizza";
const Home= () => {
  return (
    <div>
      <Hero />
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-3 gap-14">
          <CardPizza/>
        </div>
      </div>
    </div>
  );
}

export default Home;
