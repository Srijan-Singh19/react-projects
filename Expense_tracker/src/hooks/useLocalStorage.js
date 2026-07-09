import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {

        const saved = localStorage.getItem(key);// read from the localstorage

        if (saved) {
            return JSON.parse(saved);
        }

        return initialValue;
    });

    useEffect(() => {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }, [key, value]);

    return [value, setValue];
}