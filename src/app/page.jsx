import Image from "next/image";
import vina from '/assets/vina.png'

const Home = () => {
  return (
    <div>
      Home
      <Image src="/assets/amarone.png" width={172} height={172} alt="wine" quality={100} />
      <Image src={vina}/>
    </div>
  );
};

export default Home;
