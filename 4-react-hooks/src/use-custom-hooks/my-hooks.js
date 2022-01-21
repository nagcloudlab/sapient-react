

import React, { useState, useEffect } from 'react';


function useLocalStorage(key) {

    const [text, setText] = useState(() => {
        return localStorage.getItem(key) || ""
    })

    useEffect(() => {
        localStorage.setItem(key, text)
    }, [text])

    return [text, setText]

}

export { useLocalStorage } 