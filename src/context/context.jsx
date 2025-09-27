import { createContext, useState, useEffect } from "react";
import runChat from "../config/gemini";
import { marked } from 'marked'

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [loading, setLoading] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [ResultData, setResultData] = useState('')

    const onSent = async () => {
        setRecentPrompt(input)
        setPrevPrompts(prev=>[...prev,input])
        setLoading(true)
        setResultData('');
        setShowResult(true)
        const response = await runChat(input)
        let formatted = marked(response);   
        let newResponseArray = formatted.split(" ");
        for(let i = 0; i < newResponseArray.length; i++){
            const nextWord = newResponseArray[i]
            delaypara(i, nextWord + ' ')
        }
        setLoading(false)
        setInput('')
    }

    const delaypara = (index, nextWord) =>{
        setTimeout( () => {
            setResultData(prev=>prev+nextWord);
        }, 75*index)
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        loading,
        ResultData,
        input,
        setInput,
        showResult,
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;