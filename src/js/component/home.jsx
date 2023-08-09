import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
			const [Red, setRed] = useState("")
			const [Yellow, setYellow] = useState("")
			const [Green, setGreen] = useState("")
			const onLight = (color) => {
				if (color === "red") {
					setRed("light-on")
					setYellow("")
					setGreen("")
		
				} else if (color === "yellow") {
					setYellow("light-on")
					setRed("")
					setGreen("")
				} else if (color === "green") {
					setGreen("light-on")
					setRed("")
					setYellow("")
				}
			}
			return (
				<>
					<main>
						<div>
		
						</div>
						<div>
							<div className={`bg-red ${Red}`}
								onClick={() => onLight("red")}
							></div>
							<div className={`bg-yellow ${Yellow}`}
								onClick={() => onLight("yellow")}
							></div>
							<div className={`bg-green ${Green}`}
								onClick={() => onLight("green")}
							></div>
						</div>
					</main>
				</>
			
	)
}

export default Home;

