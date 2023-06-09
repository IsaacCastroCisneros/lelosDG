import { useEffect, useRef, useState } from "react";
export default function (option: any) {
    const [element, setElement] = useState<any>([]);
    const [entrie, setEntrie] = useState<any>([])
    let observer = useRef(new IntersectionObserver(function (observeEntries: any) {
        setEntrie(observeEntries)
    }, option));

    useEffect(() => {
        const currentObserver = observer.current
        currentObserver.disconnect()
        if (element.length > 0) {
            element.forEach((element:any) => currentObserver.observe(element))
        }
        return function cleanUp() {
            if (currentObserver) {
                currentObserver.disconnect()
            }
        }
    }, [element])
    return [observer.current, setElement, entrie]
}