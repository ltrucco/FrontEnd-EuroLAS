/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import React, { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = [{ id: 1, name: "Python" },
{ id: 2, name: "Javascript" },
{ id: 3, name: "Android" },
{ id: 4, name: "C#" },
{ id: 5, name: "Java" }]


const useKeyPress = function ( targetKey ) {
    const [keyPressed, setKeyPressed] = useState( false );

    function downHandler ( { key } ) {
        if ( key === targetKey ) {
            setKeyPressed( true );
        }
    }

    const upHandler = ( { key } ) => {
        if ( key === targetKey ) {
            setKeyPressed( false );
        }
    };

    const leftHandler = ( { key } ) => {
        if ( key === targetKey ) {
            setKeyPressed( true );
        }
    };

    const rightHandler = ( { key } ) => {
        if ( key === targetKey ) {
            setKeyPressed( false );
        }
    };


    React.useEffect( () => {
        window.addEventListener( "keydown", downHandler );
        window.addEventListener( "keyleft", leftHandler );
        window.addEventListener( "keyright", rightHandler );
        window.addEventListener( "keyup", upHandler );

        return () => {
            window.removeEventListener( "keydown", downHandler );
            window.removeEventListener( "keyup", upHandler );
            window.removeEventListener( "keyleft", leftHandler );
            window.removeEventListener( "keyright", rightHandler );
        };
    } );

    return keyPressed;
};

const ListItem = ( { item, active, setSelected } ) => (
    <li
        className={`item ${active ? "active" : ""}`}
        onClick={() => setSelected( item )}
    >
        {item.name}
    </li>
);

export function ListItemsForNavigationTest ( props ) {
    const [selected, setSelected] = useState( undefined );
    const downPress = useKeyPress( "ArrowDown" );
    const upPress = useKeyPress( "ArrowUp" );
    const rightPress = useKeyPress( "ArrowRight" );
    const leftPress = useKeyPress( "ArrowLeft" );
    const enterPress = useKeyPress( "Enter" );
    const [cursor, setCursor] = useState( 0 );


    useEffect( () => {
        if ( itemsList.length && ( upPress || rightPress ) ) {
            setCursor( prevState =>
                prevState < itemsList.length - 1 ? prevState + 1 : prevState
            );
        }
    }, [upPress, rightPress] );
    useEffect( () => {
        if ( itemsList.length && ( downPress ||  leftPress) ) {
            setCursor( prevState => ( prevState > 0 ? prevState - 1 : prevState ) );
        }
    }, [downPress, leftPress] );



    return (
        <ul className='listNavigation'>
            {itemsList.map( ( item, i ) => (
                <ListItem
                    key={item.id}
                    active={i === cursor}
                    item={item}
                    setSelected={setSelected}
                />
            ) )}
        </ul>
    );
}
