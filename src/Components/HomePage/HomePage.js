import React from 'react';
import './homePage.css'
import { 
	userImg,
	ScheduleIcon,
	SerchIcon 
} from "../Common/Icons"

const HomePage = () => {
	return (
		<div className="homePage-Main">
			<div className="homePage-header">
				<div className="homePage-Logo">
					LOGO
             </div>
				<div className="homePage-UserDropDown">
					<div className="userImg">
						<img src={userImg} alt="img" />
					</div>
					<div className="userName">
						<select>
							<option value="UserName">User Name</option>
							<option value="option1">option1</option>
							<option value="option2">option2</option>
						</select>
					</div>
				</div>
			</div>
			<div className="homePage-Content-Container">
				<div className="homePage-Content-Nav">
					<div  className="hc-cl-left"> 
					<div className="hc-SceduleNow">
						<div className="hc-SceduleNow-icon">
							<img className="hc-icons" src={ScheduleIcon} alt="ScheduleIcon"/>
						</div>
						SceduleNow
						</div>
					</div>
				<div className="hc-cl-center">
				<div className="hc-Daily">Daily</div>
					<div className="hc-Weekly">Weekly</div>
				</div>
					<div className="hc-cl-right">
					<div className="hc-Calender">Monday, feb, 3 2020</div>
					<div className="hc-Search">
					<img className="hc-icons" src={SerchIcon} alt="SerchIcon"/>
					</div>
				</div>
					</div>
				
				<div className="homePage-Content-Main">
					<div className="homePage-Content-Column">
						<div className="homePage-Content-Row">
						<input type="checkbox" name="Time"/>
						<p>8:30 AM</p>
						</div>
						<div className="homePage-Content-Row box">
             <div className="homePage-Content-Box">
						 </div>
						 <div className="homePage-Content-Box">
						 </div>
						 <div className="homePage-Content-Box">
						 </div>
						 <div className="homePage-Content-Box">
						 </div>
						   <div className="homePage-Content-Box">
						 </div>
						</div>
					</div>
					<div className="homePage-Content-Column">
						<div className="homePage-Content-Row">
						<input type="checkbox" name="Time"/>
						<p>8:30 AM</p>
						</div>
						<div className="homePage-Content-Row box">
             <div className="homePage-Content-Box">
						 </div>
						 <div className="homePage-Content-Box">
						 </div>
						 <div className="homePage-Content-Box">
						 </div>
						 <div className="homePage-Content-Box">
						 </div>
						   <div className="homePage-Content-Box">
						 </div>
						</div>
					</div>
					<div className="homePage-Content-Column">
						<div className="homePage-Content-Row">
						<input type="checkbox" name="Time"/>
						<p>8:30 AM</p>
						</div>
						<div className="homePage-Content-Row box">
             <div className="homePage-Content-Box">
						 </div>
						 <div className="homePage-Content-Box">
						 </div>
						 <div className="homePage-Content-Box">
						 </div>
						 <div className="homePage-Content-Box">
						 </div>
						   <div className="homePage-Content-Box">
						 </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
