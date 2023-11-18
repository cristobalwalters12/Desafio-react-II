import imageHero from '../assets/images/imageHero.jpg';

const Hero = () => {
    return (
        <div className="hero relative bg-cover bg-center h-[300px] flex items-center justify-center"
            style={{backgroundImage: `url(${imageHero})`}}>
            <div className="absolute inset-0 bg-black opacity-50" ></div>
            <div className="text-white text-center relative ">
                <h1 className="text-6xl mb-3">¡Pizzeria Mamma Mia!</h1>
                <p className="text-xl mb-5">¡Tenemos las mejores pizzas que podras encontrar!</p>
                <span className="mx-4 flex-shrink text-gray-400"></span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
        </div>
    );
}

export default Hero;