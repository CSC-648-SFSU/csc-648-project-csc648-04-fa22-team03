//import "./components/SignupLink.css";
import "../pages/Signup.css";
//import { Route, Routes } from "react-router-dom"
//import LoginLink from "./components/SignupLink";
import axios from "../axios";
import { useRef, useState, useEffect } from "react";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[!@#$%]).{8,24}$/;
const SIGNUP_URL = '../pages/Signup';

const Signup = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [listOfUsers, setListOfUsers] = useState([]);

    const [username, setUser] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState('');
    const [matchFocus, setMatchFocus] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [username, password, validMatch])

    const createUser = () => {
        axios.post("http://13.52.253.222:3000/createUser", {
            username, password
        }).then((response) => {
            setListOfUsers([...listOfUsers,  {
                username, password
            }])
        })

        axios.post("http://localhost:3001/createUser", {
            username, password
        }).then((response) => {
            setListOfUsers([...listOfUsers,  {
                username, password
            }])
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        if(!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(SIGNUP_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPassword('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
        {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <button onClick={createUser}>Click Me!</button>
                    </p>
                </section>
            ) : (
            <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> 
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <span className={validUsername ? "valid" : "hide"}/>
                    <span className={validUsername || !username ? "hide" : "invalid"}/>
                </label>
                <input 
                    type="text2"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)} 
                    value={username}
                    required
                    aria-invalid={validUsername ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && username && !validUsername ? "instructions" : "offscreen"}>
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>

                <label htmlFor="password">
                    Password:
                    <span className={validPwd ? "valid" : "hide"} />
                    <span className={validPwd || !password ? "hide" : "invalid"}/>
                </label>
                <input 
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Special characters allowed: 
                    <span aria-label="exclamation mark">!</span> 
                    <span aria-label="at symbol">@</span> 
                    <span aria-label="hashtag">#</span> 
                    <span aria-label="dollar sign">$</span> 
                    <span aria-label="percent">%</span>
                </p>

                <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <span className={validMatch && matchPwd ? "valid" : "hide"} />
                    <span className={validMatch || !matchPwd ? "hide" : "invalid"} />
                </label>
                <input 
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd} 
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aira-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    Must match the first password input field.
                </p>
                <button disabled={!validUsername || !validPwd || !validMatch ? true : false}>Sign up</button>
            </form>
            <p>
                Already Registered?<br />
                <span className="line">
                    {/*put router link here*/}
                    <a href="/Login">Sign In</a>
                </span>
            </p>
            </section>
            )}
        </>   
    )
}

export default Signup