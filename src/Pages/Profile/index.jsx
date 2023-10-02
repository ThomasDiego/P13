import "./style.css";
import Button from "../../components/Form/Button/index.jsx";
import {AccountBalance} from "../../components/AccountBalance/index.jsx";
import {useEffect, useState} from "react";
import {updateUserDatas} from "../../api";
import {bankAccounts} from "../../mock/bankAccounts"

//adding Redux
import { useSelector, useDispatch} from "react-redux";

export const Profile = () => {
    //adding redux
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const [isEditingName, setIsEditingName] = useState(false)
    const [userInput, setUserInput] = useState({ firstname: "", lastname: "" })
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        setUserInput({firstname: user.firstName, lastname: user.lastName})
        setAccounts(bankAccounts)
    }, [user, bankAccounts])

    const handleEditUser = async () => {
        const response = await updateUserDatas(user.token, {firstName: userInput.firstname, lastName: userInput.lastname})
        dispatch({type: "user/updateUser", payload: {userDatas: response.body}})
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
                                <Button width={"100%"} content={"Save"} handleButtonCallback={handleEditUser}/>
                                <Button width={"100%"} content={"Cancel"} handleButtonCallback={()=>(setIsEditingName(false))}/>
                            </div>
                        </>
                        :
                        <>
                            <h1>Welcome back<br/>{user.firstName} {user.lastName}!</h1>
                            <Button width={"fit-content"} content={"Edit name"} handleButtonCallback={()=>(setIsEditingName(true))}/>
                        </>
                    }
                </div>
                <div className={"accountList"}>
                    {accounts.map((account) => (
                        <AccountBalance key={account.id} accountId={account.id} title={account.accountType} amount={account.balance} transactionsCount={account.transactions}/>
                    ))}
                </div>
            </div>
        </div>
    )
}