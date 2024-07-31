import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function About(){
    return (
        <div>
            <h1>About</h1>
            <nav>
                <Link to="product">Product</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
            <Outlet />
        </div>
    );
}