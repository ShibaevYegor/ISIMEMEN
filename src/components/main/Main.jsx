import React from 'react';
import CardOne from './cards/cardOne/CardOne';
import m from "./Main.module.css";
import one from "../assets/images/two.png";
import two from "../assets/images/three.png";
import three from "../assets/images/four.png";
import woman from "../assets/images/five.png"
import four from "../assets/images/six.png"


export default function Main() {
  return (
    <div className={m.Main}>
      <div className="container">
        <div className={m.boxOne}>
            <h1 className={m.blue}>Welcome to your reset</h1>
        </div>

        <div className={m.boxTwo}>
            <h1 className={m.lorem}>We are a career development & business consultancy for women of color eager to elevate themselves, uncover their life’s purpose, multiply their income, and experience fulfilled lives.</h1>

            <button className={m.btn}>Discover More</button>
        </div>

        <div className={m.boxThree}>
            <h1 className={m.skinny}>We provide purpose-building programs that blend faith, self, and wealth.</h1>
        </div>

        <p className={m.programs}>Our Programs</p>

        <div className={m.cardOne}>
            <CardOne img={one} title="Individuals" lorem="Undervalued and underpaid? Let's change that. Our career-development program, Fulfilled, is here to provide you with the resources and tools you need to not only go for a higher-paying job, but secure it. We believe it’s already yours." btn="Reimagine Now"/>
            <CardOne img={two} title="Employers" lorem="Through our Fulfilled Work Framework, we advise employers on how to better position employees of color to unlock their potential and take ownership of their careers while increasing retention rates all around." btn="Learn More"/>
            <CardOne img={three} title="Leaders" lorem="We coach leaders, business owners, and influencers on how to maximize their value, unleash their power, and grow their success. From where we’re looking, there’s no glass ceiling." btn="Explore More"/>
        </div>

        <div className={m.boxFour}>
            <div className={m.woman}>
                <img className={m.womanImg} src={woman}/>
            </div>
            <div className={m.textBox}>
                <h1 className={m.text}>We’re here to help you turn every “no” you’ve ever heard into a "0" on your paycheck.</h1>
            </div>
        </div>

        <p className={m.titleTwo}>The numbers say it all</p>

        <div className={m.boxFive}>
            <div className={m.numberOne}>
                <h1 className={m.number}>300+</h1>
                <p className={m.under}>clients served</p>
            </div>
            <div className={m.numberTwo}>
                <h1 className={m.number}>7k+</h1>
                <p className={m.under}>women trained in career growth strategies</p>
            </div>
            <div className={m.numberThree}>
                <h1 className={m.number}>$2mil+</h1>
                <p className={m.under}>in salary increases during a pandemic</p>
            </div>
        </div>

        <div className={m.lineBox}>
            <marquee className={m.line} behavior="scroll" direction="left">It’s time to make a move. You are calling.</marquee>
        </div>

        <p className={m.programs}>Free resources to level up your career</p>

        <div className={m.CardTwo}>
            <div className={m.oneCardTwo}>
                <h1 className={m.oneitem}>Quiz</h1>
                <p className={m.onelorem}>Feeling stuck, frustrated, and overworked in your current role? Like something is missing or not quite right? Take our quiz to uncover the roadblocks and get on the right track.</p>
                <button className={m.onebtn}>Take the Quiz</button>
            </div>
            <div className={m.twoCardTwo}>
                <h1 className={m.twoitem}>Training </h1>
                <p className={m.twolorem}>Take a look at the exact framework our clients have used to increase their salary by $100K, land multiple dream job offers, and exceed lifestyle possibilities.</p>
                <button className={m.twobtn}>Watch Now</button>
            </div>
            <div className={m.threeCardTwo}>
                <h1 className={m.threeitem}>Salary Course</h1>
                <p className={m.threelorem}>Learn the exact, step-by-step salary negotiation strategies that my clients use to increase their salaries by $50K - $100K</p>
                <button className={m.threebtn}>Watch Now</button>
            </div>
        </div>

        <div className={m.boxSix}>
            <p className={m.meddium}>Don’t take our word for it.</p>
            <h1 className={m.long}>"I just received an offer for a dream job with a significant pay increase at a great company—in the middle of a global pandemic!"</h1>
            <p className={m.short}>Bosola</p>
        </div>

        <img className={m.img} src={four}/>

        <div className={m.boxSeven}>
            <h1 className={m.transformation}>Your transformation awaits.</h1>
            <h3 className={m.Conditions}>If you’re ready for change, then change is ready for you.</h3>
            <button className={m.endBtn}>I'm Ready</button>
        </div>
      </div>
    </div>
  )
}
