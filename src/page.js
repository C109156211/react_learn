import React from "react";
import { Link } from "react-router-dom";

export function Home(){
    return (
        <div>
            <h1>Home</h1>
            <link to="Events">Events</link>
        </div>
    );
}

export function Events(){
    return (
        <div>
            <h1>Events</h1>
        </div>
    );
}

export function Products(){
    return (
        <div>
            <h1>Products</h1>
        </div>
    );
}

export function Contact(){
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
}