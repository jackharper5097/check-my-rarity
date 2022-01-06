import React, { useEffect, useState } from "react";
import { ThemeSubscription } from "../helpers/theme";
import { Icon } from "./icons";

export const Layout = ({ children }:{ children:JSX.Element }) => {

    const [isDark, setIsDark] = useState(true);

    useEffect(()=>{
        ThemeSubscription.subscribe(setIsDark);
    },[]);

    return (
        <>
            <div className='header'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <a style={{display:"flex"}} href="/">
                            <img style={{height: 60}}
                                src={isDark ? '/media/logo.png' : '/media/logo.png'} alt='site-logo'/>
                            </a>
                        </div>
                            <div className="col-md-9 col-6 float-end">
                            <a className="icon" href="/">
                                <Icon icon='twitter'/>
                            </a>
                            <a className="icon" href="/">
                                <Icon icon='discord'/>
                            </a>
                            <a className="menu" href="/">
                                FAQ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                {children}
        </>
    );
};
