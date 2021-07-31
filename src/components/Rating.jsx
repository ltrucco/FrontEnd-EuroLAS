/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

import React, { useState } from "react"


const Star = ( { selected, onClick } ) =>
	<span className={( selected ) ? "active" : ""}
		onClick={() => onClick()}>
		*
	</span>


export function Rating () {
	const [selectedStars, setSelectedStars] = useState( 0 )


	return (
		<div id='rating' style={{ fontSize: '50px' }}>
			{[1, 2, 3, 4, 5].map( ( s, i ) =>
				<Star key={i} selected={i < selectedStars} onClick={() => setSelectedStars( i + 1 )} />
			)}
		</div>
	)
}
