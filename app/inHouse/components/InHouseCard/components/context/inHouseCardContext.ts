import React from "react"

const inHouseCardContext = React.createContext<{setShow:(value:boolean)=>void}>({setShow:(value)=>null})

export default inHouseCardContext