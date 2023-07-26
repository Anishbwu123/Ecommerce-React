import React from "react";
const MyContext=React.createContext();
const ParentProvider=MyContext.Provider
const ChildProvider=MyContext.Consumer
const MyContext1=React.createContext();
const ParentProvider1=MyContext1.Provider
const ChildProvider1=MyContext1.Consumer

export {ParentProvider,ChildProvider,ParentProvider1,ChildProvider1}