import HeroImg from "../assets/hero.png";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            github: 'https://github.com/sudharsan8621',
            facebook: 'https://www.facebook.com/',
            linkedin: 'https://www.linkedin.com/home'
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>M G</span> Sudharsan 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.facebook} className='hover:text-white'><AiOutlineFacebook size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}

// export default function Hero() {
//   return (
//     <section className="flex px-5 py-32 bg-secondary justify-center">
//       <div className="w-1/2 flex-col">
//         <h1 className="w-1/2 text-white text-6xl font-hero-font">
//           Hi, <br /> Im <span className="text-black">M G</span> Sudharsan
//           <p className="text-3xl">Im a Full-stack Developer</p>
//         </h1>
//         <div className="flex py-10">
//           <a href="#" className="pr-5 hover:text-white">
//             <AiOutlineLinkedin size={40}/>
//           </a>
//           <a href="#" className="pr-5 hover:text-white">
//             <AiOutlineGithub size={40}/>
//           </a>
//           <a href="#" className="pr-5 hover:text-white">
//             <AiOutlineFacebook size={40}/>
//           </a>
//           <a href="#" className="hover:text-white">
//             <AiOutlineTwitter size={40}/>
//           </a>
//         </div>
//       </div>
//       <img className="md:w-1/3" src={HeroImg} />
//     </section>
//   );
// }
