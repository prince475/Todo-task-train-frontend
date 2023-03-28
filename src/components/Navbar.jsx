import React from 'react';
import { Link } from 'react-router-dom'

export default function () {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/login"> Login</Link>
                </li>
                <li>
                    <Link to="/signup"></Link>
                </li>
            </ul>
        </nav>
    )

}
