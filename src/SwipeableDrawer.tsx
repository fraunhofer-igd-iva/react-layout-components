import * as React from 'react';
import {PropsWithChildren, useRef} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

require("./SwipeableDrawer.css");

const BORDER_SIZE = 4;
const HANDLE_HEIGHT = 36;

type Props = {
    icon: IconProp,
    description?: string,
    theme?: "light" | "dark"
}

const SwipeableDrawer : React.FunctionComponent<Props> = (props: PropsWithChildren<Props>) => {

    const open = useRef<boolean>(false);
    const moving = useRef<boolean>(false);
    const pos = useRef<number>(-1);

    return(
        <div id="swipeable-drawer" className={props.theme ? props.theme : "light"}>
            <div style={{height: "100%", width: "100%", padding: "0.5em", overflowY: "scroll"}}>
                <div id="drawer-handle" onMouseDown={(event: any) => mouseDownHandler(event)}>
                    <FontAwesomeIcon icon={props.icon} className="icon"/>
                    {props.description && <span>{props.description}</span>}
                </div>
                {props.children}
            </div>
        </div>
    );

    function resize(event: any) {
        moving.current = true;

        const dy = pos.current - event.y;
        pos.current = event.y;
        let navbarHeight = parseInt(getComputedStyle(document.getElementById("header")!,"").height!);
        let view = document.getElementById("swipeable-drawer")!;
        let height = 0;
        if(event.pageY > navbarHeight + HANDLE_HEIGHT) {
            height = (parseInt(getComputedStyle(view, '').height!) + dy);
        }
        else {
            /* This corresponds to height=100% minus the height of the handle to pull the view down again */
            height = parseInt(getComputedStyle(view.parentElement!,'').height!) - HANDLE_HEIGHT;
        }
        view.style.height = height + "px";
        open.current = height > 0;

        event.preventDefault();
        event.stopPropagation();
    }

    function mouseDownHandler(event: any) {
        let view = document.getElementById("swipeable-drawer")!;
        let offset = -1;
        if (event.offsetY === undefined)
            offset = event.pageY - parseInt(getComputedStyle(document.getElementById("header")!,'').height!) - view.offsetTop;
        else
            offset = event.offsetY;
        if (offset < BORDER_SIZE) {
            pos.current = event.y;
            document.addEventListener("mousemove", resize);
        }
        document.addEventListener("mouseup", mouseUpHandler)
    }

    function mouseUpHandler() {
        document.removeEventListener("mousemove", resize);
        document.removeEventListener("mouseup", mouseUpHandler);

        // Initially drag out the drawer
        if(!moving) {
            let view = document.getElementById("swipeable-drawer")!;
            let height = open ? 0 : 250;
            view.style.height = height + "px";
            open.current = !open.current;
        }

        moving.current = false;
    }
};

export default SwipeableDrawer;