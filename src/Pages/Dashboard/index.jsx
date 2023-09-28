import "./style.css";
import Button from "../../components/Form/Button/index.jsx";
import {AccountBalance} from "../../components/AccountBalance/index.jsx";
import {useEffect, useState} from "react";
export const Dashboard = () => {
    const [isEditingName, setIsEditingName] = useState(false)
    const [realUser, setRealUser] = useState({ firstname: "John", lastname: "Doe" })
    const [userInput, setUserInput] = useState({ firstname: "", lastname: "" })
    useEffect(() => {
        setUserInput(realUser)
    }, [realUser])

    const handleEditUser = () => {
        setRealUser(userInput)
        setIsEditingName(false)
    }
    return (
        <div className={"dashboard"}>
            <div className="dashboardContainer">
                <div className="dashboardTitle">
                    {isEditingName ?
                        <>
                            <h1>Welcome back</h1>
                            <div className={"inlineInput"}>
                                <input className={"inputEdit"} type="text" value={userInput.firstname} placeholder={"Firstname"} onChange={(e) => {setUserInput({...userInput, firstname: e.target.value})}}/>
                                <input className={"inputEdit"} type="text" value={userInput.lastname} placeholder={"Lastname"} onChange={(e) => {setUserInput({...userInput, lastname: e.target.value})}}/>
                            </div>
                            <div className={"inlineButton"}>
                                <Button width={"fit-content"} content={"Save"} handleButtonCallback={handleEditUser}/>
                                <Button width={"fit-content"} content={"Cancel"} handleButtonCallback={()=>(setIsEditingName(false))}/>
                            </div>
                        </>
                        :
                        <>
                            <h1>Welcome back<br/>{realUser.firstname} {realUser.lastname}!</h1>
                            <Button width={"fit-content"} content={"Edit name"} handleButtonCallback={()=>(setIsEditingName(true))}/>
                        </>
                    }
                </div>
                <div className={"accountList"}>
                    <AccountBalance title={"Checking"} amount={"10000"}/>
                    <AccountBalance title={"Savings"} amount={"10"}/>
                    <AccountBalance title={"Credit Card"} amount={"1"}/>
                </div>
            </div>
        </div>
    )
}