// import frameImg from './assets/1 (2).png'
import frameImg from '../../assets/1 (2).png'
import banner from '../../assets/banner.png'

const Header = () => {
    return (

        <div>
            <div className="navbar bg-base-100 p-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold">Roadside kitchen</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipe</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end lg:gap-8">
                    <label className="input input-bordered rounded-2xl flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <img className='bg-green-600 rounded-full' src={frameImg} alt="" />
                </div>
            </div>
            {/* banner section */}
            <div className='p-12 rounded-2xl'>
                <div className="hero lg:h-[500px] w-auto" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="hero-overlay bg-opacity-20"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                            <p className="mb-5">Location: Located in the heart of the city, SpiceLuxe Dining sits on a bustling street corner, easily accessible to locals and tourists alike.</p>
                            <button className="btn bg-green-500 border-green-800 rounded-2xl">Explore Now</button>
                            <button className="btn btn-outline text-white rounded-2xl ml-6">Feed Back</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Recipe section */}
            <div className='text-center items-center'>
                <h1 className='text-4xl font-bold mb-4'>Our Recipes</h1>
                <p className='text-xl mb-5'>Feel free to adjust these recipes according to your preferences and dietary <br /> requirements. Enjoy cooking and sharing these delicious <br /> dishes with your guests!</p>
            </div>
        </div>

    );
};

export default Header;