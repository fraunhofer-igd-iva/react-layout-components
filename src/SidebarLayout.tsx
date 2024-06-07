import * as React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {PropsWithChildren} from "react";

require("./SidebarLayout.css");

library.add(faChevronRight);

type SidebarLayoutProps = {
    identifier?: number,
    theme?: "light" | "dark"
}

const SidebarLayout : React.FunctionComponent<SidebarLayoutProps> = (props: PropsWithChildren<SidebarLayoutProps>) => (
    <div id={"sidebar-layout" + props.identifier} className={props.theme ? props.theme : "light"}>
        {props.children}
    </div>
);

export {SidebarLayout};

type SidebarProps = {
    identifier?: number
}

const Sidebar : React.FunctionComponent<SidebarProps> = (props: PropsWithChildren<SidebarProps>) => (
    <div id="sidebar">
        <div id="sidebar-content-container">
            {props.children}
        </div>
        <div id="slideouthint-container">
            <div id={"slideout-hint"+props.identifier}
                 onClick={() => {
                     let sidebar : HTMLElement = document.getElementById("sidebar-layout"+props.identifier)!;
                     if(sidebar) {
                         if(sidebar.classList.contains("toggled"))
                             sidebar.classList.remove('toggled');
                         else
                             sidebar.classList.add("toggled");
                     }
                     let slideoutHint = document.getElementById("slideout-hint"+props.identifier)!;
                     if(slideoutHint) {
                         if(slideoutHint.classList.contains("rotate-right"))
                             slideoutHint.classList.remove("rotate-right");
                         else
                             slideoutHint.classList.add("rotate-right");
                     }
                 }}>
                <FontAwesomeIcon icon="chevron-right" className="icon"/>
                <FontAwesomeIcon icon="chevron-right" className="icon"/>
            </div>
        </div>
    </div>
);

export {Sidebar};

type SidebarItemProps = {
    title: string,
    show?: boolean
}

const SidebarItem : React.FunctionComponent<SidebarItemProps> = props => {
    let show = props.children === null ? "none" : ((props.show === undefined || props.show) ? "block" : "none");
    let style = {"display": show};

    return(
        <div className="sidebar-item" style={style}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
};

export {SidebarItem};

const Content : React.FunctionComponent<{}> = props => (
    <div className="canvas-background">
        {props.children}
    </div>
);

export {Content};