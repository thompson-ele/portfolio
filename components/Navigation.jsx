import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <StyledNavigation>
            <button className="nav-button" onClick={() => toggleNav()}>Menu</button>
            <ul className={isNavOpen ? 'is-open' : ''}>
                <li><Link href="/">Home</Link></li>
                {/* <li><Link href="">About</Link></li> */}
                <li><a href="https://elethompson.com/old-portfolio/" target="_blank">My Old Portfolio</a></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </StyledNavigation>
    );
}

const StyledNavigation = styled.nav`
    float: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 16px;

    button {
        flex: 1 1 auto;
        margin: 16px 0 0;
    }

    ul {
        background-color: #fff;
        display: none;
        margin-top: 0;
        padding: 0;
        list-style: none;

        &.is-open {
            display: block;
        }

        li {
            font-size: 18px;
            text-align: left;

            a {
                display: block;
                padding: 8px 8px 8px 12px;

                &:hover {
                    background-color: #487af5;
                    color: #fff;
                }
            }
        }
    }
`;

export default Navigation;